import { _ as __nuxt_component_0 } from './nuxt-link-DTwh5LNx.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderDynamicModel, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-IWZl7zz2.mjs';
import { a as useSeoMeta } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Admin Login \u2014 Autobot", robots: "noindex" });
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const loading = ref(false);
    const showPass = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen flex items-center justify-center px-4",
        style: { "background": "#0e0e0e" }
      }, _attrs))}><div class="w-full max-w-[380px]"><div class="flex flex-col items-center mb-8"><img${ssrRenderAttr("src", _imports_0)} alt="Autobot" class="h-12 w-auto object-contain mb-4"><h1 class="text-[22px] font-bold text-white tracking-tight">Admin Dashboard</h1><p class="text-sm mt-1" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">Autobot Wijaya Solution</p></div><div class="rounded-2xl p-7" style="${ssrRenderStyle({ "background": "#181818", "border": "1px solid rgba(255,255,255,0.08)" })}"><form class="space-y-4"><div><label class="block text-xs font-medium mb-1.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.45)" })}">Email</label><input${ssrRenderAttr("value", unref(email))} type="email" required autocomplete="email" placeholder="admin@autobot.co.id" class="w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.09)" })}"></div><div><label class="block text-xs font-medium mb-1.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.45)" })}">Password</label><div class="relative"><input${ssrRenderDynamicModel(unref(showPass) ? "text" : "password", unref(password), null)}${ssrRenderAttr("type", unref(showPass) ? "text" : "password")} required autocomplete="current-password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" class="w-full rounded-xl px-4 py-2.5 pr-11 text-sm text-white outline-none transition-colors" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.09)" })}"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 transition-colors" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.3)" })}">`);
      if (!unref(showPass)) {
        _push(`<svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6Z" stroke="currentColor" stroke-width="1.5"></path><circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"></circle></svg>`);
      } else {
        _push(`<svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M3 3l14 14M8.5 8.6A2.5 2.5 0 0 0 12.4 12.5M6.2 5.2C4.3 6.4 2.9 8.3 2 10c1.5 3.1 4.5 6 8 6 1.5 0 3-.5 4.2-1.2M10 4c.7 0 1.5.1 2.2.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
      }
      _push(`</button></div></div>`);
      if (unref(error)) {
        _push(`<div class="flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm" style="${ssrRenderStyle({ "background": "rgba(239,68,68,0.10)", "border": "1px solid rgba(239,68,68,0.20)", "color": "#f87171" })}"><svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"></circle><path d="M10 6v4M10 13v.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg> ${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full h-10 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 mt-1" style="${ssrRenderStyle({ "background": "#F0F0F0", "color": "#111" })}">`);
      if (unref(loading)) {
        _push(`<span class="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>`);
      } else {
        _push(`<span>Masuk</span>`);
      }
      _push(`</button></form></div><div class="mt-5 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-xs transition-colors",
        style: { "color": "rgba(255,255,255,0.25)" },
        onMouseover: (e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)",
        onMouseleave: (e) => e.currentTarget.style.color = "rgba(255,255,255,0.25)"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u2190 Kembali ke Chat `);
          } else {
            return [
              createTextVNode(" \u2190 Kembali ke Chat ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-7j5r6Dpr.mjs.map
