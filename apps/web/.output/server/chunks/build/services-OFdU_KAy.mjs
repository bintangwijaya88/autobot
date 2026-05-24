import { _ as __nuxt_component_0 } from './nuxt-link-DTwh5LNx.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { a as useSeoMeta } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Jasa Custom Development \u2014 Autobot",
      description: "Jasa custom software development: web app, mobile, desktop, system integration, AI/ML."
    });
    const services = [
      { icon: "\u{1F310}", title: "Web Application", desc: "SaaS, dashboard, portal, e-commerce \u2014 responsive dan performant." },
      { icon: "\u{1F4F1}", title: "Mobile Application", desc: "Android, iOS, cross-platform dengan Flutter." },
      { icon: "\u{1F5A5}", title: "Desktop Application", desc: "Windows, macOS, Linux dengan Tauri + Rust." },
      { icon: "\u{1F517}", title: "System Integration", desc: "API development, middleware, ERP/CRM connector." },
      { icon: "\u{1F916}", title: "AI/ML Integration", desc: "OpenAI, Anthropic, custom model integration." },
      { icon: "\u{1F5C4}", title: "Database Design", desc: "Schema design, migration, optimization, backup strategy." }
    ];
    const techStack = [
      { category: "Backend", items: ["Go (Fiber)", "Rust", "Laravel"] },
      { category: "Frontend", items: ["Vue 3", "Nuxt 3", "React"] },
      { category: "Mobile", items: ["Flutter"] },
      { category: "Desktop", items: ["Tauri 2"] },
      { category: "Database", items: ["PostgreSQL", "MySQL", "SQLite"] },
      { category: "AI", items: ["OpenAI", "Anthropic"] }
    ];
    const pricingModels = [
      { name: "Fixed Price", desc: "Scope jelas, budget pasti." },
      { name: "Time & Material", desc: "Iteratif, bayar per sprint." },
      { name: "Retainer", desc: "Partnership bulanan." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-4xl font-bold text-white mb-2">Jasa Custom Development</h1><p class="text-gray-400 mb-10">Software sesuai kebutuhan Anda \u2014 dari website hingga sistem enterprise.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<div class="rounded-2xl border border-white/10 bg-white/3 p-5"><div class="text-2xl mb-3">${ssrInterpolate(service.icon)}</div><h3 class="text-white font-semibold mb-2">${ssrInterpolate(service.title)}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(service.desc)}</p></div>`);
      });
      _push(`<!--]--></div><div class="rounded-2xl border border-white/10 bg-white/3 p-6 mb-8"><h2 class="text-xl font-bold text-white mb-4">Tech Stack</h2><div class="grid grid-cols-2 md:grid-cols-3 gap-3"><!--[-->`);
      ssrRenderList(techStack, (tech) => {
        _push(`<div><p class="text-gray-500 text-xs mb-1">${ssrInterpolate(tech.category)}</p><p class="text-gray-300 text-sm">${ssrInterpolate(tech.items.join(", "))}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="rounded-2xl border border-white/10 bg-white/3 p-6 mb-8"><h2 class="text-xl font-bold text-white mb-4">Pricing Model</h2><div class="grid grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(pricingModels, (model) => {
        _push(`<div class="text-center p-4 rounded-xl border border-white/10"><h4 class="text-white font-semibold mb-2">${ssrInterpolate(model.name)}</h4><p class="text-gray-400 text-xs">${ssrInterpolate(model.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Konsultasi via Chat `);
          } else {
            return [
              createTextVNode(" Konsultasi via Chat ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
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
//# sourceMappingURL=services-OFdU_KAy.mjs.map
