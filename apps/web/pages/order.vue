<script setup lang="ts">
definePageMeta({ layout: 'page' })
useSeoMeta({
  title: 'Konsultasi — Autobot',
  description: 'Booking sesi konsultasi 45 menit bersama tim AutobotWS. Rp 50.000 — commitment fee, diskusi kebutuhan AI chatbot & automasi bisnis Anda.',
  ogTitle: 'Booking Konsultasi — AutobotWS',
  ogUrl: 'https://autobot.co.id/order',
})

const PRICE = 50_000

const form = reactive({
  name: '',
  email: '',
  whatsapp: '',
  company: '',
  topic: '',
  notes: '',
})

const submitted = ref(false)
const submitting = ref(false)
const error = ref('')

const fmt = (n: number) => new Intl.NumberFormat('id-ID').format(n)

async function handleSubmit() {
  if (!form.name || !form.whatsapp) {
    error.value = 'Nama dan nomor WhatsApp wajib diisi.'
    return
  }
  error.value = ''
  submitting.value = true

  const msg = encodeURIComponent(
    `Halo AutobotWS! Saya ingin booking sesi konsultasi:\n\n` +
    `Nama: ${form.name}\n` +
    `Email: ${form.email || '-'}\n` +
    `WhatsApp: ${form.whatsapp}\n` +
    `Perusahaan: ${form.company || '-'}\n` +
    `Topik: ${form.topic || '-'}\n` +
    `Catatan: ${form.notes || '-'}\n\n` +
    `Commitment fee Rp 50.000 siap saya transfer setelah konfirmasi jadwal.`
  )

  await new Promise(r => setTimeout(r, 500))
  submitting.value = false
  submitted.value = true

  setTimeout(() => {
    window.open(`https://wa.me/6282164867681?text=${msg}`, '_blank')
  }, 700)
}
</script>

<template>
  <div class="max-w-5xl">
    <NuxtLink to="/pricing" class="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 mb-8 transition-colors">
      ← Kembali ke Harga
    </NuxtLink>

    <template v-if="!submitted">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Booking Sesi Konsultasi</h1>
        <p class="text-gray-400">Diskusikan kebutuhan AI chatbot & automasi bisnis Anda bersama tim kami — 45 menit, fokus, langsung ke solusi.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">

        <!-- Left: Form (3/5) -->
        <div class="lg:col-span-3">
          <div class="rounded-2xl p-6" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
            <h2 class="text-white font-semibold mb-5">Informasi Anda</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs text-gray-400 mb-1.5 font-medium">Nama Lengkap <span class="text-red-400">*</span></label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Budi Santoso"
                    class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                    style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);"
                  />
                </div>
                <div>
                  <label class="block text-xs text-gray-400 mb-1.5 font-medium">Nomor WhatsApp <span class="text-red-400">*</span></label>
                  <input
                    v-model="form.whatsapp"
                    type="tel"
                    placeholder="08123456789"
                    class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                    style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs text-gray-400 mb-1.5 font-medium">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="budi@perusahaan.com"
                    class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                    style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);"
                  />
                </div>
                <div>
                  <label class="block text-xs text-gray-400 mb-1.5 font-medium">Nama Perusahaan</label>
                  <input
                    v-model="form.company"
                    type="text"
                    placeholder="PT Contoh Indonesia"
                    class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                    style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs text-gray-400 mb-1.5 font-medium">Topik Utama Konsultasi</label>
                <input
                  v-model="form.topic"
                  type="text"
                  placeholder="cth: Chatbot WhatsApp untuk customer service toko online"
                  class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                  style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);"
                />
              </div>

              <div>
                <label class="block text-xs text-gray-400 mb-1.5 font-medium">Ceritakan Kebutuhan Anda</label>
                <textarea
                  v-model="form.notes"
                  rows="4"
                  placeholder="Bisnis saya bergerak di bidang... saya butuh chatbot untuk... saat ini kendala saya adalah..."
                  class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);"
                />
              </div>

              <p v-if="error" class="text-red-400 text-sm flex items-center gap-2">
                <span>⚠</span> {{ error }}
              </p>

              <button
                type="submit"
                :disabled="submitting"
                class="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
                style="background: linear-gradient(135deg, #7c3aed, #2563eb); color: white;"
              >
                <span v-if="submitting">Memproses...</span>
                <template v-else>
                  <span>Booking via WhatsApp</span>
                  <span class="opacity-70">→</span>
                </template>
              </button>

              <p class="text-xs text-gray-600 text-center">
                Dengan melanjutkan, Anda menyetujui
                <NuxtLink to="/terms-of-service" class="text-gray-500 hover:text-gray-400 underline">Syarat & Ketentuan</NuxtLink>
                dan <NuxtLink to="/privacy-policy" class="text-gray-500 hover:text-gray-400 underline">Kebijakan Privasi</NuxtLink> kami.
              </p>
            </form>
          </div>
        </div>

        <!-- Right: Summary (2/5) -->
        <div class="lg:col-span-2 space-y-4">

          <!-- Price card -->
          <div class="rounded-2xl p-5" style="background: rgba(124,58,237,0.10); border: 1px solid rgba(124,58,237,0.30);">
            <div class="text-xs text-purple-300 font-semibold uppercase tracking-wider mb-3">Sesi Konsultasi Awal</div>
            <div class="flex items-end gap-2 mb-1">
              <span class="text-4xl font-bold text-white">Rp {{ fmt(PRICE) }}</span>
            </div>
            <div class="text-gray-400 text-sm mb-4">untuk 45 menit · commitment fee</div>
            <div class="border-t border-white/10 pt-4 space-y-2.5">
              <div v-for="item in [
                '45 menit bersama tim AutobotWS',
                'Analisis kebutuhan bisnis Anda',
                'Rekomendasi solusi AI yang tepat',
                'Estimasi biaya & timeline',
                'Commitment fee diperhitungkan ke project',
              ]" :key="item" class="flex items-start gap-2 text-sm">
                <span class="text-purple-400 shrink-0 mt-0.5">✓</span>
                <span class="text-gray-300">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- How it works -->
          <div class="rounded-2xl p-5" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
            <div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Alur Booking</div>
            <ol class="space-y-3">
              <li v-for="(step, i) in [
                'Isi form & kirim via WhatsApp',
                'Tim kami konfirmasi jadwal (maks. 1×24 jam)',
                'Transfer Rp 50.000 setelah jadwal fix',
                'Sesi konsultasi via Google Meet / Zoom',
              ]" :key="i" class="flex items-start gap-3 text-sm">
                <span class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style="background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.5);">{{ i + 1 }}</span>
                <span class="text-gray-400">{{ step }}</span>
              </li>
            </ol>
          </div>

          <!-- Contact shortcut -->
          <div class="rounded-xl p-4" style="background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.18);">
            <p class="text-xs text-gray-400 mb-2">Atau langsung hubungi kami:</p>
            <a href="https://wa.me/6282164867681" target="_blank" rel="noopener"
              class="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors font-medium">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              +62 821-6486-7681
            </a>
          </div>

        </div>
      </div>
    </template>

    <!-- Success state -->
    <template v-else>
      <div class="max-w-lg mx-auto rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center">
        <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style="background: rgba(34,197,94,0.15);">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-white mb-2">Request Terkirim!</h2>
        <p class="text-gray-400 mb-1">Tim kami akan konfirmasi jadwal via WhatsApp</p>
        <p class="text-gray-500 text-sm mb-6">dalam 1×24 jam hari kerja</p>
        <div class="flex gap-3 justify-center flex-wrap">
          <a href="https://wa.me/6282164867681" target="_blank"
            class="px-5 py-2.5 rounded-xl text-sm font-semibold"
            style="background: #22c55e; color: white;">
            Buka WhatsApp
          </a>
          <NuxtLink to="/" class="px-5 py-2.5 rounded-xl text-sm font-medium"
            style="background: rgba(255,255,255,0.08); color: #F0F0F0; border: 1px solid rgba(255,255,255,0.12);">
            Kembali ke Beranda
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>
