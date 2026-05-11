<template>
  <div class="max-w-2xl animate-scale-in">
    <p v-if="data.title" class="text-sm text-gray-400 mb-3">{{ data.title }}</p>
    <div class="flex gap-3 overflow-x-auto pb-2 snap-x scrollbar-hide">
      <div
        v-for="item in data.items"
        :key="item.slug"
        @click="$emit('action', { type: 'chat_message', text: `Ceritakan tentang ${item.name}` })"
        class="flex-shrink-0 w-52 rounded-2xl border border-white/10 bg-white/5 p-4 cursor-pointer hover:border-white/25 hover:bg-white/8 transition-all snap-start group"
      >
        <div v-if="item.image" class="w-full h-28 rounded-xl bg-white/10 mb-3 overflow-hidden">
          <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
        </div>
        <div v-else class="w-full h-28 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-3 flex items-center justify-center text-3xl">
          {{ getCategoryEmoji(item.category) }}
        </div>
        <h4 class="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">{{ item.name }}</h4>
        <p class="text-gray-500 text-xs mt-1 line-clamp-2">{{ item.tagline }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: any }>()
defineEmits<{ action: [payload: any] }>()

const getCategoryEmoji = (cat: string) => {
  const map: Record<string, string> = {
    chatbot: '🤖', blast: '📢', workflow: '⚙️', integration: '🔗', ai_agent: '🧠', scheduled: '⏰',
  }
  return map[cat] || '📦'
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
