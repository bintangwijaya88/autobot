import { defineComponent, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderComponent } from 'vue/server-renderer';
import { FlaskConical, Layers3, FileText, BookOpen, ArrowRight } from 'lucide-vue-next';
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
  __name: "resources",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLocale();
    useSeoMeta({
      title: "Research \u2014 autobotws",
      description: "Riset, catatan produk, referensi integrasi, dan insight implementasi dari autobotws."
    });
    const resources = [
      {
        icon: FlaskConical,
        titleKey: "marketing.research.platform.title",
        descKey: "marketing.research.platform.desc",
        labelKey: "marketing.research.platform.label"
      },
      {
        icon: Layers3,
        titleKey: "marketing.research.architecture.title",
        descKey: "marketing.research.architecture.desc",
        labelKey: "marketing.research.architecture.label"
      },
      {
        icon: FileText,
        titleKey: "marketing.research.guides.title",
        descKey: "marketing.research.guides.desc",
        labelKey: "marketing.research.guides.label"
      },
      {
        icon: BookOpen,
        titleKey: "marketing.research.docs.title",
        descKey: "marketing.research.docs.desc",
        labelKey: "marketing.research.docs.label"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(unref(t)("marketing.research.eyebrow"))}</p><div class="mt-3 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"><h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">${ssrInterpolate(unref(t)("marketing.research.title"))}</h1><p class="text-lg leading-8 text-slate-600">${ssrInterpolate(unref(t)("marketing.research.desc"))}</p></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8"><!--[-->`);
      ssrRenderList(resources, (item) => {
        _push(`<article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"><div class="flex items-start justify-between gap-4"><div class="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "h-6 w-6" }, null), _parent);
        _push(`</div><span class="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-500">${ssrInterpolate(unref(t)(item.labelKey))}</span></div><h2 class="mt-5 text-xl font-extrabold text-slate-950">${ssrInterpolate(unref(t)(item.titleKey))}</h2><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(unref(t)(item.descKey))}</p><div class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">${ssrInterpolate(unref(t)("marketing.research.comingSoon"))} `);
        _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent));
        _push(`</div></article>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=resources-CxrwU6Zi.mjs.map
