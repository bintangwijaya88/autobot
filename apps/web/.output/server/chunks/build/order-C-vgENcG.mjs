import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, ref, computed, reactive, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrLooseContain } from 'vue/server-renderer';
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

const PRICE = 5e4;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "order",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Booking Konsultasi \u2014 AutobotWS",
      description: "Pilih topik, isi form, dan bayar Rp 50.000 untuk sesi konsultasi 45 menit bersama tim AutobotWS.",
      ogTitle: "Booking Konsultasi \u2014 AutobotWS",
      ogUrl: "https://autobot.co.id/order"
    });
    const fmt = (n) => new Intl.NumberFormat("id-ID").format(n);
    const step = ref(1);
    const topics = [
      { id: "klinik", icon: "\u{1F3E5}", label: "Chatbot Klinik / RS", desc: "Booking appointment, info jadwal dokter, follow-up pasien" },
      { id: "ecommerce", icon: "\u{1F6D2}", label: "Chatbot Toko Online", desc: "CS otomatis, cek stok, tracking order, notif pembayaran" },
      { id: "cs", icon: "\u{1F4AC}", label: "Customer Service Otomatis", desc: "Auto-reply 24/7, FAQ, eskalasi ke agen manusia" },
      { id: "fnb", icon: "\u{1F354}", label: "Chatbot F&B / Restoran", desc: "Reservasi meja, menu digital, promo & loyalty program" },
      { id: "blast", icon: "\u{1F4E3}", label: "WhatsApp Blast & Marketing", desc: "Broadcast promo, segmentasi kontak, template massal" },
      { id: "ai-agent", icon: "\u{1F916}", label: "Custom AI Agent", desc: "AI agent khusus bisnis Anda, deploy ke WA / web / API" },
      { id: "workflow", icon: "\u26A1", label: "Workflow & Automasi Proses", desc: "Integrasi sistem, scheduled task, notifikasi otomatis" },
      { id: "hr", icon: "\u{1F3E2}", label: "HR & Internal Tools", desc: "Absensi, request cuti, pengumuman, FAQ karyawan" },
      { id: "edu", icon: "\u{1F393}", label: "Chatbot Edukasi / Kursus", desc: "Pendaftaran kursus, reminder belajar, quiz interaktif" },
      { id: "other", icon: "\u270F\uFE0F", label: "Kebutuhan Lainnya", desc: "Ceritakan kebutuhan spesifik Anda kepada kami" }
    ];
    const selectedTopic = ref("");
    const selectedTopicLabel = computed(() => {
      var _a, _b;
      return (_b = (_a = topics.find((t) => t.id === selectedTopic.value)) == null ? void 0 : _a.label) != null ? _b : "";
    });
    const form = reactive({ name: "", whatsapp: "", email: "", company: "", notes: "" });
    const formError = ref("");
    const termsAccepted = ref(false);
    const needSuggestions = [
      "Chatbot WhatsApp",
      "Broadcast / Blast",
      "Auto-reply",
      "Integrasi API",
      "Workflow Automation",
      "AI Agent",
      "CRM / Sales",
      "Klinik / RS",
      "E-commerce",
      "Custom Development"
    ];
    const selectedNeeds = ref([]);
    const selectedNeedsLabel = computed(() => selectedNeeds.value.join(", "));
    const paymentBusy = ref(false);
    const paymentError = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 mb-8 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u2190 Kembali ke Harga `);
          } else {
            return [
              createTextVNode(" \u2190 Kembali ke Harga ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-0 mb-10 max-w-sm"><!--[-->`);
      ssrRenderList(["Pilih Topik", "Detail Booking", "Pembayaran"], (s, i) => {
        _push(`<!--[--><div class="flex items-center gap-2"><div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all" style="${ssrRenderStyle(unref(step) > i + 1 ? "background: #22c55e; color: white;" : unref(step) === i + 1 ? "background: #7c3aed; color: white;" : "background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.3);")}">`);
        if (unref(step) > i + 1) {
          _push(`<svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M4 10l4.5 4.5L16 6" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
        } else {
          _push(`<span>${ssrInterpolate(i + 1)}</span>`);
        }
        _push(`</div><span class="text-xs font-medium transition-colors" style="${ssrRenderStyle(unref(step) === i + 1 ? "color: #F0F0F0;" : unref(step) > i + 1 ? "color: #22c55e;" : "color: rgba(255,255,255,0.25);")}">${ssrInterpolate(s)}</span></div>`);
        if (i < 2) {
          _push(`<div class="flex-1 mx-3 h-px" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.08)", "min-width": "20px" })}"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
      if (unref(step) === 1) {
        _push(`<!--[--><div class="mb-8"><h1 class="text-3xl font-bold text-white mb-2">Pilih Topik Konsultasi</h1><p class="text-gray-400">Kami akan mempersiapkan sesi 45 menit yang fokus sesuai kebutuhan bisnis Anda.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-8"><!--[-->`);
        ssrRenderList(topics, (t) => {
          _push(`<button class="text-left p-4 rounded-2xl transition-all duration-150 active:scale-[0.98] group" style="${ssrRenderStyle(unref(selectedTopic) === t.id ? "background: rgba(124,58,237,0.18); border: 1.5px solid rgba(124,58,237,0.6);" : "background: rgba(255,255,255,0.03); border: 1.5px solid rgba(255,255,255,0.08);")}"><div class="text-2xl mb-2 leading-none">${ssrInterpolate(t.icon)}</div><p class="text-sm font-semibold mb-1 transition-colors" style="${ssrRenderStyle(unref(selectedTopic) === t.id ? "color: #c4b5fd;" : "color: #F0F0F0;")}">${ssrInterpolate(t.label)}</p><p class="text-xs leading-relaxed" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.38)" })}">${ssrInterpolate(t.desc)}</p>`);
          if (unref(selectedTopic) === t.id) {
            _push(`<div class="mt-2.5 flex items-center gap-1"><svg width="13" height="13" viewBox="0 0 20 20" fill="none"><path d="M4 10l4.5 4.5L16 6" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="text-xs font-medium" style="${ssrRenderStyle({ "color": "#a78bfa" })}">Dipilih</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div><div class="flex items-center justify-between">`);
        if (!unref(selectedTopic)) {
          _push(`<p class="text-sm text-gray-500">Pilih salah satu topik untuk melanjutkan</p>`);
        } else {
          _push(`<p class="text-sm text-gray-300"> Topik dipilih: <span class="text-purple-300 font-medium">${ssrInterpolate(unref(selectedTopicLabel))}</span></p>`);
        }
        _push(`<button${ssrIncludeBooleanAttr(!unref(selectedTopic)) ? " disabled" : ""} class="ml-auto px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c3aed, #2563eb)", "color": "white" })}"> Lanjut ke Form <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><!--]-->`);
      } else if (unref(step) === 2) {
        _push(`<!--[--><div class="mb-8"><h1 class="text-3xl font-bold text-white mb-2">Detail Booking</h1><p class="text-gray-400"> Topik: <span class="text-purple-300 font-medium">${ssrInterpolate(unref(selectedTopicLabel))}</span><button class="ml-2 text-xs text-gray-600 hover:text-gray-400 underline transition-colors">Ubah</button></p></div><div class="grid grid-cols-1 lg:grid-cols-5 gap-8"><div class="lg:col-span-3"><div class="rounded-2xl p-6" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(255,255,255,0.08)" })}"><h2 class="text-white font-semibold mb-5">Informasi Anda</h2><div class="space-y-4"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-xs text-gray-400 mb-1.5 font-medium">Nama Lengkap <span class="text-red-400">*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Budi Santoso" class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-purple-500/50 transition-all" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div><div><label class="block text-xs text-gray-400 mb-1.5 font-medium">Nomor WhatsApp <span class="text-red-400">*</span></label><input${ssrRenderAttr("value", unref(form).whatsapp)} type="tel" placeholder="08123456789" class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-purple-500/50 transition-all" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-xs text-gray-400 mb-1.5 font-medium">Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="budi@perusahaan.com" class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-purple-500/50 transition-all" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div><div><label class="block text-xs text-gray-400 mb-1.5 font-medium">Nama Perusahaan</label><input${ssrRenderAttr("value", unref(form).company)} type="text" placeholder="PT Contoh Indonesia" class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-purple-500/50 transition-all" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div></div><div><label class="block text-xs text-gray-400 mb-1.5 font-medium">Ceritakan Kebutuhan Anda</label><div class="mb-3 flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(needSuggestions, (need) => {
          _push(`<button type="button" class="rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150 active:scale-[0.98]" style="${ssrRenderStyle(unref(selectedNeeds).includes(need) ? "background: rgba(124,58,237,0.22); border: 1px solid rgba(124,58,237,0.55); color: #e9d5ff;" : "background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); color: rgba(255,255,255,0.55);")}">${ssrInterpolate(need)}</button>`);
        });
        _push(`<!--]--></div><p class="mb-2 text-[11.5px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.36)" })}"> Pilih satu atau beberapa tag kebutuhan, lalu tambahkan detail sendiri di kolom bawah. </p><textarea rows="4" placeholder="Bisnis saya bergerak di bidang... saya butuh chatbot untuk... kendala saya saat ini adalah..." class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-purple-500/50 transition-all resize-none" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.10)" })}">${ssrInterpolate(unref(form).notes)}</textarea>`);
        if (unref(selectedNeeds).length) {
          _push(`<div class="mt-3 rounded-2xl p-3" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "border": "1px solid rgba(124,58,237,0.16)" })}"><p class="text-[11px] font-semibold uppercase tracking-wider mb-2" style="${ssrRenderStyle({ "color": "#c4b5fd" })}">Tag kebutuhan terpilih</p><div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(unref(selectedNeeds), (need) => {
            _push(`<span class="rounded-full px-3 py-1 text-[11px] font-medium" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.08)", "color": "#f5f3ff", "border": "1px solid rgba(255,255,255,0.12)" })}">${ssrInterpolate(need)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(formError)) {
          _push(`<p class="text-red-400 text-sm flex items-center gap-2">\u26A0 ${ssrInterpolate(unref(formError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex gap-3 pt-1"><button class="px-5 py-2.5 rounded-xl text-sm font-medium transition-all" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)", "color": "rgba(255,255,255,0.6)", "border": "1px solid rgba(255,255,255,0.10)" })}"> \u2190 Kembali </button><button class="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c3aed, #2563eb)", "color": "white" })}"> Lanjut ke Pembayaran <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><label class="flex items-start gap-3 rounded-2xl p-4" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" })}"><input${ssrIncludeBooleanAttr(Array.isArray(unref(termsAccepted)) ? ssrLooseContain(unref(termsAccepted), null) : unref(termsAccepted)) ? " checked" : ""} type="checkbox" class="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/40"><div class="min-w-0"><p class="text-sm font-semibold text-white"> Saya setuju dengan syarat konsultasi </p><p class="mt-1 text-xs leading-relaxed" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.42)" })}"> Fee ini <strong class="text-white/75">tidak dapat direfund</strong>. Resume pembahasan hasil meeting dan hasil analisis kebutuhan dalam bentuk PDF akan dikirimkan paling lama <strong class="text-white/75">7 hari kerja</strong> setelah sesi selesai dan seluruh data pendukung diterima. Untuk keamanan, pastikan scope, referensi, dan PIC yang hadir sudah disiapkan sebelum sesi agar analisis lebih akurat. </p></div></label><p class="text-xs text-gray-600 text-center"> Dengan melanjutkan, Anda menyetujui `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/terms-of-service",
          class: "text-gray-500 hover:text-gray-400 underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Syarat &amp; Ketentuan`);
            } else {
              return [
                createTextVNode("Syarat & Ketentuan")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` kami. </p></div></div></div><div class="lg:col-span-2 space-y-4"><div class="rounded-2xl p-5" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.10)", "border": "1px solid rgba(124,58,237,0.30)" })}"><div class="text-xs text-purple-300 font-semibold uppercase tracking-wider mb-3">Ringkasan</div><div class="flex items-end gap-2 mb-1"><span class="text-4xl font-bold text-white">Rp ${ssrInterpolate(fmt(PRICE))}</span></div><div class="text-gray-400 text-sm mb-4">untuk 45 menit \xB7 commitment fee</div><div class="border-t border-white/10 pt-4 space-y-2.5"><div class="flex items-start gap-2 text-sm"><span class="text-purple-300 text-xs font-medium shrink-0 mt-0.5">TOPIK</span><span class="text-white font-medium">${ssrInterpolate(unref(selectedTopicLabel))}</span></div><!--[-->`);
        ssrRenderList([
          "45 menit bersama tim AutobotWS",
          "Analisis kebutuhan bisnis Anda",
          "Resume pembahasan meeting dikirim via PDF",
          "Analisis kebutuhan bisnis dalam PDF",
          "Rekomendasi solusi AI yang tepat",
          "Estimasi biaya & timeline project",
          "Dikirim maksimal 7 hari kerja setelah sesi"
        ], (item) => {
          _push(`<div class="flex items-start gap-2 text-sm"><span class="text-purple-400 shrink-0 mt-0.5">\u2713</span><span class="text-gray-300">${ssrInterpolate(item)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="rounded-2xl p-5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(255,255,255,0.08)" })}"><div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Alur Booking</div><ol class="space-y-3"><!--[-->`);
        ssrRenderList(["Pilih topik & isi form", "Bayar Rp 50.000 via QRIS", "Tim kami konfirmasi jadwal (maks. 1\xD724 jam)", "Sesi konsultasi via Google Meet / Zoom"], (s, i) => {
          _push(`<li class="flex items-start gap-3 text-sm"><span class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5" style="${ssrRenderStyle(i < 2 ? "background: rgba(124,58,237,0.25); color: #c4b5fd;" : "background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.5);")}">${ssrInterpolate(i + 1)}</span><span style="${ssrRenderStyle(i < 2 ? "color: rgba(255,255,255,0.7);" : "color: rgba(255,255,255,0.4);")}">${ssrInterpolate(s)}</span></li>`);
        });
        _push(`<!--]--></ol></div></div></div><!--]-->`);
      } else if (unref(step) === 3) {
        _push(`<!--[--><div class="mb-8"><h1 class="text-3xl font-bold text-white mb-2">Pembayaran Xendit</h1><p class="text-gray-400"> Kami akan membuat invoice resmi Xendit untuk nominal commitment fee Rp ${ssrInterpolate(fmt(PRICE))}. Setelah invoice terbuka, selesaikan pembayaran di halaman Xendit. </p></div><div class="grid grid-cols-1 lg:grid-cols-5 gap-8"><div class="lg:col-span-3 space-y-4"><div class="rounded-2xl p-6" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(255,255,255,0.10)" })}"><div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Checkout Resmi</div><h2 class="text-white text-2xl font-semibold mb-3">Buka halaman pembayaran Xendit</h2><p class="text-sm text-gray-400 leading-relaxed mb-5"> Setelah invoice dibuat, Anda akan diarahkan ke checkout Xendit yang mendukung transfer bank, e-wallet, dan QRIS sesuai channel yang aktif di akun Anda. </p><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5"><div class="rounded-2xl p-4" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "border": "1px solid rgba(124,58,237,0.18)" })}"><div class="text-xs text-purple-300 font-semibold uppercase tracking-wider mb-1">Nama</div><div class="text-sm text-white font-medium">${ssrInterpolate(unref(form).name)}</div></div><div class="rounded-2xl p-4" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "border": "1px solid rgba(124,58,237,0.18)" })}"><div class="text-xs text-purple-300 font-semibold uppercase tracking-wider mb-1">Topik</div><div class="text-sm text-white font-medium">${ssrInterpolate(unref(selectedTopicLabel))}</div></div><div class="rounded-2xl p-4" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" })}"><div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">WhatsApp</div><div class="text-sm text-white font-medium">${ssrInterpolate(unref(form).whatsapp)}</div></div><div class="rounded-2xl p-4" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" })}"><div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Email</div><div class="text-sm text-white font-medium">${ssrInterpolate(unref(form).email)}</div></div></div><div class="rounded-xl p-4 flex items-start gap-3 mb-5" style="${ssrRenderStyle({ "background": "rgba(234,179,8,0.06)", "border": "1px solid rgba(234,179,8,0.18)" })}"><span class="text-yellow-400 shrink-0 text-base leading-none mt-0.5">\u2139</span><p class="text-sm text-yellow-200/80 leading-relaxed"> Pastikan popup tidak diblokir browser. Jika invoice gagal dibuat, kami tampilkan pesan error dan Anda tetap bisa lanjut lewat WhatsApp. </p></div>`);
        if (unref(paymentError)) {
          _push(`<p class="mb-4 text-sm text-red-300 rounded-xl px-4 py-3" style="${ssrRenderStyle({ "background": "rgba(239,68,68,0.08)", "border": "1px solid rgba(239,68,68,0.18)" })}">${ssrInterpolate(unref(paymentError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex gap-3"><button class="px-5 py-3 rounded-xl text-sm font-medium transition-all" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)", "color": "rgba(255,255,255,0.6)", "border": "1px solid rgba(255,255,255,0.10)" })}"> \u2190 Kembali </button><button${ssrIncludeBooleanAttr(unref(paymentBusy)) ? " disabled" : ""} class="flex-1 py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c3aed, #2563eb)", "color": "white" })}">`);
        if (unref(paymentBusy)) {
          _push(`<svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity="0.25" stroke-width="3"></circle><path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${ssrInterpolate(unref(paymentBusy) ? "Membuat Invoice..." : "Buat Invoice Xendit")}</span></button></div></div></div><div class="lg:col-span-2 space-y-4"><div class="rounded-2xl p-5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(255,255,255,0.10)" })}"><div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">Ringkasan Order</div><div class="space-y-3 text-sm"><div class="flex justify-between"><span class="text-gray-400">Layanan</span><span class="text-white font-medium">Sesi Konsultasi 45 min</span></div><div class="flex justify-between"><span class="text-gray-400">Topik</span><span class="text-white font-medium text-right max-w-[60%]">${ssrInterpolate(unref(selectedTopicLabel))}</span></div><div class="flex justify-between"><span class="text-gray-400">Nama</span><span class="text-white">${ssrInterpolate(unref(form).name)}</span></div><div class="flex justify-between"><span class="text-gray-400">WhatsApp</span><span class="text-white">${ssrInterpolate(unref(form).whatsapp)}</span></div>`);
        if (unref(selectedNeeds).length) {
          _push(`<div class="flex justify-between gap-4"><span class="text-gray-400">Kebutuhan</span><span class="text-white text-right max-w-[60%]">${ssrInterpolate(unref(selectedNeedsLabel))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).company) {
          _push(`<div class="flex justify-between"><span class="text-gray-400">Perusahaan</span><span class="text-white">${ssrInterpolate(unref(form).company)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="border-t border-white/10 pt-3 flex justify-between"><span class="text-gray-300 font-semibold">Total</span><span class="text-white font-bold text-lg">Rp ${ssrInterpolate(fmt(PRICE))}</span></div></div></div><div class="rounded-2xl p-5 space-y-2.5" style="${ssrRenderStyle({ "background": "rgba(34,197,94,0.06)", "border": "1px solid rgba(34,197,94,0.18)" })}"><div class="text-xs text-green-400 font-semibold uppercase tracking-wider mb-1">Yang Anda Dapatkan</div><!--[-->`);
        ssrRenderList([
          "Checkout resmi via Xendit",
          "45 menit sesi 1-on-1",
          "Analisis kebutuhan bisnis",
          "Resume pembahasan hasil meeting",
          "Dikirim maksimal 7 hari kerja",
          "Fee tidak dapat direfund"
        ], (item) => {
          _push(`<div class="flex items-center gap-2 text-sm"><span class="text-green-400 shrink-0">\u2713</span><span class="text-gray-300">${ssrInterpolate(item)}</span></div>`);
        });
        _push(`<!--]--></div></div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=order-C-vgENcG.mjs.map
