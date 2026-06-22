import { _ as __nuxt_component_0 } from './nuxt-link-C9Zh67vB.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
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
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileOpen = ref(false);
    const navItems = [
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "About", to: "/about" },
      { label: "Startup", to: "/startup" },
      { label: "Contact", to: "/contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 text-slate-950" }, _attrs))}><header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur"><div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", "/logo.png")} alt="WaSigap" class="h-8 w-auto object-contain"${_scopeId}><div class="leading-tight"${_scopeId}><p class="text-sm font-bold tracking-tight text-slate-950"${_scopeId}>WaSigap</p><p class="hidden text-xs text-slate-500 sm:block"${_scopeId}>AI WhatsApp Automation</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: "/logo.png",
                alt: "WaSigap",
                class: "h-8 w-auto object-contain"
              }),
              createVNode("div", { class: "leading-tight" }, [
                createVNode("p", { class: "text-sm font-bold tracking-tight text-slate-950" }, "WaSigap"),
                createVNode("p", { class: "hidden text-xs text-slate-500 sm:block" }, "AI WhatsApp Automation")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden items-center gap-1 lg:flex"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: "rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950",
          "active-class": "!bg-slate-100 !text-slate-950"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="flex items-center gap-2"><button class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 lg:hidden" type="button" aria-label="Open menu">`);
      if (!unref(mobileOpen)) {
        _push(`<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
      } else {
        _push(`<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`);
      }
      _push(`</button><a href="https://wa.autobot.co.id/" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"> Get Started </a></div></div>`);
      if (unref(mobileOpen)) {
        _push(`<div class="border-t border-slate-200 bg-white px-4 pb-4 pt-2 lg:hidden"><nav class="grid gap-1"><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.to,
            to: item.to,
            class: "rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950",
            "active-class": "!bg-emerald-50 !text-emerald-800",
            onClick: ($event) => mobileOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t border-slate-200 bg-white"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><div class="grid gap-10 md:grid-cols-[1.4fr_2fr]"><div><div class="flex items-center gap-2.5"><img${ssrRenderAttr("src", "/logo.png")} alt="WaSigap" class="h-7 w-auto"><p class="font-bold text-slate-950">WaSigap</p></div><p class="mt-3 max-w-xs text-sm leading-6 text-slate-500"> AI WhatsApp automation and CRM platform for Indonesian SMEs, clinics, e-commerce sellers, and service businesses. </p><p class="mt-3 text-xs text-slate-400">A product by AutobotWS \xB7 CV Autobot Wijaya Solution</p><div class="mt-4 grid gap-1.5 text-sm"><a href="mailto:support@autobot.co.id" class="font-medium text-slate-600 hover:text-slate-950">support@autobot.co.id</a><a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="font-medium text-slate-600 hover:text-slate-950">WhatsApp: +62 821-6486-7681</a></div></div><div class="grid gap-6 sm:grid-cols-3"><div><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Product</p><div class="mt-3 grid gap-2 text-sm text-slate-600">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Features`);
          } else {
            return [
              createTextVNode("Features")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing`);
          } else {
            return [
              createTextVNode("Pricing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/startup",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Startup Profile`);
          } else {
            return [
              createTextVNode("Startup Profile")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Company</p><div class="mt-3 grid gap-2 text-sm text-slate-600">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Legal</p><div class="mt-3 grid gap-2 text-sm text-slate-600">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy-policy",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms-of-service",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} WaSigap by AutobotWS \xB7 CV Autobot Wijaya Solution \xB7 All rights reserved \xB7 <a href="https://wa.autobot.co.id" class="hover:text-slate-600">wa.autobot.co.id</a></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-B2kR4X2g.mjs.map
