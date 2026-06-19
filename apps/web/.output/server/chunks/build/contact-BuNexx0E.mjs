import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { MessageCircle, ArrowRight, Phone, Mail, Building2, MapPin, Clock } from 'lucide-vue-next';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Kontak \u2014 Autobot",
      description: "Hubungi autobotws via chat AI, WhatsApp, atau email. Konsultasi gratis untuk kebutuhan software, otomasi, dan integrasi sistem.",
      ogTitle: "Hubungi Autobot",
      ogDescription: "Konsultasi chatbot WhatsApp & automasi bisnis gratis. Tim kami siap membantu.",
      ogImage: "https://autobot.co.id/logo.png",
      ogUrl: "https://autobot.co.id/contact"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page overflow-hidden bg-slate-50" }, _attrs))} data-v-5a8eb812><section class="tech-pattern relative border-b border-slate-200 bg-white" data-v-5a8eb812><div class="pointer-events-none absolute right-10 top-12 hidden h-28 w-28 rounded-full border border-blue-200/80 lg:block orbit-shape" data-v-5a8eb812></div><div class="pointer-events-none absolute bottom-12 left-[45%] hidden h-20 w-20 rotate-45 rounded-lg border border-cyan-200/80 bg-cyan-50/40 lg:block float-shape" data-v-5a8eb812></div><div class="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20" data-v-5a8eb812><div class="flex flex-col justify-center" data-v-5a8eb812><div class="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700" data-v-5a8eb812>`);
      _push(ssrRenderComponent(unref(MessageCircle), { class: "h-4 w-4" }, null, _parent));
      _push(` Konsultasi gratis untuk automasi bisnis </div><h1 class="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl" data-v-5a8eb812> Hubungi autobotws </h1><p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600" data-v-5a8eb812> Ceritakan kebutuhan chatbot WhatsApp, CRM, workflow automation, atau integrasi sistem. Tim kami aktif Senin sampai Jumat pukul 09.00-17.00 WIB. </p><div class="mt-10 flex flex-col gap-3 sm:flex-row" data-v-5a8eb812><a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700" data-v-5a8eb812> WhatsApp Admin `);
      _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Chat dengan AI `);
          } else {
            return [
              createTextVNode(" Chat dengan AI ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm animate-scale-in" data-v-5a8eb812><div class="rounded-lg border border-slate-200 bg-white" data-v-5a8eb812><div class="flex items-center justify-between border-b border-slate-200 px-4 py-3" data-v-5a8eb812><div data-v-5a8eb812><p class="text-sm font-bold text-slate-900" data-v-5a8eb812>Contact Center</p><p class="text-xs text-slate-500" data-v-5a8eb812>autobotws</p></div><span class="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700" data-v-5a8eb812>ONLINE</span></div><div class="grid gap-3 p-4" data-v-5a8eb812><a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="group flex items-center gap-4 rounded-lg border border-emerald-100 bg-emerald-50 p-4 transition hover:border-emerald-200 hover:bg-white" data-v-5a8eb812><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-700 shadow-sm" data-v-5a8eb812>`);
      _push(ssrRenderComponent(unref(Phone), { class: "h-5 w-5" }, null, _parent));
      _push(`</span><span class="min-w-0 flex-1" data-v-5a8eb812><span class="block text-sm font-extrabold text-slate-950 group-hover:text-emerald-700" data-v-5a8eb812>WhatsApp Admin</span><span class="block text-sm text-slate-500" data-v-5a8eb812>+62 821-6486-7681</span></span>`);
      _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4 text-slate-400 group-hover:text-emerald-700" }, null, _parent));
      _push(`</a><a href="mailto:support@autobot.co.id" class="group flex items-center gap-4 rounded-lg border border-blue-100 bg-blue-50 p-4 transition hover:border-blue-200 hover:bg-white" data-v-5a8eb812><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-blue-700 shadow-sm" data-v-5a8eb812>`);
      _push(ssrRenderComponent(unref(Mail), { class: "h-5 w-5" }, null, _parent));
      _push(`</span><span class="min-w-0 flex-1" data-v-5a8eb812><span class="block text-sm font-extrabold text-slate-950 group-hover:text-blue-700" data-v-5a8eb812>Email Support</span><span class="block truncate text-sm text-slate-500" data-v-5a8eb812>support@autobot.co.id</span></span>`);
      _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4 text-slate-400 group-hover:text-blue-700" }, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "group flex items-center gap-4 rounded-lg border border-cyan-100 bg-cyan-50 p-4 transition hover:border-cyan-200 hover:bg-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-cyan-700 shadow-sm" data-v-5a8eb812${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MessageCircle), { class: "h-5 w-5" }, null, _parent2, _scopeId));
            _push2(`</span><span class="min-w-0 flex-1" data-v-5a8eb812${_scopeId}><span class="block text-sm font-extrabold text-slate-950 group-hover:text-cyan-700" data-v-5a8eb812${_scopeId}>Chat dengan Autobot AI</span><span class="block text-sm text-slate-500" data-v-5a8eb812${_scopeId}>Respon instan 24/7</span></span>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4 text-slate-400 group-hover:text-cyan-700" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-cyan-700 shadow-sm" }, [
                createVNode(unref(MessageCircle), { class: "h-5 w-5" })
              ]),
              createVNode("span", { class: "min-w-0 flex-1" }, [
                createVNode("span", { class: "block text-sm font-extrabold text-slate-950 group-hover:text-cyan-700" }, "Chat dengan Autobot AI"),
                createVNode("span", { class: "block text-sm text-slate-500" }, "Respon instan 24/7")
              ]),
              createVNode(unref(ArrowRight), { class: "h-4 w-4 text-slate-400 group-hover:text-cyan-700" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section class="relative bg-slate-50 py-16" data-v-5a8eb812><div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8" data-v-5a8eb812><div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" data-v-5a8eb812><div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700" data-v-5a8eb812>`);
      _push(ssrRenderComponent(unref(Building2), { class: "h-6 w-6" }, null, _parent));
      _push(`</div><p class="mt-5 text-sm font-extrabold uppercase tracking-wider text-blue-700" data-v-5a8eb812>Identitas Bisnis</p><h2 class="mt-3 text-2xl font-extrabold tracking-tight text-slate-950" data-v-5a8eb812>autobotws</h2><p class="mt-3 text-sm leading-6 text-slate-600" data-v-5a8eb812> Situs resmi: <span class="font-bold text-slate-950" data-v-5a8eb812>autobot.co.id</span></p><p class="mt-4 text-xs font-extrabold uppercase tracking-wider text-slate-400" data-v-5a8eb812>Legal Entity</p><p class="mt-2 text-sm leading-6 text-slate-600" data-v-5a8eb812><span class="font-bold text-slate-950" data-v-5a8eb812>CV Autobot Wijaya Solution</span></p><p class="mt-1 text-sm text-slate-500" data-v-5a8eb812>[Nomor Legalitas/NIB]</p></div><div class="grid gap-4 sm:grid-cols-2" data-v-5a8eb812><div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" data-v-5a8eb812>`);
      _push(ssrRenderComponent(unref(MapPin), { class: "h-5 w-5 text-[#28767f]" }, null, _parent));
      _push(`<p class="mt-4 text-sm font-extrabold text-slate-950" data-v-5a8eb812>Alamat</p><p class="mt-2 text-sm leading-6 text-slate-600" data-v-5a8eb812>Gg. Bina Warga III Desa No.36, Lubang Buaya, Cipayung, Jakarta Timur 13810, Indonesia</p></div><div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" data-v-5a8eb812>`);
      _push(ssrRenderComponent(unref(Clock), { class: "h-5 w-5 text-[#28767f]" }, null, _parent));
      _push(`<p class="mt-4 text-sm font-extrabold text-slate-950" data-v-5a8eb812>Jam Operasional</p><p class="mt-2 text-sm leading-6 text-slate-600" data-v-5a8eb812>Senin-Jumat, 09.00-17.00 WIB. Chat AI tersedia setiap hari.</p></div><div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2" data-v-5a8eb812>`);
      _push(ssrRenderComponent(unref(Mail), { class: "h-5 w-5 text-[#28767f]" }, null, _parent));
      _push(`<p class="mt-4 text-sm font-extrabold text-slate-950" data-v-5a8eb812>Email Resmi</p><div class="mt-2 grid gap-1 text-sm leading-6 text-slate-600" data-v-5a8eb812><a href="mailto:support@autobot.co.id" class="font-semibold text-blue-700 hover:text-blue-800" data-v-5a8eb812>support@autobot.co.id</a><a href="mailto:admin@autobot.co.id" class="font-semibold text-blue-700 hover:text-blue-800" data-v-5a8eb812>admin@autobot.co.id</a></div></div></div></div></section><section class="bg-white py-16" data-v-5a8eb812><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-v-5a8eb812><div class="rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10" data-v-5a8eb812><div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center" data-v-5a8eb812><div data-v-5a8eb812><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700" data-v-5a8eb812>Mulai dari paket yang tepat</p><h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950" data-v-5a8eb812>Lihat opsi harga sebelum konsultasi.</h2><p class="mt-4 max-w-2xl text-base leading-7 text-slate-600" data-v-5a8eb812> Bandingkan paket produk dan layanan agar diskusi dengan tim kami lebih cepat dan konkret. </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lihat Paket Harga `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Lihat Paket Harga "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a8eb812"]]);

export { contact as default };
//# sourceMappingURL=contact-BuNexx0E.mjs.map
