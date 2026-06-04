import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, withAsyncContext, computed, ref, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { a as useSeoMeta, f as useFetch, c as useRuntimeConfig } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Produk \u2014 Autobot",
      description: "Semua produk Autobot: WaBlastApp, WaBotIQ, Autobot Flow, Autobot Agent, dan lebih banyak \u2014 solusi chatbot WhatsApp & automasi bisnis Indonesia.",
      ogTitle: "Produk Autobot \u2014 Chatbot & Automasi Bisnis",
      ogDescription: "WaBlastApp, WaBotIQ, Autobot Flow, Autobot Agent \u2014 solusi lengkap WhatsApp chatbot dan automasi bisnis.",
      ogImage: "https://autobot.co.id/logo.png",
      ogUrl: "https://autobot.co.id/products"
    });
    const config = useRuntimeConfig();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/api/products`,
      "$4TZ6Qtz-Iu"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const products = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    const categories = ["all", "chatbot", "blast", "workflow", "integration", "ai_agent", "scheduled"];
    const activeCategory = ref("all");
    const filtered = computed(
      () => activeCategory.value === "all" ? products.value : products.value.filter((p) => p.category === activeCategory.value)
    );
    const categoryEmoji = {
      chatbot: "\u{1F916}",
      blast: "\u{1F4E2}",
      workflow: "\u2699\uFE0F",
      integration: "\u{1F517}",
      ai_agent: "\u{1F9E0}",
      scheduled: "\u23F0"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-4xl font-bold text-white mb-2">Produk Kami</h1><p class="text-gray-400 mb-8">Bot &amp; automasi untuk berbagai kebutuhan bisnis Anda.</p><div class="flex gap-2 flex-wrap mb-8"><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<button class="${ssrRenderClass([unref(activeCategory) === cat ? "bg-white text-black" : "border border-white/15 text-gray-400 hover:text-white hover:border-white/30", "px-4 py-1.5 rounded-full text-sm transition-all"])}">${ssrInterpolate(categoryEmoji[cat] || "\u{1F4E6}")} ${ssrInterpolate(cat === "all" ? "Semua" : cat)}</button>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(unref(filtered), (product) => {
        _push(`<div class="rounded-2xl border border-white/10 bg-white/3 p-6 hover:border-white/20 transition-all group"><div class="flex items-start justify-between mb-4"><div><div class="flex gap-2 mb-2"><span class="text-xs px-2 py-0.5 rounded-full border border-white/15 text-gray-400 capitalize">${ssrInterpolate(product.category)}</span>`);
        if (product.delivery_model) {
          _push(`<span class="text-xs px-2 py-0.5 rounded-full border border-blue-500/30 text-blue-400 capitalize">${ssrInterpolate(product.delivery_model)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h2 class="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">${ssrInterpolate(product.name)}</h2><p class="text-gray-400 text-sm mt-1">${ssrInterpolate(product.tagline)}</p></div><span class="text-3xl">${ssrInterpolate(categoryEmoji[product.category] || "\u{1F4E6}")}</span></div><ul class="space-y-1.5 mb-6"><!--[-->`);
        ssrRenderList((product.features || []).slice(0, 4), (f) => {
          _push(`<li class="flex items-center gap-2 text-sm text-gray-300"><span class="text-green-400">\u2713</span> ${ssrInterpolate(f)}</li>`);
        });
        _push(`<!--]--></ul><div class="flex gap-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/products/${product.slug}`,
          class: "flex-1 py-2.5 rounded-xl border border-white/15 text-center text-sm text-gray-400 hover:text-white hover:border-white/30 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Lihat Detail `);
            } else {
              return [
                createTextVNode(" Lihat Detail ")
              ];
            }
          }),
          _: 2
        }, _parent));
        if (product.demo_url) {
          _push(`<a${ssrRenderAttr("href", product.demo_url)} target="_blank" rel="noopener" class="px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-all" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c3aed, #2563eb)", "color": "white" })}"> Beli Sekarang </a>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/",
            class: "px-4 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Tanya di Chat `);
              } else {
                return [
                  createTextVNode(" Tanya di Chat ")
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-6sZzE84-.mjs.map
