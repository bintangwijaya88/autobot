<script setup lang="ts">
definePageMeta({ layout: 'page' })

const route = useRoute()
const config = useRuntimeConfig()
const { data: product } = await useFetch<any>(`${config.public.apiBase}/api/products/${route.params.slug}`)

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

useSeoMeta({
  title: `${product.value?.name} — Autobot`,
  description: product.value?.tagline,
})

const categoryEmoji: Record<string, string> = {
  chatbot: '🤖', blast: '📢', workflow: '⚙️', integration: '🔗', ai_agent: '🧠', scheduled: '⏰',
}
</script>

<template>
  <div v-if="product">
    <!-- Header -->
    <div class="mb-8">
      <div class="flex gap-2 mb-3">
        <span class="text-xs px-2 py-0.5 rounded-full border border-white/15 text-gray-400 capitalize">{{ product.category }}</span>
        <span v-if="product.delivery_model" class="text-xs px-2 py-0.5 rounded-full border border-blue-500/30 text-blue-400">{{ product.delivery_model }}</span>
      </div>
      <div class="flex items-center gap-4">
        <span class="text-5xl">{{ categoryEmoji[product.category] || '📦' }}</span>
        <div>
          <h1 class="text-4xl font-bold text-white">{{ product.name }}</h1>
          <p class="text-gray-400 mt-1">{{ product.tagline }}</p>
        </div>
      </div>
    </div>

    <!-- Description -->
    <p v-if="product.description" class="text-gray-300 text-lg leading-relaxed mb-8">{{ product.description }}</p>

    <!-- Features -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-white mb-4">Fitur Utama</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div v-for="f in (product.features || [])" :key="f" class="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/3">
          <span class="text-green-400 flex-shrink-0">✓</span>
          <span class="text-gray-300 text-sm">{{ f }}</span>
        </div>
      </div>
    </div>

    <!-- Pricing -->
    <div v-if="product.pricing?.length" class="mb-8">
      <h2 class="text-2xl font-bold text-white mb-4">Harga</h2>
      <div class="flex gap-4 overflow-x-auto pb-2">
        <div v-for="tier in product.pricing" :key="tier.name"
          class="flex-shrink-0 w-64 rounded-2xl border p-5"
          :class="tier.highlighted ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/10 bg-white/3'">
          <div v-if="tier.highlighted" class="text-xs text-blue-400 mb-2">⭐ Populer</div>
          <h4 class="text-white font-bold text-lg">{{ tier.name }}</h4>
          <div class="mt-2 mb-4">
            <span class="text-2xl font-bold text-white">{{ tier.price }}</span>
            <span class="text-gray-500 text-sm ml-1">/ {{ tier.period }}</span>
          </div>
          <ul class="space-y-2 mb-4">
            <li v-for="f in tier.features" :key="f" class="flex items-start gap-2 text-sm text-gray-400">
              <span class="text-green-400 mt-0.5">✓</span> {{ f }}
            </li>
          </ul>
          <NuxtLink to="/" class="block w-full py-2.5 rounded-xl text-sm font-medium text-center transition-colors"
            :class="tier.highlighted ? 'bg-blue-500 text-white hover:bg-blue-400' : 'border border-white/15 text-gray-400 hover:text-white hover:border-white/30'">
            Order via Chat
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Tech stack -->
    <div v-if="product.tech_stack?.length" class="mb-8">
      <h2 class="text-xl font-bold text-white mb-3">Tech Stack</h2>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in product.tech_stack" :key="tech"
          class="px-3 py-1 rounded-full border border-white/15 text-sm text-gray-400">
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- CTA -->
    <div class="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 text-center">
      <p class="text-white font-medium mb-4">Tertarik dengan {{ product.name }}?</p>
      <NuxtLink to="/" class="inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors">
        Order via Chat
      </NuxtLink>
    </div>
  </div>
</template>
