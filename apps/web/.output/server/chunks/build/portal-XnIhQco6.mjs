import { defineComponent, mergeProps, computed, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { _ as _imports_0 } from './virtual_public-IWZl7zz2.mjs';
import { g as useRoute, a as useLocale } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PortalSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { currentUser } = useAuth();
    const { t } = useLocale();
    const userName = computed(() => {
      var _a, _b;
      return (_b = (_a = currentUser.value) == null ? void 0 : _a.name) != null ? _b : "Customer";
    });
    const navItems = [
      {
        to: "/portal",
        label: "Dashboard",
        icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>`
      },
      {
        to: "/portal/chats",
        label: "My Chats",
        icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`
      },
      {
        to: "/portal/contacts",
        label: "My Contacts",
        icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 7l8 5 8-5" stroke="currentColor" stroke-width="1.5"/></svg>`
      },
      {
        to: "/portal/profile",
        label: "Profile",
        icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
      }
    ];
    function isActive(to) {
      if (to === "/portal") return route.path === "/portal";
      return route.path.startsWith(to);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: "flex flex-col w-56 shrink-0 h-full border-r",
        style: { "background": "#131318", "border-color": "rgba(255,255,255,0.07)" }
      }, _attrs))}><div class="px-4 py-4 border-b flex items-center gap-2.5" style="${ssrRenderStyle({ "border-color": "rgba(255,255,255,0.07)" })}"><img${ssrRenderAttr("src", _imports_0)} alt="Autobot" class="h-7 w-7 rounded-lg object-contain"><div><p class="font-semibold text-sm text-white leading-tight">My Portal</p><p class="text-[10px] truncate max-w-[120px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">${ssrInterpolate(unref(userName))}</p></div></div><nav class="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: ["flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors w-full", isActive(item.to) ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300 hover:bg-white/5"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a;
            if (_push2) {
              _push2(`<span class="w-4 h-4 shrink-0 flex items-center justify-center opacity-70"${_scopeId}>${(_a = item.icon) != null ? _a : ""}</span><span class="font-medium"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: "w-4 h-4 shrink-0 flex items-center justify-center opacity-70",
                  innerHTML: item.icon
                }, null, 8, ["innerHTML"]),
                createVNode("span", { class: "font-medium" }, toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="px-2 py-3 border-t space-y-1" style="${ssrRenderStyle({ "border-color": "rgba(255,255,255,0.07)" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0 opacity-70"${_scopeId}><path d="M10 3L3 10M3 10L10 17M3 10h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg><span class="font-medium"${_scopeId}>${ssrInterpolate(unref(t)("portal.backToChat"))}</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 20 20",
                fill: "none",
                class: "shrink-0 opacity-70"
              }, [
                createVNode("path", {
                  d: "M10 3L3 10M3 10L10 17M3 10h14",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ])),
              createVNode("span", { class: "font-medium" }, toDisplayString(unref(t)("portal.backToChat")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-red-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"><svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0"><path d="M7 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3M13 14l3-4-3-4M16 10H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="font-medium">${ssrInterpolate(unref(t)("portal.signOut"))}</span></button></div></aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portal/PortalSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "portal",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex h-screen overflow-hidden",
        style: { "background": "#0d0d12" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="flex-1 flex flex-col min-h-0 overflow-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/portal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portal-XnIhQco6.mjs.map
