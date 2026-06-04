<script setup lang="ts">
definePageMeta({ layout: 'portal', middleware: 'customer' })
const { locale } = useLocale()
useSeoMeta({ title: 'Profile — Portal', robots: 'noindex' })

const config = useRuntimeConfig()
const { currentUser, signOut } = useAuth()

const profile = ref<any>(null)
const loading = ref(true)
const keyCopied = ref(false)

function headers() {
  return { 'X-Access-Key': currentUser.value?.access_key || '' }
}

onMounted(async () => {
  // Immediately populate from auth state so UI is never blank
  profile.value = {
    id: '',
    name: currentUser.value?.name || '',
    email: currentUser.value?.email || '',
    role: currentUser.value?.role || 'visitor',
    access_key: currentUser.value?.access_key || '',
  }
  loading.value = false
  // Then enrich with server data
  try {
    const res = await $fetch<any>(`${config.public.apiBase}/api/portal/me`, { headers: headers() })
    profile.value = res
  } catch {}
})

async function copyKey() {
  const key = profile.value?.access_key || currentUser.value?.access_key || ''
  if (!key) return
  await navigator.clipboard.writeText(key)
  keyCopied.value = true
  setTimeout(() => { keyCopied.value = false }, 2000)
}

function logout() {
  signOut()
  navigateTo('/portal/login')
}
</script>

<template>
  <div class="p-6 max-w-2xl mx-auto w-full">
    <h1 class="text-xl font-bold text-white mb-6">{{ locale === 'id' ? 'Profile' : 'Profile' }}</h1>

    <!-- Loading -->
    <div v-if="loading" class="rounded-2xl border border-white/8 p-6 animate-pulse h-48" style="background: rgba(255,255,255,0.03);" />

    <div v-else class="space-y-4">
      <!-- Avatar + name -->
      <div class="rounded-2xl border border-white/8 p-6 flex items-center gap-4" style="background: rgba(255,255,255,0.02);">
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold shrink-0"
          style="background: rgba(99,102,241,0.20); color: #a5b4fc;">
          {{ (profile?.name || 'C').charAt(0).toUpperCase() }}
        </div>
        <div>
          <p class="text-lg font-semibold text-white">{{ profile?.name }}</p>
          <p class="text-sm" style="color: rgba(255,255,255,0.40);">{{ profile?.email }}</p>
          <span class="text-[11px] mt-1 inline-block px-2 py-0.5 rounded-full"
            :class="profile?.role === 'admin' ? 'bg-purple-500/20 text-purple-300' : 'bg-indigo-500/20 text-indigo-300'">
            {{ profile?.role === 'admin' ? (locale === 'id' ? 'Administrator' : 'Administrator') : (locale === 'id' ? 'Customer' : 'Customer') }}
          </span>
        </div>
      </div>

      <!-- Access Key -->
      <div class="rounded-2xl border border-white/8 p-5" style="background: rgba(255,255,255,0.02);">
        <p class="text-xs font-semibold uppercase tracking-widest mb-3" style="color: rgba(255,255,255,0.35);">Access Key</p>
        <div class="flex items-center gap-3">
          <code class="flex-1 text-xs font-mono py-2.5 px-3 rounded-lg truncate"
            style="background: rgba(0,0,0,0.3); color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.08);">
            {{ profile?.access_key || '—' }}
          </code>
          <button @click="copyKey"
            class="shrink-0 px-3 py-2.5 rounded-lg text-xs font-medium transition-all"
            style="background: rgba(99,102,241,0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.25);">
            {{ keyCopied ? (locale === 'id' ? '✓ Tersalin' : '✓ Copied') : (locale === 'id' ? 'Salin' : 'Copy') }}
          </button>
        </div>
        <p class="text-[11px] mt-2" style="color: rgba(255,255,255,0.25);">
          {{ locale === 'id' ? 'Gunakan key ini untuk melanjutkan sesi chat. Jangan bagikan ke siapapun.' : 'Use this key to continue your chat session. Do not share it with anyone.' }}
        </p>
      </div>

      <!-- Danger zone -->
      <div class="rounded-2xl border p-5" style="background: rgba(239,68,68,0.04); border-color: rgba(239,68,68,0.15);">
        <p class="text-xs font-semibold uppercase tracking-widest mb-3 text-red-400/60">{{ locale === 'id' ? 'Danger Zone' : 'Danger Zone' }}</p>
        <button @click="logout"
          class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors border border-red-500/20">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M7 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3M13 14l3-4-3-4M16 10H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          {{ locale === 'id' ? 'Sign Out dari Portal' : 'Sign out of Portal' }}
        </button>
      </div>
    </div>
  </div>
</template>
