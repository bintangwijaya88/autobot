<template>
  <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
    <button
      v-for="(s, i) in suggestions"
      :key="s.text"
      @click="$emit('send', s.text)"
      class="flex-shrink-0 flex items-center gap-2.5 px-3.5 py-2 rounded-xl transition-all text-left group"
      :style="getStyle(s.category)"
      :class="{ 'animate-slide-up': true }"
      :data-delay="i * 40"
    >
      <span class="text-base leading-none">{{ getEmoji(s.category) }}</span>
      <span class="text-[12.5px] font-medium whitespace-nowrap" style="color: rgba(255,255,255,0.70);">{{ s.text }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { SuggestedPrompt } from '~/types'

defineProps<{ suggestions: SuggestedPrompt[] }>()
defineEmits<{ send: [text: string] }>()

const emojiMap: Record<string, string> = {
  account:      '🔑',
  guest:        '👤',
  product:      '📦',
  chatbot:      '💬',
  blast:        '📤',
  automation:   '⚙️',
  custom:       '💻',
  company:      '🏢',
  order:        '🛒',
  demo:         '▶️',
  consultation: '📞',
  pricing:      '🏷️',
  support:      '🛠️',
  portfolio:    '🗂',
  document:     '📄',
  default:      '✦',
}

const styleMap: Record<string, string> = {
  account:   'background: rgba(59,130,246,0.12); border: 1px solid rgba(59,130,246,0.25);',
  guest:     'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);',
  order:     'background: rgba(34,197,94,0.10); border: 1px solid rgba(34,197,94,0.22);',
  demo:      'background: rgba(168,85,247,0.10); border: 1px solid rgba(168,85,247,0.22);',
  portfolio: 'background: rgba(99,102,241,0.10); border: 1px solid rgba(99,102,241,0.22);',
  document:  'background: rgba(99,102,241,0.10); border: 1px solid rgba(99,102,241,0.22);',
  default:   'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);',
}

const getEmoji = (cat: string) => emojiMap[cat] ?? emojiMap.default
const getStyle = (cat: string) => styleMap[cat] ?? styleMap.default
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
