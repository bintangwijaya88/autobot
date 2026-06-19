import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { ArrowRight } from 'lucide-vue-next';
import { b as businessProblems, a as businessSolutions, m as missionItems, d as companyAdvantages, e as advantagePoints, c as corePlatforms, i as industries, w as workflowSteps, f as cloudCreditUses, t as teamMembers, g as companyProfile } from './marketing-Cc82Zqmw.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import 'nanoid';
import '@vue/shared';

const _imports_0 = publicAssetsURL("/team-aws.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "company",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLocale();
    useSeoMeta({
      title: "Tentang autobotws \u2014 Company Profile",
      description: "Profil autobotws: brand teknologi Indonesia untuk software development, AI automation, otomasi WhatsApp, dan integrasi sistem. Produk: WaSigap, KlopDana, SanyClean, Bintanx.",
      ogTitle: "Tentang autobotws",
      ogDescription: "autobotws membantu bisnis mengotomatisasi proses kerja, mengelola komunikasi pelanggan, dan membangun sistem digital yang scalable.",
      ogImage: "https://autobot.co.id/logo.png",
      ogUrl: "https://autobot.co.id/company"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-center"><div><p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">${ssrInterpolate(unref(t)("marketing.company.eyebrow"))}</p><h1 class="mt-3 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">${ssrInterpolate(unref(t)("marketing.company.title"))}</h1><p class="mt-4 text-xl font-semibold leading-8 text-slate-700">${ssrInterpolate(unref(t)("marketing.company.subtitle"))}</p><p class="mt-5 text-lg leading-8 text-slate-600">${ssrInterpolate(unref(t)("marketing.company.about"))}</p><p class="mt-4 text-base leading-7 text-slate-600">${ssrInterpolate(unref(t)("marketing.company.aboutExtended"))}</p><div class="mt-8 flex flex-wrap gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.company.ctaButton"))} `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.company.ctaButton")) + " ", 1),
              createVNode(unref(ArrowRight), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/platforms",
        class: "inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.home.explorePlatforms"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.home.explorePlatforms")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="rounded-lg border border-slate-200 bg-slate-50 p-4"><img${ssrRenderAttr("src", _imports_0)} alt="Tim autobotws" class="aspect-[16/10] w-full rounded-lg object-cover"></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-rose-700">${ssrInterpolate(unref(t)("marketing.company.problemEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.company.problemTitle"))}</h2><div class="mt-8 grid gap-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(businessProblems), (item) => {
        _push(`<article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><h3 class="font-extrabold text-slate-950">${ssrInterpolate(item.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(item.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700">${ssrInterpolate(unref(t)("marketing.company.solutionEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.company.solutionTitle"))}</h2><div class="mt-8 grid gap-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(businessSolutions), (item) => {
        _push(`<article class="rounded-lg border border-emerald-100 bg-emerald-50/50 p-6"><h3 class="font-extrabold text-slate-950">${ssrInterpolate(item.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(item.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8"><article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:col-span-1"><p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">${ssrInterpolate(unref(t)("marketing.company.visionEyebrow"))}</p><p class="mt-4 text-base leading-7 text-slate-600">${ssrInterpolate(unref(t)("marketing.company.vision"))}</p></article><article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:col-span-2"><p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">${ssrInterpolate(unref(t)("marketing.company.missionEyebrow"))}</p><ol class="mt-4 space-y-3"><!--[-->`);
      ssrRenderList(unref(missionItems), (item, index) => {
        _push(`<li class="flex gap-3 text-sm leading-6 text-slate-600"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-extrabold text-amber-800">${ssrInterpolate(index + 1)}</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ol></article></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">${ssrInterpolate(unref(t)("marketing.company.advantagesEyebrow"))}</p><p class="mt-3 max-w-3xl text-base leading-7 text-slate-600">${ssrInterpolate(unref(t)("marketing.company.advantagesDesc"))}</p><div class="mt-6 grid gap-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(companyAdvantages), (item) => {
        _push(`<article class="rounded-lg border border-slate-200 bg-slate-50 p-6"><h2 class="font-extrabold text-slate-950">${ssrInterpolate(item.title)}</h2><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(item.desc)}</p></article>`);
      });
      _push(`<!--]--></div><ul class="mt-6 grid gap-2 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(advantagePoints), (point) => {
        _push(`<li class="flex items-start gap-2 text-sm text-slate-700"><span class="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500"></span> ${ssrInterpolate(point)}</li>`);
      });
      _push(`<!--]--></ul></div></section><section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(unref(t)("marketing.company.productsEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">WaSigap, KlopDana, SanyClean, Bintanx</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/platforms",
        class: "inline-flex items-center gap-2 text-sm font-bold text-blue-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.home.platformSuite.directory"))} `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.home.platformSuite.directory")) + " ", 1),
              createVNode(unref(ArrowRight), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-8 grid gap-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(corePlatforms), (platform) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: platform.slug,
          to: `/platforms/${platform.slug}`,
          class: "rounded-lg border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(platform.icon), { class: "h-7 w-7 text-blue-700" }, null), _parent2, _scopeId);
              _push2(`<h3 class="mt-4 font-extrabold text-slate-950"${_scopeId}>${ssrInterpolate(platform.name)}</h3><p class="mt-2 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(platform.desc)}</p>`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(platform.icon), { class: "h-7 w-7 text-blue-700" })),
                createVNode("h3", { class: "mt-4 font-extrabold text-slate-950" }, toDisplayString(platform.name), 1),
                createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600" }, toDisplayString(platform.desc), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">${ssrInterpolate(unref(t)("marketing.company.industriesEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Industri yang kami layani</h2><p class="mt-4 text-base leading-7 text-slate-600">${ssrInterpolate(unref(t)("marketing.company.industriesDesc"))}</p></div><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(unref(industries), (industry) => {
        _push(`<span class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">${ssrInterpolate(industry)}</span>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p class="text-sm font-extrabold uppercase tracking-wider text-cyan-700">${ssrInterpolate(unref(t)("marketing.company.workflowEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.company.workflowTitle"))}</h2><p class="mt-4 text-base leading-7 text-slate-600">${ssrInterpolate(unref(t)("marketing.company.workflowDesc"))}</p></div><div class="grid gap-3"><!--[-->`);
      ssrRenderList(unref(workflowSteps), (item) => {
        _push(`<div class="flex gap-4 rounded-lg border border-slate-200 bg-white p-5"><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-sm font-extrabold text-white">${ssrInterpolate(item.step)}</span><div><h3 class="font-extrabold text-slate-950">${ssrInterpolate(item.title)}</h3><p class="mt-1 text-sm leading-6 text-slate-600">${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-violet-700">${ssrInterpolate(unref(t)("marketing.company.cloudEyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">${ssrInterpolate(unref(t)("marketing.company.cloudTitle"))}</h2><p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">${ssrInterpolate(unref(t)("marketing.company.cloudDesc"))}</p><ul class="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(cloudCreditUses), (item) => {
        _push(`<li class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></section><section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">${ssrInterpolate(unref(t)("marketing.company.teamEyebrow"))}</p><div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4"><!--[-->`);
      ssrRenderList(unref(teamMembers), (member) => {
        _push(`<div class="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm"><div class="mx-auto h-16 w-16 overflow-hidden rounded-full"><img${ssrRenderAttr("src", member.img)}${ssrRenderAttr("alt", member.name)} class="h-full w-full object-cover"></div><p class="mt-3 text-sm font-extrabold text-slate-950">${ssrInterpolate(member.name)}</p><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(member.role)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">${ssrInterpolate(unref(t)("marketing.company.legalEyebrow"))}</p><div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><div class="rounded-lg border border-slate-200 bg-slate-50 p-5"><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.company.legalBrand"))}</p><p class="mt-2 text-sm font-bold text-slate-950">${ssrInterpolate(unref(companyProfile).brandName)}</p></div><div class="rounded-lg border border-slate-200 bg-slate-50 p-5"><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.company.legalName"))}</p><p class="mt-2 text-sm font-bold text-slate-950">${ssrInterpolate(unref(companyProfile).legalName)}</p></div><div class="rounded-lg border border-slate-200 bg-slate-50 p-5"><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.company.legalWebsite"))}</p><p class="mt-2 text-sm font-bold text-slate-950">autobot.co.id</p></div><div class="rounded-lg border border-slate-200 bg-slate-50 p-5"><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.company.legalFounder"))}</p><p class="mt-2 text-sm font-bold text-slate-950">${ssrInterpolate(unref(companyProfile).founder)}</p></div><div class="rounded-lg border border-slate-200 bg-slate-50 p-5"><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.company.legalFounded"))}</p><p class="mt-2 text-sm font-bold text-slate-950">${ssrInterpolate(unref(companyProfile).foundedYear)}</p></div><div class="rounded-lg border border-slate-200 bg-slate-50 p-5"><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.company.legalNib"))}</p><p class="mt-2 text-sm font-bold text-slate-950">${ssrInterpolate(unref(companyProfile).legalPlaceholder)}</p></div><div class="rounded-lg border border-slate-200 bg-slate-50 p-5 sm:col-span-2 lg:col-span-3"><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.company.legalField"))}</p><p class="mt-2 text-sm font-bold text-slate-950">${ssrInterpolate(unref(companyProfile).businessField)}</p></div><div class="rounded-lg border border-slate-200 bg-slate-50 p-5 sm:col-span-2 lg:col-span-3"><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.company.legalAddress"))}</p><p class="mt-2 text-sm leading-6 text-slate-700">${ssrInterpolate(unref(companyProfile).address)}, Indonesia</p></div></div></div></section><section class="bg-slate-950 py-16 text-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 class="text-3xl font-extrabold tracking-tight">${ssrInterpolate(unref(t)("marketing.company.ctaTitle"))}</h2><p class="mt-4 max-w-2xl text-sm leading-6 text-slate-300">${ssrInterpolate(unref(t)("marketing.company.ctaDesc"))}</p></div><div class="flex flex-col gap-3 sm:flex-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.company.ctaButton"))} `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.company.ctaButton")) + " ", 1),
              createVNode(unref(ArrowRight), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/partners",
        class: "inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.company.viewPartners"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.company.viewPartners")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=company-D8FH_hpe.mjs.map
