import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, createVNode, resolveDynamicComponent, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { MessageSquareText, Sparkles, BadgePercent, CheckCircle2, ArrowRight } from 'lucide-vue-next';
import { b as useSeoMeta } from './server.mjs';
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
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Harga Produk \u2014 autobotws",
      description: "Harga produk WaSigap dan layanan AI automation dari autobotws. Transparan, fleksibel, dan siap disesuaikan dengan kebutuhan bisnis.",
      ogTitle: "Harga Produk \u2014 autobotws",
      ogDescription: "Pilih paket WaSigap lifetime atau konsultasi custom AI development untuk workflow automation bisnis.",
      ogImage: "https://autobot.co.id/logo.png",
      ogUrl: "https://autobot.co.id/pricing"
    });
    const products = [
      {
        slug: "wasigap",
        name: "WaSigap",
        tagline: "Aplikasi WhatsApp multi-akun untuk operasional, broadcast, dan auto-reply.",
        icon: MessageSquareText,
        badge: "Lifetime Deal",
        accent: "blue",
        tiers: [
          {
            name: "Lifetime",
            price: 199600,
            originalPrice: 499e3,
            period: "sekali bayar",
            discount: "-60%",
            ctaLabel: "Beli Sekarang",
            ctaUrl: "https://wa.autobot.co.id/",
            ctaExternal: true,
            features: [
              "99 akun WhatsApp dalam satu aplikasi",
              "Broadcast dan auto-reply untuk tim",
              "500 kredit AI sudah termasuk",
              "Update gratis untuk 1.000 user pertama",
              "Tanpa biaya langganan bulanan",
              "Dashboard terpusat untuk semua akun"
            ]
          }
        ]
      },
      {
        slug: "custom-ai",
        name: "Custom AI Development",
        tagline: "AI agent, chatbot, dan workflow automation sesuai proses bisnis Anda.",
        icon: Sparkles,
        badge: "Custom Scope",
        accent: "emerald",
        tiers: [
          {
            name: "Custom Project",
            price: null,
            originalPrice: null,
            period: "project",
            discount: null,
            ctaLabel: "Konsultasi Gratis",
            ctaUrl: "/contact",
            ctaExternal: false,
            priceLabel: "Mulai Rp 3.000.000",
            features: [
              "Konsultasi kebutuhan dan desain solusi",
              "AI agent berbasis Claude, GPT, atau provider lain",
              "Knowledge base sesuai data bisnis",
              "Deploy ke WhatsApp, web, atau API",
              "Human handover dan escalation path",
              "Garansi bug fix 3 bulan setelah delivery"
            ]
          }
        ]
      }
    ];
    const notes = [
      "Harga belum termasuk PPN jika transaksi membutuhkan faktur pajak.",
      "Pembayaran dapat diarahkan melalui transfer, virtual account, QRIS, atau payment link.",
      "Scope custom akan dikunci setelah discovery agar estimasi biaya dan timeline jelas.",
      "Untuk kebutuhan enterprise, deployment dapat dibuat private instance atau managed service."
    ];
    function fmt(n) {
      if (n === null) return null;
      return new Intl.NumberFormat("id-ID").format(n);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ab83f9f3><section class="tech-pattern relative border-b border-slate-200 bg-white py-16" data-v-ab83f9f3><div class="pointer-events-none absolute right-8 top-10 hidden h-24 w-24 rounded-full border border-blue-200 bg-blue-50/50 lg:block" data-v-ab83f9f3></div><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-v-ab83f9f3><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700" data-v-ab83f9f3>Pricing</p><div class="mt-3 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end" data-v-ab83f9f3><h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl" data-v-ab83f9f3> Harga transparan untuk automation yang langsung bisa dipakai. </h1><p class="text-lg leading-8 text-slate-600" data-v-ab83f9f3> Mulai dari produk siap pakai seperti WaSigap sampai custom AI agent untuk workflow khusus. Pilih jalur yang paling sesuai dengan tahap bisnis Anda. </p></div></div></section><section class="bg-slate-50 py-16" data-v-ab83f9f3><div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8" data-v-ab83f9f3><!--[-->`);
      ssrRenderList(products, (product) => {
        _push(`<article class="flex min-h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md" data-v-ab83f9f3><div class="flex items-start justify-between gap-4" data-v-ab83f9f3><div class="flex items-start gap-4" data-v-ab83f9f3><div class="${ssrRenderClass([product.accent === "blue" ? "bg-blue-50 text-blue-700" : "bg-emerald-50 text-emerald-700", "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"])}" data-v-ab83f9f3>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(product.icon), { class: "h-6 w-6" }, null), _parent);
        _push(`</div><div data-v-ab83f9f3><div class="flex flex-wrap items-center gap-2" data-v-ab83f9f3><h2 class="text-xl font-extrabold text-slate-950" data-v-ab83f9f3>${ssrInterpolate(product.name)}</h2><span class="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-500" data-v-ab83f9f3>${ssrInterpolate(product.badge)}</span></div><p class="mt-2 text-sm leading-6 text-slate-600" data-v-ab83f9f3>${ssrInterpolate(product.tagline)}</p></div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/products/${product.slug}`,
          class: "hidden shrink-0 text-sm font-bold text-blue-700 hover:text-blue-800 sm:inline-flex"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Detail `);
            } else {
              return [
                createTextVNode(" Detail ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="mt-6 grid gap-4" data-v-ab83f9f3><!--[-->`);
        ssrRenderList(product.tiers, (tier) => {
          _push(`<div class="rounded-lg border border-slate-200 bg-slate-50 p-5" data-v-ab83f9f3><div class="flex items-center justify-between gap-3" data-v-ab83f9f3><p class="text-sm font-extrabold uppercase tracking-wider text-slate-500" data-v-ab83f9f3>${ssrInterpolate(tier.name)}</p>`);
          if (tier.discount) {
            _push(`<span class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700" data-v-ab83f9f3>`);
            _push(ssrRenderComponent(unref(BadgePercent), { class: "h-3.5 w-3.5" }, null, _parent));
            _push(` ${ssrInterpolate(tier.discount)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="mt-4" data-v-ab83f9f3>`);
          if (tier.originalPrice) {
            _push(`<p class="text-sm font-semibold text-slate-400 line-through" data-v-ab83f9f3> Rp ${ssrInterpolate(fmt(tier.originalPrice))}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (tier.price !== null) {
            _push(`<div class="mt-1 flex flex-wrap items-end gap-2" data-v-ab83f9f3><span class="text-3xl font-extrabold tracking-tight text-slate-950" data-v-ab83f9f3>Rp ${ssrInterpolate(fmt(tier.price))}</span><span class="pb-1 text-sm font-semibold text-slate-500" data-v-ab83f9f3>/ ${ssrInterpolate(tier.period)}</span></div>`);
          } else {
            _push(`<p class="mt-1 text-3xl font-extrabold tracking-tight text-slate-950" data-v-ab83f9f3>${ssrInterpolate(tier.priceLabel)}</p>`);
          }
          _push(`</div><ul class="mt-5 grid gap-2" data-v-ab83f9f3><!--[-->`);
          ssrRenderList(tier.features, (feature) => {
            _push(`<li class="flex items-start gap-2 text-sm font-medium leading-6 text-slate-700" data-v-ab83f9f3>`);
            _push(ssrRenderComponent(unref(CheckCircle2), { class: "mt-0.5 h-4 w-4 shrink-0 text-emerald-600" }, null, _parent));
            _push(` ${ssrInterpolate(feature)}</li>`);
          });
          _push(`<!--]--></ul>`);
          if (tier.ctaExternal) {
            _push(`<a${ssrRenderAttr("href", tier.ctaUrl)} target="_blank" rel="noopener" class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700" data-v-ab83f9f3>${ssrInterpolate(tier.ctaLabel)} `);
            _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent));
            _push(`</a>`);
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: tier.ctaUrl,
              class: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(tier.ctaLabel)} `);
                  _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createTextVNode(toDisplayString(tier.ctaLabel) + " ", 1),
                    createVNode(unref(ArrowRight), { class: "h-4 w-4" })
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></article>`);
      });
      _push(`<!--]--></div></section><section class="border-t border-slate-200 bg-white py-16" data-v-ab83f9f3><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8" data-v-ab83f9f3><div data-v-ab83f9f3><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700" data-v-ab83f9f3>Notes</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950" data-v-ab83f9f3>Catatan sebelum memilih paket</h2><p class="mt-4 text-base leading-7 text-slate-600" data-v-ab83f9f3> Untuk custom project, harga final mengikuti kompleksitas integrasi, jumlah channel, kebutuhan data, dan model deployment. </p></div><div class="grid gap-3 sm:grid-cols-2" data-v-ab83f9f3><!--[-->`);
      ssrRenderList(notes, (note) => {
        _push(`<div class="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700" data-v-ab83f9f3>${ssrInterpolate(note)}</div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab83f9f3"]]);

export { pricing as default };
//# sourceMappingURL=pricing-DSycrkDC.mjs.map
