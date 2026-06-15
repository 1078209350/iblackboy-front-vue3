FROM node:20-alpine AS builder

WORKDIR /app

# 增加 Node.js 内存限制到 4GB
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN corepack enable && corepack prepare pnpm@9.15.3 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build:pro

FROM nginx:1.27-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist-pro /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
