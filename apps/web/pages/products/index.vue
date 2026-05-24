<script setup lang="ts">
definePageMeta({ layout: 'page' })

useSeoMeta({
  title: 'Produk — Autobot',
  description: 'Semua produk Autobot: WaBlastApp, WaBotIQ, Autobot Flow, Autobot Agent, dan lebih banyak — solusi chatbot WhatsApp & automasi bisnis Indonesia.',
  ogTitle: 'Produk Autobot — Chatbot & Automasi Bisnis',
  ogDescription: 'WaBlastApp, WaBotIQ, Autobot Flow, Autobot Agent — solusi lengkap WhatsApp chatbot dan automasi bisnis.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id/products',
})

const config = useRuntimeConfig()
const { data } = await useFetch<{ data: any[] }>(`${config.public.apiBase}/api/products`)
const products = computed(() => data.value?.data || [])
const categories = ['all', 'chatbot', 'blast', 'workflow', 'integration', 'ai_agent', 'scheduled']
const activeCategory = ref('all')
const filtered = computed(() =>
  activeCategory.value === 'all' ? products.value : products.value.filter(p => p.category === activeCategory.value)
)

const categoryEmoji: Record<string, string> = {
  chatbot: '🤖', blast: '📢', workflow: '⚙️', integration: '🔗', ai_agent: '🧠', scheduled: '⏰',
}
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold text-white mb-2">Produk Kami</h1>
    <p class="text-gray-400 mb-8">Bot & automasi untuk berbagai kebutuhan bisnis Anda.</p>

    <!-- Category filter -->
    <div class="flex gap-2 flex-wrap mb-8">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        class="px-4 py-1.5 rounded-full text-sm transition-all"
        :class="activeCategory === cat
          ? 'bg-white text-black'
          : 'border border-white/15 text-gray-400 hover:text-white hover:border-white/30'"
      >
        {{ categoryEmoji[cat] || '📦' }} {{ cat === 'all' ? 'Semua' : cat }}
      </button>
    </div>

    <!-- Products grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="product in filtered"
        :key="product.slug"
        class="rounded-2xl border border-white/10 bg-white/3 p-6 hover:border-white/20 transition-all group"
      >
        <div class="flex items-start justify-between mb-4">
          <div>
            <div class="flex gap-2 mb-2">
              <span class="text-xs px-2 py-0.5 rounded-full border border-white/15 text-gray-400 capitalize">{{ product.category }}</span>
              <span v-if="product.delivery_model" class="text-xs px-2 py-0.5 rounded-full border border-blue-500/30 text-blue-400 capitalize">{{ product.delivery_model }}</span>
            </div>
            <h2 class="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{{ product.name }}</h2>
            <p class="text-gray-400 text-sm mt-1">{{ product.tagline }}</p>
          </div>
          <span class="text-3xl">{{ categoryEmoji[product.category] || '📦' }}</span>
        </div>

        <ul class="space-y-1.5 mb-6">
          <li v-for="f in (product.features || []).slice(0, 4)" :key="f" class="flex items-center gap-2 text-sm text-gray-300">
            <span class="text-green-400">✓</span> {{ f }}
          </li>
        </ul>

        <div class="flex gap-2">
          <NuxtLink
            :to="`/products/${product.slug}`"
            class="flex-1 py-2.5 rounded-xl border border-white/15 text-center text-sm text-gray-400 hover:text-white hover:border-white/30 transition-colors"
          >
            Lihat Detail
          </NuxtLink>
          <a
            v-if="product.demo_url"
            :href="product.demo_url"
            target="_blank"
            rel="noopener"
            class="px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-all"
            style="background: linear-gradient(135deg, #7c3aed, #2563eb); color: white;"
          >
            Beli Sekarang
          </a>
          <NuxtLink
            v-else
            to="/"
            class="px-4 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Tanya di Chat
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
