<template>
  <div class="rounded-2xl border border-white/10 bg-white/5 p-5 max-w-sm animate-scale-in">
    <!-- Header -->
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-1">
        <span class="text-xs px-2 py-0.5 rounded-full border border-white/20 text-gray-400 capitalize">
          {{ data.category }}
        </span>
        <span v-if="data.delivery" class="text-xs px-2 py-0.5 rounded-full border border-blue-500/30 text-blue-400">
          {{ data.delivery === 'desktop' ? '🖥 Desktop App' : data.delivery === 'web' ? '🌐 Web App' : '⚡ Hybrid' }}
        </span>
      </div>
      <h3 class="text-white font-semibold text-lg">{{ data.name }}</h3>
      <p class="text-gray-400 text-sm mt-1">{{ data.tagline }}</p>
    </div>

    <!-- Features -->
    <ul class="space-y-1.5 mb-5">
      <li v-for="f in (data.features || []).slice(0, 4)" :key="f" class="flex items-center gap-2 text-sm text-gray-300">
        <span class="text-green-400 flex-shrink-0">✓</span>
        {{ f }}
      </li>
    </ul>

    <!-- CTA -->
    <div class="flex gap-2">
      <button
        v-if="data.cta"
        @click="$emit('action', { type: data.cta.action, ...data.cta })"
        class="flex-1 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
      >
        {{ data.cta.label }}
      </button>
      <button
        @click="$emit('action', { type: 'show_product', slug: data.slug })"
        class="px-4 py-2.5 rounded-xl border border-white/15 text-sm text-gray-400 hover:text-white hover:border-white/30 transition-colors"
      >
        Detail
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: any }>()
defineEmits<{ action: [payload: any] }>()
</script>
