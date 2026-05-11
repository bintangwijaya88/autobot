<script setup lang="ts">
definePageMeta({ layout: 'page' })
useSeoMeta({
  title: 'Kontak — Autobot',
  description: 'Hubungi CV Autobot Wijaya Solution via chat AI, WhatsApp, atau email. Konsultasi gratis untuk kebutuhan chatbot dan automasi bisnis kamu.',
  ogTitle: 'Hubungi Autobot',
  ogDescription: 'Konsultasi chatbot WhatsApp & automasi bisnis gratis. Tim kami siap membantu.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id/contact',
})
</script>

<template>
  <div class="max-w-lg mx-auto text-center">
    <h1 class="text-4xl font-bold text-white mb-4">Hubungi Kami</h1>
    <p class="text-gray-400 mb-10">Cara tercepat untuk menghubungi kami adalah via chat atau WhatsApp langsung.</p>

    <div class="space-y-4 mb-10">
      <NuxtLink to="/" class="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/3 hover:border-white/25 transition-all group">
        <span class="text-2xl">🤖</span>
        <div class="text-left">
          <p class="text-white font-medium group-hover:text-blue-300 transition-colors">Chat dengan Autobot AI</p>
          <p class="text-gray-500 text-sm">Respon instan 24/7</p>
        </div>
        <span class="ml-auto text-gray-600">→</span>
      </NuxtLink>

      <a href="https://wa.me/6281234567890" target="_blank"
        class="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/3 hover:border-green-500/30 transition-all group">
        <span class="text-2xl">📱</span>
        <div class="text-left">
          <p class="text-white font-medium group-hover:text-green-300 transition-colors">WhatsApp Langsung</p>
          <p class="text-gray-500 text-sm">+62 812 3456 7890</p>
        </div>
        <span class="ml-auto text-gray-600">→</span>
      </a>

      <a href="mailto:bintang@autobot.co.id"
        class="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/3 hover:border-white/25 transition-all group">
        <span class="text-2xl">✉️</span>
        <div class="text-left">
          <p class="text-white font-medium group-hover:text-blue-300 transition-colors">Email</p>
          <p class="text-gray-500 text-sm">bintang@autobot.co.id</p>
        </div>
        <span class="ml-auto text-gray-600">→</span>
      </a>
    </div>

    <p class="text-gray-600 text-sm">Jakarta, Indonesia · Melayani seluruh Indonesia secara remote</p>
  </div>
</template>
