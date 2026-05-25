import { _ as __nuxt_component_0 } from './nuxt-link-DTwh5LNx.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-IWZl7zz2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "background": "#111111", "min-height": "100vh" } }, _attrs))}><nav class="sticky top-0 z-50 flex items-center justify-between px-6 h-[56px]" style="${ssrRenderStyle({ "background": "rgba(17,17,17,0.85)", "border-bottom": "1px solid rgba(255,255,255,0.06)", "backdrop-filter": "blur(12px)" })}">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center gap-2.5 select-none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Autobot" class="h-7 w-auto object-contain"${_scopeId}><span class="font-semibold text-[15px] tracking-tight hidden sm:block" style="${ssrRenderStyle({ "color": "#F0F0F0" })}"${_scopeId}>AutobotWs</span>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Autobot",
            class: "h-7 w-auto object-contain"
          }),
          createVNode("span", {
            class: "font-semibold text-[15px] tracking-tight hidden sm:block",
            style: { "color": "#F0F0F0" }
          }, "AutobotWs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center gap-1 text-[13.5px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products",
    class: "px-3 py-1.5 rounded-lg transition-colors",
    style: { "color": "rgba(255,255,255,0.5)" },
    "active-class": "!text-white bg-white/5"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Produk`);
      } else {
        return [
          createTextVNode("Produk")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/pricing",
    class: "px-3 py-1.5 rounded-lg transition-colors",
    style: { "color": "rgba(255,255,255,0.5)" },
    "active-class": "!text-white bg-white/5"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Harga`);
      } else {
        return [
          createTextVNode("Harga")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "px-3 py-1.5 rounded-lg transition-colors",
    style: { "color": "rgba(255,255,255,0.5)" },
    "active-class": "!text-white bg-white/5"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tentang`);
      } else {
        return [
          createTextVNode("Tentang")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "ml-2 px-4 py-1.5 rounded-full font-medium transition-all hover:bg-gray-100 active:scale-[0.97]",
    style: { "background": "#F0F0F0", "color": "#111111", "font-size": "13px" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Chat`);
      } else {
        return [
          createTextVNode("Chat")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></nav><main class="max-w-6xl mx-auto px-6 py-12">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/page-wide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pageWide = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { pageWide as default };
//# sourceMappingURL=page-wide-CZv5RF1y.mjs.map
