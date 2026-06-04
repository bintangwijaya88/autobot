<script setup lang="ts">
definePageMeta({ layout: 'portal', middleware: 'customer' })
const { locale } = useLocale()
useSeoMeta({ title: 'Chat Detail — Portal', robots: 'noindex' })

const config = useRuntimeConfig()
const route = useRoute()
const { currentUser } = useAuth()

interface Message {
  id: string
  role: string
  content: string
  created_at: string
}

const messages = ref<Message[]>([])
const session = ref<any>(null)
const loading = ref(true)
const error = ref('')

function headers() {
  return { 'X-Access-Key': currentUser.value?.access_key || '' }
}

onMounted(async () => {
  try {
    const res = await $fetch<{ session: any; messages: Message[] }>(
      `${config.public.apiBase}/api/portal/sessions/${route.params.id}`,
      { headers: headers() }
    )
    session.value = res.session
    messages.value = res.messages.filter(m => m.role === 'user' || m.role === 'assistant')
  } catch (e: any) {
    error.value = e.data?.error || 'Sesi tidak ditemukan'
  }
  loading.value = false
})

function fmtTime(d: string) {
  return new Date(d).toLocaleTimeString(locale.value === 'id' ? 'id-ID' : 'en-US', { hour: '2-digit', minute: '2-digit' })
}
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString(locale.value === 'id' ? 'id-ID' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto w-full">
    <div class="flex items-center gap-3 mb-6">
      <NuxtLink to="/portal/chats" class="text-gray-500 hover:text-white transition-colors">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M12 5l-6 5 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </NuxtLink>
      <div>
        <h1 class="text-base font-bold text-white">{{ locale === 'id' ? 'Detail Chat' : 'Chat Detail' }}</h1>
        <p v-if="session" class="text-xs text-gray-500">{{ fmtDate(session.created_at) }}</p>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="space-y-4">
      <div v-for="i in 4" :key="i" class="rounded-xl p-4 h-16 animate-pulse" style="background: rgba(255,255,255,0.04);" />
    </div>

    <!-- Error -->
    <div v-else-if="error" class="rounded-xl border border-red-500/20 p-6 text-center text-red-400 text-sm">
      {{ error }}
    </div>

    <!-- Messages -->
    <div v-else class="space-y-3">
      <div
        v-for="msg in messages"
        :key="msg.id"
        class="flex"
        :class="msg.role === 'user' ? 'justify-end' : 'justify-start'"
      >
        <div
          class="max-w-[78%] rounded-2xl px-4 py-3 text-sm"
          :class="msg.role === 'user'
            ? 'rounded-br-sm text-white'
            : 'rounded-bl-sm text-gray-100'"
          :style="msg.role === 'user'
            ? 'background: rgba(99,102,241,0.25); border: 1px solid rgba(99,102,241,0.30);'
            : 'background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.09);'"
        >
          <p class="leading-relaxed whitespace-pre-wrap">{{ msg.content }}</p>
          <p class="text-[10px] mt-1.5 opacity-40">{{ fmtTime(msg.created_at) }}</p>
        </div>
      </div>

      <div v-if="!messages.length" class="text-center py-10 text-gray-500 text-sm">
        {{ locale === 'id' ? 'Tidak ada pesan dalam sesi ini' : 'No messages in this session' }}
      </div>
    </div>
  </div>
</template>
