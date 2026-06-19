import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useLocale();
    useSeoMeta({ title: "Profile \u2014 Portal", robots: "noindex" });
    useAuth();
    const profile = ref(null);
    const loading = ref(true);
    const keyCopied = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-2xl mx-auto w-full" }, _attrs))}><h1 class="text-xl font-bold text-white mb-6">${ssrInterpolate(unref(locale) === "id" ? "Profile" : "Profile")}</h1>`);
      if (unref(loading)) {
        _push(`<div class="rounded-2xl border border-white/8 p-6 animate-pulse h-48" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"></div>`);
      } else {
        _push(`<div class="space-y-4"><div class="rounded-2xl border border-white/8 p-6 flex items-center gap-4" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><div class="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold shrink-0" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.20)", "color": "#a5b4fc" })}">${ssrInterpolate((((_a = unref(profile)) == null ? void 0 : _a.name) || "C").charAt(0).toUpperCase())}</div><div><p class="text-lg font-semibold text-white">${ssrInterpolate((_b = unref(profile)) == null ? void 0 : _b.name)}</p><p class="text-sm" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.40)" })}">${ssrInterpolate((_c = unref(profile)) == null ? void 0 : _c.email)}</p><span class="${ssrRenderClass([((_d = unref(profile)) == null ? void 0 : _d.role) === "admin" ? "bg-purple-500/20 text-purple-300" : "bg-indigo-500/20 text-indigo-300", "text-[11px] mt-1 inline-block px-2 py-0.5 rounded-full"])}">${ssrInterpolate(((_e = unref(profile)) == null ? void 0 : _e.role) === "admin" ? unref(locale) === "id" ? "Administrator" : "Administrator" : unref(locale) === "id" ? "Customer" : "Customer")}</span></div></div><div class="rounded-2xl border border-white/8 p-5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><p class="text-xs font-semibold uppercase tracking-widest mb-3" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">Access Key</p><div class="flex items-center gap-3"><code class="flex-1 text-xs font-mono py-2.5 px-3 rounded-lg truncate" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.3)", "color": "rgba(255,255,255,0.6)", "border": "1px solid rgba(255,255,255,0.08)" })}">${ssrInterpolate(((_f = unref(profile)) == null ? void 0 : _f.access_key) || "\u2014")}</code><button class="shrink-0 px-3 py-2.5 rounded-lg text-xs font-medium transition-all" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.15)", "color": "#a5b4fc", "border": "1px solid rgba(99,102,241,0.25)" })}">${ssrInterpolate(unref(keyCopied) ? unref(locale) === "id" ? "\u2713 Tersalin" : "\u2713 Copied" : unref(locale) === "id" ? "Salin" : "Copy")}</button></div><p class="text-[11px] mt-2" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}">${ssrInterpolate(unref(locale) === "id" ? "Gunakan key ini untuk melanjutkan sesi chat. Jangan bagikan ke siapapun." : "Use this key to continue your chat session. Do not share it with anyone.")}</p></div><div class="rounded-2xl border p-5" style="${ssrRenderStyle({ "background": "rgba(239,68,68,0.04)", "border-color": "rgba(239,68,68,0.15)" })}"><p class="text-xs font-semibold uppercase tracking-widest mb-3 text-red-400/60">${ssrInterpolate(unref(locale) === "id" ? "Danger Zone" : "Danger Zone")}</p><button class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors border border-red-500/20"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M7 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3M13 14l3-4-3-4M16 10H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> ${ssrInterpolate(unref(locale) === "id" ? "Sign Out dari Portal" : "Sign out of Portal")}</button></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-Mc9rNeQ9.mjs.map
