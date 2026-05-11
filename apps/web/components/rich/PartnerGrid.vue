<template>
  <div class="rounded-2xl border border-white/10 bg-white/5 p-4 max-w-lg animate-scale-in">
    <h4 class="text-white font-medium text-sm mb-3">Klien & Mitra Kami</h4>
    <div class="grid grid-cols-2 gap-3">
      <div
        v-for="partner in data.partners"
        :key="partner.name"
        class="p-3 rounded-xl border border-white/10 bg-white/3"
      >
        <p class="text-white text-sm font-medium">{{ partner.name }}</p>
        <p v-if="partner.description" class="text-gray-500 text-xs mt-0.5">{{ partner.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: any }>()
</script>
