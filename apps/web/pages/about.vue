<script setup lang="ts">
definePageMeta({ layout: 'page' })
useSeoMeta({
  title: 'Tentang Kami — Autobot',
  description: 'Autobot Wijaya Solution — Spesialis WhatsApp chatbot, blast, dan AI automation berbasis di Jakarta Timur. 9+ tahun pengalaman, 600K+ records di production.',
  ogTitle: 'Tentang Autobot Wijaya Solution',
  ogDescription: 'Spesialis bot dan automasi bisnis berbasis di Jakarta Timur. WhatsApp chatbot, blast, AI agent, workflow automation.',
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
  'LLM Integration (GPT-4, Claude, Gemini)',
]

const team = [
  { name: 'Bintang Wijaya', role: 'Founder & Lead Developer', img: '/bintang-aws.png' },
  { name: 'Sharaztasya Aulia Nurdi', role: 'Direktur', img: '/sharaztasya-aws.png' },
  { name: 'Irvan Eko Prasetyo', role: 'DevOps Master', img: '/len-aws.png' },
  { name: 'Tim AI', role: 'LLM Integration Specialist', img: '/claude-aws.png' },
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
    <h1 class="text-4xl font-bold text-white mb-2">Autobot Wijaya Solution</h1>
    <p class="text-gray-400 text-lg mb-10">Spesialis Bot & Automasi Bisnis — Jakarta Timur, Indonesia</p>

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

    <!-- Team photo -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-white mb-4">Tim Kami</h2>
      <div class="rounded-2xl overflow-hidden border border-white/10 mb-6">
        <img :src="'/team-aws.png'" alt="Tim AutobotWS" class="w-full object-cover" />
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div v-for="member in team" :key="member.name" class="text-center">
          <div class="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden"
            :style="member.img ? '' : 'background: rgba(255,255,255,0.06); border: 1px dashed rgba(255,255,255,0.12);'"
          >
            <img v-if="member.img" :src="member.img" :alt="member.name" class="w-full h-full object-cover" />
            <div v-else class="w-full h-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="text-gray-600">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
          </div>
          <p class="text-white text-sm font-medium">{{ member.name }}</p>
          <p class="text-gray-500 text-xs mt-0.5">{{ member.role }}</p>
        </div>
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

    <!-- Contact & Address -->
    <h2 class="text-2xl font-bold text-white mb-4">Lokasi & Kontak</h2>
    <div class="rounded-2xl border border-white/10 bg-white/3 p-6 mb-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <!-- Address -->
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Alamat Operasional</p>
          <p class="text-white font-semibold mb-1">Autobot Wijaya Solution</p>
          <p class="text-gray-400 text-sm leading-relaxed">
            Gg. Bina Warga III Desa No.36<br/>
            Lubang Buaya, Cipayung<br/>
            Kota Jakarta Timur, DKI Jakarta 13810<br/>
            Indonesia
          </p>
          <!-- Map placeholder -->
          <div
            class="mt-4 w-full h-28 rounded-xl flex flex-col items-center justify-center gap-2"
            style="background: rgba(255,255,255,0.04); border: 1px dashed rgba(255,255,255,0.10);"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="text-gray-600">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span class="text-xs text-gray-600">Embed Google Maps</span>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Kontak</p>
          <div class="space-y-3">
            <a href="mailto:support@autobot.co.id"
              class="flex items-center gap-3 text-sm group">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style="background: rgba(59,130,246,0.12);">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="text-blue-400">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
                </svg>
              </div>
              <span class="text-gray-400 group-hover:text-white transition-colors">support@autobot.co.id</span>
            </a>
            <a href="https://wa.me/6282164867681" target="_blank" rel="noopener"
              class="flex items-center gap-3 text-sm group">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style="background: rgba(34,197,94,0.12);">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" class="text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <span class="text-gray-400 group-hover:text-white transition-colors">+62 821-6486-7681</span>
            </a>
            <div class="flex items-start gap-3 text-sm">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style="background: rgba(255,255,255,0.06);">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="text-gray-400">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <span class="text-gray-400 text-sm">Senin–Jumat, 09.00–17.00 WIB</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 text-center">
      <p class="text-white font-medium mb-4">Siap automasi bisnis Anda?</p>
      <div class="flex gap-3 justify-center">
        <NuxtLink to="/" class="inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors">
          Chat dengan Kami
        </NuxtLink>
        <NuxtLink to="/pricing" class="inline-block px-6 py-3 rounded-xl font-medium transition-colors"
          style="border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.6);">
          Lihat Harga
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
