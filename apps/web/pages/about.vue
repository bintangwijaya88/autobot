<script setup lang="ts">
definePageMeta({ layout: 'page' })
useSeoMeta({
  title: 'Tentang Kami — Autobot',
  description: 'CV Autobot Wijaya Solution — Spesialis WhatsApp chatbot, blast, dan AI automation berbasis di Jakarta. 9+ tahun pengalaman, 600K+ records di production.',
  ogTitle: 'Tentang CV Autobot Wijaya Solution',
  ogDescription: 'Spesialis bot dan automasi bisnis berbasis di Jakarta. WhatsApp chatbot, blast, AI agent, workflow automation.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id/about',
})

const specializations = [
  'WhatsApp Chatbot (AI-powered)',
  'WhatsApp Blast & Broadcast',
  'Workflow Automation Builder',
  'System Integration Middleware',
  'Custom AI Agent Development',
  'Scheduled Bot & Worker',
  'Custom Software Development',
]

const advantages = [
  { icon: '🔒', title: 'Data 100% Terisolasi', desc: 'Setiap client mendapat instance eksklusif — tidak ada data sharing.' },
  { icon: '🤖', title: 'AI-Powered', desc: 'Chatbot & agent yang cerdas, trainable, dan terus belajar.' },
  { icon: '⚡', title: 'High Performance', desc: 'Backend Go & Rust — cepat, ringan, dan scalable.' },
  { icon: '🛠', title: 'Full Support', desc: 'Garansi bug fix 3 bulan + opsi maintenance retainer.' },
]
</script>

<template>
  <div class="prose-dark max-w-3xl">
    <h1 class="text-4xl font-bold text-white mb-4">CV Autobot Wijaya Solution</h1>
    <p class="text-gray-400 text-lg mb-10">Spesialis Bot & Automasi Bisnis — Jakarta, Indonesia</p>

    <!-- Stats -->
    <div class="grid grid-cols-3 gap-4 mb-12">
      <div class="rounded-2xl border border-white/10 bg-white/3 p-5 text-center">
        <div class="text-3xl font-bold text-white">9+</div>
        <div class="text-sm text-gray-400 mt-1">Tahun Pengalaman</div>
      </div>
      <div class="rounded-2xl border border-white/10 bg-white/3 p-5 text-center">
        <div class="text-3xl font-bold text-white">600K+</div>
        <div class="text-sm text-gray-400 mt-1">Records di Production</div>
      </div>
      <div class="rounded-2xl border border-white/10 bg-white/3 p-5 text-center">
        <div class="text-3xl font-bold text-white">2022</div>
        <div class="text-sm text-gray-400 mt-1">Berdiri</div>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-3">Visi</h2>
    <p class="text-gray-400 mb-8">Menjadi penyedia solusi automasi bisnis terdepan di Indonesia, membuat setiap bisnis — dari klinik hingga enterprise — bisa beroperasi lebih efisien dengan bantuan bot cerdas.</p>

    <h2 class="text-2xl font-bold text-white mb-3">Spesialisasi</h2>
    <ul class="space-y-2 mb-8">
      <li v-for="item in specializations" :key="item" class="flex items-center gap-3 text-gray-300">
        <span class="text-blue-400">→</span> {{ item }}
      </li>
    </ul>

    <h2 class="text-2xl font-bold text-white mb-3">Keunggulan</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
      <div v-for="adv in advantages" :key="adv.title" class="rounded-2xl border border-white/10 bg-white/3 p-4">
        <div class="text-2xl mb-2">{{ adv.icon }}</div>
        <h4 class="text-white font-semibold text-sm">{{ adv.title }}</h4>
        <p class="text-gray-500 text-xs mt-1">{{ adv.desc }}</p>
      </div>
    </div>

    <div class="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 text-center">
      <p class="text-white font-medium mb-4">Siap automasi bisnis Anda?</p>
      <NuxtLink to="/" class="inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors">
        Chat dengan Kami
      </NuxtLink>
    </div>
  </div>
</template>
