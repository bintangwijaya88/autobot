import { _ as __nuxt_component_0 } from './nuxt-link-DTwh5LNx.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Tentang Kami \u2014 Autobot",
      description: "Autobot Wijaya Solution \u2014 Spesialis WhatsApp chatbot, blast, dan AI automation berbasis di Jakarta Timur. 9+ tahun pengalaman, 600K+ records di production.",
      ogTitle: "Tentang Autobot Wijaya Solution",
      ogDescription: "Spesialis bot dan automasi bisnis berbasis di Jakarta Timur. WhatsApp chatbot, blast, AI agent, workflow automation.",
      ogImage: "https://autobot.co.id/logo.png",
      ogUrl: "https://autobot.co.id/about"
    });
    const specializations = [
      "WhatsApp Chatbot (AI-powered)",
      "WhatsApp Blast & Broadcast",
      "Workflow Automation Builder",
      "System Integration Middleware",
      "Custom AI Agent Development",
      "Scheduled Bot & Worker",
      "LLM Integration (GPT-4, Claude, Gemini)"
    ];
    const advantages = [
      { icon: "\u{1F512}", title: "Data 100% Terisolasi", desc: "Setiap client mendapat instance eksklusif \u2014 tidak ada data sharing." },
      { icon: "\u{1F916}", title: "AI-Powered", desc: "Chatbot & agent yang cerdas, trainable, dan terus belajar." },
      { icon: "\u26A1", title: "High Performance", desc: "Backend Go & Rust \u2014 cepat, ringan, dan scalable." },
      { icon: "\u{1F6E0}", title: "Full Support", desc: "Garansi bug fix 3 bulan + opsi maintenance retainer." }
    ];
    const team = [
      { name: "Bintang Wijaya", role: "Founder & Lead Developer", img: "/bintang-aws.png" },
      { name: "Sharaztasya Aulia Nurdi", role: "Direktur", img: "/sharaztasya-aws.png" },
      { name: "Irvan Eko Prasetyo", role: "DevOps Master", img: "/len-aws.png" },
      { name: "Tim AI", role: "LLM Integration Specialist", img: "/claude-aws.png" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "prose-dark max-w-3xl" }, _attrs))}><h1 class="text-4xl font-bold text-white mb-2">Autobot Wijaya Solution</h1><p class="text-gray-400 text-lg mb-10">Spesialis Bot &amp; Automasi Bisnis \u2014 Jakarta Timur, Indonesia</p><div class="grid grid-cols-3 gap-4 mb-12"><div class="rounded-2xl border border-white/10 bg-white/3 p-5 text-center"><div class="text-3xl font-bold text-white">9+</div><div class="text-sm text-gray-400 mt-1">Tahun Pengalaman</div></div><div class="rounded-2xl border border-white/10 bg-white/3 p-5 text-center"><div class="text-3xl font-bold text-white">600K+</div><div class="text-sm text-gray-400 mt-1">Records di Production</div></div><div class="rounded-2xl border border-white/10 bg-white/3 p-5 text-center"><div class="text-3xl font-bold text-white">2022</div><div class="text-sm text-gray-400 mt-1">Berdiri</div></div></div><div class="mb-12"><h2 class="text-2xl font-bold text-white mb-4">Galeri Kantor</h2><div class="grid grid-cols-2 sm:grid-cols-3 gap-3"><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<div class="aspect-video rounded-2xl flex flex-col items-center justify-center gap-2" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px dashed rgba(255,255,255,0.12)" })}"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="text-gray-600"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path></svg><span class="text-xs text-gray-600">Foto Kantor ${ssrInterpolate(i)}</span></div>`);
      });
      _push(`<!--]--><div class="aspect-video rounded-2xl flex flex-col items-center justify-center gap-2" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px dashed rgba(255,255,255,0.12)" })}"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="text-gray-600"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><span class="text-xs text-gray-600">Foto Tim</span></div><div class="aspect-video rounded-2xl flex flex-col items-center justify-center gap-2" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px dashed rgba(255,255,255,0.12)" })}"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="text-gray-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><span class="text-xs text-gray-600">Foto Operasional</span></div></div></div><div class="mb-12"><h2 class="text-2xl font-bold text-white mb-4">Tim Kami</h2><div class="grid grid-cols-2 sm:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(team, (member) => {
        _push(`<div class="text-center"><div class="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden" style="${ssrRenderStyle(member.img ? "" : "background: rgba(255,255,255,0.06); border: 1px dashed rgba(255,255,255,0.12);")}">`);
        if (member.img) {
          _push(`<img${ssrRenderAttr("src", member.img)}${ssrRenderAttr("alt", member.name)} class="w-full h-full object-cover">`);
        } else {
          _push(`<div class="w-full h-full flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="text-gray-600"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>`);
        }
        _push(`</div><p class="text-white text-sm font-medium">${ssrInterpolate(member.name)}</p><p class="text-gray-500 text-xs mt-0.5">${ssrInterpolate(member.role)}</p></div>`);
      });
      _push(`<!--]--></div></div><h2 class="text-2xl font-bold text-white mb-3">Visi</h2><p class="text-gray-400 mb-8">Menjadi penyedia solusi automasi bisnis terdepan di Indonesia, membuat setiap bisnis \u2014 dari klinik hingga enterprise \u2014 bisa beroperasi lebih efisien dengan bantuan bot cerdas.</p><h2 class="text-2xl font-bold text-white mb-3">Spesialisasi</h2><ul class="space-y-2 mb-8"><!--[-->`);
      ssrRenderList(specializations, (item) => {
        _push(`<li class="flex items-center gap-3 text-gray-300"><span class="text-blue-400">\u2192</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul><h2 class="text-2xl font-bold text-white mb-3">Keunggulan</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"><!--[-->`);
      ssrRenderList(advantages, (adv) => {
        _push(`<div class="rounded-2xl border border-white/10 bg-white/3 p-4"><div class="text-2xl mb-2">${ssrInterpolate(adv.icon)}</div><h4 class="text-white font-semibold text-sm">${ssrInterpolate(adv.title)}</h4><p class="text-gray-500 text-xs mt-1">${ssrInterpolate(adv.desc)}</p></div>`);
      });
      _push(`<!--]--></div><h2 class="text-2xl font-bold text-white mb-4">Lokasi &amp; Kontak</h2><div class="rounded-2xl border border-white/10 bg-white/3 p-6 mb-8"><div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><div><p class="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Alamat Operasional</p><p class="text-white font-semibold mb-1">Autobot Wijaya Solution</p><p class="text-gray-400 text-sm leading-relaxed"> Gg. Bina Warga III Desa No.36<br> Lubang Buaya, Cipayung<br> Kota Jakarta Timur, DKI Jakarta 13810<br> Indonesia </p><div class="mt-4 w-full h-28 rounded-xl flex flex-col items-center justify-center gap-2" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px dashed rgba(255,255,255,0.10)" })}"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="text-gray-600"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span class="text-xs text-gray-600">Embed Google Maps</span></div></div><div><p class="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Kontak</p><div class="space-y-3"><a href="mailto:support@autobot.co.id" class="flex items-center gap-3 text-sm group"><div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(59,130,246,0.12)" })}"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="text-blue-400"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 7l-10 7L2 7"></path></svg></div><span class="text-gray-400 group-hover:text-white transition-colors">support@autobot.co.id</span></a><a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="flex items-center gap-3 text-sm group"><div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(34,197,94,0.12)" })}"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" class="text-green-400"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg></div><span class="text-gray-400 group-hover:text-white transition-colors">+62 821-6486-7681</span></a><div class="flex items-start gap-3 text-sm"><div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)" })}"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="text-gray-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg></div><span class="text-gray-400 text-sm">Senin\u2013Jumat, 09.00\u201317.00 WIB</span></div></div></div></div></div><div class="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 text-center"><p class="text-white font-medium mb-4">Siap automasi bisnis Anda?</p><div class="flex gap-3 justify-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Chat dengan Kami `);
          } else {
            return [
              createTextVNode(" Chat dengan Kami ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "inline-block px-6 py-3 rounded-xl font-medium transition-colors",
        style: { "border": "1px solid rgba(255,255,255,0.12)", "color": "rgba(255,255,255,0.6)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lihat Harga `);
          } else {
            return [
              createTextVNode(" Lihat Harga ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
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
//# sourceMappingURL=about-DuMkuDr0.mjs.map
