import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
import 'nanoid';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "privacy-policy",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Kebijakan Privasi \u2014 Autobot",
      description: "Kebijakan privasi Autobot Wijaya Solution mengenai pengumpulan, penggunaan, dan perlindungan data pengguna layanan chatbot.",
      ogTitle: "Kebijakan Privasi \u2014 Autobot",
      ogUrl: "https://autobot.co.id/privacy-policy"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl" }, _attrs))}><h1 class="text-4xl font-bold text-white mb-2">Kebijakan Privasi</h1><p class="text-gray-500 text-sm mb-10">Terakhir diperbarui: 25 Mei 2026 \xA0\xB7\xA0 Autobot Wijaya Solution</p><div class="space-y-10 text-gray-300 leading-relaxed"><section><h2 class="text-xl font-semibold text-white mb-3">1. Siapa Kami</h2><p> Autobot Wijaya Solution (&quot;Autobot&quot;, &quot;kami&quot;) adalah perusahaan berbadan hukum yang berkedudukan di Jakarta, Indonesia, bergerak di bidang pengembangan solusi chatbot dan integrasi kecerdasan buatan (AI) untuk bisnis. Situs web ini dapat diakses di <span class="text-blue-400">autobot.co.id</span>. </p></section><section><h2 class="text-xl font-semibold text-white mb-3">2. Data yang Kami Kumpulkan</h2><p class="mb-3">Kami mengumpulkan data berikut saat Anda menggunakan layanan kami:</p><ul class="space-y-2 ml-4"><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> <span><strong class="text-white">Data Akun:</strong> nama, alamat email, nomor WhatsApp yang Anda daftarkan.</span></li><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> <span><strong class="text-white">Data Percakapan:</strong> pesan yang dikirim melalui widget chat atau WhatsApp Bot milik klien kami (bukan untuk keperluan iklan).</span></li><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> <span><strong class="text-white">Data Teknis:</strong> alamat IP, jenis browser, dan log akses untuk keperluan keamanan dan debug.</span></li><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> <span><strong class="text-white">Data Integrasi API:</strong> kunci API yang Anda berikan (OpenAI, Gemini, dll.) disimpan terenkripsi dan tidak pernah kami bagikan kepada pihak ketiga.</span></li></ul></section><section><h2 class="text-xl font-semibold text-white mb-3">3. Bagaimana Kami Menggunakan Data</h2><ul class="space-y-2 ml-4"><li class="flex gap-2"><span class="text-green-400 shrink-0">\u2713</span> Menjalankan dan meningkatkan layanan chatbot Anda.</li><li class="flex gap-2"><span class="text-green-400 shrink-0">\u2713</span> Mengirimkan notifikasi teknis dan informasi layanan.</li><li class="flex gap-2"><span class="text-green-400 shrink-0">\u2713</span> Mendeteksi dan mencegah penyalahgunaan atau penipuan.</li><li class="flex gap-2"><span class="text-red-400 shrink-0">\u2717</span> <strong class="text-white">Kami tidak menjual, menyewakan, atau memperdagangkan data Anda kepada pihak ketiga manapun.</strong></li><li class="flex gap-2"><span class="text-red-400 shrink-0">\u2717</span> Kami tidak menggunakan data percakapan untuk melatih model AI pihak ketiga tanpa persetujuan eksplisit Anda.</li></ul></section><section><h2 class="text-xl font-semibold text-white mb-3">4. Keamanan Data</h2><p class="mb-3"> Kami mengimplementasikan langkah-langkah keamanan teknis dan organisasional yang sesuai industri: </p><ul class="space-y-2 ml-4"><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Enkripsi data saat transit menggunakan TLS 1.3.</li><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Enkripsi data sensitif (kunci API, password) saat tersimpan.</li><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Isolasi data per-klien \u2014 setiap akun memiliki namespace data yang terpisah.</li><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Akses ke data produksi dibatasi hanya pada personil yang berwenang.</li></ul></section><section><h2 class="text-xl font-semibold text-white mb-3">5. Penyedia Layanan Pihak Ketiga</h2><p class="mb-3">Kami menggunakan layanan pihak ketiga berikut untuk mengoperasikan platform:</p><ul class="space-y-2 ml-4"><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> <strong class="text-white">OpenAI / Google Gemini:</strong> Pemrosesan pesan AI. Data dikirimkan sesuai kebijakan privasi masing-masing provider.</li><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> <strong class="text-white">Xendit:</strong> Pemrosesan pembayaran. Data kartu/rekening tidak pernah menyentuh server kami.</li><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> <strong class="text-white">WhatsApp Business API:</strong> Pengiriman pesan via jaringan Meta.</li></ul></section><section><h2 class="text-xl font-semibold text-white mb-3">6. Hak Anda</h2><p class="mb-3">Sesuai dengan regulasi perlindungan data Indonesia, Anda berhak untuk:</p><ul class="space-y-2 ml-4"><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Mengakses data pribadi yang kami miliki tentang Anda.</li><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Meminta koreksi data yang tidak akurat.</li><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Meminta penghapusan data Anda (kecuali data yang wajib kami simpan secara hukum).</li><li class="flex gap-2"><span class="text-blue-400 shrink-0">\u2022</span> Mengajukan keberatan terhadap pemrosesan data untuk keperluan tertentu.</li></ul><p class="mt-3">Untuk menggunakan hak-hak ini, hubungi kami di <a href="mailto:support@autobot.co.id" class="text-blue-400 hover:text-blue-300">support@autobot.co.id</a>.</p></section><section><h2 class="text-xl font-semibold text-white mb-3">7. Penyimpanan Data</h2><p> Data akun aktif disimpan selama langganan berlaku. Setelah langganan berakhir, kami menyimpan data selama 30 hari sebelum dihapus permanen, kecuali data keuangan yang wajib disimpan sesuai peraturan perpajakan Indonesia (5 tahun). </p></section><section><h2 class="text-xl font-semibold text-white mb-3">8. Perubahan Kebijakan</h2><p> Kami dapat memperbarui kebijakan ini sewaktu-waktu. Perubahan material akan dinotifikasikan melalui email terdaftar minimal 14 hari sebelum berlaku. Penggunaan layanan yang berlanjut setelah tanggal efektif merupakan persetujuan Anda terhadap perubahan tersebut. </p></section><section><h2 class="text-xl font-semibold text-white mb-3">9. Kontak</h2><div class="rounded-2xl border border-white/10 bg-white/3 p-6"><p class="text-white font-semibold mb-3">Autobot Wijaya Solution</p><div class="space-y-1.5 text-sm"><p>Gg. Bina Warga III Desa No.36, Lubang Buaya, Cipayung, Jakarta Timur 13810, Indonesia</p><p>Email: <a href="mailto:support@autobot.co.id" class="text-blue-400 hover:text-blue-300">support@autobot.co.id</a></p><p>WhatsApp: <a href="https://wa.me/6282164867681" class="text-green-400 hover:text-green-300">+62 821-6486-7681</a></p></div></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-policy-D_Pf76D7.mjs.map
