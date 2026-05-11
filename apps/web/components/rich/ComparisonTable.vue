<template>
  <div class="rounded-2xl border border-white/10 bg-white/5 p-4 max-w-lg animate-scale-in overflow-x-auto">
    <h4 v-if="data.title" class="text-white font-medium text-sm mb-3">{{ data.title }}</h4>
    <table class="w-full text-sm">
      <thead>
        <tr>
          <th v-for="col in data.columns" :key="col" class="text-left text-gray-400 font-medium pb-2 pr-4">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in data.rows" :key="i" class="border-t border-white/5">
          <td v-for="(cell, j) in row" :key="j" class="py-2 pr-4 text-gray-300">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: any }>()
</script>
