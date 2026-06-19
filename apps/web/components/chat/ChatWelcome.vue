<template>
  <div class="w-full flex flex-col items-center justify-center px-4 py-10 relative">

    <!-- Brand mark -->
    <div class="relative z-10 mb-6 animate-fade-in text-center">
      <div class="relative inline-block mb-5 animate-float">
        <div
          class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto"
          style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04) inset;"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style="color: #F0F0F0;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
          </svg>
        </div>
        <div class="absolute inset-0 rounded-2xl blur-xl opacity-20 -z-10"
          style="background: radial-gradient(circle, rgba(59,130,246,0.7), transparent);" />
      </div>

      <h1
        class="text-[1.85rem] font-bold mb-2"
        style="color: #F0F0F0; letter-spacing: -0.03em; line-height: 1.2;"
      >
        Tell Autobot what you need.
      </h1>
      <p class="text-[15px]" style="color: #464646;">Consider it done.</p>
    </div>

    <!-- Inline input -->
    <div class="relative z-10 w-full max-w-xl mb-5 animate-fade-in" style="animation-delay: 0.06s;">
      <div
        class="flex items-end gap-2 transition-all duration-150"
        :class="inputFocused ? 'ring-1 ring-white/18' : ''"
        style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); border-radius: 16px; padding: 10px 10px 10px 16px; backdrop-filter: blur(8px);"
      >
        <textarea
          ref="inputRef"
          v-model="input"
          rows="1"
          class="flex-1 bg-transparent resize-none outline-none text-sm leading-relaxed max-h-32"
          style="color: #F0F0F0; caret-color: #F0F0F0;"
          placeholder="Tanya apa saja tentang Autobot..."
          @keydown.enter.exact.prevent="send"
          @focus="inputFocused = true"
          @blur="inputFocused = false"
          @input="autoResize"
        />
        <button
          :disabled="!input.trim()"
          @click="send"
          class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-150"
          :class="input.trim() ? 'hover:scale-105 active:scale-95' : 'cursor-not-allowed'"
          :style="input.trim() ? 'background: #F0F0F0; color: #111;' : 'background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.2);'"
        >
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 10h10M11 6l4 4-4 4"/>
          </svg>
        </button>
      </div>
      <p class="text-center mt-2 text-[11px] select-none" style="color: rgba(255,255,255,0.16);">
        Enter untuk kirim &nbsp;·&nbsp; Shift+Enter baris baru
      </p>
    </div>

    <!-- Suggestion grid -->
    <div class="relative z-10 w-full max-w-xl grid grid-cols-2 gap-2 animate-fade-in" style="animation-delay: 0.1s;">
      <button
        v-for="s in suggestions"
        :key="s.text"
        @click="$emit('send', s.text)"
        class="suggestion-card group"
        :class="s.accent ? 'suggestion-card--accent' : ''"
      >
        <div class="flex items-start gap-2.5">
          <span class="text-base mt-0.5 shrink-0 leading-none">{{ s.icon }}</span>
          <span class="text-[13px] font-medium leading-snug" :style="s.accent ? 'color: #a5b4fc;' : 'color: #6A6A6A;'">{{ s.text }}</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ send: [text: string] }>()

const input = ref('')
const inputFocused = ref(false)
const inputRef = ref<HTMLTextAreaElement | null>(null)

const send = () => {
  const text = input.value.trim()
  if (!text) return
  emit('send', text)
  input.value = ''
}

const autoResize = () => {
  const el = inputRef.value
  if (!el) return
  el.style.height = 'auto'
  el.style.height = Math.min(el.scrollHeight, 128) + 'px'
}

onMounted(() => inputRef.value?.focus())

const suggestions = [
  { text: 'Lihat portofolio kami', icon: '🗂', accent: true },
  { text: 'Buatkan proposal layanan untuk saya', icon: '📄', accent: true },
  { text: 'Buatkan flowchart alur proses order', icon: '◎', accent: true },
  { text: 'Buatkan presentasi WaSigap', icon: '🎯', accent: true },
  { text: 'Buatkan laporan excel penjualan', icon: '📊', accent: false },
  { text: 'Saya butuh chatbot WhatsApp', icon: '💬', accent: false },
  { text: 'Mau blast promo ke banyak kontak', icon: '📣', accent: false },
  { text: 'Automasi proses bisnis saya', icon: '⚡', accent: false },
]
</script>

<style scoped>
textarea::placeholder { color: rgba(255,255,255,0.22); }
.suggestion-card:hover span:last-child { color: #D0D0D0; }
.suggestion-card--accent {
  background: rgba(99,102,241,0.08) !important;
  border-color: rgba(99,102,241,0.22) !important;
}
.suggestion-card--accent:hover span:last-child { color: #c4b5fd !important; }
</style>
