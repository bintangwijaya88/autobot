<template>
  <button class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all">
    <span>{{ icon }}</span>
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{ icon: string; label: string }>()
</script>
