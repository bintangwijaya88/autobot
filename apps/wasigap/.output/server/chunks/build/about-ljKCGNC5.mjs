import { _ as __nuxt_component_0 } from './nuxt-link-C9Zh67vB.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta, a as useHead } from './v3-ByX-T_yd.mjs';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "About WaSigap \u2014 AI WhatsApp Automation by AutobotWS",
      description: "WaSigap is built by AutobotWS under CV Autobot Wijaya Solution. We help Indonesian SMEs, clinics, e-commerce sellers, and service businesses automate WhatsApp with AI.",
      ogTitle: "About WaSigap \u2014 AI WhatsApp Automation by AutobotWS",
      ogDescription: "WaSigap is an AI WhatsApp automation and CRM platform built by AutobotWS (CV Autobot Wijaya Solution) for Indonesian businesses.",
      ogUrl: "https://wa.autobot.co.id/about",
      ogImage: "https://wa.autobot.co.id/logo.png"
    });
    useHead({
      link: [{ rel: "canonical", href: "https://wa.autobot.co.id/about" }]
    });
    const missionPoints = [
      "Help businesses reduce repetitive WhatsApp customer service work through practical AI automation.",
      "Make AI-powered WhatsApp workflows accessible and affordable for Indonesian SMEs and service businesses.",
      "Build reliable, production-grade automation tools that businesses can trust for daily operations.",
      "Support Indonesian businesses in adopting AI-assisted communication at their own pace."
    ];
    const teamMembers = [
      {
        name: "Bintang Wijaya",
        role: "Founder & Lead Developer",
        desc: "Software developer and technology founder focused on AI automation, software engineering, and digital product development for Indonesian businesses.",
        linkedin: "https://www.linkedin.com/in/bintangwijaya/"
      }
    ];
    const techStack = [
      { category: "Backend", items: "Go, Node.js, Laravel/PHP" },
      { category: "Frontend", items: "Vue.js, React.js, Tailwind CSS" },
      { category: "Desktop", items: "Rust, Tauri" },
      { category: "Database", items: "MySQL, PostgreSQL, Redis" },
      { category: "Infrastructure", items: "Cloud server, Docker, queue workers, background jobs" },
      { category: "AI & Automation", items: "Claude, OpenAI, Mimo, Groq, AWS Bedrock" },
      { category: "Integration", items: "WhatsApp gateway, marketplace API, payment gateway, third-party APIs" }
    ];
    const legalItems = [
      { label: "Product Name", value: "WaSigap" },
      { label: "Company / Startup", value: "AutobotWS" },
      { label: "Legal Entity", value: "CV Autobot Wijaya Solution" },
      { label: "Website", value: "https://wa.autobot.co.id" },
      { label: "Founder", value: "Bintang Wijaya" },
      { label: "Location", value: "Jakarta, Indonesia" },
      { label: "Business Field", value: "AI WhatsApp Automation, CRM, Software Development" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-50" }, _attrs))}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-widest text-emerald-700">About</p><h1 class="mt-3 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl"> WaSigap \u2014 Built for Indonesian Businesses on WhatsApp </h1><p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600"> WaSigap is an AI-powered WhatsApp automation and CRM platform developed by AutobotWS under CV Autobot Wijaya Solution. We are building practical AI automation tools for Indonesian SMEs, clinics, e-commerce sellers, and service businesses that rely on WhatsApp for daily customer communication. </p></div></section><section class="border-b border-slate-200 bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-10 lg:grid-cols-2 lg:items-start"><div><p class="text-sm font-extrabold uppercase tracking-widest text-sky-700">Mission</p><h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">Why we built WaSigap</h2><p class="mt-5 text-base leading-8 text-slate-600"> Many Indonesian businesses \u2014 clinics, online sellers, service businesses, customer service teams \u2014 rely on WhatsApp as their main customer communication channel. As message volume grows, managing conversations manually becomes slow, inconsistent, and hard to scale. </p><p class="mt-4 text-base leading-8 text-slate-600"> WaSigap was built to solve this problem with practical AI automation: faster replies, organized CRM data, scheduled broadcasts, AI follow-ups, and structured customer workflows \u2014 all from one dashboard connected to WhatsApp. </p></div><div class="grid gap-3"><!--[-->`);
      ssrRenderList(missionPoints, (point) => {
        _push(`<div class="flex items-start gap-3 rounded-[18px] border border-slate-200 bg-white p-5"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></span><p class="text-sm font-medium leading-7 text-slate-700">${ssrInterpolate(point)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-widest text-amber-700">Team</p><h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">The team behind WaSigap</h2><div class="mt-8 max-w-lg"><!--[-->`);
      ssrRenderList(teamMembers, (member) => {
        _push(`<div class="rounded-[24px] border border-slate-200 bg-slate-50 p-7"><p class="text-xl font-extrabold text-slate-950">${ssrInterpolate(member.name)}</p><p class="mt-1 text-sm font-bold text-emerald-700">${ssrInterpolate(member.role)}</p><p class="mt-4 text-sm leading-7 text-slate-600">${ssrInterpolate(member.desc)}</p><a${ssrRenderAttr("href", member.linkedin)} target="_blank" rel="noopener" class="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"> LinkedIn Profile </a></div>`);
      });
      _push(`<!--]--></div></div></section><section class="border-b border-slate-200 bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-widest text-violet-700">Technology</p><h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">Technology Stack</h2><p class="mt-5 max-w-3xl text-base leading-8 text-slate-600"> WaSigap is built with a modern, production-grade technology stack designed for reliability, scalability, and AI integration flexibility. </p><div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(techStack, (tech) => {
        _push(`<div class="rounded-[20px] border border-slate-200 bg-white p-5"><p class="text-xs font-extrabold uppercase tracking-widest text-slate-400">${ssrInterpolate(tech.category)}</p><p class="mt-3 text-sm font-semibold leading-7 text-slate-700">${ssrInterpolate(tech.items)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-10 lg:grid-cols-2 lg:items-start"><div><p class="text-sm font-extrabold uppercase tracking-widest text-slate-500">Legal Identity</p><h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">Company Information</h2><p class="mt-5 text-base leading-8 text-slate-600"> WaSigap is a product of AutobotWS, a technology brand operating under the legal entity CV Autobot Wijaya Solution based in Indonesia. </p></div><div class="rounded-[24px] border border-slate-200 bg-slate-50 p-6"><dl class="grid gap-4"><!--[-->`);
      ssrRenderList(legalItems, (item) => {
        _push(`<div class="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0"><dt class="text-sm text-slate-500">${ssrInterpolate(item.label)}</dt><dd class="text-right text-sm font-bold text-slate-950">${ssrInterpolate(item.value)}</dd></div>`);
      });
      _push(`<!--]--></dl></div></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><h2 class="text-4xl font-black tracking-tight text-slate-950">Ready to get started?</h2><p class="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-600"> See WaSigap features, pricing, and startup profile \u2014 or contact us directly. </p><div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Features `);
          } else {
            return [
              createTextVNode(" View Features ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-bold text-slate-800 transition hover:bg-slate-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-ljKCGNC5.mjs.map
