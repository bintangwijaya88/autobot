<script setup lang="ts">
definePageMeta({ layout: 'page-wide' })
useSeoMeta({
  title: 'Booking Konsultasi — AutobotWS',
  description: 'Pilih topik, isi form, dan bayar Rp 50.000 untuk sesi konsultasi 45 menit bersama tim AutobotWS.',
  ogTitle: 'Booking Konsultasi — AutobotWS',
  ogUrl: 'https://autobot.co.id/order',
})

const PRICE = 50_000
const fmt = (n: number) => new Intl.NumberFormat('id-ID').format(n)

// ── Step state ────────────────────────────────────────────────────────────────
const step = ref<1 | 2 | 3>(1)

// ── Step 1: Topic ─────────────────────────────────────────────────────────────
const topics = [
  { id: 'klinik',      icon: '🏥', label: 'Chatbot Klinik / RS',         desc: 'Booking appointment, info jadwal dokter, follow-up pasien' },
  { id: 'ecommerce',   icon: '🛒', label: 'Chatbot Toko Online',          desc: 'CS otomatis, cek stok, tracking order, notif pembayaran' },
  { id: 'cs',          icon: '💬', label: 'Customer Service Otomatis',     desc: 'Auto-reply 24/7, FAQ, eskalasi ke agen manusia' },
  { id: 'fnb',         icon: '🍔', label: 'Chatbot F&B / Restoran',        desc: 'Reservasi meja, menu digital, promo & loyalty program' },
  { id: 'blast',       icon: '📣', label: 'WhatsApp Blast & Marketing',    desc: 'Broadcast promo, segmentasi kontak, template massal' },
  { id: 'ai-agent',    icon: '🤖', label: 'Custom AI Agent',               desc: 'AI agent khusus bisnis Anda, deploy ke WA / web / API' },
  { id: 'workflow',    icon: '⚡', label: 'Workflow & Automasi Proses',    desc: 'Integrasi sistem, scheduled task, notifikasi otomatis' },
  { id: 'hr',          icon: '🏢', label: 'HR & Internal Tools',           desc: 'Absensi, request cuti, pengumuman, FAQ karyawan' },
  { id: 'edu',         icon: '🎓', label: 'Chatbot Edukasi / Kursus',      desc: 'Pendaftaran kursus, reminder belajar, quiz interaktif' },
  { id: 'other',       icon: '✏️', label: 'Kebutuhan Lainnya',             desc: 'Ceritakan kebutuhan spesifik Anda kepada kami' },
]

const selectedTopic = ref('')
const selectedTopicLabel = computed(() => topics.find(t => t.id === selectedTopic.value)?.label ?? '')

function selectTopic(id: string) {
  selectedTopic.value = id
}

function goToStep2() {
  if (!selectedTopic.value) return
  step.value = 2
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ── Step 2: Form ──────────────────────────────────────────────────────────────
const form = reactive({ name: '', whatsapp: '', email: '', company: '', notes: '' })
const formError = ref('')

function goToCheckout() {
  if (!form.name || !form.whatsapp) {
    formError.value = 'Nama dan nomor WhatsApp wajib diisi.'
    return
  }
  formError.value = ''
  step.value = 3
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ── Step 3: Checkout ──────────────────────────────────────────────────────────
const paid = ref(false)

function confirmPayment() {
  paid.value = true
  const msg = encodeURIComponent(
    `Halo AutobotWS! Saya sudah transfer booking konsultasi:\n\n` +
    `Nama: ${form.name}\n` +
    `WhatsApp: ${form.whatsapp}\n` +
    `Email: ${form.email || '-'}\n` +
    `Perusahaan: ${form.company || '-'}\n` +
    `Topik: ${selectedTopicLabel.value}\n` +
    `Catatan: ${form.notes || '-'}\n\n` +
    `Nominal: Rp ${fmt(PRICE)}\n` +
    `[Lampirkan bukti transfer/screenshot QRIS]`
  )
  setTimeout(() => {
    window.open(`https://wa.me/6282164867681?text=${msg}`, '_blank')
  }, 400)
}
</script>

<template>
  <div>
    <!-- Back link -->
    <NuxtLink to="/pricing" class="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 mb-8 transition-colors">
      ← Kembali ke Harga
    </NuxtLink>

    <!-- Step indicator -->
    <div class="flex items-center gap-0 mb-10 max-w-sm">
      <template v-for="(s, i) in ['Pilih Topik', 'Detail Booking', 'Pembayaran']" :key="i">
        <div class="flex items-center gap-2">
          <div
            class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all"
            :style="step > i + 1
              ? 'background: #22c55e; color: white;'
              : step === i + 1
                ? 'background: #7c3aed; color: white;'
                : 'background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.3);'"
          >
            <svg v-if="step > i + 1" width="12" height="12" viewBox="0 0 20 20" fill="none">
              <path d="M4 10l4.5 4.5L16 6" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span v-else>{{ i + 1 }}</span>
          </div>
          <span class="text-xs font-medium transition-colors"
            :style="step === i + 1 ? 'color: #F0F0F0;' : step > i + 1 ? 'color: #22c55e;' : 'color: rgba(255,255,255,0.25);'">
            {{ s }}
          </span>
        </div>
        <div v-if="i < 2" class="flex-1 mx-3 h-px" style="background: rgba(255,255,255,0.08); min-width: 20px;" />
      </template>
    </div>

    <!-- ── STEP 1: Pilih Topik ─────────────────────────────────────────────── -->
    <template v-if="step === 1">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Pilih Topik Konsultasi</h1>
        <p class="text-gray-400">Kami akan mempersiapkan sesi 45 menit yang fokus sesuai kebutuhan bisnis Anda.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-8">
        <button
          v-for="t in topics"
          :key="t.id"
          @click="selectTopic(t.id)"
          class="text-left p-4 rounded-2xl transition-all duration-150 active:scale-[0.98] group"
          :style="selectedTopic === t.id
            ? 'background: rgba(124,58,237,0.18); border: 1.5px solid rgba(124,58,237,0.6);'
            : 'background: rgba(255,255,255,0.03); border: 1.5px solid rgba(255,255,255,0.08);'"
          @mouseover="e => { if (selectedTopic !== t.id) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)' }"
          @mouseleave="e => { if (selectedTopic !== t.id) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)' }"
        >
          <div class="text-2xl mb-2 leading-none">{{ t.icon }}</div>
          <p class="text-sm font-semibold mb-1 transition-colors"
            :style="selectedTopic === t.id ? 'color: #c4b5fd;' : 'color: #F0F0F0;'">
            {{ t.label }}
          </p>
          <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.38);">{{ t.desc }}</p>
          <div v-if="selectedTopic === t.id" class="mt-2.5 flex items-center gap-1">
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
              <path d="M4 10l4.5 4.5L16 6" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-xs font-medium" style="color: #a78bfa;">Dipilih</span>
          </div>
        </button>
      </div>

      <div class="flex items-center justify-between">
        <p v-if="!selectedTopic" class="text-sm text-gray-500">Pilih salah satu topik untuk melanjutkan</p>
        <p v-else class="text-sm text-gray-300">
          Topik dipilih: <span class="text-purple-300 font-medium">{{ selectedTopicLabel }}</span>
        </p>
        <button
          @click="goToStep2"
          :disabled="!selectedTopic"
          class="ml-auto px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
          style="background: linear-gradient(135deg, #7c3aed, #2563eb); color: white;"
        >
          Lanjut ke Form
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M5 10h10M11 6l4 4-4 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </template>

    <!-- ── STEP 2: Detail Booking ──────────────────────────────────────────── -->
    <template v-else-if="step === 2">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Detail Booking</h1>
        <p class="text-gray-400">
          Topik: <span class="text-purple-300 font-medium">{{ selectedTopicLabel }}</span>
          <button @click="step = 1" class="ml-2 text-xs text-gray-600 hover:text-gray-400 underline transition-colors">Ubah</button>
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">

        <!-- Form (3/5) -->
        <div class="lg:col-span-3">
          <div class="rounded-2xl p-6" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
            <h2 class="text-white font-semibold mb-5">Informasi Anda</h2>
            <div class="space-y-4">

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs text-gray-400 mb-1.5 font-medium">Nama Lengkap <span class="text-red-400">*</span></label>
                  <input v-model="form.name" type="text" placeholder="Budi Santoso"
                    class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
                    style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);" />
                </div>
                <div>
                  <label class="block text-xs text-gray-400 mb-1.5 font-medium">Nomor WhatsApp <span class="text-red-400">*</span></label>
                  <input v-model="form.whatsapp" type="tel" placeholder="08123456789"
                    class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
                    style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs text-gray-400 mb-1.5 font-medium">Email</label>
                  <input v-model="form.email" type="email" placeholder="budi@perusahaan.com"
                    class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
                    style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);" />
                </div>
                <div>
                  <label class="block text-xs text-gray-400 mb-1.5 font-medium">Nama Perusahaan</label>
                  <input v-model="form.company" type="text" placeholder="PT Contoh Indonesia"
                    class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
                    style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);" />
                </div>
              </div>

              <div>
                <label class="block text-xs text-gray-400 mb-1.5 font-medium">Ceritakan Kebutuhan Anda</label>
                <textarea v-model="form.notes" rows="4"
                  placeholder="Bisnis saya bergerak di bidang... saya butuh chatbot untuk... kendala saya saat ini adalah..."
                  class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                  style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);" />
              </div>

              <p v-if="formError" class="text-red-400 text-sm flex items-center gap-2">⚠ {{ formError }}</p>

              <div class="flex gap-3 pt-1">
                <button @click="step = 1"
                  class="px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style="background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.10);">
                  ← Kembali
                </button>
                <button @click="goToCheckout"
                  class="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2"
                  style="background: linear-gradient(135deg, #7c3aed, #2563eb); color: white;">
                  Lanjut ke Pembayaran
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10M11 6l4 4-4 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

              <p class="text-xs text-gray-600 text-center">
                Dengan melanjutkan, Anda menyetujui
                <NuxtLink to="/terms-of-service" class="text-gray-500 hover:text-gray-400 underline">Syarat & Ketentuan</NuxtLink>
                kami.
              </p>
            </div>
          </div>
        </div>

        <!-- Summary (2/5) -->
        <div class="lg:col-span-2 space-y-4">
          <div class="rounded-2xl p-5" style="background: rgba(124,58,237,0.10); border: 1px solid rgba(124,58,237,0.30);">
            <div class="text-xs text-purple-300 font-semibold uppercase tracking-wider mb-3">Ringkasan</div>
            <div class="flex items-end gap-2 mb-1">
              <span class="text-4xl font-bold text-white">Rp {{ fmt(PRICE) }}</span>
            </div>
            <div class="text-gray-400 text-sm mb-4">untuk 45 menit · commitment fee</div>
            <div class="border-t border-white/10 pt-4 space-y-2.5">
              <div class="flex items-start gap-2 text-sm">
                <span class="text-purple-300 text-xs font-medium shrink-0 mt-0.5">TOPIK</span>
                <span class="text-white font-medium">{{ selectedTopicLabel }}</span>
              </div>
              <div v-for="item in [
                '45 menit bersama tim AutobotWS',
                'Analisis kebutuhan bisnis Anda',
                'Rekomendasi solusi AI yang tepat',
                'Estimasi biaya & timeline project',
                'Commitment fee diperhitungkan ke project',
              ]" :key="item" class="flex items-start gap-2 text-sm">
                <span class="text-purple-400 shrink-0 mt-0.5">✓</span>
                <span class="text-gray-300">{{ item }}</span>
              </div>
            </div>
          </div>

          <div class="rounded-2xl p-5" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
            <div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Alur Booking</div>
            <ol class="space-y-3">
              <li v-for="(s, i) in ['Pilih topik & isi form', 'Bayar Rp 50.000 via QRIS', 'Tim kami konfirmasi jadwal (maks. 1×24 jam)', 'Sesi konsultasi via Google Meet / Zoom']"
                :key="i" class="flex items-start gap-3 text-sm">
                <span class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  :style="i < 2 ? 'background: rgba(124,58,237,0.25); color: #c4b5fd;' : 'background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.5);'">
                  {{ i + 1 }}
                </span>
                <span :style="i < 2 ? 'color: rgba(255,255,255,0.7);' : 'color: rgba(255,255,255,0.4);'">{{ s }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </template>

    <!-- ── STEP 3: Checkout & Payment ─────────────────────────────────────── -->
    <template v-else-if="step === 3">

      <template v-if="!paid">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-white mb-2">Pembayaran</h1>
          <p class="text-gray-400">Scan QRIS di bawah, lalu kirim bukti pembayaran via WhatsApp.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">

          <!-- QRIS (3/5) -->
          <div class="lg:col-span-3 space-y-4">

            <!-- QRIS Card -->
            <div class="rounded-2xl p-6 text-center" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.10);">
              <div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">Scan QRIS untuk Membayar</div>

              <!-- QRIS placeholder -->
              <div class="mx-auto w-52 h-52 rounded-2xl overflow-hidden flex items-center justify-center mb-4"
                style="background: white;">
                <div class="flex flex-col items-center justify-center gap-2 w-full h-full" style="background: #f8f8f8;">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <!-- QR mock pattern -->
                    <rect x="10" y="10" width="25" height="25" rx="3" fill="#111" opacity="0.8"/>
                    <rect x="14" y="14" width="17" height="17" rx="1" fill="white"/>
                    <rect x="17" y="17" width="11" height="11" rx="1" fill="#111" opacity="0.8"/>
                    <rect x="65" y="10" width="25" height="25" rx="3" fill="#111" opacity="0.8"/>
                    <rect x="69" y="14" width="17" height="17" rx="1" fill="white"/>
                    <rect x="72" y="17" width="11" height="11" rx="1" fill="#111" opacity="0.8"/>
                    <rect x="10" y="65" width="25" height="25" rx="3" fill="#111" opacity="0.8"/>
                    <rect x="14" y="69" width="17" height="17" rx="1" fill="white"/>
                    <rect x="17" y="72" width="11" height="11" rx="1" fill="#111" opacity="0.8"/>
                    <rect x="42" y="10" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="50" y="10" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="42" y="18" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="50" y="18" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="42" y="42" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="50" y="42" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="58" y="42" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="42" y="50" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="58" y="50" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="65" y="42" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="73" y="42" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="81" y="42" width="9" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="10" y="42" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="18" y="42" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="26" y="42" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="10" y="50" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="26" y="50" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="65" y="65" width="5" height="20" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="73" y="65" width="5" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="81" y="65" width="9" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="73" y="73" width="17" height="5" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="73" y="81" width="5" height="9" rx="1" fill="#111" opacity="0.7"/>
                    <rect x="81" y="81" width="9" height="9" rx="1" fill="#111" opacity="0.7"/>
                    <!-- Center text -->
                    <text x="50" y="97" text-anchor="middle" font-size="7" fill="#666" font-family="sans-serif">QRIS</text>
                  </svg>
                  <p class="text-xs text-gray-400 font-medium">AutobotWS</p>
                </div>
              </div>

              <div class="text-white font-bold text-2xl mb-1">Rp {{ fmt(PRICE) }}</div>
              <div class="text-gray-500 text-sm mb-5">Sesi Konsultasi 45 Menit · AutobotWS</div>

              <!-- e-wallet logos -->
              <div class="flex items-center justify-center gap-3 flex-wrap">
                <span class="px-3 py-1 rounded-lg text-xs font-semibold" style="background: rgba(0,163,136,0.15); color: #00a388; border: 1px solid rgba(0,163,136,0.25);">GoPay</span>
                <span class="px-3 py-1 rounded-lg text-xs font-semibold" style="background: rgba(79,134,247,0.15); color: #4f86f7; border: 1px solid rgba(79,134,247,0.25);">OVO</span>
                <span class="px-3 py-1 rounded-lg text-xs font-semibold" style="background: rgba(255,105,0,0.15); color: #ff6900; border: 1px solid rgba(255,105,0,0.25);">Dana</span>
                <span class="px-3 py-1 rounded-lg text-xs font-semibold" style="background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.1);">m-Banking</span>
                <span class="px-3 py-1 rounded-lg text-xs font-semibold" style="background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.1);">+ lainnya</span>
              </div>
            </div>

            <!-- Info -->
            <div class="rounded-xl p-4 flex items-start gap-3" style="background: rgba(234,179,8,0.06); border: 1px solid rgba(234,179,8,0.18);">
              <span class="text-yellow-400 shrink-0 text-base leading-none mt-0.5">ℹ</span>
              <p class="text-sm text-yellow-200/70 leading-relaxed">
                Setelah membayar, klik <strong class="text-yellow-200">Konfirmasi Pembayaran</strong> di bawah untuk mengirim bukti transfer via WhatsApp. Tim kami akan segera konfirmasi jadwal.
              </p>
            </div>

            <div class="flex gap-3">
              <button @click="step = 2"
                class="px-5 py-3 rounded-xl text-sm font-medium transition-all"
                style="background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.10);">
                ← Kembali
              </button>
              <button @click="confirmPayment"
                class="flex-1 py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2"
                style="background: linear-gradient(135deg, #16a34a, #15803d); color: white;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Sudah Bayar — Kirim Bukti via WhatsApp
              </button>
            </div>
          </div>

          <!-- Order summary (2/5) -->
          <div class="lg:col-span-2 space-y-4">
            <div class="rounded-2xl p-5" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.10);">
              <div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">Ringkasan Order</div>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-400">Layanan</span>
                  <span class="text-white font-medium">Sesi Konsultasi 45 min</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Topik</span>
                  <span class="text-white font-medium text-right max-w-[60%]">{{ selectedTopicLabel }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Nama</span>
                  <span class="text-white">{{ form.name }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">WhatsApp</span>
                  <span class="text-white">{{ form.whatsapp }}</span>
                </div>
                <div v-if="form.company" class="flex justify-between">
                  <span class="text-gray-400">Perusahaan</span>
                  <span class="text-white">{{ form.company }}</span>
                </div>
                <div class="border-t border-white/10 pt-3 flex justify-between">
                  <span class="text-gray-300 font-semibold">Total</span>
                  <span class="text-white font-bold text-lg">Rp {{ fmt(PRICE) }}</span>
                </div>
              </div>
            </div>

            <div class="rounded-2xl p-5 space-y-2.5" style="background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.18);">
              <div class="text-xs text-green-400 font-semibold uppercase tracking-wider mb-1">Yang Anda Dapatkan</div>
              <div v-for="item in [
                '45 menit sesi 1-on-1',
                'Analisis kebutuhan bisnis',
                'Rekomendasi solusi AI',
                'Estimasi biaya & timeline',
                'Fee diperhitungkan ke project',
              ]" :key="item" class="flex items-center gap-2 text-sm">
                <span class="text-green-400 shrink-0">✓</span>
                <span class="text-gray-300">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- ── Paid state ───────────────────────────────────────────────────── -->
      <template v-else>
        <div class="max-w-lg mx-auto rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center">
          <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style="background: rgba(34,197,94,0.15);">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-white mb-2">Terima Kasih!</h2>
          <p class="text-gray-400 mb-1">WhatsApp terbuka otomatis — kirimkan bukti transfer Anda.</p>
          <p class="text-gray-500 text-sm mb-6">Tim kami akan konfirmasi jadwal dalam 1×24 jam hari kerja.</p>
          <div class="flex gap-3 justify-center flex-wrap">
            <a href="https://wa.me/6282164867681" target="_blank"
              class="px-5 py-2.5 rounded-xl text-sm font-semibold"
              style="background: #22c55e; color: white;">
              Buka WhatsApp
            </a>
            <NuxtLink to="/"
              class="px-5 py-2.5 rounded-xl text-sm font-medium"
              style="background: rgba(255,255,255,0.08); color: #F0F0F0; border: 1px solid rgba(255,255,255,0.12);">
              Kembali ke Beranda
            </NuxtLink>
          </div>
        </div>
      </template>
    </template>

  </div>
</template>
