import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { Sparkles, Check, ChevronRight, BarChart3, Workflow, PlugZap, ArrowRight, Monitor, Smartphone } from 'lucide-vue-next';
import { c as corePlatforms, u as useCases } from './marketing-Cc82Zqmw.mjs';
import { a as useLocale, b as useSeoMeta, u as useHead } from './server.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import 'nanoid';
import '@vue/shared';

const _imports_0 = publicAssetsURL("/images/placeholders/banner.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLocale();
    useSeoMeta({
      title: "autobotws \u2014 Software, AI Automation & Digital Systems",
      description: "autobotws membantu bisnis mengotomatisasi proses kerja, mengelola komunikasi pelanggan, dan membangun sistem digital yang scalable melalui software, AI, dan solusi otomasi praktis.",
      ogTitle: "autobotws \u2014 Software, AI Automation & Digital Systems",
      ogDescription: "WaSigap, KlopDana, SanyClean, Bintanx, dan custom development untuk bisnis Indonesia.",
      ogImage: "https://autobot.co.id/logo.png",
      ogUrl: "https://autobot.co.id",
      twitterCard: "summary",
      twitterImage: "https://autobot.co.id/logo.png"
    });
    useHead({ meta: [{ name: "theme-color", content: "#f8fafc" }] });
    const capabilities = [
      "marketing.home.capabilities.sales",
      "marketing.home.capabilities.workflow",
      "marketing.home.capabilities.integration"
    ];
    const stats = [
      { value: "4", labelKey: "marketing.home.stats.platforms" },
      { value: "600K+", labelKey: "marketing.home.stats.records" },
      { value: "9+", labelKey: "marketing.home.stats.years" }
    ];
    const mediaSlots = [
      { labelKey: "marketing.home.visual.browser", typeKey: "marketing.home.visual.browserType", type: "Browser frame", accent: "blue", className: "sm:col-span-2", icon: Monitor },
      { labelKey: "marketing.home.visual.dashboard", typeKey: "marketing.home.visual.dashboardType", type: "Analytics board", accent: "emerald", className: "", icon: BarChart3 },
      { labelKey: "marketing.home.visual.workflow", typeKey: "marketing.home.visual.workflowType", type: "Automation map", accent: "amber", className: "", icon: Workflow },
      { labelKey: "marketing.home.visual.mobile", typeKey: "marketing.home.visual.mobileType", type: "Phone preview", accent: "cyan", className: "", icon: Smartphone }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page overflow-hidden" }, _attrs))} data-v-e368eeac><section class="tech-pattern relative border-b border-slate-200 bg-white" data-v-e368eeac><div class="pointer-events-none absolute right-6 top-12 hidden h-28 w-28 rounded-full border border-blue-200/80 lg:block orbit-shape" data-v-e368eeac></div><div class="pointer-events-none absolute bottom-14 left-[48%] hidden h-20 w-20 rotate-45 rounded-lg border border-cyan-200/80 bg-cyan-50/40 lg:block float-shape" data-v-e368eeac></div><div class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20" data-v-e368eeac><div class="relative z-10 flex flex-col justify-center" data-v-e368eeac><div class="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700" data-v-e368eeac>`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "h-4 w-4" }, null, _parent));
      _push(` ${ssrInterpolate(unref(t)("marketing.home.badge"))}</div><h1 class="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.heroTitle"))}</h1><p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.heroDesc"))}</p><div class="mt-8 grid gap-3" data-v-e368eeac><!--[-->`);
      ssrRenderList(capabilities, (item) => {
        _push(`<div class="flex items-start gap-3 text-sm font-medium text-slate-700" data-v-e368eeac><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700" data-v-e368eeac>`);
        _push(ssrRenderComponent(unref(Check), { class: "h-3.5 w-3.5" }, null, _parent));
        _push(`</span> ${ssrInterpolate(unref(t)(item))}</div>`);
      });
      _push(`<!--]--></div><div class="mt-10 flex flex-col gap-3 sm:flex-row" data-v-e368eeac>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/platforms",
        class: "inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.home.explorePlatforms"))} `);
            _push2(ssrRenderComponent(unref(ChevronRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.home.explorePlatforms")) + " ", 1),
              createVNode(unref(ChevronRight), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/solutions",
        class: "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.home.viewUseCases"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.home.viewUseCases")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-12 grid grid-cols-3 gap-3" data-v-e368eeac><!--[-->`);
      ssrRenderList(stats, (item) => {
        _push(`<div class="rounded-lg border border-slate-200 bg-slate-50 p-4" data-v-e368eeac><p class="text-2xl font-extrabold text-slate-950" data-v-e368eeac>${ssrInterpolate(item.value)}</p><p class="mt-1 text-xs leading-5 text-slate-500" data-v-e368eeac>${ssrInterpolate(unref(t)(item.labelKey))}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="relative z-10" data-v-e368eeac><div class="absolute -left-6 top-16 hidden h-24 w-24 rounded-full bg-blue-100/70 blur-2xl lg:block pulse-soft" data-v-e368eeac></div><div class="rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm animate-scale-in" data-v-e368eeac><div class="rounded-lg border border-slate-200 bg-white" data-v-e368eeac><div class="flex items-center justify-between border-b border-slate-200 px-4 py-3" data-v-e368eeac><div data-v-e368eeac><p class="text-sm font-bold text-slate-900" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.commandCenter.title"))}</p><p class="text-xs text-slate-500" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.commandCenter.subtitle"))}</p></div><span class="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.commandCenter.live"))}</span></div><div class="grid gap-3 p-4 sm:grid-cols-2" data-v-e368eeac><div class="rounded-lg border border-blue-100 bg-blue-50 p-4" data-v-e368eeac>`);
      _push(ssrRenderComponent(unref(BarChart3), { class: "h-5 w-5 text-blue-700" }, null, _parent));
      _push(`<p class="mt-4 text-2xl font-extrabold text-slate-950" data-v-e368eeac>1,284</p><p class="text-xs text-slate-500" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.commandCenter.conversations"))}</p></div><div class="rounded-lg border border-emerald-100 bg-emerald-50 p-4" data-v-e368eeac>`);
      _push(ssrRenderComponent(unref(Workflow), { class: "h-5 w-5 text-emerald-700" }, null, _parent));
      _push(`<p class="mt-4 text-2xl font-extrabold text-slate-950" data-v-e368eeac>73%</p><p class="text-xs text-slate-500" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.commandCenter.automated"))}</p></div><div class="rounded-lg border border-amber-100 bg-amber-50 p-4" data-v-e368eeac>`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "h-5 w-5 text-amber-700" }, null, _parent));
      _push(`<p class="mt-4 text-2xl font-extrabold text-slate-950" data-v-e368eeac>42%</p><p class="text-xs text-slate-500" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.commandCenter.followup"))}</p></div><div class="rounded-lg border border-cyan-100 bg-cyan-50 p-4" data-v-e368eeac>`);
      _push(ssrRenderComponent(unref(PlugZap), { class: "h-5 w-5 text-cyan-700" }, null, _parent));
      _push(`<p class="mt-4 text-2xl font-extrabold text-slate-950" data-v-e368eeac>18</p><p class="text-xs text-slate-500" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.commandCenter.sources"))}</p></div></div><div class="border-t border-slate-200 p-4" data-v-e368eeac><p class="mb-3 text-sm font-bold text-slate-900" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.commandCenter.pipeline"))}</p><div class="grid gap-2" data-v-e368eeac><div class="flex items-center gap-3 rounded-lg bg-slate-50 p-3" data-v-e368eeac><span class="h-2.5 w-2.5 rounded-full bg-blue-500" data-v-e368eeac></span><p class="flex-1 text-sm font-semibold text-slate-700" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.commandCenter.lead"))}</p><span class="text-xs text-slate-400" data-v-e368eeac>00:02</span></div><div class="flex items-center gap-3 rounded-lg bg-slate-50 p-3" data-v-e368eeac><span class="h-2.5 w-2.5 rounded-full bg-emerald-500" data-v-e368eeac></span><p class="flex-1 text-sm font-semibold text-slate-700" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.commandCenter.qualification"))}</p><span class="text-xs text-slate-400" data-v-e368eeac>00:08</span></div><div class="flex items-center gap-3 rounded-lg bg-slate-50 p-3" data-v-e368eeac><span class="h-2.5 w-2.5 rounded-full bg-amber-500" data-v-e368eeac></span><p class="flex-1 text-sm font-semibold text-slate-700" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.commandCenter.proposal"))}</p><span class="text-xs text-slate-400" data-v-e368eeac>00:15</span></div></div></div><div class="border-t border-slate-200 p-4" data-v-e368eeac><div class="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50" data-v-e368eeac><img${ssrRenderAttr("src", _imports_0)} alt="Connected product command center" class="block h-auto w-full" data-v-e368eeac><div class="absolute right-4 top-1/2 z-10 w-[42%] -translate-y-1/2 rounded-lg bg-white/82 p-4 shadow-sm backdrop-blur-sm" data-v-e368eeac><p class="text-base font-extrabold text-slate-950" data-v-e368eeac>Connected product command center</p><p class="mt-2 text-sm font-semibold leading-6 text-slate-600" data-v-e368eeac> Monitor leads, automations, team handoffs, and customer journeys from one operational dashboard. </p></div></div></div></div></div></div></div></section><section class="relative bg-slate-50 py-12" data-v-e368eeac><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-v-e368eeac><div class="overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-sm" data-v-e368eeac><div class="banner-image media-shine relative aspect-[21/7] min-h-[220px] overflow-hidden rounded-lg border border-blue-100" data-v-e368eeac><div class="relative z-10 flex h-full max-w-xl flex-col justify-center px-6 py-8 sm:px-10" data-v-e368eeac><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700" data-v-e368eeac>autobotws</p><h2 class="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.bannerTitle"))}</h2><p class="mt-4 max-w-md text-sm font-semibold leading-6 text-slate-600 sm:text-base" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.bannerDesc"))}</p></div></div></div></div></section><section class="tech-pattern relative bg-slate-50 py-16" data-v-e368eeac><div class="pointer-events-none absolute left-0 top-20 h-48 w-48 rounded-full bg-blue-100/60 blur-3xl" data-v-e368eeac></div><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-v-e368eeac><div class="relative z-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end" data-v-e368eeac><div class="max-w-2xl" data-v-e368eeac><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.platformSuite.eyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.platformSuite.title"))}</h2></div>`);
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
      _push(`</div><div class="relative z-10 mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-v-e368eeac><!--[-->`);
      ssrRenderList(unref(corePlatforms), (platform) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: platform.slug,
          to: `/platforms/${platform.slug}`,
          class: "rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-5 flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4" data-v-e368eeac${_scopeId}><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-blue-700 shadow-sm" data-v-e368eeac${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(platform.icon), { class: "h-6 w-6" }, null), _parent2, _scopeId);
              _push2(`</div><div class="min-w-0" data-v-e368eeac${_scopeId}><p class="truncate text-sm font-extrabold text-slate-950" data-v-e368eeac${_scopeId}>${ssrInterpolate(platform.name)}</p><p class="mt-1 truncate text-xs font-semibold text-slate-500" data-v-e368eeac${_scopeId}>${ssrInterpolate(platform.domain)}</p></div></div><p class="text-xs font-extrabold uppercase tracking-wider text-blue-700" data-v-e368eeac${_scopeId}>${ssrInterpolate(platform.group)}</p><h3 class="mt-3 font-extrabold text-slate-950" data-v-e368eeac${_scopeId}>${ssrInterpolate(platform.tagline)}</h3><p class="mt-2 text-sm leading-6 text-slate-600" data-v-e368eeac${_scopeId}>${ssrInterpolate(platform.desc)}</p>`);
            } else {
              return [
                createVNode("div", { class: "mb-5 flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4" }, [
                  createVNode("div", { class: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-blue-700 shadow-sm" }, [
                    (openBlock(), createBlock(resolveDynamicComponent(platform.icon), { class: "h-6 w-6" }))
                  ]),
                  createVNode("div", { class: "min-w-0" }, [
                    createVNode("p", { class: "truncate text-sm font-extrabold text-slate-950" }, toDisplayString(platform.name), 1),
                    createVNode("p", { class: "mt-1 truncate text-xs font-semibold text-slate-500" }, toDisplayString(platform.domain), 1)
                  ])
                ]),
                createVNode("p", { class: "text-xs font-extrabold uppercase tracking-wider text-blue-700" }, toDisplayString(platform.group), 1),
                createVNode("h3", { class: "mt-3 font-extrabold text-slate-950" }, toDisplayString(platform.tagline), 1),
                createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600" }, toDisplayString(platform.desc), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="tech-pattern border-y relative border-slate-200 bg-white py-10" data-v-e368eeac><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-v-e368eeac><div class="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" data-v-e368eeac><div class="max-w-3xl" data-v-e368eeac><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.visual.eyebrow"))}</p><h2 class="mt-2 text-3xl font-extrabold tracking-tight text-slate-950" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.visual.title"))}</h2><p class="mt-3 text-sm leading-6 text-slate-600" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.visual.desc"))}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/platforms",
        class: "inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.home.visual.cta"))} `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.home.visual.cta")) + " ", 1),
              createVNode(unref(ArrowRight), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative z-10 mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4" data-v-e368eeac><!--[-->`);
      ssrRenderList(mediaSlots, (slot) => {
        _push(`<div class="${ssrRenderClass([`visual-${slot.accent}`, "product-visual-placeholder media-shine relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-sm"])}" data-v-e368eeac><div class="relative z-10 flex items-start justify-between gap-3" data-v-e368eeac><div data-v-e368eeac><p class="text-sm font-extrabold text-slate-950" data-v-e368eeac>${ssrInterpolate(unref(t)(slot.labelKey))}</p><p class="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-400" data-v-e368eeac>${ssrInterpolate(unref(t)(slot.typeKey))}</p></div><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-blue-700" data-v-e368eeac>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(slot.icon), { class: "h-5 w-5" }, null), _parent);
        _push(`</div></div><div class="relative z-10 mt-4 rounded-lg border border-slate-100 bg-slate-50 p-3" data-v-e368eeac>`);
        if (slot.type === "Browser frame") {
          _push(`<div class="mb-3 flex items-center gap-1.5" data-v-e368eeac><span class="h-2 w-2 rounded-full bg-rose-300" data-v-e368eeac></span><span class="h-2 w-2 rounded-full bg-amber-300" data-v-e368eeac></span><span class="h-2 w-2 rounded-full bg-emerald-300" data-v-e368eeac></span><span class="ml-2 h-4 flex-1 rounded-full bg-white" data-v-e368eeac></span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (slot.type === "Analytics board") {
          _push(`<div class="grid grid-cols-3 gap-2" data-v-e368eeac><span class="h-14 rounded-lg bg-emerald-100" data-v-e368eeac></span><span class="h-14 rounded-lg bg-blue-100" data-v-e368eeac></span><span class="h-14 rounded-lg bg-slate-200" data-v-e368eeac></span></div>`);
        } else if (slot.type === "Automation map") {
          _push(`<div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2" data-v-e368eeac><span class="h-12 rounded-lg bg-amber-100" data-v-e368eeac></span>`);
          _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4 text-amber-500" }, null, _parent));
          _push(`<span class="h-12 rounded-lg bg-blue-100" data-v-e368eeac></span></div>`);
        } else if (slot.type === "Phone preview") {
          _push(`<div class="mx-auto h-24 w-16 rounded-[18px] border-4 border-slate-900 bg-white p-2" data-v-e368eeac><span class="block h-7 rounded-lg bg-cyan-100" data-v-e368eeac></span><span class="mt-2 block h-4 rounded bg-slate-100" data-v-e368eeac></span><span class="mt-2 block h-5 rounded bg-cyan-500" data-v-e368eeac></span></div>`);
        } else {
          _push(`<div class="grid grid-cols-[1.2fr_0.8fr] gap-3" data-v-e368eeac><div data-v-e368eeac><span class="block h-5 w-3/4 rounded bg-slate-900" data-v-e368eeac></span><span class="mt-2 block h-2.5 w-full rounded bg-slate-200" data-v-e368eeac></span><span class="mt-2 block h-2.5 w-2/3 rounded bg-slate-200" data-v-e368eeac></span><span class="mt-3 block h-7 w-20 rounded-lg bg-blue-600" data-v-e368eeac></span></div><span class="h-20 rounded-lg bg-blue-100" data-v-e368eeac></span></div>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="tech-pattern relative border-b border-slate-200 bg-white py-16" data-v-e368eeac><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8" data-v-e368eeac><div data-v-e368eeac><p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.useCases.eyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.useCases.title"))}</h2><p class="mt-4 text-base leading-7 text-slate-600" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.useCases.desc"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/solutions",
        class: "mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.home.useCases.cta"))} `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.home.useCases.cta")) + " ", 1),
              createVNode(unref(ArrowRight), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-4 sm:grid-cols-2" data-v-e368eeac><!--[-->`);
      ssrRenderList(unref(useCases).slice(0, 4), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.slug,
          to: "/solutions",
          class: "rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-200 hover:bg-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), { class: "h-6 w-6 text-slate-800" }, null), _parent2, _scopeId);
              _push2(`<h3 class="mt-4 font-extrabold text-slate-950" data-v-e368eeac${_scopeId}>${ssrInterpolate(item.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600" data-v-e368eeac${_scopeId}>${ssrInterpolate(item.desc)}</p>`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "h-6 w-6 text-slate-800" })),
                createVNode("h3", { class: "mt-4 font-extrabold text-slate-950" }, toDisplayString(item.title), 1),
                createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600" }, toDisplayString(item.desc), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 py-16" data-v-e368eeac><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-v-e368eeac><div class="rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-10" data-v-e368eeac><div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center" data-v-e368eeac><div data-v-e368eeac><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.next.eyebrow"))}</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.next.title"))}</h2><p class="mt-4 max-w-2xl text-base leading-7 text-slate-600" data-v-e368eeac>${ssrInterpolate(unref(t)("marketing.home.next.desc"))}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("marketing.home.next.cta"))} `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("marketing.home.next.cta")) + " ", 1),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e368eeac"]]);

export { index as default };
//# sourceMappingURL=index-3o19D871.mjs.map
