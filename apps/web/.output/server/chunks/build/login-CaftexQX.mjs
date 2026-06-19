import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-IWZl7zz2.mjs';
import { a as useLocale, b as useSeoMeta } from './server.mjs';
import { u as useAuth } from './useAuth-BrvguvVt.mjs';
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
import 'nanoid';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useLocale();
    useSeoMeta({ title: "Sign In \u2014 My Portal", robots: "noindex" });
    useAuth();
    const mode = ref("login");
    const form = reactive({ name: "", email: "", password: "" });
    const error = ref("");
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen flex items-center justify-center px-4",
        style: { "background": "#0d0d12" }
      }, _attrs))}><div class="w-full max-w-[380px]"><div class="flex flex-col items-center mb-8"><img${ssrRenderAttr("src", _imports_0)} alt="Autobot" class="h-12 w-auto object-contain mb-4"><h1 class="text-[22px] font-bold text-white tracking-tight">Customer Portal</h1><p class="text-sm mt-1" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">${ssrInterpolate(unref(locale) === "id" ? "Lihat riwayat chat dan order Anda" : "View your chat and order history")}</p></div><div class="rounded-2xl p-7" style="${ssrRenderStyle({ "background": "#181820", "border": "1px solid rgba(255,255,255,0.08)" })}"><div class="grid grid-cols-2 gap-2 p-1 rounded-xl mb-5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.08)" })}"><button class="${ssrRenderClass([unref(mode) === "login" ? "bg-white text-black" : "text-white/60 hover:text-white", "h-9 rounded-lg text-sm font-medium transition-all"])}">${ssrInterpolate(unref(locale) === "id" ? "Masuk" : "Login")}</button><button class="${ssrRenderClass([unref(mode) === "register" ? "bg-white text-black" : "text-white/60 hover:text-white", "h-9 rounded-lg text-sm font-medium transition-all"])}">${ssrInterpolate(unref(locale) === "id" ? "Daftar" : "Register")}</button></div><form class="space-y-3">`);
      if (unref(mode) === "register") {
        _push(`<input${ssrRenderAttr("value", unref(form).name)} type="text"${ssrRenderAttr("placeholder", unref(locale) === "id" ? "Nama lengkap" : "Full name")} required class="w-full h-11 rounded-xl bg-white/5 border border-white/10 px-3.5 text-sm text-white outline-none focus:border-white/25 transition-colors">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="Email" required class="w-full h-11 rounded-xl bg-white/5 border border-white/10 px-3.5 text-sm text-white outline-none focus:border-white/25 transition-colors"><input${ssrRenderAttr("value", unref(form).password)} type="password" placeholder="Password" required class="w-full h-11 rounded-xl bg-white/5 border border-white/10 px-3.5 text-sm text-white outline-none focus:border-white/25 transition-colors">`);
      if (unref(error)) {
        _push(`<div class="flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm" style="${ssrRenderStyle({ "background": "rgba(239,68,68,0.10)", "border": "1px solid rgba(239,68,68,0.20)", "color": "#f87171" })}"><svg width="13" height="13" viewBox="0 0 20 20" fill="none" class="shrink-0"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"></circle><path d="M10 6v4M10 13v.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg> ${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full h-11 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center mt-1" style="${ssrRenderStyle({ "background": "#6366f1", "color": "#fff" })}">`);
      if (unref(loading)) {
        _push(`<span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>`);
      } else {
        _push(`<span>${ssrInterpolate(unref(mode) === "register" ? unref(locale) === "id" ? "Buat Akun" : "Create Account" : unref(locale) === "id" ? "Masuk" : "Login")}</span>`);
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
            _push2(` \u2190 ${ssrInterpolate(unref(locale) === "id" ? "Kembali ke Chat" : "Back to Chat")}`);
          } else {
            return [
              createTextVNode(" \u2190 " + toDisplayString(unref(locale) === "id" ? "Kembali ke Chat" : "Back to Chat"), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-CaftexQX.mjs.map
