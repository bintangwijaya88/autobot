import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { CheckCircle2, ArrowRight } from 'lucide-vue-next';
import { n as platformGroups } from './marketing-Cc82Zqmw.mjs';
import { a as useLocale, b as useSeoMeta } from './server.mjs';
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
      description: "Produk autobotws: WaSigap, KlopDana, SanyClean, Bintanx, dan solusi vertikal untuk kebutuhan industri tertentu.",
      ogTitle: "Produk \u2014 autobotws",
      ogDescription: "Empat produk inti dan solusi vertikal untuk otomasi WhatsApp, rekonsiliasi bank, layanan kebersihan, dan sistem akademik.",
      ogImage: "https://autobot.co.id/logo.png",
      ogUrl: "https://autobot.co.id/products"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(unref(t)("marketing.products.eyebrow"))}</p><div class="mt-3 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"><h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">${ssrInterpolate(unref(t)("marketing.products.title"))}</h1><p class="text-lg leading-8 text-slate-600">${ssrInterpolate(unref(t)("marketing.products.desc"))}</p></div></div></section><!--[-->`);
      ssrRenderList(unref(platformGroups), (group) => {
        _push(`<section class="${ssrRenderClass([group.slug === "core" ? "bg-slate-50" : "bg-white", "border-b border-slate-200 py-16"])}"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-xs font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(group.slug === "core" ? unref(t)("marketing.products.coreLabel") : unref(t)("marketing.products.verticalLabel"))}</p><h2 class="mt-2 text-2xl font-extrabold text-slate-950">${ssrInterpolate(group.title)}</h2><p class="mt-2 max-w-3xl text-sm leading-6 text-slate-600">${ssrInterpolate(group.desc)}</p><div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-2"><!--[-->`);
        ssrRenderList(group.products, (product) => {
          _push(`<article class="flex min-h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"><div class="flex items-start justify-between gap-4"><div class="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(product.icon), { class: "h-6 w-6" }, null), _parent);
          _push(`</div><span class="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-500">${ssrInterpolate(product.domain)}</span></div><h3 class="mt-5 text-xl font-extrabold text-slate-950">${ssrInterpolate(product.name)}</h3><p class="mt-2 text-sm font-semibold text-slate-500">${ssrInterpolate(product.tagline)}</p><p class="mt-4 flex-1 text-sm leading-7 text-slate-600">${ssrInterpolate(product.desc)}</p><div class="mt-5 grid gap-2"><!--[-->`);
          ssrRenderList(product.features.slice(0, 3), (feature) => {
            _push(`<div class="flex items-start gap-2 text-sm font-medium text-slate-700">`);
            _push(ssrRenderComponent(unref(CheckCircle2), { class: "mt-0.5 h-4 w-4 shrink-0 text-emerald-600" }, null, _parent));
            _push(` ${ssrInterpolate(feature)}</div>`);
          });
          _push(`<!--]--></div><div class="mt-6 flex flex-wrap gap-2">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/platforms/${product.slug}`,
            class: "inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("marketing.products.detail"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("marketing.products.detail")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<a${ssrRenderAttr("href", product.url)} target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800">${ssrInterpolate(unref(t)("marketing.products.visit"))} `);
          _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent));
          _push(`</a></div></article>`);
        });
        _push(`<!--]--></div></div></section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-aOFZXat1.mjs.map
