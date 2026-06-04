<script setup lang="ts">
definePageMeta({ layout: false })
const { locale } = useLocale()
useSeoMeta({ title: 'Sign In — My Portal', robots: 'noindex' })

const config = useRuntimeConfig()
const { setUser, loadFromStorage } = useAuth()

const mode = ref<'login' | 'register'>('login')
const form = reactive({ name: '', email: '', password: '' })
const error = ref('')
const loading = ref(false)

onMounted(() => {
  loadFromStorage()
  if (import.meta.client && localStorage.getItem('user_access_key')) {
    navigateTo('/portal')
  }
})

async function submit() {
  error.value = ''
  loading.value = true
  try {
    const endpoint = mode.value === 'register' ? '/api/auth/register' : '/api/auth/login'
    const payload = mode.value === 'register'
      ? { name: form.name, email: form.email, password: form.password }
      : { email: form.email, password: form.password }

    const res = await $fetch<{ access_key: string; name: string; email: string; role?: string; admin_token?: string }>(
      `${config.public.apiBase}${endpoint}`,
      { method: 'POST', body: payload }
    )
    setUser(res)
    navigateTo('/portal')
  } catch (e: any) {
    const msg = e.data?.error || e.data?.message || ''
    if (msg === 'password_reset_required') {
      error.value = 'Password Anda perlu direset. Gunakan OTP via fitur chat.'
    } else {
      error.value = msg || 'Email atau password salah'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4" style="background: #0d0d12;">
    <div class="w-full max-w-[380px]">

      <!-- Logo + heading -->
      <div class="flex flex-col items-center mb-8">
        <img src="/logo.png" alt="Autobot" class="h-12 w-auto object-contain mb-4" />
      <h1 class="text-[22px] font-bold text-white tracking-tight">Customer Portal</h1>
        <p class="text-sm mt-1" style="color: rgba(255,255,255,0.35);">{{ locale === 'id' ? 'Lihat riwayat chat dan order Anda' : 'View your chat and order history' }}</p>
      </div>

      <!-- Card -->
      <div class="rounded-2xl p-7" style="background: #181820; border: 1px solid rgba(255,255,255,0.08);">

        <!-- Mode toggle -->
        <div class="grid grid-cols-2 gap-2 p-1 rounded-xl mb-5" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);">
          <button class="h-9 rounded-lg text-sm font-medium transition-all"
            :class="mode === 'login' ? 'bg-white text-black' : 'text-white/60 hover:text-white'"
            @click="mode = 'login'">{{ locale === 'id' ? 'Masuk' : 'Login' }}</button>
          <button class="h-9 rounded-lg text-sm font-medium transition-all"
            :class="mode === 'register' ? 'bg-white text-black' : 'text-white/60 hover:text-white'"
            @click="mode = 'register'">{{ locale === 'id' ? 'Daftar' : 'Register' }}</button>
        </div>

        <form @submit.prevent="submit" class="space-y-3">
          <input
            v-if="mode === 'register'"
            v-model.trim="form.name"
            type="text"
            :placeholder="locale === 'id' ? 'Nama lengkap' : 'Full name'"
            required
            class="w-full h-11 rounded-xl bg-white/5 border border-white/10 px-3.5 text-sm text-white outline-none focus:border-white/25 transition-colors"
          />
          <input
            v-model.trim="form.email"
            type="email"
            placeholder="Email"
            required
            class="w-full h-11 rounded-xl bg-white/5 border border-white/10 px-3.5 text-sm text-white outline-none focus:border-white/25 transition-colors"
          />
          <input
            v-model="form.password"
            type="password"
            placeholder="Password"
            required
            class="w-full h-11 rounded-xl bg-white/5 border border-white/10 px-3.5 text-sm text-white outline-none focus:border-white/25 transition-colors"
          />

          <div v-if="error" class="flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm"
            style="background: rgba(239,68,68,0.10); border: 1px solid rgba(239,68,68,0.20); color: #f87171;">
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none" class="shrink-0">
              <circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"/>
              <path d="M10 6v4M10 13v.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            {{ error }}
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full h-11 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center mt-1"
            style="background: #6366f1; color: #fff;"
          >
            <span v-if="loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span v-else>{{ mode === 'register' ? (locale === 'id' ? 'Buat Akun' : 'Create Account') : (locale === 'id' ? 'Masuk' : 'Login') }}</span>
          </button>
        </form>
      </div>

      <div class="mt-5 text-center">
        <NuxtLink to="/" class="text-xs transition-colors" style="color: rgba(255,255,255,0.25);"
          @mouseover="(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'"
          @mouseleave="(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'">
          ← {{ locale === 'id' ? 'Kembali ke Chat' : 'Back to Chat' }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
