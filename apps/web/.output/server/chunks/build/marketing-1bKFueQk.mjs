import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, resolveDynamicComponent, unref, openBlock, createBlock, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-IWZl7zz2.mjs';
import { Package, Wrench, FlaskConical, Layers3, Workflow, Cpu, Building2, Languages, ChevronDown, ArrowRight } from 'lucide-vue-next';
import { a as useLocale } from './server.mjs';
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
  __name: "marketing",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales, t } = useLocale();
    const languageOpen = ref(false);
    const currentLocale = computed(() => locales.find((item) => item.code === locale.value));
    const navItems = [
      { labelKey: "marketing.nav.product", to: "/products", icon: Package },
      { labelKey: "marketing.nav.services", to: "/services", icon: Wrench },
      { labelKey: "marketing.nav.research", to: "/resources", icon: FlaskConical },
      { labelKey: "marketing.nav.platforms", to: "/platforms", icon: Layers3 },
      { labelKey: "marketing.nav.solutions", to: "/solutions", icon: Workflow },
      { labelKey: "marketing.nav.technology", to: "/technology", icon: Cpu },
      { labelKey: "marketing.nav.company", to: "/company", icon: Building2 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 text-slate-950" }, _attrs))}><header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur"><div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="autobotws" class="h-8 w-auto object-contain"${_scopeId}><div class="leading-tight"${_scopeId}><p class="text-sm font-bold tracking-tight text-slate-950"${_scopeId}>autobotws</p><p class="hidden text-xs text-slate-500 sm:block"${_scopeId}>Software &amp; AI Automation</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "autobotws",
                class: "h-8 w-auto object-contain"
              }),
              createVNode("div", { class: "leading-tight" }, [
                createVNode("p", { class: "text-sm font-bold tracking-tight text-slate-950" }, "autobotws"),
                createVNode("p", { class: "hidden text-xs text-slate-500 sm:block" }, "Software & AI Automation")
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
          class: "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950",
          "active-class": "!bg-slate-100 !text-slate-950"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), { class: "h-4 w-4 text-[#28767f]" }, null), _parent2, _scopeId);
              _push2(` ${ssrInterpolate(unref(t)(item.labelKey))}`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "h-4 w-4 text-[#28767f]" })),
                createTextVNode(" " + toDisplayString(unref(t)(item.labelKey)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="flex items-center gap-2"><div class="relative" data-language-menu><button class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50" type="button"${ssrRenderAttr("aria-label", unref(t)("marketing.language.label"))}>`);
      _push(ssrRenderComponent(unref(Languages), { class: "h-4 w-4 text-[#28767f]" }, null, _parent));
      _push(`<span>${ssrInterpolate((_a = unref(currentLocale)) == null ? void 0 : _a.shortLabel)}</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "h-3.5 w-3.5 text-slate-400" }, null, _parent));
      _push(`</button>`);
      if (unref(languageOpen)) {
        _push(`<div class="absolute right-0 mt-2 w-48 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg"><!--[-->`);
        ssrRenderList(unref(locales), (item) => {
          _push(`<button class="${ssrRenderClass([unref(locale) === item.code ? "text-slate-950" : "text-slate-600", "flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium transition hover:bg-slate-50"])}" type="button"><span>${ssrInterpolate(item.label)}</span><span class="text-xs font-bold text-[#28767f]">${ssrInterpolate(item.shortLabel)}</span></button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "hidden rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:inline-flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.nav.blog"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.nav.blog")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.nav.bookConsultation"))} `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.nav.bookConsultation")) + " ", 1),
              createVNode(unref(ArrowRight), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t border-slate-200 bg-white"><div class="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8"><div><p class="font-bold text-slate-950">autobotws</p><p class="mt-2 max-w-sm text-sm leading-6 text-slate-500">${ssrInterpolate(unref(t)("marketing.footer.brandDesc"))}</p><p class="mt-2 text-xs text-slate-400">${ssrInterpolate(unref(t)("marketing.footer.legalLine"))}</p></div><div class="grid gap-6 sm:grid-cols-3"><div><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.footer.company"))}</p><div class="mt-3 grid gap-2 text-sm text-slate-600">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/company",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.footer.companyProfile"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.footer.companyProfile")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.footer.services"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.footer.services")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/partners",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.footer.partners"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.footer.partners")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/technology",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.footer.technology"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.footer.technology")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/solutions",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.footer.useCases"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.footer.useCases")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.footer.platforms"))}</p><div class="mt-3 grid gap-2 text-sm text-slate-600">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/platforms",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.footer.allPlatforms"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.footer.allPlatforms")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/platforms/wasigap",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`WaSigap`);
          } else {
            return [
              createTextVNode("WaSigap")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/platforms/antarpro",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`AntarPro`);
          } else {
            return [
              createTextVNode("AntarPro")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.footer.resources"))}</p><div class="mt-3 grid gap-2 text-sm text-slate-600">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resources",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.footer.research"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.footer.research")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.footer.blog"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.footer.blog")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy-policy",
        class: "hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.footer.privacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.footer.privacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/marketing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=marketing-1bKFueQk.mjs.map
