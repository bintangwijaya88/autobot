import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { j as useLocale, a as useSeoMeta } from './server.mjs';
import { u as useAuth } from './useAuth-DEGSgRVW.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useLocale();
    useSeoMeta({ title: "Dashboard \u2014 My Portal", robots: "noindex" });
    const { currentUser } = useAuth();
    const stats = ref({ session_count: 0, contact_count: 0, last_session: null });
    const loading = ref(true);
    const userName = computed(() => {
      var _a;
      return ((_a = currentUser.value) == null ? void 0 : _a.name) || "Customer";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-4xl mx-auto w-full" }, _attrs))}><div class="mb-7"><h1 class="text-xl font-bold text-white">${ssrInterpolate(unref(locale) === "id" ? "Selamat datang" : "Welcome")}, ${ssrInterpolate(unref(userName))} \u{1F44B}</h1><p class="text-sm mt-1" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.40)" })}">${ssrInterpolate(unref(locale) === "id" ? "Kelola akun dan riwayat interaksi Anda di sini." : "Manage your account and interaction history here.")}</p></div>`);
      if (unref(loading)) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"><!--[-->`);
        ssrRenderList(3, (i) => {
          _push(`<div class="rounded-2xl border border-white/8 p-5 h-20 animate-pulse" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"><div class="rounded-2xl border border-white/8 p-5" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.08)", "border-color": "rgba(99,102,241,0.20)" })}"><p class="text-xs mb-1.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.45)" })}">${ssrInterpolate(unref(locale) === "id" ? "Total Sesi Chat" : "Total Chat Sessions")}</p><p class="text-3xl font-bold" style="${ssrRenderStyle({ "color": "#a5b4fc" })}">${ssrInterpolate(unref(stats).session_count)}</p></div><div class="rounded-2xl border border-white/8 p-5" style="${ssrRenderStyle({ "background": "rgba(52,211,153,0.07)", "border-color": "rgba(52,211,153,0.20)" })}"><p class="text-xs mb-1.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.45)" })}">${ssrInterpolate(unref(locale) === "id" ? "Form Disubmit" : "Submitted Forms")}</p><p class="text-3xl font-bold" style="${ssrRenderStyle({ "color": "#6ee7b7" })}">${ssrInterpolate(unref(stats).contact_count)}</p></div><div class="rounded-2xl border border-white/8 p-5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"><p class="text-xs mb-1.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.45)" })}">${ssrInterpolate(unref(locale) === "id" ? "Sesi Terakhir" : "Last Session")}</p><p class="text-sm font-medium text-white">${ssrInterpolate(((_a = unref(stats).last_session) == null ? void 0 : _a.created_at) ? new Date(unref(stats).last_session.created_at).toLocaleDateString(unref(locale) === "id" ? "id-ID" : "en-US") : "\u2014")}</p></div></div>`);
      }
      _push(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portal/chats",
        class: "flex items-center gap-3 rounded-xl border border-white/8 px-4 py-4 hover:border-white/20 hover:bg-white/3 transition-all group",
        style: { "background": "rgba(255,255,255,0.02)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.15)" })}"${_scopeId}><svg width="16" height="16" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="#a5b4fc" stroke-width="1.5" stroke-linejoin="round"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm font-medium text-white"${_scopeId}>${ssrInterpolate(unref(t)("portal.chats"))}</p><p class="text-xs" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}"${_scopeId}>${ssrInterpolate(unref(locale) === "id" ? "Riwayat percakapan" : "Conversation history")}</p></div>`);
          } else {
            return [
              createVNode("div", {
                class: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
                style: { "background": "rgba(99,102,241,0.15)" }
              }, [
                (openBlock(), createBlock("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 20 20",
                  fill: "none"
                }, [
                  createVNode("path", {
                    d: "M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z",
                    stroke: "#a5b4fc",
                    "stroke-width": "1.5",
                    "stroke-linejoin": "round"
                  })
                ]))
              ]),
              createVNode("div", null, [
                createVNode("p", { class: "text-sm font-medium text-white" }, toDisplayString(unref(t)("portal.chats")), 1),
                createVNode("p", {
                  class: "text-xs",
                  style: { "color": "rgba(255,255,255,0.35)" }
                }, toDisplayString(unref(locale) === "id" ? "Riwayat percakapan" : "Conversation history"), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portal/contacts",
        class: "flex items-center gap-3 rounded-xl border border-white/8 px-4 py-4 hover:border-white/20 hover:bg-white/3 transition-all",
        style: { "background": "rgba(255,255,255,0.02)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(52,211,153,0.12)" })}"${_scopeId}><svg width="16" height="16" viewBox="0 0 20 20" fill="none"${_scopeId}><rect x="2" y="4" width="16" height="12" rx="2" stroke="#6ee7b7" stroke-width="1.5"${_scopeId}></rect><path d="M2 7l8 5 8-5" stroke="#6ee7b7" stroke-width="1.5"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm font-medium text-white"${_scopeId}>${ssrInterpolate(unref(t)("portal.contacts"))}</p><p class="text-xs" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}"${_scopeId}>${ssrInterpolate(unref(locale) === "id" ? "Order & konsultasi" : "Orders & consultations")}</p></div>`);
          } else {
            return [
              createVNode("div", {
                class: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
                style: { "background": "rgba(52,211,153,0.12)" }
              }, [
                (openBlock(), createBlock("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 20 20",
                  fill: "none"
                }, [
                  createVNode("rect", {
                    x: "2",
                    y: "4",
                    width: "16",
                    height: "12",
                    rx: "2",
                    stroke: "#6ee7b7",
                    "stroke-width": "1.5"
                  }),
                  createVNode("path", {
                    d: "M2 7l8 5 8-5",
                    stroke: "#6ee7b7",
                    "stroke-width": "1.5"
                  })
                ]))
              ]),
              createVNode("div", null, [
                createVNode("p", { class: "text-sm font-medium text-white" }, toDisplayString(unref(t)("portal.contacts")), 1),
                createVNode("p", {
                  class: "text-xs",
                  style: { "color": "rgba(255,255,255,0.35)" }
                }, toDisplayString(unref(locale) === "id" ? "Order & konsultasi" : "Orders & consultations"), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portal/profile",
        class: "flex items-center gap-3 rounded-xl border border-white/8 px-4 py-4 hover:border-white/20 hover:bg-white/3 transition-all",
        style: { "background": "rgba(255,255,255,0.02)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.08)" })}"${_scopeId}><svg width="16" height="16" viewBox="0 0 20 20" fill="none"${_scopeId}><circle cx="10" cy="6" r="3.5" stroke="rgba(255,255,255,0.7)" stroke-width="1.5"${_scopeId}></circle><path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm font-medium text-white"${_scopeId}>${ssrInterpolate(unref(t)("portal.profile"))}</p><p class="text-xs" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}"${_scopeId}>${ssrInterpolate(unref(locale) === "id" ? "Akun & access key" : "Account & access key")}</p></div>`);
          } else {
            return [
              createVNode("div", {
                class: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
                style: { "background": "rgba(255,255,255,0.08)" }
              }, [
                (openBlock(), createBlock("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 20 20",
                  fill: "none"
                }, [
                  createVNode("circle", {
                    cx: "10",
                    cy: "6",
                    r: "3.5",
                    stroke: "rgba(255,255,255,0.7)",
                    "stroke-width": "1.5"
                  }),
                  createVNode("path", {
                    d: "M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6",
                    stroke: "rgba(255,255,255,0.7)",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  })
                ]))
              ]),
              createVNode("div", null, [
                createVNode("p", { class: "text-sm font-medium text-white" }, toDisplayString(unref(t)("portal.profile")), 1),
                createVNode("p", {
                  class: "text-xs",
                  style: { "color": "rgba(255,255,255,0.35)" }
                }, toDisplayString(unref(locale) === "id" ? "Akun & access key" : "Account & access key"), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-9iYAYajd.mjs.map
