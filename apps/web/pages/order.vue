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
const config = useRuntimeConfig()

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
const termsAccepted = ref(false)
const needSuggestions = [
  'Chatbot WhatsApp',
  'Broadcast / Blast',
  'Auto-reply',
  'Integrasi API',
  'Workflow Automation',
  'AI Agent',
  'CRM / Sales',
  'Klinik / RS',
  'E-commerce',
  'Custom Development',
]
const selectedNeeds = ref<string[]>([])

function toggleNeed(need: string) {
  if (selectedNeeds.value.includes(need)) {
    selectedNeeds.value = selectedNeeds.value.filter(item => item !== need)
    return
  }
  selectedNeeds.value = [...selectedNeeds.value, need]
}

const selectedNeedsLabel = computed(() => selectedNeeds.value.join(', '))

function goToCheckout() {
  if (!form.name || !form.whatsapp || !form.email) {
    formError.value = 'Nama, nomor WhatsApp, dan email wajib diisi.'
    return
  }
  if (!termsAccepted.value) {
    formError.value = 'Silakan setujui syarat konsultasi terlebih dahulu.'
    return
  }
  formError.value = ''
  step.value = 3
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ── Step 3: Checkout ──────────────────────────────────────────────────────────
const paymentBusy = ref(false)
const paymentError = ref('')

function buildNotes() {
  const parts = [
    form.notes?.trim(),
    selectedNeedsLabel.value ? `Tag kebutuhan: ${selectedNeedsLabel.value}` : '',
    `Topik: ${selectedTopicLabel.value}`,
  ].filter(Boolean)
  return parts.join('\n\n')
}

async function createInvoice() {
  if (paymentBusy.value) return
  paymentBusy.value = true
  paymentError.value = ''

  try {
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.whatsapp.trim(),
      company: form.company.trim(),
      topic: selectedTopicLabel.value,
      preferred_date: '',
      preferred_time: '',
      notes: buildNotes(),
    }

    const res = await $fetch<{ meeting_id: string; payment_url?: string; invoice_id?: string; note?: string }>(
      `${config.public.apiBase}/api/meetings`,
      {
        method: 'POST',
        body: payload,
      },
    )

    if (res.payment_url) {
      window.location.href = res.payment_url
      return
    }

    paymentError.value = res.note || 'Invoice Xendit belum tersedia. Silakan coba lagi atau hubungi tim kami.'
  } catch (err: any) {
    paymentError.value = err?.data?.error || err?.message || 'Gagal membuat invoice Xendit.'
  } finally {
    paymentBusy.value = false
  }
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
                <div class="mb-3 flex flex-wrap gap-2">
                  <button
                    v-for="need in needSuggestions"
                    :key="need"
                    type="button"
                    @click="toggleNeed(need)"
                    class="rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150 active:scale-[0.98]"
                    :style="selectedNeeds.includes(need)
                      ? 'background: rgba(124,58,237,0.22); border: 1px solid rgba(124,58,237,0.55); color: #e9d5ff;'
                      : 'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); color: rgba(255,255,255,0.55);'"
                  >
                    {{ need }}
                  </button>
                </div>
                <p class="mb-2 text-[11.5px]" style="color: rgba(255,255,255,0.36);">
                  Pilih satu atau beberapa tag kebutuhan, lalu tambahkan detail sendiri di kolom bawah.
                </p>
                <textarea v-model="form.notes" rows="4"
                  placeholder="Bisnis saya bergerak di bidang... saya butuh chatbot untuk... kendala saya saat ini adalah..."
                  class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                  style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);" />
                <div v-if="selectedNeeds.length" class="mt-3 rounded-2xl p-3" style="background: rgba(124,58,237,0.08); border: 1px solid rgba(124,58,237,0.16);">
                  <p class="text-[11px] font-semibold uppercase tracking-wider mb-2" style="color: #c4b5fd;">Tag kebutuhan terpilih</p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="need in selectedNeeds"
                      :key="need"
                      class="rounded-full px-3 py-1 text-[11px] font-medium"
                      style="background: rgba(255,255,255,0.08); color: #f5f3ff; border: 1px solid rgba(255,255,255,0.12);"
                    >
                      {{ need }}
                    </span>
                  </div>
                </div>
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

              <label class="flex items-start gap-3 rounded-2xl p-4" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
                <input
                  v-model="termsAccepted"
                  type="checkbox"
                  class="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/40"
                />
                <div class="min-w-0">
                  <p class="text-sm font-semibold text-white">
                    Saya setuju dengan syarat konsultasi
                  </p>
                  <p class="mt-1 text-xs leading-relaxed" style="color: rgba(255,255,255,0.42);">
                    Fee ini <strong class="text-white/75">tidak dapat direfund</strong>. Resume pembahasan hasil meeting dan hasil analisis kebutuhan dalam bentuk PDF akan dikirimkan paling lama <strong class="text-white/75">7 hari kerja</strong> setelah sesi selesai dan seluruh data pendukung diterima.
                    Untuk keamanan, pastikan scope, referensi, dan PIC yang hadir sudah disiapkan sebelum sesi agar analisis lebih akurat.
                  </p>
                </div>
              </label>

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
                  'Resume pembahasan meeting dikirim via PDF',
                  'Analisis kebutuhan bisnis dalam PDF',
                  'Rekomendasi solusi AI yang tepat',
                  'Estimasi biaya & timeline project',
                  'Dikirim maksimal 7 hari kerja setelah sesi',
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
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Pembayaran Xendit</h1>
        <p class="text-gray-400">
          Kami akan membuat invoice resmi Xendit untuk nominal commitment fee Rp {{ fmt(PRICE) }}.
          Setelah invoice terbuka, selesaikan pembayaran di halaman Xendit.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div class="lg:col-span-3 space-y-4">
          <div class="rounded-2xl p-6" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.10);">
            <div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Checkout Resmi</div>
            <h2 class="text-white text-2xl font-semibold mb-3">Buka halaman pembayaran Xendit</h2>
            <p class="text-sm text-gray-400 leading-relaxed mb-5">
              Setelah invoice dibuat, Anda akan diarahkan ke checkout Xendit yang mendukung transfer bank, e-wallet, dan QRIS sesuai channel yang aktif di akun Anda.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <div class="rounded-2xl p-4" style="background: rgba(124,58,237,0.08); border: 1px solid rgba(124,58,237,0.18);">
                <div class="text-xs text-purple-300 font-semibold uppercase tracking-wider mb-1">Nama</div>
                <div class="text-sm text-white font-medium">{{ form.name }}</div>
              </div>
              <div class="rounded-2xl p-4" style="background: rgba(124,58,237,0.08); border: 1px solid rgba(124,58,237,0.18);">
                <div class="text-xs text-purple-300 font-semibold uppercase tracking-wider mb-1">Topik</div>
                <div class="text-sm text-white font-medium">{{ selectedTopicLabel }}</div>
              </div>
              <div class="rounded-2xl p-4" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
                <div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">WhatsApp</div>
                <div class="text-sm text-white font-medium">{{ form.whatsapp }}</div>
              </div>
              <div class="rounded-2xl p-4" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
                <div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Email</div>
                <div class="text-sm text-white font-medium">{{ form.email }}</div>
              </div>
            </div>

            <div class="rounded-xl p-4 flex items-start gap-3 mb-5" style="background: rgba(234,179,8,0.06); border: 1px solid rgba(234,179,8,0.18);">
              <span class="text-yellow-400 shrink-0 text-base leading-none mt-0.5">ℹ</span>
              <p class="text-sm text-yellow-200/80 leading-relaxed">
                Pastikan popup tidak diblokir browser. Jika invoice gagal dibuat, kami tampilkan pesan error dan Anda tetap bisa lanjut lewat WhatsApp.
              </p>
            </div>

            <p v-if="paymentError" class="mb-4 text-sm text-red-300 rounded-xl px-4 py-3" style="background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.18);">
              {{ paymentError }}
            </p>

            <div class="flex gap-3">
              <button
                @click="step = 2"
                class="px-5 py-3 rounded-xl text-sm font-medium transition-all"
                style="background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.10);"
              >
                ← Kembali
              </button>
              <button
                @click="createInvoice"
                :disabled="paymentBusy"
                class="flex-1 py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style="background: linear-gradient(135deg, #7c3aed, #2563eb); color: white;"
              >
                <svg v-if="paymentBusy" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity="0.25" stroke-width="3"/>
                  <path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <span>{{ paymentBusy ? 'Membuat Invoice...' : 'Buat Invoice Xendit' }}</span>
              </button>
            </div>
          </div>
        </div>

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
              <div v-if="selectedNeeds.length" class="flex justify-between gap-4">
                <span class="text-gray-400">Kebutuhan</span>
                <span class="text-white text-right max-w-[60%]">{{ selectedNeedsLabel }}</span>
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
              'Checkout resmi via Xendit',
              '45 menit sesi 1-on-1',
              'Analisis kebutuhan bisnis',
              'Resume pembahasan hasil meeting',
              'Dikirim maksimal 7 hari kerja',
              'Fee tidak dapat direfund',
            ]" :key="item" class="flex items-center gap-2 text-sm">
              <span class="text-green-400 shrink-0">✓</span>
              <span class="text-gray-300">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>

  </div>
</template>
