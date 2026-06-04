import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { ref, hasInjectionContext, inject, computed, toValue, reactive, watch, toRef, isRef, getCurrentInstance, onServerPrefetch, shallowRef, nextTick, unref, defineComponent, createElementBlock, provide, cloneVNode, h, defineAsyncComponent, shallowReactive, Suspense, Fragment, useSSRContext, createApp, withAsyncContext, mergeProps, withCtx, createVNode, onErrorCaptured, resolveDynamicComponent, effectScope, getCurrentScope, isReadonly, toRaw, isShallow, isReactive } from 'vue';
import { o as hash, p as parseURL, h as encodePath, q as decodePath, l as createError$1, r as hasProtocol, v as isScriptProtocol, n as joinURL, w as withQuery, x as klona, y as sanitizeStatusCode, z as getContext, A as getRequestHeader, d as destr, B as isEqual, C as setCookie, D as getCookie, E as deleteCookie, $ as $fetch, F as defu, G as executeAsync } from '../_/nitro.mjs';
import { u as useSeoMeta$1, a as useHead$1, h as headSymbol, b as baseURL } from '../routes/renderer.mjs';
import { defineStore, createPinia, setActivePinia, shouldHydrate } from 'pinia';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderTeleport, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import { nanoid } from 'nanoid';
import { isPlainObject } from '@vue/shared';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const NullObject = /* @__PURE__ */ (() => {
  const C = function() {
  };
  C.prototype = /* @__PURE__ */ Object.create(null);
  return C;
})();
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = new NullObject();
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

//#region src/index.ts
const DEBOUNCE_DEFAULTS = { trailing: true };
/**
Debounce functions
@param fn - Promise-returning/async function to debounce.
@param wait - Milliseconds to wait before calling `fn`. Default value is 25ms
@returns A function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.
@example
```
import { debounce } from 'perfect-debounce';
const expensiveCall = async input => input;
const debouncedFn = debounce(expensiveCall, 200);
for (const number of [1, 2, 3]) {
console.log(await debouncedFn(number));
}
//=> 1
//=> 2
//=> 3
```
*/
function debounce(fn, wait = 25, options = {}) {
	options = {
		...DEBOUNCE_DEFAULTS,
		...options
	};
	if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
	let leadingValue;
	let timeout;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		currentPromise = _applyPromised(fn, _this, args);
		currentPromise.finally(() => {
			currentPromise = null;
			if (options.trailing && trailingArgs && !timeout) {
				const promise = applyFn(_this, trailingArgs);
				trailingArgs = null;
				return promise;
			}
		});
		return currentPromise;
	};
	const debounced = function(...args) {
		if (options.trailing) trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = !timeout && options.leading;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				timeout = null;
				const promise = options.leading ? leadingValue : applyFn(this, args);
				trailingArgs = null;
				for (const _resolve of resolveList) _resolve(promise);
				resolveList = [];
			}, wait);
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
	const _clearTimeout = (timer) => {
		if (timer) {
			clearTimeout(timer);
			timeout = null;
		}
	};
	debounced.isPending = () => !!timeout;
	debounced.cancel = () => {
		_clearTimeout(timeout);
		resolveList = [];
		trailingArgs = null;
	};
	debounced.flush = () => {
		_clearTimeout(timeout);
		if (!trailingArgs || currentPromise) return;
		const args = trailingArgs;
		trailingArgs = null;
		return applyFn(this, args);
	};
	return debounced;
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const appLayoutTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const fetchDefaults = {};
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.4";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
const definePayloadPlugin = defineNuxtPlugin;
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = /* @__PURE__ */ Symbol("layout-meta");
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
  return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
function encodeRoutePath(url) {
  const parsed = parseURL(url);
  return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  Object.defineProperty(nuxtError, "status", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusCode,
    configurable: true
  });
  Object.defineProperty(nuxtError, "statusText", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusMessage,
    configurable: true
  });
  return nuxtError;
};
function injectHead(nuxtApp) {
  const nuxt = nuxtApp || tryUseNuxtApp();
  return nuxt?.ssrContext?.head || nuxt?.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  });
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useSeoMeta$1(input, { head, ...options });
  }
}
const matcher = /* @__PURE__ */ (() => {
  const $0 = { ssr: false }, $1 = {};
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "admin") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      } else if (s[1] === "api") {
        r.unshift({ data: $1, params: { "_": s.slice(2).join("/") } });
      }
    }
    r.unshift({ data: $1, params: { "_": s.slice(1).join("/") } });
    return r;
  };
})();
const _routeRulesMatcher = (path) => defu({}, ...matcher("", path).map((r) => r.data).reverse());
const routeRulesMatcher$1 = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher$1(path);
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const payloadPlugin = definePayloadPlugin(() => {
  definePayloadReducer(
    "skipHydrate",
    // We need to return something truthy to be treated as a match
    (data) => !shouldHydrate(data) && 1
  );
});
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
const __nuxt_page_meta$A = { layout: "page" };
const __nuxt_page_meta$z = { layout: "page-wide" };
const __nuxt_page_meta$y = { layout: "page" };
const __nuxt_page_meta$x = { layout: "page" };
const __nuxt_page_meta$w = { layout: "page" };
const __nuxt_page_meta$v = { layout: "page" };
const __nuxt_page_meta$u = { layout: "page" };
const __nuxt_page_meta$t = { layout: false };
const __nuxt_page_meta$s = { layout: "portal" };
const __nuxt_page_meta$r = { layout: "portal" };
const __nuxt_page_meta$q = { layout: "portal" };
const __nuxt_page_meta$p = { layout: false };
const __nuxt_page_meta$o = { layout: "page" };
const __nuxt_page_meta$n = { layout: "page" };
const __nuxt_page_meta$m = { layout: "portal" };
const __nuxt_page_meta$l = { layout: "page" };
const __nuxt_page_meta$k = { layout: "page" };
const __nuxt_page_meta$j = { layout: "admin" };
const __nuxt_page_meta$i = { layout: "admin" };
const __nuxt_page_meta$h = { layout: "page" };
const __nuxt_page_meta$g = { layout: "portal" };
const __nuxt_page_meta$f = { layout: "page" };
const __nuxt_page_meta$e = { layout: "admin" };
const __nuxt_page_meta$d = { layout: "admin" };
const __nuxt_page_meta$c = { layout: "page" };
const __nuxt_page_meta$b = { layout: "admin" };
const __nuxt_page_meta$a = { layout: "admin" };
const __nuxt_page_meta$9 = { layout: "admin" };
const __nuxt_page_meta$8 = { layout: "admin" };
const __nuxt_page_meta$7 = { layout: "admin" };
const __nuxt_page_meta$6 = { layout: "admin" };
const __nuxt_page_meta$5 = { layout: "admin" };
const __nuxt_page_meta$4 = { layout: "admin" };
const __nuxt_page_meta$3 = { layout: "admin" };
const __nuxt_page_meta$2 = { layout: "admin" };
const __nuxt_page_meta$1 = { layout: "admin" };
const __nuxt_page_meta = { layout: "admin" };
const _routes = [
  {
    name: "about",
    path: "/about",
    meta: __nuxt_page_meta$A || {},
    component: () => import('./about-D41YUVsL.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-CqBbWGBT.mjs')
  },
  {
    name: "order",
    path: "/order",
    meta: __nuxt_page_meta$z || {},
    component: () => import('./order-BV-3PRJJ.mjs')
  },
  {
    name: "contact",
    path: "/contact",
    meta: __nuxt_page_meta$y || {},
    component: () => import('./contact-CDv2Gk2I.mjs')
  },
  {
    name: "pricing",
    path: "/pricing",
    meta: __nuxt_page_meta$x || {},
    component: () => import('./pricing-DkbT0pLr.mjs')
  },
  {
    name: "features",
    path: "/features",
    component: () => import('./features-mvKeiZFZ.mjs')
  },
  {
    name: "partners",
    path: "/partners",
    meta: __nuxt_page_meta$w || {},
    component: () => import('./partners-DM7IiOOm.mjs')
  },
  {
    name: "services",
    path: "/services",
    meta: __nuxt_page_meta$v || {},
    component: () => import('./services-L0H3Q3fX.mjs')
  },
  {
    name: "resources",
    path: "/resources",
    meta: __nuxt_page_meta$u || {},
    component: () => import('./resources-RorvrUqN.mjs')
  },
  {
    name: "admin-login",
    path: "/admin/login",
    meta: __nuxt_page_meta$t || {},
    component: () => import('./login-B_1y_tyA.mjs')
  },
  {
    name: "portal-chats",
    path: "/portal/chats",
    meta: { ...__nuxt_page_meta$r || {}, ...{ "middleware": "customer" } },
    component: () => import('./chats-CtkUK8D7.mjs'),
    children: [
      {
        name: "portal-chats-id",
        path: ":id()",
        meta: { ...__nuxt_page_meta$s || {}, ...{ "middleware": "customer" } },
        component: () => import('./_id_-CK_7wUvO.mjs')
      }
    ]
  },
  {
    name: "portal",
    path: "/portal",
    meta: { ...__nuxt_page_meta$q || {}, ...{ "middleware": "customer" } },
    component: () => import('./index-9iYAYajd.mjs')
  },
  {
    name: "portal-login",
    path: "/portal/login",
    meta: __nuxt_page_meta$p || {},
    component: () => import('./login-C9aKjatr.mjs')
  },
  {
    name: "refund-policy",
    path: "/refund-policy",
    meta: __nuxt_page_meta$o || {},
    component: () => import('./refund-policy-3T1fCnFD.mjs')
  },
  {
    name: "meeting-failed",
    path: "/meeting/failed",
    meta: __nuxt_page_meta$n || {},
    component: () => import('./failed-B6sRNEna.mjs')
  },
  {
    name: "portal-profile",
    path: "/portal/profile",
    meta: { ...__nuxt_page_meta$m || {}, ...{ "middleware": "customer" } },
    component: () => import('./profile-4rn9B3_o.mjs')
  },
  {
    name: "privacy-policy",
    path: "/privacy-policy",
    meta: __nuxt_page_meta$l || {},
    component: () => import('./privacy-policy-D_Pf76D7.mjs')
  },
  {
    name: "products",
    path: "/products",
    meta: __nuxt_page_meta$k || {},
    component: () => import('./index-6sZzE84-.mjs')
  },
  {
    name: "admin-blog-id",
    path: "/admin/blog/:id()",
    meta: { ...__nuxt_page_meta$j || {}, ...{ "middleware": "admin" } },
    component: () => import('./_id_-BP8ny3lD.mjs')
  },
  {
    name: "admin-dashboard",
    path: "/admin/dashboard",
    meta: { ...__nuxt_page_meta$i || {}, ...{ "middleware": "admin" } },
    component: () => import('./dashboard-qYfqC5p6.mjs')
  },
  {
    name: "meeting-success",
    path: "/meeting/success",
    meta: __nuxt_page_meta$h || {},
    component: () => import('./success-OD0a2aCv.mjs')
  },
  {
    name: "portal-contacts",
    path: "/portal/contacts",
    meta: { ...__nuxt_page_meta$g || {}, ...{ "middleware": "customer" } },
    component: () => import('./contacts-CfgLLENR.mjs')
  },
  {
    name: "products-slug",
    path: "/products/:slug()",
    meta: __nuxt_page_meta$f || {},
    component: () => import('./_slug_-CAZF6YcO.mjs')
  },
  {
    name: "admin-blog",
    path: "/admin/blog",
    meta: { ...__nuxt_page_meta$e || {}, ...{ "middleware": "admin" } },
    component: () => import('./index-DCY58SMW.mjs')
  },
  {
    name: "admin-users-id",
    path: "/admin/users/:id()",
    meta: { ...__nuxt_page_meta$d || {}, ...{ "middleware": "admin" } },
    component: () => import('./_id_-lJ72IKUA.mjs')
  },
  {
    name: "terms-of-service",
    path: "/terms-of-service",
    meta: __nuxt_page_meta$c || {},
    component: () => import('./terms-of-service-B5WRtfTR.mjs')
  },
  {
    name: "admin-email",
    path: "/admin/email",
    meta: { ...__nuxt_page_meta$b || {}, ...{ "middleware": "admin" } },
    component: () => import('./index-BXhsfqSx.mjs')
  },
  {
    name: "admin-users",
    path: "/admin/users",
    meta: { ...__nuxt_page_meta$a || {}, ...{ "middleware": "admin" } },
    component: () => import('./index-DpAHhMqt.mjs')
  },
  {
    name: "admin-content",
    path: "/admin/content",
    meta: { ...__nuxt_page_meta$9 || {}, ...{ "middleware": "admin" } },
    component: () => import('./index-CsAXWdNW.mjs')
  },
  {
    name: "admin-products-id",
    path: "/admin/products/:id()",
    meta: { ...__nuxt_page_meta$8 || {}, ...{ "middleware": "admin" } },
    component: () => import('./_id_-AEFC8GaL.mjs')
  },
  {
    name: "admin-sessions-id",
    path: "/admin/sessions/:id()",
    meta: { ...__nuxt_page_meta$7 || {}, ...{ "middleware": "admin" } },
    component: () => import('./_id_-gMmtZADZ.mjs')
  },
  {
    name: "admin-contacts",
    path: "/admin/contacts",
    meta: { ...__nuxt_page_meta$6 || {}, ...{ "middleware": "admin" } },
    component: () => import('./index-DWC4pJk3.mjs')
  },
  {
    name: "admin-content-slug",
    path: "/admin/content/:slug()",
    meta: { ...__nuxt_page_meta$5 || {}, ...{ "middleware": "admin" } },
    component: () => import('./_slug_-DUXnZKrf.mjs')
  },
  {
    name: "admin-meetings",
    path: "/admin/meetings",
    meta: { ...__nuxt_page_meta$4 || {}, ...{ "middleware": "admin" } },
    component: () => import('./index-2V4hVf5z.mjs')
  },
  {
    name: "admin-products",
    path: "/admin/products",
    meta: { ...__nuxt_page_meta$3 || {}, ...{ "middleware": "admin" } },
    component: () => import('./index-BSPJlFBs.mjs')
  },
  {
    name: "admin-sessions",
    path: "/admin/sessions",
    meta: { ...__nuxt_page_meta$2 || {}, ...{ "middleware": "admin" } },
    component: () => import('./index-BwkjbV7S.mjs')
  },
  {
    name: "admin-knowledge",
    path: "/admin/knowledge",
    meta: { ...__nuxt_page_meta$1 || {}, ...{ "middleware": "admin" } },
    component: () => import('./index-Dq5UcRRw.mjs')
  },
  {
    name: "admin-integrations",
    path: "/admin/integrations",
    meta: { ...__nuxt_page_meta || {}, ...{ "middleware": "admin" } },
    component: () => import('./index-CiFxE79G.mjs')
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => children.default?.() };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function _mergeTransitionProps(routeProps) {
  const _props = [];
  for (const prop of routeProps) {
    if (!prop) {
      continue;
    }
    _props.push({
      ...prop,
      onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0,
      onBeforeLeave: prop.onBeforeLeave ? toArray(prop.onBeforeLeave) : void 0
    });
  }
  return defu(..._props);
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    if (from === START_LOCATION) {
      return _calculatePosition(to, from, savedPosition, hashScrollBehaviour);
    }
    return new Promise((resolve2) => {
      const doScroll = () => {
        requestAnimationFrame(() => resolve2(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      };
      nuxtApp.hooks.hookOnce("page:loading:end", () => {
        const transitionPromise = nuxtApp["~transitionPromise"];
        if (transitionPromise) {
          transitionPromise.then(doScroll);
        } else {
          doScroll();
        }
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isChangingPage(to, from) ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    status: result && (result.status || result.statusCode) || 404,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {
  admin: () => import('./admin-BOoObfE8.mjs'),
  customer: () => import('./customer-DPUyHgis.mjs')
};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    router.afterEach((to, from) => {
      const lastTo = to.matched.at(-1)?.components?.default;
      const lastFrom = from.matched.at(-1)?.components?.default;
      if (lastTo === lastFrom) {
        syncCurrentRoute();
        return;
      }
      if (to.matched.length < from.matched.length && to.matched.every((m, i) => m.components?.default === from.matched[i]?.components?.default)) {
        syncCurrentRoute();
      }
    });
    const route = { sync: syncCurrentRoute };
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    const error = /* @__PURE__ */ useError();
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    const hasDeferredRoute = false;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        const routeRules = getRouteRules({ path: to.path });
        if (routeRules.appMiddleware) {
          for (const key in routeRules.appMiddleware) {
            if (routeRules.appMiddleware[key]) {
              middlewareEntries.add(key);
            } else {
              middlewareEntries.delete(key);
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0 && !error.value) {
        return nuxtApp.runWithContext(() => showError(createError({
          status: 404,
          fatal: false,
          statusText: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        if (hasDeferredRoute) ;
        else {
          await router.replace({
            ...resolvedInitialRoute,
            force: true
          });
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry2 = nuxtApp._asyncData[key.value];
      if (entry2?._abortController) {
        try {
          entry2._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry2._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  Object.defineProperties(asyncDataPromise, {
    then: { enumerable: true, value: asyncDataPromise.then.bind(asyncDataPromise) },
    catch: { enumerable: true, value: asyncDataPromise.catch.bind(asyncDataPromise) },
    finally: { enumerable: true, value: asyncDataPromise.finally.bind(asyncDataPromise) }
  });
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    {
      nuxtApp._asyncData[key].pending.value = false;
    }
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= asyncDataDefaults.errorValue;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData != null;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: shallowRef(!hasCachedData),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if (isDefer(opts.dedupe ?? options.dedupe)) {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      if (opts.cause === "initial" || nuxtApp.isHydrating) {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData != null) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = asyncDataDefaults.errorValue;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      {
        asyncData.pending.value = true;
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve2, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve2, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return;
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = asyncDataDefaults.errorValue;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        if (nuxtApp._asyncDataPromises[key] === promise) {
          {
            asyncData.pending.value = false;
          }
          delete nuxtApp._asyncDataPromises[key];
        }
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
            asyncData.data.value = asyncDataDefaults.value;
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => asyncDataDefaults.value;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  return useRequestEvent()?.$fetch || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  if (!immediate) {
    let setImmediate = function() {
      _asyncDataOptions.immediate = true;
    };
    watch(key, setImmediate, { flush: "sync", once: true });
    watch([...watchSources || [], _fetchOptions], setImmediate, { flush: "sync", once: true });
  }
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const entries = [];
      for (const entry2 of value.entries()) {
        const [key, val] = entry2;
        entries.push([key, val instanceof File ? `${val.name}:${val.size}:${val.lastModified}` : val]);
      }
      segments.push(hash(entries));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => {
    const decoded = decodeURIComponent(val);
    const parsed = destr(decoded);
    if (typeof parsed === "number" && (!Number.isFinite(parsed) || String(parsed) !== decoded)) {
      return decoded;
    }
    return parsed;
  },
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ??= (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? opts.default?.());
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies ||= {};
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = toRaw(pinia.state.value);
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  payloadPlugin,
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4
];
const layouts = {
  admin: defineAsyncComponent(() => import('./admin-C4QDLuzK.mjs').then((m) => m.default || m)),
  default: defineAsyncComponent(() => import('./default-CjdF-ZHQ.mjs').then((m) => m.default || m)),
  "page-wide": defineAsyncComponent(() => import('./page-wide-BXq2ISt9.mjs').then((m) => m.default || m)),
  page: defineAsyncComponent(() => import('./page-DPuPw9lD.mjs').then((m) => m.default || m)),
  portal: defineAsyncComponent(() => import('./portal-Dn1EsKTO.mjs').then((m) => m.default || m))
};
const routeRulesMatcher = _routeRulesMatcher;
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const shouldUseEagerRoute = !injectedRoute || injectedRoute === useRoute();
    const route = shouldUseEagerRoute ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route?.meta.layout ?? routeRulesMatcher(route?.path).appLayout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = shallowRef();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    let lastLayout;
    return () => {
      const hasLayout = !!layout.value && layout.value in layouts;
      const hasTransition = hasLayout && !!(route?.meta.layoutTransition ?? appLayoutTransition);
      const transitionProps = hasTransition && _mergeTransitionProps([
        route?.meta.layoutTransition,
        appLayoutTransition,
        {
          onBeforeLeave() {
            nuxtApp["~transitionPromise"] = new Promise((resolve2) => {
              nuxtApp["~transitionFinish"] = resolve2;
            });
          },
          onAfterLeave() {
            nuxtApp["~transitionFinish"]?.();
            delete nuxtApp["~transitionFinish"];
            delete nuxtApp["~transitionPromise"];
          }
        }
      ]);
      const previouslyRenderedLayout = lastLayout;
      lastLayout = layout.value;
      return _wrapInTransition(transitionProps, {
        default: () => h(
          Suspense,
          {
            suspensible: true,
            onResolve: async () => {
              await nextTick(done);
            }
          },
          {
            default: () => h(
              LayoutProvider,
              {
                layoutProps: mergeProps(context.attrs, route.meta.layoutProps ?? {}, { ref: layoutRef }),
                key: layout.value || void 0,
                name: layout.value,
                shouldProvide: !props.name,
                isRenderingNewLayout: (name) => {
                  return name !== previouslyRenderedLayout && name === layout.value;
                },
                hasTransition
              },
              context.slots
            )
          }
        )
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    },
    isRenderingNewLayout: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        // When name=false, always return true so NuxtPage doesn't skip rendering
        isCurrent: (route) => name === false || name === (route.meta.layout ?? routeRulesMatcher(route.path).appLayout ?? "default")
      });
    }
    const injectedRoute = inject(PageRouteSymbol);
    const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
    if (isNotWithinNuxtPage) {
      const vueRouterRoute = useRoute$1();
      const reactiveChildRoute = {};
      for (const _key in vueRouterRoute) {
        const key = _key;
        Object.defineProperty(reactiveChildRoute, key, {
          enumerable: true,
          get: () => {
            return props.isRenderingNewLayout(props.name) ? vueRouterRoute[key] : injectedRoute[key];
          }
        });
      }
      provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
    }
    return () => {
      if (!name || typeof name === "string" && !(name in layouts)) {
        return context.slots.default?.();
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const locales = [
  { code: "id", label: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "en", label: "English", flag: "🇺🇸" }
];
const messages = {
  id: {
    common: {
      language: "Bahasa",
      backToChat: "Kembali ke Chat",
      signIn: "Masuk",
      signOut: "Keluar",
      close: "Tutup",
      loading: "Memuat",
      choose: "Pilih"
    },
    layout: {
      page: {
        nav: {
          products: "Produk",
          pricing: "Harga",
          about: "Tentang",
          contact: "Kontak",
          chat: "Chat"
        },
        footer: {
          brandDesc: "Spesialis chatbot WhatsApp & AI automation untuk bisnis Indonesia.",
          products: "Produk",
          company: "Perusahaan",
          legal: "Legal",
          allProducts: "Semua Produk",
          features: "Fitur",
          pricing: "Harga",
          subscribe: "Mulai Berlangganan",
          about: "Tentang Kami",
          partners: "Mitra & Case Study",
          contact: "Kontak",
          whatsappAdmin: "WhatsApp Admin",
          privacy: "Kebijakan Privasi",
          terms: "Syarat & Ketentuan",
          refund: "Kebijakan Refund",
          copyright: "© 2026 Autobot Wijaya Solution · Seluruh hak cipta dilindungi."
        }
      }
    },
    sidebar: {
      newChat: "New Chat",
      search: "Search",
      explore: "Explore",
      features: "Fitur",
      products: "Produk",
      about: "Tentang",
      consult: "Konsultasi",
      allFeatures: "Lihat semua fitur",
      recent: "Recent",
      language: "Bahasa Indonesia",
      adminPanel: "Admin Panel",
      copied: "✓ Tersalin",
      copyAccessKey: "Salin access key"
    },
    portal: {
      backToChat: "Back to Chat",
      signOut: "Sign Out",
      dashboard: "Dashboard",
      chats: "My Chats",
      contacts: "My Contacts",
      profile: "Profile"
    }
  },
  en: {
    common: {
      language: "Language",
      backToChat: "Back to Chat",
      signIn: "Sign In",
      signOut: "Sign Out",
      close: "Close",
      loading: "Loading",
      choose: "Choose"
    },
    layout: {
      page: {
        nav: {
          products: "Products",
          pricing: "Pricing",
          about: "About",
          contact: "Contact",
          chat: "Chat"
        },
        footer: {
          brandDesc: "Specialists in WhatsApp chatbots and AI automation for Indonesian businesses.",
          products: "Products",
          company: "Company",
          legal: "Legal",
          allProducts: "All Products",
          features: "Features",
          pricing: "Pricing",
          subscribe: "Start Subscription",
          about: "About Us",
          partners: "Partners & Case Studies",
          contact: "Contact",
          whatsappAdmin: "WhatsApp Admin",
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          refund: "Refund Policy",
          copyright: "© 2026 Autobot Wijaya Solution · All rights reserved."
        }
      }
    },
    sidebar: {
      newChat: "New Chat",
      search: "Search",
      explore: "Explore",
      features: "Features",
      products: "Products",
      about: "About",
      consult: "Consultation",
      allFeatures: "View all features",
      recent: "Recent",
      language: "English",
      adminPanel: "Admin Panel",
      copied: "✓ Copied",
      copyAccessKey: "Copy access key"
    },
    portal: {
      backToChat: "Back to Chat",
      signOut: "Sign Out",
      dashboard: "Dashboard",
      chats: "My Chats",
      contacts: "My Contacts",
      profile: "Profile"
    }
  }
};
function resolve(path, obj) {
  return path.split(".").reduce((acc, key) => {
    if (!acc || typeof acc !== "object") return void 0;
    return acc[key];
  }, obj);
}
function translate(locale, key) {
  return resolve(key, messages[locale]) ?? key;
}
const COOKIE_NAME = "autobot_locale";
function useLocale() {
  const cookie = useCookie(COOKIE_NAME, { sameSite: "lax" });
  const locale = useState("autobot-locale", () => cookie.value || "id");
  function setLocale(next) {
    locale.value = next;
    cookie.value = next;
  }
  function toggleLocale() {
    setLocale(locale.value === "id" ? "en" : "id");
  }
  function t(key) {
    return translate(locale.value, key);
  }
  return {
    locale,
    locales,
    setLocale,
    toggleLocale,
    t
  };
}
function useSearchModal() {
  const showSearch = useState("searchModalOpen", () => false);
  function openSearch() {
    showSearch.value = true;
  }
  function closeSearch() {
    showSearch.value = false;
  }
  return { showSearch, openSearch, closeSearch };
}
const useChatStore = defineStore("chat", () => {
  const messages2 = ref([]);
  const isTyping = ref(false);
  const currentStreamId = ref(null);
  const suggestions = ref([
    { text: "Lihat semua produk", icon: "Package", category: "product" },
    { text: "Saya butuh chatbot WhatsApp", icon: "MessageCircle", category: "chatbot" },
    { text: "Mau blast promo ke banyak kontak", icon: "Send", category: "blast" },
    { text: "Butuh automasi proses bisnis", icon: "GitMerge", category: "automation" },
    { text: "Custom development", icon: "Code", category: "custom" },
    { text: "Tentang perusahaan", icon: "Building", category: "company" }
  ]);
  const sessionId = ref(null);
  const hasStarted = ref(false);
  const userName = ref(null);
  const accessKey = ref(null);
  const pendingSend = ref(null);
  const addMessage = (msg) => {
    messages2.value.push({
      ...msg,
      id: nanoid(),
      timestamp: /* @__PURE__ */ new Date()
    });
    hasStarted.value = true;
  };
  const startStream = (messageId) => {
    isTyping.value = false;
    currentStreamId.value = messageId;
    messages2.value.push({
      id: messageId,
      role: "assistant",
      content: "",
      isStreaming: true,
      timestamp: /* @__PURE__ */ new Date()
    });
  };
  const appendToken = (messageId, token) => {
    const msg = messages2.value.find((m) => m.id === messageId);
    if (msg) msg.content += token;
  };
  const endStream = (messageId, richContent, newSuggestions) => {
    const msg = messages2.value.find((m) => m.id === messageId);
    if (msg) {
      msg.isStreaming = false;
      if (richContent) msg.richContent = richContent;
    }
    currentStreamId.value = null;
    if (newSuggestions?.length) suggestions.value = newSuggestions;
  };
  const handleWSMessage = (msg) => {
    switch (msg.type) {
      case "session_init":
        if (msg.suggestions) suggestions.value = msg.suggestions;
        if (msg.content && messages2.value.length === 0) {
          addMessage({ role: "assistant", content: msg.content, isTypingAnim: true });
        }
        break;
      case "message":
        isTyping.value = false;
        addMessage({
          role: msg.role || "assistant",
          content: msg.content || "",
          richContent: msg.rich_content,
          isTypingAnim: msg.role === "assistant" || !msg.role
        });
        if (msg.suggestions) suggestions.value = msg.suggestions;
        break;
      case "typing":
        isTyping.value = true;
        break;
      case "stream_start":
        if (msg.message_id) startStream(msg.message_id);
        break;
      case "stream_token":
        if (msg.message_id && msg.token) appendToken(msg.message_id, msg.token);
        break;
      case "stream_end":
        if (msg.message_id) endStream(msg.message_id, msg.rich_content, msg.suggestions);
        if (msg.content && msg.message_id) {
          const m = messages2.value.find((x) => x.id === msg.message_id);
          if (m && !m.content) m.content = msg.content || "";
        }
        break;
      case "user_authenticated":
        if (msg.user_name) userName.value = msg.user_name;
        if (msg.access_key) accessKey.value = msg.access_key;
        break;
      case "error":
        isTyping.value = false;
        addMessage({ role: "assistant", content: msg.error || "Terjadi kesalahan." });
        break;
    }
  };
  const clearMessages = () => {
    messages2.value = [];
    hasStarted.value = false;
    isTyping.value = false;
    currentStreamId.value = null;
  };
  const triggerSend = (text) => {
    pendingSend.value = text;
  };
  return {
    messages: messages2,
    isTyping,
    suggestions,
    sessionId,
    hasStarted,
    userName,
    accessKey,
    pendingSend,
    addMessage,
    startStream,
    appendToken,
    endStream,
    handleWSMessage,
    clearMessages,
    triggerSend
  };
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SearchModal",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useLocale();
    useSearchModal();
    useChatStore();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const query = ref("");
    ref(null);
    const navigating = ref(false);
    const { data: productsData } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/api/products`,
      "$uvrtK8LFnX"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: partnersData } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/api/partners`,
      "$QnE-DEA8U3"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const staticItems = computed(() => [
      {
        id: "page-features",
        kind: "page",
        title: locale.value === "id" ? "Fitur Lengkap WaBlastApp" : "WaBlastApp Features",
        description: locale.value === "id" ? "Auto-reply, AI multi-provider, broadcast, manajemen kontak, dan 20+ modul bisnis." : "Auto-reply, AI multi-provider, broadcast, contact management, and 20+ business modules.",
        category: locale.value === "id" ? "Halaman Publik" : "Public Page",
        route: "/features",
        tags: ["feature", "ai", "blast", "crm"],
        emoji: "✨",
        actionLabel: locale.value === "id" ? "Buka halaman" : "Open page",
        aliases: ["fitur", "features", "wa blast", "autoreply", "broadcast", "ai", "crm"]
      },
      {
        id: "page-products",
        kind: "page",
        title: locale.value === "id" ? "Semua Produk Autobot" : "Autobot Products",
        description: locale.value === "id" ? "Koleksi produk chatbot, workflow, integrasi, dan custom AI." : "Product catalog for chatbot, workflow, integration, and custom AI solutions.",
        category: locale.value === "id" ? "Halaman Publik" : "Public Page",
        route: "/products",
        tags: ["products", "catalog", "solutions"],
        emoji: "📦",
        actionLabel: locale.value === "id" ? "Lihat produk" : "View products",
        aliases: ["product", "produk", "catalog"]
      },
      {
        id: "page-pricing",
        kind: "page",
        title: locale.value === "id" ? "Harga & Paket" : "Pricing & Plans",
        description: locale.value === "id" ? "Bandingkan paket, lisensi, dan penawaran produk Autobot." : "Compare plans, licensing, and product offers from Autobot.",
        category: locale.value === "id" ? "Halaman Publik" : "Public Page",
        route: "/pricing",
        tags: ["pricing", "package", "plan"],
        emoji: "💳",
        actionLabel: locale.value === "id" ? "Lihat paket" : "View plans",
        aliases: ["price", "harga", "paket"]
      },
      {
        id: "page-order",
        kind: "page",
        title: locale.value === "id" ? "Konsultasi / Order" : "Consultation / Order",
        description: locale.value === "id" ? "Mulai konsultasi, jelaskan kebutuhan, dan minta penawaran." : "Start a consultation, describe your needs, and request a quote.",
        category: locale.value === "id" ? "Halaman Publik" : "Public Page",
        route: "/order",
        tags: ["consultation", "order", "quote"],
        emoji: "📝",
        actionLabel: locale.value === "id" ? "Buka form" : "Open form",
        aliases: ["order", "consultation", "konsultasi", "request"]
      },
      {
        id: "page-contact",
        kind: "page",
        title: locale.value === "id" ? "Kontak Autobot" : "Autobot Contact",
        description: "support@autobot.co.id · +62 821-6486-7681 · WhatsApp admin",
        category: locale.value === "id" ? "Kontak" : "Contact",
        route: "/contact",
        tags: ["contact", "support", "sales"],
        emoji: "☎️",
        actionLabel: locale.value === "id" ? "Hubungi" : "Contact",
        aliases: ["contact", "support", "sales", "whatsapp"]
      },
      {
        id: "page-about",
        kind: "page",
        title: locale.value === "id" ? "Tentang Autobot" : "About Autobot",
        description: locale.value === "id" ? "Profil perusahaan, visi, keunggulan, dan tim Autobot Wijaya Solution." : "Company profile, vision, strengths, and the Autobot Wijaya Solution team.",
        category: locale.value === "id" ? "Perusahaan" : "Company",
        route: "/about",
        tags: ["about", "company", "team"],
        emoji: "🏢",
        actionLabel: locale.value === "id" ? "Buka halaman" : "Open page",
        aliases: ["about", "company", "team", "profile"]
      },
      {
        id: "page-resources",
        kind: "page",
        title: locale.value === "id" ? "Developer Resources" : "Developer Resources",
        description: locale.value === "id" ? "API reference, WebSocket guide, SDK, dan webhook events." : "API reference, WebSocket guide, SDKs, and webhook events.",
        category: locale.value === "id" ? "Dokumentasi" : "Docs",
        route: "/resources",
        tags: ["api", "docs", "websocket", "sdk"],
        emoji: "📚",
        actionLabel: locale.value === "id" ? "Lihat dokumentasi" : "View docs",
        aliases: ["api", "docs", "documentation", "websocket", "sdk"]
      },
      {
        id: "page-partners",
        kind: "page",
        title: locale.value === "id" ? "Klien & Mitra" : "Clients & Partners",
        description: locale.value === "id" ? "Daftar klien, testimoni, dan studi kasus dari berbagai industri." : "Client list, testimonials, and case studies across industries.",
        category: locale.value === "id" ? "Bukti Sosial" : "Social Proof",
        route: "/partners",
        tags: ["partners", "clients", "case study"],
        emoji: "🤝",
        actionLabel: locale.value === "id" ? "Lihat mitra" : "View partners",
        aliases: ["partner", "client", "case study", "testimonial"]
      },
      {
        id: "page-privacy",
        kind: "page",
        title: locale.value === "id" ? "Kebijakan Privasi" : "Privacy Policy",
        description: locale.value === "id" ? "Penjelasan bagaimana data dikumpulkan, disimpan, dan digunakan." : "How data is collected, stored, and used.",
        category: locale.value === "id" ? "Legal" : "Legal",
        route: "/privacy-policy",
        tags: ["privacy", "legal"],
        emoji: "🔒",
        actionLabel: locale.value === "id" ? "Baca" : "Read",
        aliases: ["privacy", "policy"]
      },
      {
        id: "page-terms",
        kind: "page",
        title: locale.value === "id" ? "Syarat & Ketentuan" : "Terms of Service",
        description: locale.value === "id" ? "Aturan penggunaan layanan dan batasan tanggung jawab." : "Terms, usage rules, and service limitations.",
        category: locale.value === "id" ? "Legal" : "Legal",
        route: "/terms-of-service",
        tags: ["terms", "legal"],
        emoji: "📄",
        actionLabel: locale.value === "id" ? "Baca" : "Read",
        aliases: ["terms", "service", "agreement"]
      },
      {
        id: "page-refund",
        kind: "page",
        title: locale.value === "id" ? "Kebijakan Refund" : "Refund Policy",
        description: locale.value === "id" ? "Ketentuan pengembalian dana dan proses refund." : "Refund terms and the refund process.",
        category: locale.value === "id" ? "Legal" : "Legal",
        route: "/refund-policy",
        tags: ["refund", "legal"],
        emoji: "↩️",
        actionLabel: locale.value === "id" ? "Baca" : "Read",
        aliases: ["refund", "return"]
      },
      {
        id: "chat-home",
        kind: "chat",
        title: locale.value === "id" ? "Mulai percakapan" : "Start chat",
        description: locale.value === "id" ? "Kirim pertanyaan langsung ke Autobot AI." : "Send your question directly to Autobot AI.",
        category: locale.value === "id" ? "AI Chat" : "AI Chat",
        query: locale.value === "id" ? "Saya ingin bertanya tentang Autobot" : "I want to ask about Autobot",
        tags: ["chat", "ask", "ai"],
        emoji: "💬",
        actionLabel: locale.value === "id" ? "Tanya AI" : "Ask AI",
        aliases: ["chat", "ask", "question", "ask ai"]
      }
    ]);
    const resourceItems = computed(() => [
      {
        id: "resource-api",
        kind: "resource",
        title: "API Reference",
        description: locale.value === "id" ? "Endpoint REST untuk chatbot, sesi, produk, dan portal." : "REST endpoints for chatbot, sessions, products, and portal.",
        category: locale.value === "id" ? "Dokumentasi" : "Docs",
        route: "/resources",
        tags: ["api", "rest", "endpoint"],
        emoji: "🔌",
        actionLabel: locale.value === "id" ? "Buka docs" : "Open docs",
        aliases: ["api reference", "rest api"]
      },
      {
        id: "resource-websocket",
        kind: "resource",
        title: "WebSocket Guide",
        description: locale.value === "id" ? "Panduan streaming chat real-time dan event socket." : "Guide to real-time chat streaming and socket events.",
        category: locale.value === "id" ? "Dokumentasi" : "Docs",
        route: "/resources",
        tags: ["websocket", "ws", "realtime"],
        emoji: "⚡",
        actionLabel: locale.value === "id" ? "Buka docs" : "Open docs",
        aliases: ["socket", "realtime"]
      },
      {
        id: "resource-sdk",
        kind: "resource",
        title: "SDK & Libraries",
        description: locale.value === "id" ? "SDK JavaScript, Python, dan Go untuk integrasi cepat." : "JavaScript, Python, and Go SDKs for quick integration.",
        category: locale.value === "id" ? "Dokumentasi" : "Docs",
        route: "/resources",
        tags: ["sdk", "library"],
        emoji: "🧩",
        actionLabel: locale.value === "id" ? "Buka docs" : "Open docs",
        aliases: ["sdk", "library", "libraries"]
      },
      {
        id: "resource-webhook",
        kind: "resource",
        title: "Webhook Events",
        description: locale.value === "id" ? "Payload event untuk integrasi sistem internal." : "Event payloads for integrating with your internal systems.",
        category: locale.value === "id" ? "Dokumentasi" : "Docs",
        route: "/resources",
        tags: ["webhook", "event"],
        emoji: "📦",
        actionLabel: locale.value === "id" ? "Buka docs" : "Open docs",
        aliases: ["webhook events"]
      }
    ]);
    const featureItems = computed(() => [
      {
        id: "feature-autoreply",
        kind: "feature",
        title: "Auto-Reply & Rule Engine",
        description: locale.value === "id" ? "Exact match, contains match, regex, override kontak, dan fallback." : "Exact match, contains match, regex, contact override, and fallback.",
        category: locale.value === "id" ? "Fitur" : "Feature",
        query: "Bagaimana fitur auto-reply dan rule engine bekerja di WaBlastApp?",
        tags: ["auto-reply", "rule", "regex"],
        emoji: "↩️",
        actionLabel: locale.value === "id" ? "Tanya AI" : "Ask AI",
        aliases: ["autoreply", "rule engine", "regex", "fallback"]
      },
      {
        id: "feature-ai",
        kind: "feature",
        title: "AI Multi-Provider",
        description: locale.value === "id" ? "OpenAI, Claude, Gemini, knowledge base, persona, dan estimasi biaya." : "OpenAI, Claude, Gemini, knowledge base, persona, and cost estimates.",
        category: locale.value === "id" ? "Fitur" : "Feature",
        query: "AI provider apa saja yang didukung dan bagaimana knowledge base-nya?",
        tags: ["ai", "openai", "claude", "gemini"],
        emoji: "🤖",
        actionLabel: locale.value === "id" ? "Tanya AI" : "Ask AI",
        aliases: ["ai provider", "knowledge base", "persona"]
      },
      {
        id: "feature-blast",
        kind: "feature",
        title: "Broadcast & Blast",
        description: locale.value === "id" ? "Blast massal, broadcast terjadwal, media, status pengiriman, delay." : "Mass blast, scheduled broadcast, media, delivery status, and delay.",
        category: locale.value === "id" ? "Fitur" : "Feature",
        query: "Bagaimana cara broadcast dan blast pesan massal di WaBlastApp?",
        tags: ["broadcast", "blast", "schedule"],
        emoji: "📣",
        actionLabel: locale.value === "id" ? "Tanya AI" : "Ask AI",
        aliases: ["broadcast", "blast", "mass message"]
      },
      {
        id: "feature-contact",
        kind: "feature",
        title: "Chat & Kontak",
        description: locale.value === "id" ? "Multi-device, import Excel, operator takeover, jam operasional." : "Multi-device, Excel import, operator takeover, operating hours.",
        category: locale.value === "id" ? "Fitur" : "Feature",
        query: "Bagaimana manajemen chat dan kontak di WaBlastApp?",
        tags: ["chat", "contacts", "excel"],
        emoji: "👥",
        actionLabel: locale.value === "id" ? "Tanya AI" : "Ask AI",
        aliases: ["chat log", "contacts", "multi device"]
      },
      {
        id: "feature-modules",
        kind: "feature",
        title: "20+ Modul Bisnis",
        description: locale.value === "id" ? "Klinik, CRM, keuangan, F&B, travel, event, dan lainnya." : "Clinic, CRM, finance, F&B, travel, events, and more.",
        category: locale.value === "id" ? "Fitur" : "Feature",
        query: "Ceritakan paket modul bisnis yang tersedia di WaBlastApp",
        tags: ["modules", "business", "industry"],
        emoji: "🏢",
        actionLabel: locale.value === "id" ? "Tanya AI" : "Ask AI",
        aliases: ["module", "business module", "industry"]
      }
    ]);
    const contactItems = computed(() => [
      {
        id: "contact-email",
        kind: "contact",
        title: "support@autobot.co.id",
        description: locale.value === "id" ? "Email support dan sales utama." : "Primary support and sales email.",
        category: locale.value === "id" ? "Kontak" : "Contact",
        externalUrl: "mailto:support@autobot.co.id",
        tags: ["email", "support"],
        emoji: "✉️",
        actionLabel: locale.value === "id" ? "Kirim email" : "Send email",
        aliases: ["email", "support email"]
      },
      {
        id: "contact-whatsapp",
        kind: "contact",
        title: "+62 821-6486-7681",
        description: locale.value === "id" ? "Chat WhatsApp untuk sales dan konsultasi." : "WhatsApp chat for sales and consultation.",
        category: locale.value === "id" ? "Kontak" : "Contact",
        externalUrl: "https://wa.me/6282164867681",
        tags: ["whatsapp", "sales"],
        emoji: "📱",
        actionLabel: locale.value === "id" ? "Buka WhatsApp" : "Open WhatsApp",
        aliases: ["whatsapp", "wa", "phone"]
      }
    ]);
    const apiProducts = computed(
      () => (productsData.value?.data || []).map((product) => ({
        id: `product-${product.slug}`,
        kind: "product",
        title: product.name,
        description: product.tagline || product.description || "",
        category: locale.value === "id" ? "Produk" : "Product",
        route: `/products/${product.slug}`,
        query: `Ceritakan detail tentang produk ${product.name}`,
        tags: [product.category, ...(product.features || []).slice(0, 3)],
        emoji: product.category === "chatbot" ? "🤖" : product.category === "blast" ? "📣" : product.category === "ai_agent" ? "🧠" : "📦",
        actionLabel: locale.value === "id" ? "Lihat detail" : "View details",
        aliases: [product.slug, product.name, product.category, ...product.features || []]
      }))
    );
    const apiPartners = computed(
      () => (partnersData.value?.data || []).slice(0, 12).map((partner) => ({
        id: `partner-${partner.id}`,
        kind: "partner",
        title: partner.name,
        description: partner.description || partner.testimonial || "",
        category: locale.value === "id" ? "Mitra" : "Partner",
        route: "/partners",
        tags: [partner.partnership_type || "client"],
        emoji: "🤝",
        actionLabel: locale.value === "id" ? "Lihat mitra" : "View partners",
        aliases: [partner.name, partner.description || "", partner.testimonial || "", partner.partnership_type || ""]
      }))
    );
    const allItems = computed(() => [
      ...staticItems.value,
      ...resourceItems.value,
      ...featureItems.value,
      ...contactItems.value,
      ...apiProducts.value,
      ...apiPartners.value
    ]);
    const normalizedQuery = computed(() => normalize(query.value));
    const filteredItems = computed(() => {
      const q = normalizedQuery.value;
      const base = allItems.value;
      if (!q) {
        return base.slice(0, 12);
      }
      return base.map((item) => ({ item, score: scoreItem(item, q) })).filter((entry2) => entry2.score > 0).sort((a, b) => b.score - a.score).map((entry2) => entry2.item).slice(0, 20);
    });
    const quickItems = computed(() => allItems.value.slice(0, 8));
    const groupLabel = (kind) => {
      switch (kind) {
        case "product":
          return locale.value === "id" ? "Produk" : "Products";
        case "feature":
          return locale.value === "id" ? "Fitur" : "Features";
        case "resource":
          return locale.value === "id" ? "Dokumentasi" : "Docs";
        case "partner":
          return locale.value === "id" ? "Mitra" : "Partners";
        case "contact":
          return locale.value === "id" ? "Kontak" : "Contact";
        case "chat":
          return locale.value === "id" ? "AI Chat" : "AI Chat";
        default:
          return locale.value === "id" ? "Halaman" : "Pages";
      }
    };
    function normalize(value) {
      return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
    }
    function scoreItem(item, q) {
      const haystack = normalize([
        item.title,
        item.description,
        item.category,
        item.tags.join(" "),
        item.aliases?.join(" ") || "",
        item.route || "",
        item.query || ""
      ].join(" "));
      if (!haystack.includes(q)) return 0;
      let score = 20;
      const title = normalize(item.title);
      const category = normalize(item.category);
      if (title === q) score += 120;
      else if (title.startsWith(q)) score += 100;
      else if (title.includes(q)) score += 70;
      if (category.includes(q)) score += 28;
      if ((item.aliases || []).some((a) => normalize(a).includes(q))) score += 26;
      if ((item.tags || []).some((t) => normalize(t).includes(q))) score += 18;
      if (item.route && normalize(item.route).includes(q)) score += 16;
      return score;
    }
    function highlightText(text) {
      const q = normalizedQuery.value;
      if (!q) return [{ text, match: false }];
      const normalized = normalize(text);
      const idx = normalized.indexOf(q);
      if (idx === -1) return [{ text, match: false }];
      const raw = text;
      const lowered = raw.toLowerCase();
      const start = lowered.indexOf(q);
      if (start === -1) return [{ text, match: false }];
      return [
        { text: raw.slice(0, start), match: false },
        { text: raw.slice(start, start + q.length), match: true },
        { text: raw.slice(start + q.length), match: false }
      ];
    }
    watch(query, () => {
      navigating.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="fixed inset-0 z-[70] flex items-start justify-center px-4 py-6 sm:py-10 overflow-y-auto" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.72)", "backdrop-filter": "blur(18px)" })}"><div class="w-full max-w-[760px] overflow-hidden rounded-[32px] border shadow-2xl" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, rgba(19,19,20,0.98) 0%, rgba(12,12,13,0.98) 100%)", "border-color": "rgba(255,255,255,0.10)", "box-shadow": "0 32px 90px rgba(0,0,0,0.60)" })}"><div class="px-5 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-5"><div class="flex items-center justify-between gap-3 mb-4"><div><p class="text-[11px] font-semibold uppercase tracking-[0.28em]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.28)" })}">${ssrInterpolate(unref(locale) === "id" ? "Pencarian Cepat" : "Quick Search")}</p><h2 class="mt-1 text-[18px] sm:text-[20px] font-semibold tracking-tight text-white">${ssrInterpolate(unref(locale) === "id" ? "Cari semua informasi Autobot" : "Search all Autobot information")}</h2></div><button class="hidden sm:flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "color": "rgba(255,255,255,0.48)", "border": "1px solid rgba(255,255,255,0.08)" })}"> Esc </button></div><div class="flex items-center gap-3 rounded-[22px] px-4 py-3" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.08)", "box-shadow": "inset 0 1px 0 rgba(255,255,255,0.04)" })}"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.38)" })}"><path d="M15.5 15.5L12 12m-3.5 1.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg><input${ssrRenderAttr("value", unref(query))} type="search" class="w-full bg-transparent text-[15px] text-white outline-none placeholder:text-white/25"${ssrRenderAttr("placeholder", unref(locale) === "id" ? "Ketik produk, fitur, halaman, mitra, atau pertanyaan..." : "Type a product, feature, page, partner, or question...")}>`);
        if (unref(query)) {
          _push2(`<button class="rounded-full px-2.5 py-1 text-[12px] font-medium transition-colors" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)", "color": "rgba(255,255,255,0.45)" })}"> Clear </button>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="hidden sm:flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "color": "rgba(255,255,255,0.38)" })}"><span>⌘</span><span>K</span></div></div><div class="mt-4 flex flex-wrap items-center gap-2"><!--[-->`);
        ssrRenderList(unref(quickItems), (item) => {
          _push2(`<button class="rounded-full px-3 py-1.5 text-[12px] transition-colors" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "color": "rgba(255,255,255,0.50)", "border": "1px solid rgba(255,255,255,0.07)" })}">${ssrInterpolate(item.title)}</button>`);
        });
        _push2(`<!--]--></div></div><div class="max-h-[58vh] overflow-y-auto px-3 pb-4 sm:px-4">`);
        if (unref(filteredItems).length) {
          _push2(`<div class="space-y-2"><!--[-->`);
          ssrRenderList(unref(filteredItems), (item) => {
            _push2(`<button style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(255,255,255,0.06)" })}" class="${ssrRenderClass([unref(navigating) ? "opacity-70 pointer-events-none" : "", "group flex w-full items-start gap-3 rounded-[20px] px-4 py-3 text-left transition-all"])}"><div class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[18px]" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.07)" })}">${ssrInterpolate(item.emoji)}</div><div class="min-w-0 flex-1"><div class="flex flex-wrap items-center gap-2"><h3 class="text-[14px] font-semibold tracking-tight text-white"><!--[-->`);
            ssrRenderList(highlightText(item.title), (part, idx) => {
              _push2(`<!--[-->`);
              if (part.match) {
                _push2(`<span style="${ssrRenderStyle({ "color": "#f8fafc", "background": "rgba(255,255,255,0.12)" })}">${ssrInterpolate(part.text)}</span>`);
              } else {
                _push2(`<span>${ssrInterpolate(part.text)}</span>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></h3><span class="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em]" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "color": "rgba(255,255,255,0.36)" })}">${ssrInterpolate(groupLabel(item.kind))}</span></div><p class="mt-1 text-[12.5px] leading-relaxed" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.42)" })}">${ssrInterpolate(item.description)}</p><div class="mt-2 flex flex-wrap items-center gap-2"><!--[-->`);
            ssrRenderList(item.tags.slice(0, 4), (tag) => {
              _push2(`<span class="rounded-full px-2.5 py-1 text-[11px]" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "color": "rgba(255,255,255,0.45)" })}">${ssrInterpolate(tag)}</span>`);
            });
            _push2(`<!--]--></div></div><div class="flex shrink-0 flex-col items-end gap-2 pt-1"><span class="text-[11px] font-medium" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">${ssrInterpolate(item.actionLabel)}</span><svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="transition-transform group-hover:translate-x-0.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></button>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<div class="px-4 py-10 text-center"><div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" })}"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}"><path d="M15.5 15.5L12 12m-3.5 1.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></div><p class="text-[15px] font-medium text-white">${ssrInterpolate(unref(locale) === "id" ? "Tidak ada hasil yang cocok" : "No matching results")}</p><p class="mt-2 text-[12.5px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.40)" })}">${ssrInterpolate(unref(locale) === "id" ? "Coba kata kunci lain, atau pilih salah satu pintasan di atas." : "Try another keyword or pick one of the shortcuts above.")}</p></div>`);
        }
        _push2(`</div><div class="flex flex-col gap-2 border-t px-5 py-3 sm:flex-row sm:items-center sm:justify-between" style="${ssrRenderStyle({ "border-color": "rgba(255,255,255,0.06)", "color": "rgba(255,255,255,0.28)" })}"><p class="text-[11px]">${ssrInterpolate(unref(locale) === "id" ? "Live search: produk, halaman, fitur, mitra, dokumentasi, dan kontak." : "Live search: products, pages, features, partners, docs, and contacts.")}</p><p class="text-[11px]">${ssrInterpolate(unref(locale) === "id" ? "Tekan Esc untuk menutup." : "Press Esc to close.")}</p></div></div></div>`);
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/SearchModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useLocale();
    const { showSearch } = useSearchModal();
    useHead(() => ({
      bodyAttrs: {
        class: "antialiased"
      },
      htmlAttrs: {
        lang: locale.value
      }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_CommonSearchModal = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ "data-theme": "dark" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(showSearch)) {
        _push(ssrRenderComponent(_component_CommonSearchModal, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    const status = Number(_error.statusCode || 500);
    const is404 = status === 404;
    const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-CTUKPAhT.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-BJjk8yzu.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ status: unref(status), statusText: unref(statusText), statusCode: unref(status), statusMessage: unref(statusText), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    function invokeAppErrorHandler(err, target, info) {
      const errorHandler = nuxtApp.vueApp.config.errorHandler;
      if (errorHandler && !errorHandler.__nuxt_default) {
        try {
          errorHandler(err, target, info);
        } catch (handlerError) {
          console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
        }
      }
    }
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        invokeAppErrorHandler(err, target, info);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));

export { useSeoMeta as a, useChatStore as b, useRuntimeConfig as c, useRoute as d, entry_default as default, useRouter as e, useFetch as f, encodeRoutePath as g, useNuxtApp as h, nuxtLinkDefaults as i, useLocale as j, useState as k, createError as l, defineNuxtRouteMiddleware as m, navigateTo as n, useSearchModal as o, resolveRouteObject as r, useHead as u };
//# sourceMappingURL=server.mjs.map
