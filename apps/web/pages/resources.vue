<script setup lang="ts">
definePageMeta({ layout: 'page' })
useSeoMeta({
  title: 'Developer Resources — Autobot',
  description: 'Dokumentasi, API reference, dan panduan integrasi Autobot.',
})

const resources = [
  { icon: '📖', title: 'API Reference', desc: 'REST API endpoints untuk integrasi chatbot, session, dan produk.' },
  { icon: '🔌', title: 'WebSocket Guide', desc: 'Protokol WebSocket untuk real-time chat dan streaming AI.' },
  { icon: '🧩', title: 'SDK & Libraries', desc: 'SDK JavaScript, Python, dan Go untuk mempercepat integrasi.' },
  { icon: '📦', title: 'Webhook Events', desc: 'Event payload untuk outgoing webhook ke sistem Anda.' },
]
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold tracking-tight mb-3" style="color: #F0F0F0; letter-spacing: -0.03em;">Developer Resources</h1>
    <p class="text-base mb-12" style="color: #5A5A5A;">Dokumentasi, API reference, dan panduan integrasi.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div v-for="item in resources" :key="item.title"
        class="rounded-2xl p-5 transition-all"
        style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);"
      >
        <div class="text-2xl mb-3">{{ item.icon }}</div>
        <h3 class="font-semibold text-[15px] mb-1" style="color: #E0E0E0;">{{ item.title }}</h3>
        <p class="text-sm leading-relaxed" style="color: #5A5A5A;">{{ item.desc }}</p>
        <div class="mt-4 text-[13px] font-medium" style="color: rgba(255,255,255,0.3);">Segera hadir →</div>
      </div>
    </div>
  </div>
</template>
