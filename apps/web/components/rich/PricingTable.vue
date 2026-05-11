<template>
  <div class="max-w-2xl animate-scale-in">
    <p v-if="data.product" class="text-sm text-gray-400 mb-3">Harga {{ data.product }}</p>
    <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      <div
        v-for="tier in data.tiers"
        :key="tier.name"
        class="flex-shrink-0 w-52 rounded-2xl border p-4 transition-all"
        :class="tier.highlighted
          ? 'border-blue-500/50 bg-blue-500/10'
          : 'border-white/10 bg-white/5'"
      >
        <div v-if="tier.highlighted" class="text-xs text-blue-400 font-medium mb-2">⭐ Populer</div>
        <h4 class="text-white font-semibold">{{ tier.name }}</h4>
        <div class="mt-2 mb-3">
          <span class="text-2xl font-bold text-white">{{ tier.price }}</span>
          <span class="text-gray-500 text-sm ml-1">/ {{ tier.period }}</span>
        </div>
        <ul class="space-y-1.5 mb-4">
          <li v-for="f in tier.features" :key="f" class="flex items-start gap-1.5 text-xs text-gray-400">
            <span class="text-green-400 mt-0.5">✓</span>
            {{ f }}
          </li>
        </ul>
        <button
          @click="$emit('action', { type: 'show_form', form_type: 'order', tier: tier.name })"
          class="w-full py-2 rounded-xl text-xs font-medium transition-colors"
          :class="tier.highlighted
            ? 'bg-blue-500 text-white hover:bg-blue-400'
            : 'border border-white/15 text-gray-400 hover:text-white hover:border-white/30'"
        >
          Pilih {{ tier.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: any }>()
defineEmits<{ action: [payload: any] }>()
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
