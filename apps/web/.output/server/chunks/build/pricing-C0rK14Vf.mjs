import { _ as __nuxt_component_0 } from './nuxt-link-DTwh5LNx.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Harga \u2014 Autobot",
      description: "Harga produk chatbot WhatsApp dan AI automation dari Autobot Wijaya Solution. Transparan, tanpa biaya tersembunyi.",
      ogTitle: "Harga Produk \u2014 Autobot",
      ogUrl: "https://autobot.co.id/pricing"
    });
    const products = [
      {
        slug: "wasigap",
        name: "WaSigap",
        tagline: "Aplikasi WhatsApp Multi-Akun Desktop",
        icon: "\u267E\uFE0F",
        color: "rgba(124,58,237,0.10)",
        border: "rgba(124,58,237,0.35)",
        badge: "Lifetime Deal",
        badgeColor: "rgba(168,85,247,0.25)",
        badgeText: "#c084fc",
        tiers: [
          {
            name: "\u267E\uFE0F Lifetime",
            price: 199600,
            originalPrice: 499e3,
            period: "sekali bayar",
            discount: "-60%",
            highlighted: true,
            ctaLabel: "Beli Sekarang",
            ctaUrl: "https://wa.autobot.co.id/",
            ctaExternal: true,
            features: [
              "99 akun WhatsApp",
              "Semua fitur utama",
              "500 kredit AI",
              "Update gratis (1.000 user pertama)",
              "Tidak perlu perpanjang",
              "Multi-device support"
            ]
          }
        ]
      },
      {
        slug: "custom-ai",
        name: "Custom AI Development",
        tagline: "AI Agent & Chatbot Khusus untuk Bisnis Anda",
        icon: "\u{1F9E0}",
        color: "rgba(239,68,68,0.06)",
        border: "rgba(239,68,68,0.18)",
        badge: null,
        tiers: [
          {
            name: "Custom Project",
            price: null,
            originalPrice: null,
            period: "project",
            discount: null,
            highlighted: true,
            ctaLabel: "Konsultasi Gratis",
            ctaUrl: "/contact",
            ctaExternal: false,
            priceLabel: "Mulai Rp 3.000.000",
            features: [
              "Konsultasi kebutuhan & desain solusi",
              "AI agent berbasis Claude / GPT-4",
              "Knowledge base training bisnis Anda",
              "Deploy ke WhatsApp, web, atau API",
              "Human handover & escalation",
              "Garansi bug fix 3 bulan"
            ]
          }
        ]
      }
    ];
    function fmt(n) {
      if (n === null) return null;
      return new Intl.NumberFormat("id-ID").format(n);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-10"><h1 class="text-4xl font-bold text-white mb-2">Harga Produk</h1><p class="text-gray-400">Pilih produk yang sesuai kebutuhan bisnis Anda. Semua harga transparan, tanpa biaya tersembunyi.</p></div><div class="space-y-12"><!--[-->`);
      ssrRenderList(products, (product) => {
        _push(`<div class="rounded-2xl p-6" style="${ssrRenderStyle(`background: ${product.color}; border: 1px solid ${product.border};`)}"><div class="flex items-start justify-between mb-6"><div class="flex items-center gap-3"><span class="text-3xl">${ssrInterpolate(product.icon)}</span><div><div class="flex items-center gap-2"><h2 class="text-xl font-bold text-white">${ssrInterpolate(product.name)}</h2>`);
        if (product.badge) {
          _push(`<span class="text-xs px-2 py-0.5 rounded-full font-semibold" style="${ssrRenderStyle(`background: ${product.badgeColor}; color: ${product.badgeText};`)}">${ssrInterpolate(product.badge)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="text-gray-400 text-sm mt-0.5">${ssrInterpolate(product.tagline)}</p></div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/products/${product.slug}`,
          class: "text-xs text-gray-500 hover:text-gray-300 transition-colors shrink-0 mt-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Lihat detail \u2192 `);
            } else {
              return [
                createTextVNode(" Lihat detail \u2192 ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="${ssrRenderClass([product.tiers.length === 1 ? "grid-cols-1 max-w-sm" : product.tiers.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3", "grid gap-4"])}"><!--[-->`);
        ssrRenderList(product.tiers, (tier) => {
          _push(`<div class="rounded-xl p-5 flex flex-col" style="${ssrRenderStyle(tier.highlighted ? "background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.22);" : "background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);")}"><div class="flex items-center justify-between mb-3"><span class="text-white font-semibold text-sm">${ssrInterpolate(tier.name)}</span>`);
          if (tier.discount) {
            _push(`<span class="text-xs px-1.5 py-0.5 rounded-full font-bold" style="${ssrRenderStyle({ "background": "rgba(34,197,94,0.2)", "color": "#4ade80" })}">${ssrInterpolate(tier.discount)}</span>`);
          } else if (tier.highlighted) {
            _push(`<span class="text-xs px-1.5 py-0.5 rounded-full" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.12)", "color": "rgba(255,255,255,0.6)" })}"> Populer </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="mb-4">`);
          if (tier.originalPrice) {
            _push(`<div class="text-gray-500 text-xs line-through mb-0.5"> Rp ${ssrInterpolate(fmt(tier.originalPrice))}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (tier.price !== null) {
            _push(`<div class="flex items-end gap-1"><span class="text-2xl font-bold text-white">Rp ${ssrInterpolate(fmt(tier.price))}</span><span class="text-gray-500 text-xs mb-0.5">/ ${ssrInterpolate(tier.period)}</span></div>`);
          } else if (tier.priceLabel) {
            _push(`<div class="text-2xl font-bold text-white">${ssrInterpolate(tier.priceLabel)}</div>`);
          } else {
            _push(`<div class="text-2xl font-bold text-white">Custom</div>`);
          }
          _push(`</div><ul class="space-y-1.5 mb-5 flex-1"><!--[-->`);
          ssrRenderList(tier.features, (f) => {
            _push(`<li class="flex items-start gap-2 text-xs text-gray-300"><span class="text-green-400 shrink-0 mt-0.5">\u2713</span> ${ssrInterpolate(f)}</li>`);
          });
          _push(`<!--]--></ul>`);
          if (tier.ctaExternal) {
            _push(`<a${ssrRenderAttr("href", tier.ctaUrl)} target="_blank" rel="noopener" class="block w-full py-2.5 rounded-lg text-xs font-semibold text-center transition-all hover:opacity-90" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c3aed, #2563eb)", "color": "white" })}">${ssrInterpolate(tier.ctaLabel)} \u2192 </a>`);
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: tier.ctaUrl,
              class: "block w-full py-2.5 rounded-lg text-xs font-medium text-center transition-all",
              style: tier.highlighted ? "background: #F0F0F0; color: #111;" : "border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.6);"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(tier.ctaLabel)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(tier.ctaLabel), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-10 rounded-2xl border border-white/8 bg-white/3 p-6"><h3 class="text-white font-semibold mb-3">Catatan Umum</h3><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400"><div class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Harga belum termasuk PPN 11%.</div><div class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Pembayaran via Xendit: transfer, VA, QRIS, kartu kredit.</div><div class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Upgrade/downgrade bisa dilakukan kapan saja.</div><div class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Kuota bulanan reset di awal periode, tidak diakumulasi.</div><div class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span><span>Lihat `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/refund-policy",
        class: "text-blue-400 hover:text-blue-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kebijakan Refund`);
          } else {
            return [
              createTextVNode("Kebijakan Refund")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` untuk detail pengembalian dana.</span></div><div class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Butuh custom? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-blue-400 hover:text-blue-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Hubungi tim kami.`);
          } else {
            return [
              createTextVNode("Hubungi tim kami.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pricing-C0rK14Vf.mjs.map
