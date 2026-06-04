<script setup lang="ts">
definePageMeta({ layout: 'portal', middleware: 'customer' })
const { locale, t } = useLocale()
useSeoMeta({ title: 'My Chats — Portal', robots: 'noindex' })

const config = useRuntimeConfig()
const { currentUser } = useAuth()

interface Session {
  id: string
  visitor_name: string
  source: string
  status: string
  created_at: string
  message_count: number
  first_message: string
}

const sessions = ref<Session[]>([])
const total = ref(0)
const page = ref(1)
const loading = ref(true)

function headers() {
  return { 'X-Access-Key': currentUser.value?.access_key || '' }
}

async function fetchSessions() {
  loading.value = true
  try {
    const res = await $fetch<{ sessions: Session[]; total: number; page: number }>(
      `${config.public.apiBase}/api/portal/sessions?page=${page.value}`,
      { headers: headers() }
    )
    sessions.value = res.sessions
    total.value = res.total
  } catch {}
  loading.value = false
}

onMounted(fetchSessions)
watch(page, fetchSessions)

function statusColor(s: string) {
  return s === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
}

function fmtDate(d: string) {
  return new Date(d).toLocaleString(locale.value === 'id' ? 'id-ID' : 'en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto w-full">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-xl font-bold text-white">{{ t('portal.chats') }}</h1>
      <span class="text-xs text-gray-500">{{ total }} {{ locale === 'id' ? 'sesi total' : 'total sessions' }}</span>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="space-y-3">
      <div v-for="i in 5" :key="i" class="rounded-xl border border-white/8 p-4 h-20 animate-pulse" style="background: rgba(255,255,255,0.03);" />
    </div>

    <!-- Empty -->
    <div v-else-if="!sessions.length" class="rounded-2xl border border-white/8 py-16 text-center" style="background: rgba(255,255,255,0.02);">
      <svg width="36" height="36" viewBox="0 0 20 20" fill="none" class="mx-auto mb-3 opacity-20">
        <path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="white" stroke-width="1.2"/>
      </svg>
      <p class="text-gray-500 text-sm">{{ locale === 'id' ? 'Belum ada sesi chat' : 'No chat sessions yet' }}</p>
      <NuxtLink to="/" class="mt-3 inline-block text-indigo-400 text-sm hover:text-indigo-300">{{ locale === 'id' ? 'Mulai chat' : 'Start chatting' }} →</NuxtLink>
    </div>

    <!-- List -->
    <div v-else class="space-y-2">
      <NuxtLink
        v-for="s in sessions"
        :key="s.id"
        :to="`/portal/chats/${s.id}`"
        class="flex items-start gap-4 rounded-xl border border-white/8 p-4 hover:border-white/16 hover:bg-white/3 transition-all cursor-pointer"
        style="background: rgba(255,255,255,0.02);"
      >
        <div class="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center" style="background: rgba(99,102,241,0.15);">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="#a5b4fc" stroke-width="1.5"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <span class="text-sm font-medium text-white truncate">{{ s.first_message || (locale === 'id' ? 'Sesi chat' : 'Chat session') }}</span>
            <span class="text-[11px] px-1.5 py-0.5 rounded-full shrink-0" :class="statusColor(s.status)">{{ s.status }}</span>
          </div>
          <p class="text-xs text-gray-500">{{ fmtDate(s.created_at) }} · {{ s.message_count }} pesan</p>
        </div>
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0 mt-1 opacity-30">
          <path d="M7 5l6 5-6 5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </NuxtLink>
    </div>

    <!-- Pagination -->
    <div v-if="total > 20" class="flex items-center justify-center gap-3 mt-6">
      <button :disabled="page <= 1" @click="page--"
        class="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white border border-white/8 hover:border-white/20 disabled:opacity-30 transition-colors">
        ← {{ locale === 'id' ? 'Sebelumnya' : 'Prev' }}
      </button>
      <span class="text-xs text-gray-500">{{ locale === 'id' ? 'Hal' : 'Page' }} {{ page }} / {{ Math.ceil(total / 20) }}</span>
      <button :disabled="page >= Math.ceil(total / 20)" @click="page++"
        class="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white border border-white/8 hover:border-white/20 disabled:opacity-30 transition-colors">
        {{ locale === 'id' ? 'Selanjutnya' : 'Next' }} →
      </button>
    </div>
  </div>
</template>
