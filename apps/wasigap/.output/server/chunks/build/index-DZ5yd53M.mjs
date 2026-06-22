import { _ as __nuxt_component_0 } from './nuxt-link-C9Zh67vB.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "WaSigap \u2014 AI WhatsApp Automation Platform for Growing Businesses",
      description: "WaSigap helps Indonesian SMEs, clinics, e-commerce sellers, and service businesses automate WhatsApp customer support, manage CRM data, schedule broadcasts, and improve response speed with AI.",
      ogTitle: "WaSigap \u2014 AI WhatsApp Automation Platform for Growing Businesses",
      ogDescription: "AI-powered WhatsApp automation and CRM platform for Indonesian SMEs, clinics, e-commerce sellers, and service businesses.",
      ogUrl: "https://wa.autobot.co.id",
      ogImage: "https://wa.autobot.co.id/logo.png",
      ogType: "website",
      twitterCard: "summary_large_image"
    });
    useHead({
      link: [{ rel: "canonical", href: "https://wa.autobot.co.id" }]
    });
    const trustStats = [
      { value: "200+", label: "Registered Users" },
      { value: "80", label: "Active Users" },
      { value: "30M+", label: "AI Tokens Processed" },
      { value: "5+", label: "AI Providers Integrated" }
    ];
    const features = [
      {
        title: "AI Auto Reply",
        desc: "Automatically respond to customer questions using AI agents connected to business knowledge, FAQs, product information, and service workflows.",
        icon: "\u{1F916}"
      },
      {
        title: "CRM & Contact Management",
        desc: "Organize customer contacts, conversation history, lead status, customer notes, and service follow-up data in one dashboard.",
        icon: "\u{1F465}"
      },
      {
        title: "Safe Broadcast & Scheduler",
        desc: "Send scheduled WhatsApp campaigns with segmentation, delay control, and safer sending workflows for business communication.",
        icon: "\u{1F4E2}"
      },
      {
        title: "AI Follow-Up",
        desc: "Generate smart follow-up recommendations from customer conversations, schedule them for approval, and keep important leads from being forgotten.",
        icon: "\u{1F504}"
      },
      {
        title: "AI Worker",
        desc: "Create task-based AI agents that collect structured information through WhatsApp conversations and save the results into custom database fields.",
        icon: "\u2699\uFE0F"
      },
      {
        title: "Multi AI Provider",
        desc: "Integrates and experiments with Claude, OpenAI, Mimo, Groq, and AWS Bedrock to support flexible AI automation workflows.",
        icon: "\u{1F9E0}"
      }
    ];
    const useCases = [
      {
        title: "Clinics & Healthcare",
        desc: "Automate patient inquiries, doctor schedules, service information, booking reminders, and follow-ups."
      },
      {
        title: "E-commerce Sellers",
        desc: "Manage product inquiries, stock questions, order follow-ups, broadcast campaigns, and customer data."
      },
      {
        title: "Service Businesses",
        desc: "Handle booking requests, customer questions, reminders, service updates, and lead management."
      },
      {
        title: "Customer Service Teams",
        desc: "Centralize WhatsApp conversations, support multiple agents, track chat history, and improve response time."
      }
    ];
    const aiProviders = ["Claude", "OpenAI", "Mimo", "Groq", "AWS Bedrock"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-50 text-slate-950" }, _attrs))}><section class="relative overflow-hidden border-b border-slate-200 bg-white"><div class="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.10),_transparent_40%),radial-gradient(circle_at_top_left,_rgba(59,130,246,0.07),_transparent_35%)]"></div><div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div class="mx-auto max-w-4xl text-center"><div class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800"><span class="h-2 w-2 rounded-full bg-emerald-500"></span> Active Product \xB7 200 Registered Users </div><h1 class="mt-6 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"> AI WhatsApp Automation Platform<br class="hidden sm:block"><span class="text-emerald-600">for Growing Businesses</span></h1><p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600"> WaSigap helps Indonesian SMEs, clinics, e-commerce sellers, and service businesses automate WhatsApp customer support, manage CRM data, schedule broadcasts, create AI follow-ups, and improve response speed with practical AI workflows. </p><div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="https://wa.autobot.co.id/" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"> Get Started <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg></a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
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
      _push(`</div><div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"><!--[-->`);
      ssrRenderList(trustStats, (stat) => {
        _push(`<div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5"><p class="text-2xl font-black text-emerald-600">${ssrInterpolate(stat.value)}</p><p class="mt-1 text-sm font-semibold text-slate-600">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div><div class="mt-8 flex flex-wrap items-center justify-center gap-2"><span class="text-sm font-semibold text-slate-400">Integrated with:</span><!--[-->`);
      ssrRenderList(aiProviders, (p) => {
        _push(`<span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700">${ssrInterpolate(p)}</span>`);
      });
      _push(`<!--]--></div></div></div></section><section class="border-b border-slate-200 bg-slate-50 py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-3xl text-center"><p class="text-sm font-extrabold uppercase tracking-widest text-emerald-700">About the Product</p><h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">What is WaSigap?</h2></div><div class="mx-auto mt-10 max-w-4xl"><div class="rounded-[28px] border border-emerald-100 bg-white p-8 shadow-sm lg:p-10"><p class="text-lg leading-9 text-slate-700"> WaSigap is an <strong class="text-slate-950">AI-powered WhatsApp automation and CRM platform</strong> built by AutobotWS under CV Autobot Wijaya Solution. The platform helps businesses handle customer conversations faster, automate repetitive support questions, manage contacts, schedule broadcasts, organize customer data, and create AI-assisted follow-up workflows. </p><p class="mt-5 text-lg leading-9 text-slate-700"> WaSigap is designed for <strong class="text-slate-950">Indonesian SMEs, clinics, healthcare service providers, e-commerce sellers, and service-based businesses</strong> that rely on WhatsApp as their main customer communication channel. </p><div class="mt-8 flex flex-wrap gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` See All Features `);
          } else {
            return [
              createTextVNode(" See All Features ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Pricing `);
          } else {
            return [
              createTextVNode(" View Pricing ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section class="border-b border-slate-200 bg-white py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="max-w-2xl"><p class="text-sm font-extrabold uppercase tracking-widest text-sky-700">Platform Features</p><h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">Everything you need to automate WhatsApp</h2></div><div class="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<article class="rounded-[24px] border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-200 hover:bg-emerald-50/40"><span class="text-3xl">${ssrInterpolate(feature.icon)}</span><h3 class="mt-4 text-lg font-extrabold text-slate-950">${ssrInterpolate(feature.title)}</h3><p class="mt-2 text-sm leading-7 text-slate-600">${ssrInterpolate(feature.desc)}</p></article>`);
      });
      _push(`<!--]--></div><div class="mt-8 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All Features <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" View All Features "),
              (openBlock(), createBlock("svg", {
                class: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="border-b border-slate-200 bg-slate-950 py-20 text-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-3xl text-center"><p class="text-sm font-extrabold uppercase tracking-widest text-emerald-400">Traction</p><h2 class="mt-3 text-4xl font-black tracking-tight">Current Traction</h2><p class="mt-5 text-lg leading-8 text-slate-300"> WaSigap is already being used by early adopters and businesses that need practical WhatsApp automation. The platform has processed more than 30 million AI tokens across customer support, reply automation, workflow testing, and AI assistant features. </p></div><div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><div class="rounded-[24px] border border-white/10 bg-white/5 p-6"><p class="text-4xl font-black text-emerald-400">200</p><p class="mt-2 text-sm font-bold text-slate-200">Registered Users</p><p class="mt-1 text-xs text-slate-400">Businesses and individuals signed up on the platform</p></div><div class="rounded-[24px] border border-white/10 bg-white/5 p-6"><p class="text-4xl font-black text-emerald-400">80</p><p class="mt-2 text-sm font-bold text-slate-200">Active Users</p><p class="mt-1 text-xs text-slate-400">Users actively running automations and AI workflows</p></div><div class="rounded-[24px] border border-white/10 bg-white/5 p-6"><p class="text-4xl font-black text-emerald-400">30M+</p><p class="mt-2 text-sm font-bold text-slate-200">AI Tokens Processed</p><p class="mt-1 text-xs text-slate-400">Tokens consumed across AI auto-reply, workers, and follow-up flows</p></div><div class="rounded-[24px] border border-white/10 bg-white/5 p-6"><p class="text-4xl font-black text-sky-400">5+</p><p class="mt-2 text-sm font-bold text-slate-200">AI Providers Integrated</p><p class="mt-1 text-xs text-slate-400">Claude, OpenAI, Mimo, Groq, AWS Bedrock</p></div><div class="rounded-[24px] border border-white/10 bg-white/5 p-6"><p class="text-4xl font-black text-amber-400">Active</p><p class="mt-2 text-sm font-bold text-slate-200">Product Development</p><p class="mt-1 text-xs text-slate-400">Continuous feature releases and improvements</p></div><div class="rounded-[24px] border border-white/10 bg-white/5 p-6"><p class="text-4xl font-black text-violet-400">ID</p><p class="mt-2 text-sm font-bold text-slate-200">Indonesian Market Focus</p><p class="mt-1 text-xs text-slate-400">SMEs, clinics, e-commerce, and service businesses</p></div></div></div></section><section class="border-b border-slate-200 bg-white py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="max-w-2xl"><p class="text-sm font-extrabold uppercase tracking-widest text-amber-700">Use Cases</p><h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">Who uses WaSigap?</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2"><!--[-->`);
      ssrRenderList(useCases, (item) => {
        _push(`<article class="rounded-[24px] border border-amber-100 bg-amber-50/50 p-7"><h3 class="text-xl font-extrabold text-slate-950">${ssrInterpolate(item.title)}</h3><p class="mt-3 text-sm leading-7 text-slate-700">${ssrInterpolate(item.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 py-20"><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div class="rounded-[32px] border border-emerald-200 bg-emerald-600 p-10 text-center text-white shadow-xl shadow-emerald-200"><h2 class="text-4xl font-black tracking-tight">Ready to automate your WhatsApp?</h2><p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-emerald-100"> Join 200+ businesses already using WaSigap to handle customer conversations faster, smarter, and more reliably. </p><div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="https://wa.autobot.co.id/" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-emerald-700 transition hover:bg-emerald-50"> Get Started \u2014 Rp 199.000 </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-base font-bold text-white transition hover:bg-white/20"
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

export { _sfc_main as default };
//# sourceMappingURL=index-DZ5yd53M.mjs.map
