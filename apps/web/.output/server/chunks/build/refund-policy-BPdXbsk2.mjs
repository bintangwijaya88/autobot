import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "refund-policy",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Kebijakan Pengembalian Dana \u2014 autobotws",
      description: "Kebijakan refund dan pengembalian dana layanan autobotws (CV Autobot Wijaya Solution).",
      ogTitle: "Kebijakan Pengembalian Dana \u2014 autobotws",
      ogUrl: "https://autobot.co.id/refund-policy"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl" }, _attrs))}><h1 class="text-4xl font-bold text-white mb-2">Kebijakan Pengembalian Dana</h1><p class="text-gray-500 text-sm mb-10">Terakhir diperbarui: 25 Mei 2026 \xA0\xB7\xA0 autobotws \xB7 CV Autobot Wijaya Solution</p><div class="space-y-10 text-gray-300 leading-relaxed"><div class="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6"><h2 class="text-white font-semibold mb-2">Ringkasan Kebijakan</h2><p class="text-sm"> Kami berkomitmen pada kepuasan klien. Kebijakan refund kami berfokus pada <strong class="text-white">kegagalan layanan di pihak kami</strong>, bukan pada preferensi subjektif. Baca rincian di bawah untuk memahami kondisi yang memenuhi syarat. </p></div><section><h2 class="text-xl font-semibold text-white mb-3">1. Kondisi yang Memenuhi Syarat Refund</h2><p class="mb-3">Pengembalian dana <strong class="text-white">penuh</strong> diberikan jika:</p><ul class="space-y-3 ml-4"><li class="flex gap-3 p-3 rounded-xl border border-green-500/20 bg-green-500/5"><span class="text-green-400 shrink-0">\u2713</span><div><p class="text-white text-sm font-medium">Kegagalan Sistem Permanen</p><p class="text-sm mt-0.5">Layanan tidak dapat diakses lebih dari 72 jam berturut-turut akibat kegagalan infrastruktur kami, dan kami tidak dapat memperbaikinya.</p></div></li><li class="flex gap-3 p-3 rounded-xl border border-green-500/20 bg-green-500/5"><span class="text-green-400 shrink-0">\u2713</span><div><p class="text-white text-sm font-medium">Pembatalan dalam 3 Hari Pertama</p><p class="text-sm mt-0.5">Jika Anda membatalkan dalam 3 hari kalender sejak aktivasi pertama <strong>dan belum menggunakan fitur utama</strong> (pengiriman pesan, aktivasi bot), kami memberikan refund penuh.</p></div></li><li class="flex gap-3 p-3 rounded-xl border border-green-500/20 bg-green-500/5"><span class="text-green-400 shrink-0">\u2713</span><div><p class="text-white text-sm font-medium">Penagihan Ganda / Kesalahan Teknis</p><p class="text-sm mt-0.5">Terjadi penagihan ganda atau kesalahan nominal yang dapat diverifikasi dari catatan sistem kami.</p></div></li></ul></section><section><h2 class="text-xl font-semibold text-white mb-3">2. Kondisi yang Tidak Memenuhi Syarat Refund</h2><ul class="space-y-3 ml-4"><li class="flex gap-3 p-3 rounded-xl border border-red-500/20 bg-red-500/5"><span class="text-red-400 shrink-0">\u2717</span><div><p class="text-white text-sm font-medium">Layanan Sudah Aktif Digunakan</p><p class="text-sm mt-0.5">Kami tidak melayani pengembalian dana jika layanan telah aktif digunakan \u2014 termasuk jika bot sudah menerima pesan, kuota sudah dikonsumsi, atau fitur sudah diakses lebih dari 3 hari.</p></div></li><li class="flex gap-3 p-3 rounded-xl border border-red-500/20 bg-red-500/5"><span class="text-red-400 shrink-0">\u2717</span><div><p class="text-white text-sm font-medium">Perubahan Kebutuhan Bisnis</p><p class="text-sm mt-0.5">Perubahan keputusan internal klien, bukan kegagalan layanan kami.</p></div></li><li class="flex gap-3 p-3 rounded-xl border border-red-500/20 bg-red-500/5"><span class="text-red-400 shrink-0">\u2717</span><div><p class="text-white text-sm font-medium">Gangguan Layanan Pihak Ketiga</p><p class="text-sm mt-0.5">Gangguan dari Meta (WhatsApp), OpenAI, Google Gemini, atau infrastruktur cloud di luar kendali kami.</p></div></li><li class="flex gap-3 p-3 rounded-xl border border-red-500/20 bg-red-500/5"><span class="text-red-400 shrink-0">\u2717</span><div><p class="text-white text-sm font-medium">Pelanggaran Syarat &amp; Ketentuan</p><p class="text-sm mt-0.5">Akun yang ditangguhkan akibat pelanggaran kebijakan penggunaan (spam, aktivitas ilegal) tidak memenuhi syarat refund.</p></div></li></ul></section><section><h2 class="text-xl font-semibold text-white mb-3">3. Kredit Layanan (Service Credit)</h2><p class="mb-3"> Untuk gangguan layanan yang tidak memenuhi syarat refund tunai, kami menawarkan <strong class="text-white">kredit layanan</strong> yang dapat digunakan untuk memperpanjang masa berlangganan: </p><div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b border-white/10"><th class="py-2.5 pr-6 text-left text-gray-400 font-medium">Durasi Gangguan</th><th class="py-2.5 text-left text-gray-400 font-medium">Kredit Diberikan</th></tr></thead><tbody class="divide-y divide-white/5"><tr><td class="py-2.5 pr-6 text-white">4 \u2013 24 jam</td><td class="py-2.5 text-green-400">1 hari gratis</td></tr><tr><td class="py-2.5 pr-6 text-white">24 \u2013 72 jam</td><td class="py-2.5 text-green-400">3 hari gratis</td></tr><tr><td class="py-2.5 pr-6 text-white">&gt; 72 jam (kegagalan permanen)</td><td class="py-2.5 text-green-400">Refund penuh bulan berjalan</td></tr></tbody></table></div></section><section><h2 class="text-xl font-semibold text-white mb-3">4. Cara Mengajukan Refund</h2><ol class="space-y-3 ml-4 list-decimal list-inside"><li class="text-gray-300">Kirim email ke <a href="mailto:support@autobot.co.id" class="text-blue-400 hover:text-blue-300">support@autobot.co.id</a> dengan subjek: <code class="text-xs bg-white/10 px-1.5 py-0.5 rounded">REFUND - [Nama Akun] - [Tanggal]</code></li><li class="text-gray-300">Sertakan bukti pembayaran (nomor invoice/order) dan penjelasan singkat alasan refund.</li><li class="text-gray-300">Tim kami akan merespons dalam 2 hari kerja untuk mengkonfirmasi kelayakan.</li><li class="text-gray-300">Jika disetujui, dana dikembalikan ke metode pembayaran asal dalam 5\u201314 hari kerja (bergantung pada bank/provider pembayaran).</li></ol></section><section><h2 class="text-xl font-semibold text-white mb-3">5. Kontak</h2><div class="rounded-2xl border border-white/10 bg-white/3 p-6"><p class="text-white font-semibold mb-1">autobotws \u2014 Tim Support</p><p class="text-gray-400 text-sm mb-3">CV Autobot Wijaya Solution</p><div class="space-y-1.5 text-sm"><p>Email: <a href="mailto:support@autobot.co.id" class="text-blue-400 hover:text-blue-300">support@autobot.co.id</a></p><p>WhatsApp: <a href="https://wa.me/6282164867681" class="text-green-400 hover:text-green-300">+62 821-6486-7681</a></p><p class="text-gray-500 mt-2 text-xs">Jam operasional: Senin\u2013Jumat, 09.00\u201317.00 WIB</p></div></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/refund-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=refund-policy-BPdXbsk2.mjs.map
