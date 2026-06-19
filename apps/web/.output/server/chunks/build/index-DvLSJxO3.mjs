import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { ArrowRight } from 'lucide-vue-next';
import { n as platformGroups, p as platforms } from './marketing-Cc82Zqmw.mjs';
import { a as useLocale, b as useSeoMeta, g as useRoute } from './server.mjs';
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
    const { t } = useLocale();
    useSeoMeta({
      title: "Produk \u2014 autobotws",
      description: "Produk autobotws: WaSigap, KlopDana, SanyClean, Bintanx, dan solusi vertikal AntarPro & SuratMedis."
    });
    const route = useRoute();
    const activeGroup = computed(() => String(route.query.group || "all"));
    const filteredGroups = computed(
      () => activeGroup.value === "all" ? platformGroups : platformGroups.filter((group) => group.slug === activeGroup.value)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(unref(t)("marketing.platforms.eyebrow"))}</p><div class="mt-3 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">${ssrInterpolate(unref(t)("marketing.platforms.title"))}</h1><p class="text-lg leading-8 text-slate-600">${ssrInterpolate(unref(t)("marketing.platforms.desc"))}</p></div></div></section><section class="bg-slate-50 py-8"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex gap-2 overflow-x-auto pb-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/platforms",
        class: ["rounded-lg px-4 py-2 text-sm font-bold", unref(activeGroup) === "all" ? "bg-slate-950 text-white" : "border border-slate-300 bg-white text-slate-700"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.platforms.all"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.platforms.all")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(platformGroups), (group) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: group.slug,
          to: `/platforms?group=${group.slug}`,
          class: ["rounded-lg px-4 py-2 text-sm font-bold", unref(activeGroup) === group.slug ? "bg-slate-950 text-white" : "border border-slate-300 bg-white text-slate-700"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(group.eyebrow)}`);
            } else {
              return [
                createTextVNode(toDisplayString(group.eyebrow), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 pb-16"><div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:px-8"><!--[-->`);
      ssrRenderList(unref(filteredGroups), (group) => {
        _push(`<article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><div class="max-w-3xl"><p class="text-xs font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(group.eyebrow)}</p><h2 class="mt-2 text-2xl font-extrabold text-slate-950">${ssrInterpolate(group.title)}</h2><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(group.desc)}</p></div><div class="mt-6 grid gap-4 md:grid-cols-3"><!--[-->`);
        ssrRenderList(group.products, (product) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: product.slug,
            to: `/platforms/${product.slug}`,
            class: "rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(product.icon), { class: "h-7 w-7 text-blue-700" }, null), _parent2, _scopeId);
                _push2(`<h3 class="mt-4 font-extrabold text-slate-950"${_scopeId}>${ssrInterpolate(product.name)}</h3><p class="mt-1 text-sm font-semibold text-slate-500"${_scopeId}>${ssrInterpolate(product.tagline)}</p><p class="mt-3 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(product.desc)}</p><span class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700"${_scopeId}>${ssrInterpolate(unref(t)("marketing.platforms.viewPlatform"))} `);
                _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(`</span>`);
              } else {
                return [
                  (openBlock(), createBlock(resolveDynamicComponent(product.icon), { class: "h-7 w-7 text-blue-700" })),
                  createVNode("h3", { class: "mt-4 font-extrabold text-slate-950" }, toDisplayString(product.name), 1),
                  createVNode("p", { class: "mt-1 text-sm font-semibold text-slate-500" }, toDisplayString(product.tagline), 1),
                  createVNode("p", { class: "mt-3 text-sm leading-6 text-slate-600" }, toDisplayString(product.desc), 1),
                  createVNode("span", { class: "mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700" }, [
                    createTextVNode(toDisplayString(unref(t)("marketing.platforms.viewPlatform")) + " ", 1),
                    createVNode(unref(ArrowRight), { class: "h-4 w-4" })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></article>`);
      });
      _push(`<!--]--></div></section><section class="border-t border-slate-200 bg-white py-14"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="rounded-lg bg-slate-950 p-8 text-white"><p class="text-sm font-extrabold uppercase tracking-wider text-blue-300">${ssrInterpolate(unref(platforms).length)} ${ssrInterpolate(unref(t)("marketing.platforms.customEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold">${ssrInterpolate(unref(t)("marketing.platforms.customTitle"))}</h2><p class="mt-3 max-w-2xl text-sm leading-6 text-slate-300">${ssrInterpolate(unref(t)("marketing.platforms.customDesc"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.platforms.customCta"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.platforms.customCta")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/platforms/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DvLSJxO3.mjs.map
