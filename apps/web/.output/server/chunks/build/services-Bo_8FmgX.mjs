import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderComponent } from 'vue/server-renderer';
import { ArrowRight } from 'lucide-vue-next';
import { s as services } from './marketing-Cc82Zqmw.mjs';
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
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLocale();
    useSeoMeta({
      title: "Layanan \u2014 autobotws",
      description: "Layanan autobotws: custom software development, web & mobile app, desktop agent, AI chatbot, WhatsApp automation, CRM, system integration, cloud deployment, dan maintenance.",
      ogTitle: "Layanan \u2014 autobotws",
      ogDescription: "Pengembangan software dan otomasi bisnis yang disesuaikan dengan kebutuhan operasional Anda.",
      ogImage: "https://autobot.co.id/logo.png",
      ogUrl: "https://autobot.co.id/services"
    });
    const pricingModels = [
      { key: "fixed" },
      { key: "tnm" },
      { key: "retainer" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(unref(t)("marketing.services.eyebrow"))}</p><div class="mt-3 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"><h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">${ssrInterpolate(unref(t)("marketing.services.title"))}</h1><p class="text-lg leading-8 text-slate-600">${ssrInterpolate(unref(t)("marketing.services.desc"))}</p></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8"><!--[-->`);
      ssrRenderList(unref(services), (service) => {
        _push(`<article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), { class: "h-8 w-8 text-blue-700" }, null), _parent);
        _push(`<h2 class="mt-5 text-xl font-extrabold text-slate-950">${ssrInterpolate(service.title)}</h2><p class="mt-3 text-sm leading-6 text-slate-600">${ssrInterpolate(service.desc)}</p></article>`);
      });
      _push(`<!--]--></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(unref(t)("marketing.services.modelsTitle"))}</p><div class="mt-6 grid gap-4 md:grid-cols-3"><!--[-->`);
      ssrRenderList(pricingModels, (model) => {
        _push(`<div class="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center"><h3 class="font-extrabold text-slate-950">${ssrInterpolate(unref(t)(`marketing.services.models.${model.key}.name`))}</h3><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(unref(t)(`marketing.services.models.${model.key}.desc`))}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-10"><div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 class="text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.company.ctaTitle"))}</h2><p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">${ssrInterpolate(unref(t)("marketing.company.ctaDesc"))}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.services.cta"))} `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.services.cta")) + " ", 1),
              createVNode(unref(ArrowRight), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-Bo_8FmgX.mjs.map
