<script setup lang="ts">
definePageMeta({ layout: 'page' })

useSeoMeta({
  title: 'Pembayaran Berhasil — Autobot',
  description: 'Halaman konfirmasi pembayaran sesi konsultasi Autobot melalui Xendit.',
})

const route = useRoute()
const config = useRuntimeConfig()
const meetingId = computed(() => String(route.query.id || ''))

const statusUrl = computed(() =>
  meetingId.value ? `${config.public.apiBase}/api/meetings/${meetingId.value}/status` : '',
)

const { data, pending, error, refresh } = await useFetch<any>(statusUrl, {
  server: false,
  lazy: true,
  immediate: false,
})

let timer: ReturnType<typeof setInterval> | undefined

onMounted(async () => {
  if (!meetingId.value) return
  await refresh()
  timer = setInterval(() => refresh(), 5000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

const meeting = computed(() => data.value || null)
const paymentStatus = computed(() => String(meeting.value?.payment_status || '').toLowerCase())
const isPaid = computed(() => paymentStatus.value === 'paid' || paymentStatus.value === 'settled')
const isExpired = computed(() => paymentStatus.value === 'expired')
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div v-if="!meetingId" class="rounded-2xl border border-white/10 bg-white/3 p-8 text-center">
      <h1 class="text-2xl font-bold text-white mb-2">Invoice tidak ditemukan</h1>
      <p class="text-gray-400 mb-6">ID pembayaran tidak tersedia di URL.</p>
      <NuxtLink to="/order" class="inline-flex px-5 py-2.5 rounded-xl text-sm font-semibold" style="background: linear-gradient(135deg, #7c3aed, #2563eb); color: white;">
        Kembali ke Order
      </NuxtLink>
    </div>

    <div v-else class="rounded-3xl border border-white/10 bg-white/3 p-8 sm:p-10">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-2xl flex items-center justify-center" :style="isPaid ? 'background: rgba(34,197,94,0.14);' : 'background: rgba(124,58,237,0.14);'">
          <svg v-if="isPaid" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v6"/>
            <path d="M12 22v-6"/>
            <path d="M4.93 4.93l4.24 4.24"/>
            <path d="M14.83 14.83l4.24 4.24"/>
            <path d="M2 12h6"/>
            <path d="M16 12h6"/>
            <path d="M4.93 19.07l4.24-4.24"/>
            <path d="M14.83 9.17l4.24-4.24"/>
          </svg>
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.22em]" :class="isPaid ? 'text-green-400' : 'text-purple-300'">
            {{ isPaid ? 'Pembayaran Berhasil' : 'Menunggu Verifikasi' }}
          </p>
          <h1 class="text-3xl font-bold text-white">{{ meeting?.name || 'Autobot Consultation' }}</h1>
        </div>
      </div>

      <p class="text-gray-400 leading-relaxed mb-6">
        <span v-if="isPaid">
          Pembayaran Anda sudah tercatat. Tim kami akan meninjau detail booking dan menghubungi Anda maksimal 1x24 jam pada hari kerja.
        </span>
        <span v-else-if="isExpired">
          Invoice pembayaran sudah kedaluwarsa. Silakan buka ulang halaman pembayaran untuk membuat invoice baru.
        </span>
        <span v-else>
          Pembayaran belum sepenuhnya terkonfirmasi. Halaman ini akan memeriksa status transaksi secara berkala.
        </span>
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <div class="rounded-2xl p-4" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
          <div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">ID Booking</div>
          <div class="text-sm text-white font-medium break-all">{{ meetingId }}</div>
        </div>
        <div class="rounded-2xl p-4" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
          <div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Status</div>
          <div class="text-sm text-white font-medium uppercase">{{ meeting?.payment_status || (pending ? 'loading' : 'unknown') }}</div>
        </div>
      </div>

      <p v-if="error" class="mb-5 rounded-xl px-4 py-3 text-sm text-red-300" style="background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.18);">
        Gagal memuat status pembayaran.
      </p>

      <div class="flex flex-wrap gap-3">
        <a v-if="meeting?.payment_url" :href="meeting.payment_url" class="inline-flex px-5 py-2.5 rounded-xl text-sm font-semibold" style="background: linear-gradient(135deg, #7c3aed, #2563eb); color: white;">
          Buka Ulang Invoice
        </a>
        <NuxtLink to="/order" class="inline-flex px-5 py-2.5 rounded-xl text-sm font-medium" style="background: rgba(255,255,255,0.06); color: #F0F0F0; border: 1px solid rgba(255,255,255,0.10);">
          Kembali ke Order
        </NuxtLink>
        <a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="inline-flex px-5 py-2.5 rounded-xl text-sm font-medium" style="background: rgba(34,197,94,0.12); color: #86efac; border: 1px solid rgba(34,197,94,0.22);">
          Hubungi WhatsApp
        </a>
      </div>
    </div>
  </div>
</template>
