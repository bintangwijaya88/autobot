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
          class="flex-shrink-0 w-72 rounded-2xl border p-5 relative"
          :class="tier.highlighted ? 'border-purple-500/40 bg-purple-500/8' : 'border-white/10 bg-white/3'">

          <!-- Lifetime badge -->
          <div v-if="tier.discount" class="flex items-center gap-2 mb-3">
            <span class="text-xs px-2 py-0.5 rounded-full font-semibold" style="background: rgba(168,85,247,0.25); color: #c084fc;">{{ tier.name }}</span>
            <span class="text-xs px-2 py-0.5 rounded-full font-bold" style="background: rgba(34,197,94,0.2); color: #4ade80;">{{ tier.discount }}</span>
          </div>
          <div v-else-if="tier.highlighted" class="text-xs text-blue-400 mb-2">⭐ Populer</div>

          <h4 v-if="!tier.discount" class="text-white font-bold text-lg">{{ tier.name }}</h4>

          <!-- Price with strikethrough for lifetime -->
          <div class="mt-1 mb-1">
            <div v-if="tier.original_price" class="flex items-center gap-2 mb-0.5">
              <span class="text-gray-500 text-sm line-through">{{ tier.original_price }}</span>
            </div>
            <div class="flex items-end gap-1.5">
              <span class="text-3xl font-bold text-white">{{ tier.price }}</span>
            </div>
            <p class="text-gray-500 text-xs mt-1">{{ tier.period }}</p>
          </div>

          <ul class="space-y-2 my-4">
            <li v-for="f in tier.features" :key="f" class="flex items-start gap-2 text-sm text-gray-300">
              <span class="text-green-400 mt-0.5 shrink-0">✓</span> {{ f }}
            </li>
          </ul>

          <!-- CTA: external link for lifetime, internal for others -->
          <a v-if="tier.cta_url" :href="tier.cta_url" target="_blank" rel="noopener"
            class="block w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-all hover:opacity-90"
            style="background: linear-gradient(135deg, #7c3aed, #2563eb); color: white;">
            Beli Sekarang →
          </a>
          <NuxtLink v-else to="/" class="block w-full py-2.5 rounded-xl text-sm font-medium text-center transition-colors"
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
    <div
      class="rounded-2xl p-6 text-center"
      :style="product.demo_url
        ? 'border: 1px solid rgba(168,85,247,0.3); background: rgba(124,58,237,0.08);'
        : 'border: 1px solid rgba(59,130,246,0.3); background: rgba(59,130,246,0.08);'"
    >
      <p class="text-white font-medium mb-4">Tertarik dengan {{ product.name }}?</p>
      <div class="flex gap-3 justify-center flex-wrap">
        <a v-if="product.demo_url" :href="product.demo_url" target="_blank" rel="noopener"
          class="inline-block px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all active:scale-[0.97]"
          style="background: linear-gradient(135deg, #7c3aed, #2563eb); color: white;">
          Beli Sekarang — Rp 199.600
        </a>
        <NuxtLink v-else to="/" class="inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors">
          Order via Chat
        </NuxtLink>
        <NuxtLink to="/contact"
          class="inline-block px-6 py-3 rounded-xl text-sm font-medium transition-colors"
          style="border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.6);"
        >
          Tanya Dulu
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
