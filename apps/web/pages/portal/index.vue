<script setup lang="ts">
definePageMeta({ layout: 'portal', middleware: 'customer' })
const { t, locale } = useLocale()
useSeoMeta({ title: 'Dashboard — My Portal', robots: 'noindex' })

const config = useRuntimeConfig()
const { currentUser } = useAuth()
const stats = ref<any>({ session_count: 0, contact_count: 0, last_session: null })
const loading = ref(true)

function headers() {
  return { 'X-Access-Key': currentUser.value?.access_key || '' }
}

onMounted(async () => {
  try {
    stats.value = await $fetch(`${config.public.apiBase}/api/portal/stats`, { headers: headers() })
  } catch {}
  loading.value = false
})

const userName = computed(() => currentUser.value?.name || 'Customer')
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto w-full">
    <div class="mb-7">
      <h1 class="text-xl font-bold text-white">{{ locale === 'id' ? 'Selamat datang' : 'Welcome' }}, {{ userName }} 👋</h1>
      <p class="text-sm mt-1" style="color: rgba(255,255,255,0.40);">{{ locale === 'id' ? 'Kelola akun dan riwayat interaksi Anda di sini.' : 'Manage your account and interaction history here.' }}</p>
    </div>

    <!-- Stats -->
    <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div v-for="i in 3" :key="i" class="rounded-2xl border border-white/8 p-5 h-20 animate-pulse" style="background: rgba(255,255,255,0.03);" />
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div class="rounded-2xl border border-white/8 p-5" style="background: rgba(99,102,241,0.08); border-color: rgba(99,102,241,0.20);">
        <p class="text-xs mb-1.5" style="color: rgba(255,255,255,0.45);">{{ locale === 'id' ? 'Total Sesi Chat' : 'Total Chat Sessions' }}</p>
        <p class="text-3xl font-bold" style="color: #a5b4fc;">{{ stats.session_count }}</p>
      </div>
      <div class="rounded-2xl border border-white/8 p-5" style="background: rgba(52,211,153,0.07); border-color: rgba(52,211,153,0.20);">
        <p class="text-xs mb-1.5" style="color: rgba(255,255,255,0.45);">{{ locale === 'id' ? 'Form Disubmit' : 'Submitted Forms' }}</p>
        <p class="text-3xl font-bold" style="color: #6ee7b7;">{{ stats.contact_count }}</p>
      </div>
      <div class="rounded-2xl border border-white/8 p-5" style="background: rgba(255,255,255,0.03);">
        <p class="text-xs mb-1.5" style="color: rgba(255,255,255,0.45);">{{ locale === 'id' ? 'Sesi Terakhir' : 'Last Session' }}</p>
        <p class="text-sm font-medium text-white">
          {{ stats.last_session?.created_at ? new Date(stats.last_session.created_at).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US') : '—' }}
        </p>
      </div>
    </div>

    <!-- Quick links -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <NuxtLink to="/portal/chats"
        class="flex items-center gap-3 rounded-xl border border-white/8 px-4 py-4 hover:border-white/20 hover:bg-white/3 transition-all group"
        style="background: rgba(255,255,255,0.02);">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(99,102,241,0.15);">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="#a5b4fc" stroke-width="1.5" stroke-linejoin="round"/></svg>
        </div>
        <div>
          <p class="text-sm font-medium text-white">{{ t('portal.chats') }}</p>
          <p class="text-xs" style="color: rgba(255,255,255,0.35);">{{ locale === 'id' ? 'Riwayat percakapan' : 'Conversation history' }}</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/portal/contacts"
        class="flex items-center gap-3 rounded-xl border border-white/8 px-4 py-4 hover:border-white/20 hover:bg-white/3 transition-all"
        style="background: rgba(255,255,255,0.02);">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(52,211,153,0.12);">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="#6ee7b7" stroke-width="1.5"/><path d="M2 7l8 5 8-5" stroke="#6ee7b7" stroke-width="1.5"/></svg>
        </div>
        <div>
          <p class="text-sm font-medium text-white">{{ t('portal.contacts') }}</p>
          <p class="text-xs" style="color: rgba(255,255,255,0.35);">{{ locale === 'id' ? 'Order & konsultasi' : 'Orders & consultations' }}</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/portal/profile"
        class="flex items-center gap-3 rounded-xl border border-white/8 px-4 py-4 hover:border-white/20 hover:bg-white/3 transition-all"
        style="background: rgba(255,255,255,0.02);">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(255,255,255,0.08);">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6" r="3.5" stroke="rgba(255,255,255,0.7)" stroke-width="1.5"/><path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <div>
          <p class="text-sm font-medium text-white">{{ t('portal.profile') }}</p>
          <p class="text-xs" style="color: rgba(255,255,255,0.35);">{{ locale === 'id' ? 'Akun & access key' : 'Account & access key' }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
