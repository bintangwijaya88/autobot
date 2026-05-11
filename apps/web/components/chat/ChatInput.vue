<template>
  <div class="px-4 pb-5 pt-2">
    <div
      class="flex items-end gap-2 transition-all duration-150"
      :class="isFocused ? 'ring-1 ring-white/20' : ''"
      style="
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.09);
        border-radius: 16px;
        padding: 10px 10px 10px 16px;
        backdrop-filter: blur(8px);
      "
    >
      <textarea
        ref="inputRef"
        v-model="input"
        class="flex-1 bg-transparent resize-none outline-none text-sm leading-relaxed max-h-32 chat-input"
        style="color: #F0F0F0; caret-color: #F0F0F0;"
        :placeholder="placeholder || 'Tanya apa saja tentang Autobot...'"
        :disabled="disabled"
        rows="1"
        @keydown.enter.exact.prevent="send"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @input="autoResize"
      />

      <!-- Send button -->
      <button
        :disabled="!input.trim() || disabled"
        @click="send"
        class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-150"
        :class="input.trim() && !disabled
          ? 'text-[#111111] hover:scale-105 active:scale-95'
          : 'cursor-not-allowed'"
        :style="input.trim() && !disabled
          ? 'background: #F0F0F0;'
          : 'background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.2);'"
      >
        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 10h10M11 6l4 4-4 4"/>
        </svg>
      </button>
    </div>

    <p class="text-center mt-2 text-[11px] select-none" style="color: rgba(255,255,255,0.18);">
      Enter untuk kirim &nbsp;·&nbsp; Shift+Enter baris baru
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placeholder?: string
  disabled?: boolean
}>()

const emit = defineEmits<{ send: [text: string] }>()

const input = ref('')
const isFocused = ref(false)
const inputRef = ref<HTMLTextAreaElement | null>(null)

const send = () => {
  const text = input.value.trim()
  if (!text) return
  emit('send', text)
  input.value = ''
  nextTick(() => autoResize())
}

const autoResize = () => {
  const el = inputRef.value
  if (!el) return
  el.style.height = 'auto'
  el.style.height = Math.min(el.scrollHeight, 128) + 'px'
}

onMounted(() => inputRef.value?.focus())
</script>

<style scoped>
textarea::placeholder {
  color: rgba(255, 255, 255, 0.22);
}
</style>
