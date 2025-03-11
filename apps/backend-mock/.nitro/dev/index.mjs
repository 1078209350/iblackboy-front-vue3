import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import destr from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, createError, getRouterParam, getQuery as getQuery$1, readBody, setResponseStatus, getHeader, deleteCookie, setCookie, getCookie } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs';
import { createHooks } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/unenv@1.10.0/node_modules/unenv/runtime/fetch/index.mjs';
import { hash } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/ohash@1.1.4/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/ufo@1.5.4/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/unstorage@1.14.1_db0@0.2.1_ioredis@5.4.2/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/unstorage@1.14.1_db0@0.2.1_ioredis@5.4.2/node_modules/unstorage/drivers/fs.mjs';
import { klona } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { Server } from 'node:http';
import { mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/std-env@3.8.0/node_modules/std-env/dist/index.mjs';
import { faker } from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/@faker-js+faker@9.3.0/node_modules/@faker-js/faker/dist/index.js';
import jwt from 'file:///Users/guantong/Desktop/%E7%BB%83%E4%B9%A0/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BBdemo/iblackboy-front-vue3/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js';

const errorHandler = function(error, event) {
  event.node.res.end(`[Error Handler] ${error.stack}`);
};

const plugins = [
  
];

const _Dkg4jw = defineEventHandler((event) => {
  if (event.method === "OPTIONS") {
    event.node.res.statusCode = 204;
    event.node.res.statusMessage = "No Content.";
    return "OK";
  }
});

const _lazy_l3ZxLz = () => Promise.resolve().then(function () { return codes$1; });
const _lazy_l8bCV8 = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_aNR457 = () => Promise.resolve().then(function () { return logout_post$1; });
const _lazy_J52cRD = () => Promise.resolve().then(function () { return refresh_post$1; });
const _lazy_vsm0Uk = () => Promise.resolve().then(function () { return all$1; });
const _lazy_nAUUDB = () => Promise.resolve().then(function () { return status$1; });
const _lazy_py5NPY = () => Promise.resolve().then(function () { return list$1; });
const _lazy_brHTTP = () => Promise.resolve().then(function () { return test_get$1; });
const _lazy_IiECDI = () => Promise.resolve().then(function () { return test_post$1; });
const _lazy_jfGvAk = () => Promise.resolve().then(function () { return info$1; });
const _lazy_LwMZ9A = () => Promise.resolve().then(function () { return _____$1; });

const handlers = [
  { route: '', handler: _Dkg4jw, lazy: false, middleware: true, method: undefined },
  { route: '/api/auth/codes', handler: _lazy_l3ZxLz, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/login', handler: _lazy_l8bCV8, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/logout', handler: _lazy_aNR457, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/refresh', handler: _lazy_J52cRD, lazy: true, middleware: false, method: "post" },
  { route: '/api/menu/all', handler: _lazy_vsm0Uk, lazy: true, middleware: false, method: undefined },
  { route: '/api/status', handler: _lazy_nAUUDB, lazy: true, middleware: false, method: undefined },
  { route: '/api/table/list', handler: _lazy_py5NPY, lazy: true, middleware: false, method: undefined },
  { route: '/api/test', handler: _lazy_brHTTP, lazy: true, middleware: false, method: "get" },
  { route: '/api/test', handler: _lazy_IiECDI, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/info', handler: _lazy_jfGvAk, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_LwMZ9A, lazy: true, middleware: false, method: undefined }
];

const serverAssets = [{"baseName":"server","dir":"/Users/guantong/Desktop/练习/前后端分离demo/iblackboy-front-vue3/apps/backend-mock/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/guantong/Desktop/练习/前后端分离demo/iblackboy-front-vue3/apps/backend-mock","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/guantong/Desktop/练习/前后端分离demo/iblackboy-front-vue3/apps/backend-mock","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/guantong/Desktop/练习/前后端分离demo/iblackboy-front-vue3/apps/backend-mock/.nitro","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/guantong/Desktop/练习/前后端分离demo/iblackboy-front-vue3/apps/backend-mock/.nitro/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/guantong/Desktop/练习/前后端分离demo/iblackboy-front-vue3/apps/backend-mock/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {
      "/api/**": {
        "cors": true,
        "headers": {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "*",
          "access-control-allow-headers": "*",
          "access-control-max-age": "0",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Expose-Headers": "*"
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: undefined,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join(String.raw`\\.\pipe\nitro`, socketName);
  }
  const socketDir = join(tmpdir(), "nitro");
  mkdirSync(socketDir, { recursive: true });
  return join(socketDir, socketName);
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort?.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address?.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort?.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort?.postMessage({ event: "exit" });
  }
});

const MOCK_USERS = [
  {
    id: 0,
    password: "123456",
    realName: "Vben",
    roles: ["super"],
    username: "vben"
  },
  {
    id: 1,
    password: "123456",
    realName: "Admin",
    roles: ["admin"],
    username: "admin",
    homePath: "/workspace"
  },
  {
    id: 2,
    password: "123456",
    realName: "Jack",
    roles: ["user"],
    username: "jack",
    homePath: "/analytics"
  }
];
const MOCK_CODES = [
  // super
  {
    codes: ["AC_100100", "AC_100110", "AC_100120", "AC_100010"],
    username: "vben"
  },
  {
    // admin
    codes: ["AC_100010", "AC_100020", "AC_100030"],
    username: "admin"
  },
  {
    // user
    codes: ["AC_1000001", "AC_1000002"],
    username: "jack"
  }
];
const dashboardMenus = [
  {
    component: "BasicLayout",
    meta: {
      order: -1,
      title: "page.dashboard.title"
    },
    name: "Dashboard",
    path: "/",
    redirect: "/analytics",
    children: [
      {
        name: "Analytics",
        path: "/analytics",
        component: "/dashboard/analytics/index",
        meta: {
          affixTab: true,
          title: "page.dashboard.analytics"
        }
      },
      {
        name: "Workspace",
        path: "/workspace",
        component: "/dashboard/workspace/index",
        meta: {
          title: "page.dashboard.workspace"
        }
      }
    ]
  }
];
const createDemosMenus = (role) => {
  const roleWithMenus = {
    admin: {
      component: "/demos/access/admin-visible",
      meta: {
        icon: "mdi:button-cursor",
        title: "demos.access.adminVisible"
      },
      name: "AccessAdminVisibleDemo",
      path: "/demos/access/admin-visible"
    },
    super: {
      component: "/demos/access/super-visible",
      meta: {
        icon: "mdi:button-cursor",
        title: "demos.access.superVisible"
      },
      name: "AccessSuperVisibleDemo",
      path: "/demos/access/super-visible"
    },
    user: {
      component: "/demos/access/user-visible",
      meta: {
        icon: "mdi:button-cursor",
        title: "demos.access.userVisible"
      },
      name: "AccessUserVisibleDemo",
      path: "/demos/access/user-visible"
    }
  };
  return [
    {
      component: "BasicLayout",
      meta: {
        icon: "ic:baseline-view-in-ar",
        keepAlive: true,
        order: 1e3,
        title: "demos.title"
      },
      name: "Demos",
      path: "/demos",
      redirect: "/demos/access",
      children: [
        {
          name: "AccessDemos",
          path: "/demosaccess",
          meta: {
            icon: "mdi:cloud-key-outline",
            title: "demos.access.backendPermissions"
          },
          redirect: "/demos/access/page-control",
          children: [
            {
              name: "AccessPageControlDemo",
              path: "/demos/access/page-control",
              component: "/demos/access/index",
              meta: {
                icon: "mdi:page-previous-outline",
                title: "demos.access.pageAccess"
              }
            },
            {
              name: "AccessButtonControlDemo",
              path: "/demos/access/button-control",
              component: "/demos/access/button-control",
              meta: {
                icon: "mdi:button-cursor",
                title: "demos.access.buttonControl"
              }
            },
            {
              name: "AccessMenuVisible403Demo",
              path: "/demos/access/menu-visible-403",
              component: "/demos/access/menu-visible-403",
              meta: {
                authority: ["no-body"],
                icon: "mdi:button-cursor",
                menuVisibleWithForbidden: true,
                title: "demos.access.menuVisible403"
              }
            },
            roleWithMenus[role]
          ]
        }
      ]
    }
  ];
};
const MOCK_MENUS = [
  {
    menus: [...dashboardMenus, ...createDemosMenus("super")],
    username: "vben"
  },
  {
    menus: [...dashboardMenus, ...createDemosMenus("admin")],
    username: "admin"
  },
  {
    menus: [...dashboardMenus, ...createDemosMenus("user")],
    username: "jack"
  }
];

function useResponseSuccess(data) {
  return {
    code: 0,
    data,
    error: null,
    message: "ok"
  };
}
function usePageResponseSuccess(page, pageSize, list, { message = "ok" } = {}) {
  const pageData = pagination(
    Number.parseInt(`${page}`),
    Number.parseInt(`${pageSize}`),
    list
  );
  return {
    ...useResponseSuccess({
      items: pageData,
      total: list.length
    }),
    message
  };
}
function useResponseError(message, error = null) {
  return {
    code: -1,
    data: null,
    error,
    message
  };
}
function forbiddenResponse(event, message = "Forbidden Exception") {
  setResponseStatus(event, 403);
  return useResponseError(message, message);
}
function unAuthorizedResponse(event) {
  setResponseStatus(event, 401);
  return useResponseError("Unauthorized Exception", "Unauthorized Exception");
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function pagination(pageNo, pageSize, array) {
  const offset = (pageNo - 1) * Number(pageSize);
  return offset + Number(pageSize) >= array.length ? array.slice(offset) : array.slice(offset, offset + Number(pageSize));
}

const ACCESS_TOKEN_SECRET = "access_token_secret";
const REFRESH_TOKEN_SECRET = "refresh_token_secret";
function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "7d" });
}
function generateRefreshToken(user) {
  return jwt.sign(user, REFRESH_TOKEN_SECRET, {
    expiresIn: "30d"
  });
}
function verifyAccessToken(event) {
  const authHeader = getHeader(event, "Authorization");
  if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer"))) {
    return null;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    const username = decoded.username;
    const user = MOCK_USERS.find((item) => item.username === username);
    const { password: _pwd, ...userinfo } = user;
    return userinfo;
  } catch {
    return null;
  }
}
function verifyRefreshToken(token) {
  try {
    const decoded = jwt.verify(token, REFRESH_TOKEN_SECRET);
    const username = decoded.username;
    const user = MOCK_USERS.find((item) => item.username === username);
    const { password: _pwd, ...userinfo } = user;
    return userinfo;
  } catch {
    return null;
  }
}

const codes = eventHandler((event) => {
  var _a, _b;
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  const codes = (_b = (_a = MOCK_CODES.find((item) => item.username === userinfo.username)) == null ? void 0 : _a.codes) != null ? _b : [];
  return useResponseSuccess(codes);
});

const codes$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: codes
});

function clearRefreshTokenCookie(event) {
  deleteCookie(event, "jwt", {
    httpOnly: true,
    sameSite: "none",
    secure: true
  });
}
function setRefreshTokenCookie(event, refreshToken) {
  setCookie(event, "jwt", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1e3,
    sameSite: "none",
    secure: true
  });
}
function getRefreshTokenFromCookie(event) {
  const refreshToken = getCookie(event, "jwt");
  return refreshToken;
}

const login_post = defineEventHandler(async (event) => {
  const { password, username } = await readBody(event);
  if (!password || !username) {
    setResponseStatus(event, 400);
    return useResponseError(
      "BadRequestException",
      "Username and password are required"
    );
  }
  const findUser = MOCK_USERS.find(
    (item) => item.username === username && item.password === password
  );
  if (!findUser) {
    clearRefreshTokenCookie(event);
    return forbiddenResponse(event, "Username or password is incorrect.");
  }
  const accessToken = generateAccessToken(findUser);
  const refreshToken = generateRefreshToken(findUser);
  setRefreshTokenCookie(event, refreshToken);
  return useResponseSuccess({
    ...findUser,
    accessToken
  });
});

const login_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: login_post
});

const logout_post = defineEventHandler(async (event) => {
  const refreshToken = getRefreshTokenFromCookie(event);
  if (!refreshToken) {
    return useResponseSuccess("");
  }
  clearRefreshTokenCookie(event);
  return useResponseSuccess("");
});

const logout_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: logout_post
});

const refresh_post = defineEventHandler(async (event) => {
  const refreshToken = getRefreshTokenFromCookie(event);
  if (!refreshToken) {
    return forbiddenResponse(event);
  }
  clearRefreshTokenCookie(event);
  const userinfo = verifyRefreshToken(refreshToken);
  if (!userinfo) {
    return forbiddenResponse(event);
  }
  const findUser = MOCK_USERS.find(
    (item) => item.username === userinfo.username
  );
  if (!findUser) {
    return forbiddenResponse(event);
  }
  const accessToken = generateAccessToken(findUser);
  setRefreshTokenCookie(event, refreshToken);
  return accessToken;
});

const refresh_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: refresh_post
});

const all = eventHandler(async (event) => {
  var _a, _b;
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  const menus = (_b = (_a = MOCK_MENUS.find((item) => item.username === userinfo.username)) == null ? void 0 : _a.menus) != null ? _b : [];
  return useResponseSuccess(menus);
});

const all$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: all
});

const status = eventHandler((event) => {
  const { status } = getQuery$1(event);
  setResponseStatus(event, Number(status));
  return useResponseError(`${status}`);
});

const status$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: status
});

function generateMockDataList(count) {
  const dataList = [];
  for (let i = 0; i < count; i++) {
    const dataItem = {
      id: faker.string.uuid(),
      imageUrl: faker.image.avatar(),
      imageUrl2: faker.image.avatar(),
      open: faker.datatype.boolean(),
      status: faker.helpers.arrayElement(["success", "error", "warning"]),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(),
      currency: faker.finance.currencyCode(),
      quantity: faker.number.int({ min: 1, max: 100 }),
      available: faker.datatype.boolean(),
      category: faker.commerce.department(),
      releaseDate: faker.date.past(),
      rating: faker.number.float({ min: 1, max: 5 }),
      description: faker.commerce.productDescription(),
      weight: faker.number.float({ min: 0.1, max: 10 }),
      color: faker.color.human(),
      inProduction: faker.datatype.boolean(),
      tags: Array.from({ length: 3 }, () => faker.commerce.productAdjective())
    };
    dataList.push(dataItem);
  }
  return dataList;
}
const mockData = generateMockDataList(100);
const list = eventHandler(async (event) => {
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  await sleep(600);
  const { page, pageSize, sortBy, sortOrder } = getQuery$1(event);
  const listData = structuredClone(mockData);
  if (sortBy && Reflect.has(listData[0], sortBy)) {
    listData.sort((a, b) => {
      if (sortOrder === "asc") {
        if (sortBy === "price") {
          return Number.parseFloat(a[sortBy]) - Number.parseFloat(b[sortBy]);
        } else {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        }
      } else {
        if (sortBy === "price") {
          return Number.parseFloat(b[sortBy]) - Number.parseFloat(a[sortBy]);
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      }
    });
  }
  return usePageResponseSuccess(page, pageSize, listData);
});

const list$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: list
});

const test_get = defineEventHandler(() => "Test get handler");

const test_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: test_get
});

const test_post = defineEventHandler(() => "Test post handler");

const test_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: test_post
});

const info = eventHandler((event) => {
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  return useResponseSuccess(userinfo);
});

const info$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: info
});

const _____ = defineEventHandler(() => {
  return `
<h1>Hello Vben Admin</h1>
<h2>Mock service is starting</h2>
<ul>
<li><a href="/api/user">/api/user/info</a></li>
<li><a href="/api/menu">/api/menu/all</a></li>
<li><a href="/api/auth/codes">/api/auth/codes</a></li>
<li><a href="/api/auth/login">/api/auth/login</a></li>
</ul>
`;
});

const _____$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____
});
//# sourceMappingURL=index.mjs.map
