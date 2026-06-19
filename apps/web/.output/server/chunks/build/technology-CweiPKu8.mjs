import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderComponent } from 'vue/server-renderer';
import { ArrowRight } from 'lucide-vue-next';
import { j as technologyStack, k as technologyCategories } from './marketing-Cc82Zqmw.mjs';
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
  __name: "technology",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLocale();
    useSeoMeta({
      title: "Teknologi \u2014 autobotws",
      description: "Kapabilitas teknologi autobotws: web, mobile, desktop, cloud, AI, dan integrasi untuk produk digital yang scalable."
    });
    const methods = [
      { step: "01", title: "Map business workflow", desc: "Identify repetitive work, channel friction, data ownership, integration needs, and measurable success criteria." },
      { step: "02", title: "Design solution mix", desc: "Choose the right product (WaSigap, KlopDana, SanyClean, Bintanx) or custom modules based on the business process." },
      { step: "03", title: "Deploy and integrate", desc: "Connect APIs, configure roles, set up dashboards, and prepare SOPs for daily operations." },
      { step: "04", title: "Measure and improve", desc: "Track conversion, response time, manual work reduction, SLA, and operational visibility." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-cyan-700">${ssrInterpolate(unref(t)("marketing.technology.eyebrow"))}</p><div class="mt-3 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">${ssrInterpolate(unref(t)("marketing.technology.title"))}</h1><p class="text-lg leading-8 text-slate-600">${ssrInterpolate(unref(t)("marketing.technology.intro"))}</p></div><p class="mt-6 max-w-3xl rounded-lg border border-cyan-100 bg-cyan-50 px-5 py-4 text-sm leading-6 text-slate-700">${ssrInterpolate(unref(t)("marketing.technology.principle"))}</p></div></section><section class="bg-slate-50 py-16"><div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8"><!--[-->`);
      ssrRenderList(unref(technologyStack), (item) => {
        _push(`<article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "h-8 w-8 text-cyan-700" }, null), _parent);
        _push(`<h2 class="mt-5 text-xl font-extrabold text-slate-950">${ssrInterpolate(item.label)}</h2><p class="mt-3 text-sm leading-6 text-slate-600">${ssrInterpolate(item.desc)}</p></article>`);
      });
      _push(`<!--]--></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-cyan-700">${ssrInterpolate(unref(t)("marketing.technology.categoriesEyebrow"))}</p><div class="mt-6 grid gap-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(technologyCategories), (item) => {
        _push(`<article class="rounded-lg border border-slate-200 bg-slate-50 p-6"><h2 class="font-extrabold text-slate-950">${ssrInterpolate(item.title)}</h2><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(item.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p class="text-sm font-extrabold uppercase tracking-wider text-cyan-700">Implementation Method</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">From workflow design to measurable deployment.</h2><p class="mt-4 text-base leading-7 text-slate-600"> autobotws designs systems from business process first, then chooses the right product and integration layer. </p></div><div class="grid gap-4"><!--[-->`);
      ssrRenderList(methods, (item) => {
        _push(`<div class="flex gap-4 rounded-lg border border-slate-200 bg-white p-5"><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-sm font-extrabold text-white">${ssrInterpolate(item.step)}</span><div><h3 class="font-extrabold text-slate-950">${ssrInterpolate(item.title)}</h3><p class="mt-1 text-sm leading-6 text-slate-600">${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-sm"><h2 class="text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.technology.ctaTitle"))}</h2><p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">${ssrInterpolate(unref(t)("marketing.technology.ctaDesc"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.technology.ctaButton"))} `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.technology.ctaButton")) + " ", 1),
              createVNode(unref(ArrowRight), { class: "h-4 w-4" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/technology.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=technology-CweiPKu8.mjs.map
