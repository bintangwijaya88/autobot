import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-IWZl7zz2.mjs';
import { a as useLocale, o as useSearchModal } from './server.mjs';
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
  __name: "page",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useLocale();
    useSearchModal();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "background": "#111111", "min-height": "100vh" } }, _attrs))}><nav class="sticky top-0 z-50 flex items-center justify-between px-6 h-[56px]" style="${ssrRenderStyle({ "background": "rgba(17,17,17,0.85)", "border-bottom": "1px solid rgba(255,255,255,0.06)", "backdrop-filter": "blur(12px)" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2.5 select-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Autobot" class="h-7 w-auto object-contain"${_scopeId}><span class="font-semibold text-[15px] tracking-tight hidden sm:block" style="${ssrRenderStyle({ "color": "#F0F0F0" })}"${_scopeId}>autobotws</span>`);
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
              }, "autobotws")
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
            _push2(`${ssrInterpolate(unref(t)("layout.page.nav.products"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.nav.products")), 1)
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
            _push2(`${ssrInterpolate(unref(t)("layout.page.nav.pricing"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.nav.pricing")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/company",
        class: "px-3 py-1.5 rounded-lg transition-colors",
        style: { "color": "rgba(255,255,255,0.5)" },
        "active-class": "!text-white bg-white/5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.nav.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.nav.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "px-3 py-1.5 rounded-lg transition-colors",
        style: { "color": "rgba(255,255,255,0.5)" },
        "active-class": "!text-white bg-white/5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.nav.contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.nav.contact")), 1)
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
            _push2(`${ssrInterpolate(unref(t)("layout.page.nav.chat"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.nav.chat")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.55)", "border": "1px solid rgba(255,255,255,0.08)" })}"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M15.5 15.5L12 12m-3.5 1.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg><span class="hidden sm:inline">Search</span><span class="hidden md:inline text-[10px] tracking-[0.18em]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.28)" })}">\u2318K</span></button><button class="ml-2 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.55)", "border": "1px solid rgba(255,255,255,0.08)" })}">${ssrInterpolate(unref(locale).toUpperCase())}</button></div></nav><main class="max-w-3xl mx-auto px-6 py-14">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="px-6 pt-10 pb-8 text-[13px] mt-auto" style="${ssrRenderStyle({ "border-top": "1px solid rgba(255,255,255,0.06)", "color": "rgba(255,255,255,0.3)" })}"><div class="max-w-5xl mx-auto"><div class="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8"><div class="col-span-2 sm:col-span-1"><p class="text-white font-semibold mb-1 text-[14px]">autobotws</p><p class="text-xs leading-relaxed mb-3" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.3)" })}">${ssrInterpolate(unref(t)("layout.page.footer.brandDesc"))}</p><p class="text-xs" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}"> Jl. Raya Kebayoran Lama No. 12<br>Jakarta Selatan 12240, Indonesia </p></div><div><p class="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">${ssrInterpolate(unref(t)("layout.page.footer.products"))}</p><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "hover:text-white/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.footer.allProducts"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.footer.allProducts")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "hover:text-white/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.footer.features"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.footer.features")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "hover:text-white/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.footer.pricing"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.footer.pricing")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/order",
        class: "hover:text-white/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.footer.subscribe"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.footer.subscribe")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><p class="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">${ssrInterpolate(unref(t)("layout.page.footer.company"))}</p><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/company",
        class: "hover:text-white/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.footer.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.footer.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/partners",
        class: "hover:text-white/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.footer.partners"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.footer.partners")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "hover:text-white/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.footer.contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.footer.contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="hover:text-white/60 transition-colors">${ssrInterpolate(unref(t)("layout.page.footer.whatsappAdmin"))}</a></li></ul></div><div><p class="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">${ssrInterpolate(unref(t)("layout.page.footer.legal"))}</p><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy-policy",
        class: "hover:text-white/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.footer.privacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.footer.privacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms-of-service",
        class: "hover:text-white/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.footer.terms"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.footer.terms")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/refund-policy",
        class: "hover:text-white/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("layout.page.footer.refund"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("layout.page.footer.refund")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 text-xs" style="${ssrRenderStyle({ "border-top": "1px solid rgba(255,255,255,0.06)", "color": "rgba(255,255,255,0.22)" })}"><p>${ssrInterpolate(unref(t)("layout.page.footer.copyright"))}</p><div class="flex items-center gap-4"><a href="mailto:support@autobot.co.id" class="hover:text-white/40 transition-colors">support@autobot.co.id</a><a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="hover:text-white/40 transition-colors">+62 821-6486-7681</a></div></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page-COY6zeLd.mjs.map
