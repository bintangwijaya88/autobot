import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { ArrowRight } from 'lucide-vue-next';
import { u as useCases, p as platforms } from './marketing-Cc82Zqmw.mjs';
import { b as useSeoMeta } from './server.mjs';
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
  __name: "solutions",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Use Cases \u2014 autobotws",
      description: "Use case autobotws untuk AI sales assistant, approval workflow, document automation, payment follow-up, executive dashboard, dan system integration."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700">Use Cases</p><div class="mt-3 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl"> Automation that solves operational bottlenecks. </h1><p class="text-lg leading-8 text-slate-600"> Autobot is packaged around measurable business outcomes: faster response, cleaner data, less manual admin, and better visibility for owners and teams. </p></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8"><!--[-->`);
      ssrRenderList(unref(useCases), (item) => {
        _push(`<article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "h-8 w-8 text-emerald-700" }, null), _parent);
        _push(`<h2 class="mt-5 text-xl font-extrabold text-slate-950">${ssrInterpolate(item.title)}</h2><p class="mt-3 text-sm leading-6 text-slate-600">${ssrInterpolate(item.desc)}</p><div class="mt-5 rounded-lg bg-slate-50 p-4"><p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Suggested platform mix</p><p class="mt-2 text-sm font-semibold text-slate-700">${ssrInterpolate(unref(platforms).slice(0, 3).map((p) => p.name).join(" + "))}</p></div></article>`);
      });
      _push(`<!--]--></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="rounded-lg bg-slate-950 p-8 text-white sm:p-10"><p class="text-sm font-extrabold uppercase tracking-wider text-emerald-300">Roadmap Workshop</p><h2 class="mt-3 text-3xl font-extrabold">Start from one workflow, then expand into a platform suite.</h2><p class="mt-3 max-w-2xl text-sm leading-6 text-slate-300"> The most practical first step is not buying every tool. It is mapping one high-impact process and automating it properly. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Discuss use case `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Discuss use case "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/solutions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=solutions-BsNtZ6et.mjs.map
