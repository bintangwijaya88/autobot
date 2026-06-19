import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList } from 'vue/server-renderer';
import { ArrowLeft, ArrowRight, Check } from 'lucide-vue-next';
import { o as getPlatformBySlug, q as wasigapProblems, r as wasigapUseCases, v as wasigapBusinessModel, x as wasigapTraction, f as cloudCreditUses, g as companyProfile } from './marketing-Cc82Zqmw.mjs';
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
  __name: "wasigap",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLocale();
    const platform = getPlatformBySlug("wasigap");
    useSeoMeta({
      title: "WaSigap \u2014 Otomasi WhatsApp Berbasis AI | autobotws",
      description: "WaSigap membantu klinik, toko online, bisnis jasa, dan tim customer service mengelola percakapan WhatsApp melalui AI auto-reply, CRM, broadcast terjadwal, dan follow-up otomatis.",
      ogTitle: "WaSigap \u2014 AI WhatsApp Automation for Indonesian SMEs",
      ogDescription: "WaSigap helps businesses manage WhatsApp conversations with AI auto-reply, CRM, broadcast scheduling, customer follow-up, and workflow automation from one dashboard.",
      ogImage: "https://autobot.co.id/logo.png",
      ogUrl: "https://autobot.co.id/platforms/wasigap"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/platforms",
        class: "inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowLeft), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(t)("marketing.wasigap.back"))}`);
          } else {
            return [
              createVNode(unref(ArrowLeft), { class: "h-4 w-4" }),
              createTextVNode(" " + toDisplayString(unref(t)("marketing.wasigap.back")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center"><div><p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700">${ssrInterpolate(unref(t)("marketing.wasigap.badge"))}</p><h1 class="mt-3 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">WaSigap</h1><p class="mt-4 text-xl font-semibold leading-8 text-slate-700">${ssrInterpolate(unref(t)("marketing.wasigap.heroTitle"))}</p><p class="mt-5 text-lg leading-8 text-slate-600">${ssrInterpolate(unref(t)("marketing.wasigap.heroDesc"))}</p><div class="mt-8 flex flex-wrap gap-3"><a${ssrRenderAttr("href", unref(platform).url)} target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white">${ssrInterpolate(unref(t)("marketing.wasigap.ctaPrimary"))} `);
      _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.wasigap.ctaSecondary"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.wasigap.ctaSecondary")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="rounded-lg border border-slate-200 bg-slate-50 p-4"><div class="flex aspect-[16/10] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center"><div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(platform).icon), { class: "mx-auto h-12 w-12 text-emerald-700" }, null), _parent);
      _push(`<p class="mt-4 text-sm font-bold text-slate-700">${ssrInterpolate(unref(t)("marketing.wasigap.demoDesc"))}</p><p class="mt-1 text-xs text-slate-500">[Screenshot Produk] \xB7 [Demo URL]</p></div></div></div></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-rose-700">${ssrInterpolate(unref(t)("marketing.wasigap.problemEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.wasigap.problemTitle"))}</h2><div class="mt-8 grid gap-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(wasigapProblems), (item) => {
        _push(`<article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><h3 class="font-extrabold text-slate-950">${ssrInterpolate(item.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(item.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700">${ssrInterpolate(unref(t)("marketing.wasigap.solutionEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.wasigap.solutionTitle"))}</h2><p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">${ssrInterpolate(unref(t)("marketing.wasigap.solutionDesc"))}</p></div></section><section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(unref(t)("marketing.wasigap.featuresEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.wasigap.featuresTitle"))}</h2><div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(platform).features, (feature) => {
        _push(`<div class="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">`);
        _push(ssrRenderComponent(unref(Check), { class: "h-4 w-4" }, null, _parent));
        _push(`</span><p class="text-sm font-bold text-slate-800">${ssrInterpolate(feature)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">${ssrInterpolate(unref(t)("marketing.wasigap.useCasesEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.wasigap.useCasesTitle"))}</h2><div class="mt-8 grid gap-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(wasigapUseCases), (item) => {
        _push(`<article class="rounded-lg border border-amber-100 bg-amber-50/40 p-6"><h3 class="font-extrabold text-slate-950">${ssrInterpolate(item.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(item.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="text-sm font-extrabold uppercase tracking-wider text-violet-700">${ssrInterpolate(unref(t)("marketing.wasigap.businessModelEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.wasigap.businessModelTitle"))}</h2><ul class="mt-6 space-y-3"><!--[-->`);
      ssrRenderList(unref(wasigapBusinessModel), (item) => {
        _push(`<li class="flex items-start gap-3 text-sm leading-6 text-slate-600">`);
        _push(ssrRenderComponent(unref(Check), { class: "mt-0.5 h-4 w-4 shrink-0 text-violet-700" }, null, _parent));
        _push(` ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-700 hover:text-violet-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lihat harga WaSigap `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Lihat harga WaSigap "),
              createVNode(unref(ArrowRight), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><p class="text-sm font-extrabold uppercase tracking-wider text-slate-500">${ssrInterpolate(unref(t)("marketing.wasigap.tractionEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.wasigap.tractionTitle"))}</h2><div class="mt-6 grid gap-3 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(wasigapTraction), (item) => {
        _push(`<div class="rounded-lg border border-slate-200 bg-white p-5"><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(item.label)}</p><p class="mt-2 text-lg font-extrabold text-slate-950">${ssrInterpolate(item.value)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(unref(t)("marketing.wasigap.techEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.wasigap.techTitle"))}</h2><p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">${ssrInterpolate(unref(t)("marketing.wasigap.techDesc"))}</p></div></section><section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-indigo-700">${ssrInterpolate(unref(t)("marketing.wasigap.cloudEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.wasigap.cloudTitle"))}</h2><p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">${ssrInterpolate(unref(t)("marketing.wasigap.cloudDesc"))}</p><ul class="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(cloudCreditUses), (item) => {
        _push(`<li class="rounded-lg border border-indigo-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"><div><p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">${ssrInterpolate(unref(t)("marketing.wasigap.aboutEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.wasigap.aboutTitle"))}</h2><p class="mt-4 text-base leading-7 text-slate-600">${ssrInterpolate(unref(t)("marketing.wasigap.aboutDesc"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/company",
        class: "mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lihat profil autobotws `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Lihat profil autobotws "),
              createVNode(unref(ArrowRight), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="rounded-lg border border-slate-200 bg-slate-50 p-6"><p class="text-sm font-extrabold uppercase tracking-wider text-slate-500">${ssrInterpolate(unref(t)("marketing.wasigap.legalEyebrow"))}</p><dl class="mt-4 space-y-3 text-sm"><div class="flex justify-between gap-4 border-b border-slate-200 pb-3"><dt class="text-slate-500">Brand Name</dt><dd class="font-bold text-slate-950">${ssrInterpolate(unref(companyProfile).brandName)}</dd></div><div class="flex justify-between gap-4 border-b border-slate-200 pb-3"><dt class="text-slate-500">Legal Entity</dt><dd class="font-bold text-slate-950">${ssrInterpolate(unref(companyProfile).legalName)}</dd></div><div class="flex justify-between gap-4 border-b border-slate-200 pb-3"><dt class="text-slate-500">Website</dt><dd class="font-bold text-slate-950">${ssrInterpolate(unref(companyProfile).website.replace("https://", ""))}</dd></div><div class="flex justify-between gap-4 border-b border-slate-200 pb-3"><dt class="text-slate-500">Founder</dt><dd class="font-bold text-slate-950">${ssrInterpolate(unref(companyProfile).founder)}</dd></div><div class="flex justify-between gap-4"><dt class="text-slate-500">Legal Document</dt><dd class="font-bold text-slate-950">${ssrInterpolate(unref(companyProfile).legalPlaceholder)}</dd></div></dl></div></div></section><section class="bg-slate-950 py-16 text-white"><div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"><h2 class="text-3xl font-extrabold tracking-tight">${ssrInterpolate(unref(t)("marketing.wasigap.ctaTitle"))}</h2><p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">${ssrInterpolate(unref(t)("marketing.wasigap.ctaDesc"))}</p><div class="mt-8 flex flex-wrap justify-center gap-3"><a${ssrRenderAttr("href", unref(platform).url)} target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950">${ssrInterpolate(unref(t)("marketing.wasigap.ctaPrimary"))} `);
      _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.wasigap.ctaSecondary"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.wasigap.ctaSecondary")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/platforms/wasigap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=wasigap-BRMwf791.mjs.map
