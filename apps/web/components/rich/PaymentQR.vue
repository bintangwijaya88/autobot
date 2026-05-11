<template>
  <div class="rounded-2xl overflow-hidden mt-1 w-full max-w-sm" style="border: 1px solid rgba(255,255,255,0.10); box-shadow: 0 8px 32px rgba(0,0,0,0.4);">

    <!-- Header -->
    <div class="px-5 pt-5 pb-4" style="background: linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(59,130,246,0.10) 100%); border-bottom: 1px solid rgba(255,255,255,0.07);">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-semibold" style="color: #e2e8f0;">Bayar via GoPay</p>
          <p class="text-xs mt-0.5" style="color: rgba(255,255,255,0.45);">Order: {{ data.order_id }}</p>
        </div>
        <div class="text-right">
          <p class="text-xs" style="color: rgba(255,255,255,0.40);">Total</p>
          <p class="text-base font-bold" style="color: #4ade80;">Rp 50.000</p>
        </div>
      </div>
    </div>

    <!-- QR Code -->
    <div class="px-5 py-5 flex flex-col items-center gap-4" style="background: rgba(17,17,17,0.85);">

      <div class="p-3 rounded-2xl" style="background: white;">
        <img
          v-if="data.qr_url"
          :src="data.qr_url"
          alt="GoPay QR Code"
          class="w-44 h-44 object-contain"
          @error="imgError = true"
        />
        <div v-if="imgError || !data.qr_url" class="w-44 h-44 flex items-center justify-center" style="color: #666;">
          <p class="text-xs text-center">QR tidak tersedia.<br>Gunakan deeplink.</p>
        </div>
      </div>

      <p class="text-xs text-center" style="color: rgba(255,255,255,0.40);">
        Scan dengan aplikasi <strong style="color:rgba(255,255,255,0.65);">GoPay</strong> atau <strong style="color:rgba(255,255,255,0.65);">Gojek</strong>
      </p>

      <!-- Deeplink button -->
      <a
        v-if="data.deeplink_url"
        :href="data.deeplink_url"
        target="_blank"
        class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
        style="background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.25); color: #4ade80;"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Buka di Aplikasi GoPay
      </a>

      <p class="text-[11px] text-center" style="color: rgba(255,255,255,0.20);">
        Konfirmasi pembayaran otomatis dikirim ke chat ini
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: { order_id: string; amount: number; qr_url: string; deeplink_url: string } }>()
const imgError = ref(false)
</script>
