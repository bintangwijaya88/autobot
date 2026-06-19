import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { a as useLocale, g as useRoute, e as useFetch, h as createError, b as useSeoMeta, f as useRuntimeConfig } from './server.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const { locale } = useLocale();
    const route = useRoute();
    const config = useRuntimeConfig();
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/api/products/${route.params.slug}`,
      "$HDaft1-vks"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    if (!product.value) {
      throw createError({ statusCode: 404, statusMessage: locale.value === "id" ? "Produk tidak ditemukan" : "Product not found" });
    }
    useSeoMeta({
      title: `${(_a = product.value) == null ? void 0 : _a.name} \u2014 Autobot`,
      description: (_b = product.value) == null ? void 0 : _b.tagline
    });
    const categoryEmoji = {
      chatbot: "\u{1F916}",
      blast: "\u{1F4E2}",
      workflow: "\u2699\uFE0F",
      integration: "\u{1F517}",
      ai_agent: "\u{1F9E0}",
      scheduled: "\u23F0"
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(product)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-8"><div class="flex gap-2 mb-3"><span class="text-xs px-2 py-0.5 rounded-full border border-white/15 text-gray-400 capitalize">${ssrInterpolate(unref(product).category)}</span>`);
        if (unref(product).delivery_model) {
          _push(`<span class="text-xs px-2 py-0.5 rounded-full border border-blue-500/30 text-blue-400">${ssrInterpolate(unref(product).delivery_model)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center gap-4"><span class="text-5xl">${ssrInterpolate(categoryEmoji[unref(product).category] || "\u{1F4E6}")}</span><div><h1 class="text-4xl font-bold text-white">${ssrInterpolate(unref(product).name)}</h1><p class="text-gray-400 mt-1">${ssrInterpolate(unref(product).tagline)}</p></div></div></div>`);
        if (unref(product).description) {
          _push(`<p class="text-gray-300 text-lg leading-relaxed mb-8">${ssrInterpolate(unref(product).description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mb-8"><h2 class="text-2xl font-bold text-white mb-4">${ssrInterpolate(unref(locale) === "id" ? "Fitur Utama" : "Key Features")}</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><!--[-->`);
        ssrRenderList(unref(product).features || [], (f) => {
          _push(`<div class="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/3"><span class="text-green-400 flex-shrink-0">\u2713</span><span class="text-gray-300 text-sm">${ssrInterpolate(f)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
        if ((_a2 = unref(product).pricing) == null ? void 0 : _a2.length) {
          _push(`<div class="mb-8"><h2 class="text-2xl font-bold text-white mb-4">${ssrInterpolate(unref(locale) === "id" ? "Harga" : "Pricing")}</h2><div class="flex gap-4 overflow-x-auto pb-2"><!--[-->`);
          ssrRenderList(unref(product).pricing, (tier) => {
            _push(`<div class="${ssrRenderClass([tier.highlighted ? "border-purple-500/40 bg-purple-500/8" : "border-white/10 bg-white/3", "flex-shrink-0 w-72 rounded-2xl border p-5 relative"])}">`);
            if (tier.discount) {
              _push(`<div class="flex items-center gap-2 mb-3"><span class="text-xs px-2 py-0.5 rounded-full font-semibold" style="${ssrRenderStyle({ "background": "rgba(168,85,247,0.25)", "color": "#c084fc" })}">${ssrInterpolate(tier.name)}</span><span class="text-xs px-2 py-0.5 rounded-full font-bold" style="${ssrRenderStyle({ "background": "rgba(34,197,94,0.2)", "color": "#4ade80" })}">${ssrInterpolate(tier.discount)}</span></div>`);
            } else if (tier.highlighted) {
              _push(`<div class="text-xs text-blue-400 mb-2">\u2B50 Populer</div>`);
            } else {
              _push(`<!---->`);
            }
            if (!tier.discount) {
              _push(`<h4 class="text-white font-bold text-lg">${ssrInterpolate(tier.name)}</h4>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<div class="mt-1 mb-1">`);
            if (tier.original_price) {
              _push(`<div class="flex items-center gap-2 mb-0.5"><span class="text-gray-500 text-sm line-through">${ssrInterpolate(tier.original_price)}</span></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<div class="flex items-end gap-1.5"><span class="text-3xl font-bold text-white">${ssrInterpolate(tier.price)}</span></div><p class="text-gray-500 text-xs mt-1">${ssrInterpolate(tier.period)}</p></div><ul class="space-y-2 my-4"><!--[-->`);
            ssrRenderList(tier.features, (f) => {
              _push(`<li class="flex items-start gap-2 text-sm text-gray-300"><span class="text-green-400 mt-0.5 shrink-0">\u2713</span> ${ssrInterpolate(f)}</li>`);
            });
            _push(`<!--]--></ul>`);
            if (tier.cta_url) {
              _push(`<a${ssrRenderAttr("href", tier.cta_url)} target="_blank" rel="noopener" class="block w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-all hover:opacity-90" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c3aed, #2563eb)", "color": "white" })}">${ssrInterpolate(unref(locale) === "id" ? "Beli Sekarang" : "Buy Now")} \u2192 </a>`);
            } else {
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: "/",
                class: ["block w-full py-2.5 rounded-xl text-sm font-medium text-center transition-colors", tier.highlighted ? "bg-blue-500 text-white hover:bg-blue-400" : "border border-white/15 text-gray-400 hover:text-white hover:border-white/30"]
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(unref(locale) === "id" ? "Order via Chat" : "Order via Chat")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(locale) === "id" ? "Order via Chat" : "Order via Chat"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b2 = unref(product).tech_stack) == null ? void 0 : _b2.length) {
          _push(`<div class="mb-8"><h2 class="text-xl font-bold text-white mb-3">Tech Stack</h2><div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(unref(product).tech_stack, (tech) => {
            _push(`<span class="px-3 py-1 rounded-full border border-white/15 text-sm text-gray-400">${ssrInterpolate(tech)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="rounded-2xl p-6 text-center" style="${ssrRenderStyle(unref(product).demo_url ? "border: 1px solid rgba(168,85,247,0.3); background: rgba(124,58,237,0.08);" : "border: 1px solid rgba(59,130,246,0.3); background: rgba(59,130,246,0.08);")}"><p class="text-white font-medium mb-4">${ssrInterpolate(unref(locale) === "id" ? "Tertarik dengan" : "Interested in")} ${ssrInterpolate(unref(product).name)}?</p><div class="flex gap-3 justify-center flex-wrap">`);
        if (unref(product).demo_url) {
          _push(`<a${ssrRenderAttr("href", unref(product).demo_url)} target="_blank" rel="noopener" class="inline-block px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all active:scale-[0.97]" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c3aed, #2563eb)", "color": "white" })}">${ssrInterpolate(unref(locale) === "id" ? "Beli Sekarang" : "Buy Now")} \u2014 Rp 199.600 </a>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/",
            class: "inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Order via Chat `);
              } else {
                return [
                  createTextVNode(" Order via Chat ")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "inline-block px-6 py-3 rounded-xl text-sm font-medium transition-colors",
          style: { "border": "1px solid rgba(255,255,255,0.12)", "color": "rgba(255,255,255,0.6)" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(locale) === "id" ? "Tanya Dulu" : "Ask First")}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(locale) === "id" ? "Tanya Dulu" : "Ask First"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-zt9ALCjh.mjs.map
