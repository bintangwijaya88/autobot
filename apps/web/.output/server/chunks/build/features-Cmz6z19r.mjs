import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useChatStore } from './chat-DwC02ODd.mjs';
import { a as useSeoMeta, d as useRouter } from './server.mjs';
import 'pinia';
import 'nanoid';
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
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "features",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Fitur WaBlastApp \u2014 Autobot",
      description: "Fitur lengkap WaBlastApp: auto-reply, AI multi-provider (GPT-4o, Claude, Gemini), broadcast massal, multi-device WhatsApp, dan 20+ modul bisnis.",
      ogTitle: "Fitur Lengkap WaBlastApp \u2014 Autobot",
      ogDescription: "Auto-reply cerdas, AI integration, blast massal, multi-device WA, dan 20+ modul bisnis dalam satu platform.",
      ogImage: "https://autobot.co.id/logo.png",
      ogUrl: "https://autobot.co.id/features"
    });
    useChatStore();
    useRouter();
    const categories = [
      {
        id: "autoreply",
        label: "Auto-Reply & Rule Engine",
        description: "Balas pesan otomatis berdasarkan aturan fleksibel tanpa coding",
        icon: "\u21A9\uFE0F",
        bgColor: "rgba(34,197,94,0.10)",
        borderColor: "rgba(34,197,94,0.25)",
        labelColor: "#86efac",
        features: [
          { icon: "\u{1F3AF}", label: "Exact Match", desc: "Balas pesan yang persis cocok dengan kata kunci yang ditentukan.", query: "Bagaimana fitur exact match auto-reply bekerja di WaBlastApp?" },
          { icon: "\u{1F50D}", label: "Contains Match", desc: "Deteksi kata kunci di mana saja dalam pesan masuk, tidak harus persis.", query: "Apa bedanya exact match dan contains match di auto-reply WaBlast?" },
          { icon: "\u2699\uFE0F", label: "Regex Pattern", desc: "Rule berbasis ekspresi reguler untuk pencocokan pola pesan yang kompleks.", query: "Apakah WaBlast mendukung regex untuk aturan auto-reply?" },
          { icon: "\u{1F504}", label: "Default Fallback", desc: "Respons default ketika tidak ada rule yang cocok dengan pesan masuk.", query: "Bagaimana cara setup default fallback reply di WaBlastApp?" },
          { icon: "\u{1F464}", label: "Override Per Kontak", desc: "Aturan khusus untuk nomor tertentu \u2014 berbeda dari aturan global.", query: "Bisakah saya set aturan reply yang berbeda untuk kontak tertentu?" },
          { icon: "\u{1F6AB}", label: "Block Mode", desc: "Blokir kontak tertentu agar tidak mendapat respons dari bot.", query: "Bagaimana cara memblokir kontak tertentu dari bot WaBlast?" }
        ]
      },
      {
        id: "ai",
        label: "Integrasi AI Multi-Provider",
        description: "Gunakan OpenAI, Claude, atau Gemini sebagai otak chatbot kamu",
        icon: "\u{1F916}",
        bgColor: "rgba(99,102,241,0.10)",
        borderColor: "rgba(99,102,241,0.22)",
        labelColor: "#a5b4fc",
        features: [
          { icon: "\u{1F9E0}", label: "OpenAI GPT", desc: "Integrasikan GPT-4o atau GPT-4o-mini sebagai AI responder untuk percakapan.", query: "Bagaimana cara mengintegrasikan OpenAI di WaBlastApp?" },
          { icon: "\u26A1", label: "Anthropic Claude", desc: "Gunakan Claude Haiku, Sonnet, atau Opus untuk reply yang lebih natural dan akurat.", query: "Apakah WaBlast mendukung Anthropic Claude sebagai AI provider?" },
          { icon: "\u2728", label: "Google Gemini", desc: "Pilihan AI Google Gemini untuk respons cepat dengan biaya lebih rendah.", query: "Bisa pakai Google Gemini di WaBlastApp?" },
          { icon: "\u{1F4DA}", label: "Knowledge Base (FAQ)", desc: "Upload dokumen, Excel, atau tulis manual sebagai konteks pengetahuan AI.", query: "Bagaimana cara upload knowledge base dan FAQ ke WaBlastApp?" },
          { icon: "\u{1F3AD}", label: "Custom AI Persona", desc: "Atur persona, nama, dan kepribadian AI berbeda untuk setiap kontak atau nomor.", query: "Bisakah saya buat persona AI yang berbeda per kontak di WaBlast?" },
          { icon: "\u{1F4B0}", label: "Estimasi Biaya AI", desc: "Pantau estimasi pemakaian token dan biaya AI secara real-time di dashboard.", query: "Bagaimana cara memantau biaya penggunaan AI di WaBlastApp?" }
        ]
      },
      {
        id: "blast",
        label: "Broadcast & Blast",
        description: "Kirim pesan massal ke ribuan kontak dengan kontrol penuh",
        icon: "\u{1F4E3}",
        bgColor: "rgba(234,179,8,0.08)",
        borderColor: "rgba(234,179,8,0.20)",
        labelColor: "#fde047",
        features: [
          { icon: "\u{1F4E4}", label: "Blast Massal", desc: "Kirim pesan ke banyak nomor sekaligus dengan delay control untuk menghindari spam.", query: "Bagaimana cara blast pesan ke ribuan kontak di WaBlastApp?" },
          { icon: "\u{1F4C5}", label: "Broadcast Terjadwal", desc: "Jadwalkan kampanye broadcast di hari dan jam tertentu secara otomatis.", query: "Bagaimana cara menjadwalkan broadcast di WaBlastApp?" },
          { icon: "\u{1F4CB}", label: "Template Pesan", desc: "Simpan template teks dan media yang bisa digunakan ulang untuk berbagai kampanye.", query: "Bagaimana cara membuat dan menggunakan template pesan di WaBlast?" },
          { icon: "\u{1F5BC}\uFE0F", label: "Media & Attachment", desc: "Kirim gambar, video, dokumen, atau audio dalam pesan broadcast.", query: "Bisakah mengirim gambar atau file dalam broadcast WaBlastApp?" },
          { icon: "\u{1F4CA}", label: "Status Pengiriman", desc: "Pantau status delivered, read, dan gagal untuk setiap pesan yang dikirim.", query: "Bagaimana cara melihat status pengiriman broadcast di WaBlast?" },
          { icon: "\u23F1\uFE0F", label: "Delay Control", desc: "Atur jeda antar pesan untuk meniru pola pengiriman natural dan menghindari ban.", query: "Apa itu delay control di broadcast WaBlast dan kenapa penting?" }
        ]
      },
      {
        id: "management",
        label: "Manajemen Chat & Kontak",
        description: "Kelola percakapan dan database kontak dari satu tempat",
        icon: "\u{1F465}",
        bgColor: "rgba(59,130,246,0.08)",
        borderColor: "rgba(59,130,246,0.20)",
        labelColor: "#93c5fd",
        features: [
          { icon: "\u{1F4AC}", label: "Chat Log Lengkap", desc: "Riwayat semua percakapan dengan filter, search, dan status baca/belum baca.", query: "Bagaimana fitur chat log di WaBlastApp bekerja?" },
          { icon: "\u{1F4F1}", label: "Multi-Device", desc: "Hubungkan beberapa nomor WhatsApp sekaligus dalam satu dashboard.", query: "Berapa banyak nomor WhatsApp yang bisa dihubungkan ke WaBlastApp?" },
          { icon: "\u{1F3F7}\uFE0F", label: "Kelompok Kontak", desc: "Organisir kontak ke dalam grup/label untuk blast yang lebih tertarget.", query: "Bagaimana cara membuat kelompok kontak di WaBlastApp?" },
          { icon: "\u{1F4E5}", label: "Import Kontak Excel", desc: "Import daftar kontak massal dari file Excel atau CSV dengan mudah.", query: "Bagaimana cara import kontak dari Excel ke WaBlastApp?" },
          { icon: "\u{1F504}", label: "Operator Takeover", desc: "Nonaktifkan bot sementara untuk menangani percakapan secara manual per kontak.", query: "Apa itu operator takeover dan bagaimana cara menggunakannya di WaBlast?" },
          { icon: "\u{1F550}", label: "Jam Operasional", desc: "Atur jam aktif bot dan auto-reply di luar jam operasional dengan pesan kustom.", query: "Bagaimana cara mengatur jam operasional bot di WaBlastApp?" }
        ]
      },
      {
        id: "analytics",
        label: "Dashboard & Analytics",
        description: "Pantau performa bot dan aktivitas bisnis secara real-time",
        icon: "\u{1F4CA}",
        bgColor: "rgba(20,184,166,0.08)",
        borderColor: "rgba(20,184,166,0.20)",
        labelColor: "#5eead4",
        features: [
          { icon: "\u{1F4C8}", label: "Statistik Harian", desc: "Pantau jumlah pesan masuk, auto-reply rate, dan AI reply rate setiap hari.", query: "Apa saja statistik yang bisa dipantau di dashboard WaBlastApp?" },
          { icon: "\u26A1", label: "Rata-rata Respons", desc: "Ukur kecepatan rata-rata bot dalam merespons pesan masuk.", query: "Bagaimana cara melihat rata-rata waktu respons di WaBlastApp?" },
          { icon: "\u{1F4C9}", label: "Grafik 7 Hari", desc: "Visualisasi tren aktivitas chat dalam 7 hari terakhir dalam bentuk grafik.", query: "Apakah ada grafik trend di dashboard WaBlastApp?" },
          { icon: "\u{1F514}", label: "Badge Unread", desc: "Counter real-time pesan belum dibaca per kontak dan per device.", query: "Bagaimana sistem notifikasi dan badge unread di WaBlastApp?" },
          { icon: "\u{1F4DD}", label: "Catatan Internal", desc: "Tambahkan catatan internal per sesi dan ringkasan AI otomatis per periode.", query: "Apakah ada fitur catatan internal di WaBlastApp?" },
          { icon: "\u{1F4CB}", label: "Task Management", desc: "Buat dan pantau task untuk operator tim terkait percakapan pelanggan.", query: "Bagaimana fitur task management untuk operator di WaBlastApp?" }
        ]
      }
    ];
    const businessModules = [
      { icon: "\u{1F3E5}", label: "Klinik", sub: "Booking & Rekam Medis", query: "Ceritakan tentang paket modul Klinik di WaBlastApp" },
      { icon: "\u{1F6CD}\uFE0F", label: "Toko / E-Commerce", sub: "Order & Inventory", query: "Ceritakan tentang paket modul Toko untuk e-commerce di WaBlast" },
      { icon: "\u{1F3AF}", label: "CRM", sub: "Pipeline & Leads", query: "Ceritakan tentang paket modul CRM di WaBlastApp" },
      { icon: "\u{1F4B0}", label: "Keuangan", sub: "Invoice & Cash Flow", query: "Ceritakan tentang paket modul Keuangan di WaBlastApp" },
      { icon: "\u{1F477}", label: "HR & Payroll", sub: "Absensi & Gaji", query: "Ceritakan tentang paket modul HR dan Payroll di WaBlast" },
      { icon: "\u{1F3E0}", label: "Properti", sub: "Listing & Tenant", query: "Ceritakan tentang paket modul Properti di WaBlastApp" },
      { icon: "\u{1F37D}\uFE0F", label: "F&B / Restoran", sub: "Menu & Order Meja", query: "Ceritakan tentang paket modul F&B untuk restoran di WaBlast" },
      { icon: "\u{1F3AA}", label: "Event", sub: "Tiket & Registrasi", query: "Ceritakan tentang paket modul Event di WaBlastApp" },
      { icon: "\u{1F3A7}", label: "Helpdesk", sub: "Tiket Support & SLA", query: "Ceritakan tentang paket modul Helpdesk di WaBlastApp" },
      { icon: "\u{1F393}", label: "Pendidikan", sub: "Absensi & Nilai", query: "Ceritakan tentang paket modul Pendidikan di WaBlastApp" },
      { icon: "\u{1F485}", label: "Salon & Spa", sub: "Booking & Loyalty", query: "Ceritakan tentang paket modul Salon & Spa di WaBlastApp" },
      { icon: "\u2708\uFE0F", label: "Travel & Tour", sub: "Paket & Itinerary", query: "Ceritakan tentang paket modul Travel di WaBlastApp" },
      { icon: "\u{1F697}", label: "Otomotif", sub: "Service & Fleet", query: "Ceritakan tentang paket modul Otomotif di WaBlastApp" },
      { icon: "\u{1F4E6}", label: "Logistik", sub: "Resi & Driver", query: "Ceritakan tentang paket modul Logistik di WaBlastApp" },
      { icon: "\u{1F3CB}\uFE0F", label: "Gym & Fitness", sub: "Member & Kelas", query: "Ceritakan tentang paket modul Gym di WaBlastApp" },
      { icon: "\u2696\uFE0F", label: "Legal & Notaris", sub: "Klien & Kasus", query: "Ceritakan tentang paket modul Legal di WaBlastApp" },
      { icon: "\u{1F4E3}", label: "Marketing", sub: "Campaign & A/B Test", query: "Ceritakan tentang paket modul Marketing di WaBlastApp" },
      { icon: "\u{1F91D}", label: "Customer Success", sub: "NPS & Retention", query: "Ceritakan tentang paket modul Customer Success di WaBlast" },
      { icon: "\u{1F4BC}", label: "Sales Automation", sub: "Lead & Quotation", query: "Ceritakan tentang paket modul Sales di WaBlastApp" },
      { icon: "\u{1F48A}", label: "Apotek", sub: "Resep & BPJS", query: "Ceritakan tentang paket modul Apotek di WaBlastApp" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-full px-5 py-8 max-w-5xl mx-auto" }, _attrs))}><div class="mb-8"><p class="text-xs font-semibold tracking-widest uppercase mb-2" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}">Platform</p><h1 class="text-2xl font-bold mb-2" style="${ssrRenderStyle({ "color": "#f0f0f0", "letter-spacing": "-0.02em" })}">Fitur Lengkap WaBlastApp</h1><p class="text-sm" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.40)" })}">Semua kemampuan yang tersedia \u2014 klik fitur untuk langsung tanya ke Autobot AI.</p></div><div class="space-y-10"><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<section><div class="flex items-center gap-3 mb-4"><div class="w-9 h-9 rounded-xl flex items-center justify-center text-[17px] shrink-0" style="${ssrRenderStyle(`background: ${cat.bgColor}; border: 1px solid ${cat.borderColor};`)}">${ssrInterpolate(cat.icon)}</div><div><h2 class="text-[15px] font-semibold" style="${ssrRenderStyle(`color: ${cat.labelColor};`)}">${ssrInterpolate(cat.label)}</h2><p class="text-[12px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">${ssrInterpolate(cat.description)}</p></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5"><!--[-->`);
        ssrRenderList(cat.features, (feat) => {
          _push(`<button class="group text-left p-4 rounded-xl transition-all duration-150" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)", "border": "1px solid rgba(255,255,255,0.07)" })}"><div class="flex items-start gap-3"><span class="text-[18px] leading-none shrink-0 mt-0.5">${ssrInterpolate(feat.icon)}</span><div class="min-w-0 flex-1"><p class="text-[13px] font-semibold mb-1" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">${ssrInterpolate(feat.label)}</p><p class="text-[11.5px] leading-relaxed" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.38)" })}">${ssrInterpolate(feat.desc)}</p></div></div><div class="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"><span class="text-[11px] font-medium" style="${ssrRenderStyle(`color: ${cat.labelColor};`)}">Tanya Autobot</span><svg width="10" height="10" viewBox="0 0 20 20" fill="none" style="${ssrRenderStyle(`color: ${cat.labelColor};`)}"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></button>`);
        });
        _push(`<!--]--></div></section>`);
      });
      _push(`<!--]--><section><div class="flex items-center gap-3 mb-4"><div class="w-9 h-9 rounded-xl flex items-center justify-center text-[17px] shrink-0" style="${ssrRenderStyle({ "background": "rgba(168,85,247,0.12)", "border": "1px solid rgba(168,85,247,0.25)" })}">\u{1F3E2}</div><div><h2 class="text-[15px] font-semibold" style="${ssrRenderStyle({ "color": "#c4b5fd" })}">Paket Modul Bisnis</h2><p class="text-[12px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">20+ modul industri siap pakai \u2014 aktifkan sesuai jenis bisnis kamu</p></div></div><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"><!--[-->`);
      ssrRenderList(businessModules, (mod) => {
        _push(`<button class="group text-left px-3.5 py-3 rounded-xl transition-all duration-150" style="${ssrRenderStyle({ "background": "rgba(168,85,247,0.05)", "border": "1px solid rgba(168,85,247,0.15)" })}"><div class="flex items-center gap-2.5"><span class="text-[18px] leading-none shrink-0">${ssrInterpolate(mod.icon)}</span><div class="min-w-0"><p class="text-[12.5px] font-semibold truncate" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">${ssrInterpolate(mod.label)}</p><p class="text-[11px] truncate" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">${ssrInterpolate(mod.sub)}</p></div></div></button>`);
      });
      _push(`<!--]--></div></section></div><div class="mt-10 p-5 rounded-2xl text-center" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.08)", "border": "1px solid rgba(99,102,241,0.18)" })}"><p class="text-sm font-semibold mb-1" style="${ssrRenderStyle({ "color": "#a5b4fc" })}">Butuh fitur yang belum ada di daftar ini?</p><p class="text-xs mb-3" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.40)" })}">Autobot juga menerima pengembangan custom di luar paket yang tersedia.</p><button class="px-5 py-2 rounded-xl text-[13px] font-semibold transition-all" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.25)", "border": "1px solid rgba(99,102,241,0.35)", "color": "#c4b5fd" })}"> Diskusikan Kebutuhan Kamu \u2192 </button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/features.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=features-Cmz6z19r.mjs.map
