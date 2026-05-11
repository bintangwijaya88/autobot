<script setup lang="ts">
definePageMeta({ layout: 'page' })
useSeoMeta({
  title: 'Jasa Custom Development — Autobot',
  description: 'Jasa custom software development: web app, mobile, desktop, system integration, AI/ML.',
})

const services = [
  { icon: '🌐', title: 'Web Application', desc: 'SaaS, dashboard, portal, e-commerce — responsive dan performant.' },
  { icon: '📱', title: 'Mobile Application', desc: 'Android, iOS, cross-platform dengan Flutter.' },
  { icon: '🖥', title: 'Desktop Application', desc: 'Windows, macOS, Linux dengan Tauri + Rust.' },
  { icon: '🔗', title: 'System Integration', desc: 'API development, middleware, ERP/CRM connector.' },
  { icon: '🤖', title: 'AI/ML Integration', desc: 'OpenAI, Anthropic, custom model integration.' },
  { icon: '🗄', title: 'Database Design', desc: 'Schema design, migration, optimization, backup strategy.' },
]

const techStack = [
  { category: 'Backend', items: ['Go (Fiber)', 'Rust', 'Laravel'] },
  { category: 'Frontend', items: ['Vue 3', 'Nuxt 3', 'React'] },
  { category: 'Mobile', items: ['Flutter'] },
  { category: 'Desktop', items: ['Tauri 2'] },
  { category: 'Database', items: ['PostgreSQL', 'MySQL', 'SQLite'] },
  { category: 'AI', items: ['OpenAI', 'Anthropic'] },
]

const pricingModels = [
  { name: 'Fixed Price', desc: 'Scope jelas, budget pasti.' },
  { name: 'Time & Material', desc: 'Iteratif, bayar per sprint.' },
  { name: 'Retainer', desc: 'Partnership bulanan.' },
]
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold text-white mb-2">Jasa Custom Development</h1>
    <p class="text-gray-400 mb-10">Software sesuai kebutuhan Anda — dari website hingga sistem enterprise.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      <div v-for="service in services" :key="service.title"
        class="rounded-2xl border border-white/10 bg-white/3 p-5">
        <div class="text-2xl mb-3">{{ service.icon }}</div>
        <h3 class="text-white font-semibold mb-2">{{ service.title }}</h3>
        <p class="text-gray-400 text-sm">{{ service.desc }}</p>
      </div>
    </div>

    <div class="rounded-2xl border border-white/10 bg-white/3 p-6 mb-8">
      <h2 class="text-xl font-bold text-white mb-4">Tech Stack</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div v-for="tech in techStack" :key="tech.category">
          <p class="text-gray-500 text-xs mb-1">{{ tech.category }}</p>
          <p class="text-gray-300 text-sm">{{ tech.items.join(', ') }}</p>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-white/10 bg-white/3 p-6 mb-8">
      <h2 class="text-xl font-bold text-white mb-4">Pricing Model</h2>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="model in pricingModels" :key="model.name" class="text-center p-4 rounded-xl border border-white/10">
          <h4 class="text-white font-semibold mb-2">{{ model.name }}</h4>
          <p class="text-gray-400 text-xs">{{ model.desc }}</p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <NuxtLink to="/" class="inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors">
        Konsultasi via Chat
      </NuxtLink>
    </div>
  </div>
</template>
