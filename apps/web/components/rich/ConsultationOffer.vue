<template>
  <div class="rounded-2xl overflow-hidden mt-1 w-full max-w-sm" style="border: 1px solid rgba(255,255,255,0.10); box-shadow: 0 8px 32px rgba(0,0,0,0.4);">

    <!-- Header -->
    <div class="px-5 pt-5 pb-4" style="background: linear-gradient(135deg, rgba(168,85,247,0.18) 0%, rgba(59,130,246,0.12) 100%); border-bottom: 1px solid rgba(255,255,255,0.07);">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
          style="background: rgba(168,85,247,0.25); border: 1px solid rgba(168,85,247,0.35);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="color: #c4b5fd;">
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <p class="text-sm font-semibold" style="color: #e2e8f0;">Konsultasi dengan Tim Ahli</p>
          <p class="text-xs mt-0.5" style="color: rgba(255,255,255,0.45);">1-on-1 session bersama specialist kami</p>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="px-5 py-4 space-y-3" style="background: rgba(17,17,17,0.85);">

      <!-- Price -->
      <div class="flex items-center justify-between py-2 px-3 rounded-xl" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);">
        <span class="text-xs" style="color: rgba(255,255,255,0.45);">Commitment Fee</span>
        <span class="text-base font-bold" style="color: #f0f0f0;">Rp 50.000</span>
      </div>

      <!-- Terms -->
      <div class="space-y-2">
        <div v-for="(t, i) in terms" :key="i" class="flex items-start gap-2.5">
          <div class="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
            style="background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.3);">
            <svg width="8" height="8" viewBox="0 0 12 12" fill="none" style="color:#4ade80;">
              <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.55);">{{ t }}</p>
        </div>
      </div>

      <!-- CTA -->
      <button
        @click="agree"
        class="w-full py-2.5 rounded-xl text-sm font-semibold transition-all mt-1"
        style="background: linear-gradient(135deg, #a855f7, #6366f1); color: white; cursor: pointer; box-shadow: 0 4px 14px rgba(168,85,247,0.35);"
      >
        Setuju &amp; Bayar Sekarang →
      </button>
      <button
        @click="$emit('action', { type: 'show_form', form_type: 'consultation_booking' })"
        class="w-full py-2.5 rounded-xl text-sm font-semibold transition-all"
        style="background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.88); border: 1px solid rgba(255,255,255,0.10);"
      >
        Jadwalkan via Google Calendar
      </button>
      <button
        @click="$emit('action', { type: 'chat_message', text: 'Saya ingin tanya lebih dulu tentang konsultasinya' })"
        class="w-full text-xs text-center py-1 transition-opacity hover:opacity-70"
        style="color: rgba(255,255,255,0.30);"
      >
        Tanya dulu sebelum bayar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ action: [payload: any] }>()

const terms = [
  'Fee konsultasi tidak dapat direfund',
  'Resume meeting + analisis kebutuhan PDF dikirim maksimal 7 hari kerja',
  'Pastikan scope, referensi, dan PIC siap sebelum sesi agar aman',
]

const agree = () => {
  emit('action', {
    type: 'form_submit',
    form_type: 'consultation_payment',
    data: {},
  })
}
</script>
