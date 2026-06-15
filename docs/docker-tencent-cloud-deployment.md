# 前端 Docker + 腾讯云 TCR + GitHub Actions 自动部署计划

## 背景

当前这个 Vue 3/Vite 前端项目已经有 `.github/workflows/deploy.yml`，流程是：push 到 `main` 后执行 `pnpm run build:dev`，生成 `dist-dev/`，再通过 SSH/SCP 上传到服务器 `/usr/app`，最后执行 `sudo systemctl reload nginx`。

这个方式属于“构建静态文件 + 上传到宿主机 nginx”的部署方式，不是 Docker 镜像交付。目标是把前端先打包成镜像，推送到腾讯云，再通过 GitHub Actions 实现提交代码后自动部署。后端后续也会用类似方式容器化，并和前端放到同一个 Docker 网络里。

最终目标：

1. 前端项目生成生产 Docker 镜像。
2. GitHub Actions 自动构建镜像。
3. 镜像推送到腾讯云 TCR。
4. 腾讯云服务器自动拉取新镜像并重启前端容器。
5. 前端容器内的 nginx 负责静态资源服务和 `/api` 反向代理。
6. 后端容器后续加入同一个 Docker 网络，前端 nginx 通过 `backend:8000` 访问后端。

## 已确认的项目现状

- 项目使用 `pnpm@9.15.3`，配置在 `package.json`。
- 生产构建命令是 `pnpm run build:pro`，配置在 `package.json`。
- 生产构建输出目录是 `dist-pro`，配置在 `.env.pro`。
- 当前 `.env.pro` 里 `VITE_API_BASE_PATH` 是空的，`VITE_USE_MOCK=true`，不适合真实生产部署。
- `src/axios/service.ts` 使用 `VITE_API_BASE_PATH` 作为 Axios 的 `baseURL`，所以生产环境应设置为 `/api`。
- `vite.config.ts` 里的 `/api` 代理只在本地开发服务器生效，生产部署时不会生效，生产必须由 nginx 配置 `/api` 代理。
- 当前已有的 `.github/workflows/deploy.yml` 是旧的静态文件部署流程，需要替换成 Docker 镜像部署流程。
- 当前只有 `Dockerfile.dev` 和 `docker-compose.dev.yaml`，它们是开发环境用的，不适合生产部署。

## 推荐架构

采用这个流程：

1. 代码 push 到 `main`。
2. GitHub Actions 使用生产 `Dockerfile` 构建前端 Docker 镜像。
3. 镜像推送到腾讯云 TCR。
4. 镜像同时打两个 tag：
   - `latest`
   - 当前提交的 `${{ github.sha }}`
5. GitHub Actions 通过 SSH 登录腾讯云服务器。
6. 服务器登录 TCR，拉取这次提交对应的新镜像。
7. 服务器使用 `docker compose -f docker-compose.prod.yaml up -d frontend` 重启前端容器。
8. 前端容器内 nginx：
   - 服务 Vue 静态文件；
   - 支持 Vue Router history 模式刷新不 404；
   - 把 `/api/` 转发到同一个 Docker 网络里的 `http://backend:8000/`。

## 需要新增的文件

### 1. `Dockerfile`

新增生产环境 Dockerfile，使用多阶段构建。

第一阶段：构建前端资源。

- 基础镜像：`node:20-alpine`。
- 开启 Corepack。
- 激活 `pnpm@9.15.3`。
- 先复制 `package.json` 和 `pnpm-lock.yaml`，利用 Docker 缓存安装依赖。
- 执行 `pnpm install --frozen-lockfile`。
- 复制完整项目代码。
- 执行 `pnpm run build:pro`。
- 生成 `/app/dist-pro`。

第二阶段：运行 nginx。

- 基础镜像：`nginx:1.27-alpine`。
- 复制 `nginx/default.conf` 到 `/etc/nginx/conf.d/default.conf`。
- 复制第一阶段生成的 `/app/dist-pro` 到 `/usr/share/nginx/html`。
- 对外暴露 `80` 端口。

### 2. `.dockerignore`

新增 `.dockerignore`，避免把无关文件复制进 Docker 构建上下文。

建议忽略：

- `node_modules`
- `dist`
- `dist-dev`
- `dist-pro`
- `.git`
- `.DS_Store`
- 日志文件
- `.vscode`
- `.idea`
- 本地开发用 Docker 文件中不需要进入生产构建上下文的内容

### 3. `nginx/default.conf`

新增生产 nginx 配置，职责如下：

- 监听 `80` 端口。
- 静态资源根目录为 `/usr/share/nginx/html`。
- 增加 `/health` 健康检查接口，返回 `ok`。
- 支持 Vue Router history 模式：`try_files $uri $uri/ /index.html`。
- 配置 `/api/` 反向代理到 `http://backend:8000/`。

`proxy_pass` 推荐使用 Docker DNS resolver + 变量形式：

```nginx
resolver 127.0.0.11 valid=30s;
set $backend_upstream http://backend:8000;
rewrite ^/api/(.*)$ /$1 break;
proxy_pass $backend_upstream;
```

这样即使后端容器暂时还没启动，前端 nginx 也可以先正常启动；只有访问 `/api` 时才会返回后端不可用。

`rewrite` 会去掉 `/api` 前缀，它会把：

```text
/api/user/list
```

转发成：

```text
http://backend:8000/user/list
```

这和当前 `vite.config.ts` 的开发代理逻辑一致，因为开发代理里也去掉了 `/api` 前缀。

### 4. `docker-compose.prod.yaml`

新增生产 compose 文件，先只定义前端服务：

- 服务名：`frontend`
- 镜像：`${FRONTEND_IMAGE}`
- 容器名：`iblackboy-frontend`
- 重启策略：`unless-stopped`
- 端口映射：`80:80`
- 网络：外部网络 `iblackboy-net`

后端项目容器化后，也加入这个 `iblackboy-net` 网络，并确保服务名或网络别名是 `backend`，这样前端 nginx 才能访问 `http://backend:8000`。

## 需要修改的文件

### 1. `.env.pro`

修改生产环境变量：

- `VITE_API_BASE_PATH=/api`
- `VITE_USE_MOCK=false`
- `VITE_USE_BUNDLE_ANALYZER=false`

原因：

- `/api` 让浏览器请求当前前端域名下的 `/api`，再由 nginx 转发给后端，避免跨域问题。
- 生产环境不应启用 mock。
- CI/CD 构建时一般不需要每次生成 bundle 分析文件。

保留：

- `VITE_OUT_DIR=dist-pro`

因为 Dockerfile 会复制 `dist-pro` 目录到 nginx 镜像里。

### 2. `.github/workflows/deploy.yml`

替换当前的静态文件部署流程。

删除旧流程中的这些步骤：

- 安装 Node 后直接构建 `dist-dev/`。
- `pnpm run build:dev`。
- SCP 上传 `dist-dev/` 到 `/usr/app`。
- `sudo systemctl reload nginx`。

改成 Docker 镜像部署流程：

1. push 到 `main` 时触发。
2. checkout 代码。
3. 初始化 Docker Buildx。
4. 使用 GitHub Secrets 登录腾讯云 TCR。
5. 使用 `Dockerfile` 构建镜像。
6. 推送两个镜像 tag：
   - `${{ github.sha }}`
   - `latest`
7. 把 `docker-compose.prod.yaml` 上传到腾讯云服务器的应用目录。
8. SSH 到服务器执行：
   - 如果 `iblackboy-net` 不存在，则创建；
   - 登录腾讯云 TCR；
   - 设置 `FRONTEND_IMAGE` 为当前提交 SHA 对应的镜像；
   - `docker compose -f docker-compose.prod.yaml pull frontend`；
   - `docker compose -f docker-compose.prod.yaml up -d frontend`；
   - `docker image prune -f` 清理旧悬空镜像。

## GitHub Secrets 配置

需要在 GitHub 仓库 Settings → Secrets and variables → Actions 中配置这些 Secrets。

### 腾讯云 TCR 相关

- `TCR_REGISTRY`
  - 示例：`ccr.ccs.tencentyun.com`
- `TCR_NAMESPACE`
  - 腾讯云 TCR 命名空间
- `TCR_REPOSITORY`
  - 示例：`iblackboy-front-vue3`
- `TCR_USERNAME`
  - 腾讯云 TCR 用户名
- `TCR_PASSWORD`
  - 腾讯云 TCR 密码或访问凭证

最终镜像名类似：

```text
ccr.ccs.tencentyun.com/<命名空间>/iblackboy-front-vue3:<git-sha>
```

### 腾讯云服务器 SSH 相关

- `SERVER_HOST`
  - 腾讯云服务器公网 IP 或域名
- `SERVER_PORT`
  - 通常是 `22`
- `SERVER_USER`
  - 例如 `ubuntu` 或 `root`
- `SERVER_SSH_KEY`
  - 能登录服务器的 SSH 私钥
- `SERVER_APP_DIR`
  - 推荐：`/opt/iblackboy/frontend`

## 腾讯云服务器准备步骤

首次自动部署前，需要在腾讯云 CVM 上准备好：

1. 安装 Docker。
2. 安装 Docker Compose 插件。
3. 确认以下命令可用：
   - `docker --version`
   - `docker compose version`
4. 创建应用目录，例如：`/opt/iblackboy/frontend`。
5. 确保 `SERVER_USER` 对这个目录有写权限。
6. 确保 `SERVER_USER` 能执行 Docker 命令。
7. 创建共享 Docker 网络，或者交给 GitHub Actions 自动创建：`iblackboy-net`。
8. 腾讯云安全组开放：
   - `22/tcp`：SSH
   - `80/tcp`：HTTP
   - 后续 HTTPS 再开放 `443/tcp`

如果服务器上已经有宿主机 nginx 占用了 80 端口，则不要让前端容器直接绑定 `80:80`，应改成：

```yaml
ports:
  - "8080:80"
```

然后让宿主机 nginx 反向代理到：

```text
http://127.0.0.1:8080
```

如果这台服务器只部署这个项目，第一阶段推荐直接使用 `80:80`，学习路径更简单。

## 验证步骤

### 本地验证

- 本地构建镜像：

```bash
docker build -t iblackboy-front-vue3:local .
```

- 本地启动容器：

```bash
docker network create iblackboy-net
docker run --rm --name iblackboy-frontend --network iblackboy-net -p 8080:80 iblackboy-front-vue3:local
```

- 浏览器访问：

```text
http://localhost:8080
```

确认前端页面能打开。

- 健康检查：

```text
http://localhost:8080/health
```

应返回：

```text
ok
```

- 直接访问一个前端路由，例如：

```text
http://localhost:8080/login
```

应正常返回前端页面，而不是 nginx 404。

### GitHub Actions 验证

- push 到 `main`。
- 进入 GitHub 仓库 Actions 页面。
- 确认部署 workflow 成功。
- 进入腾讯云 TCR 控制台，确认有镜像 tag：
  - `latest`
  - 当前提交 SHA
- SSH 登录腾讯云服务器。
- 执行 `docker ps`，确认存在 `iblackboy-frontend` 容器。
- 执行 `docker logs iblackboy-frontend`，确认 nginx 没有启动错误。
- 访问：

```text
http://服务器公网IP/health
```

应返回：

```text
ok
```

- 访问：

```text
http://服务器公网IP
```

确认前端页面能打开。

### 后端联调验证

后端容器化并加入 `iblackboy-net` 后，确认后端服务在 Docker 网络内可通过 `backend:8000` 访问。

最终请求链路应是：

```text
浏览器 -> /api/... -> 前端 nginx 容器 -> backend:8000
```

浏览器不要直接访问 `http://backend:8000`，因为 `backend` 这个名字只在 Docker 网络内部可解析。

## 实施顺序

1. 修改 `.env.pro`。
2. 新增 `nginx/default.conf`。
3. 新增生产 `Dockerfile`。
4. 新增 `.dockerignore`。
5. 新增 `docker-compose.prod.yaml`。
6. 替换 `.github/workflows/deploy.yml`。
7. 本地执行 Docker 构建验证。
8. 本地启动容器验证前端页面和 `/health`。
9. 配置腾讯云 TCR。
10. 配置 GitHub Secrets。
11. 准备腾讯云服务器 Docker 环境。
12. push 到 `main` 触发自动部署。
13. 验证腾讯云服务器上的容器和页面访问。
14. 后端容器化后，加入同一 Docker 网络。
15. 验证 `/api` 代理。

## 暂不处理的内容

为了先把 Docker 镜像交付链路跑通，第一阶段暂不加入：

- HTTPS 证书配置。
- 腾讯云负载均衡。
- 蓝绿部署或滚动发布。
- 多环境部署矩阵。
- 后端 Docker 化细节。

这些可以在前端容器化部署成功后再逐步加入。