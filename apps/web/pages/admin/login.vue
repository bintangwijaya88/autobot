<script setup lang="ts">
definePageMeta({ layout: false })

useSeoMeta({ title: 'Admin Login — Autobot', robots: 'noindex' })

const config = useRuntimeConfig()
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const showPass = ref(false)

async function login() {
  error.value = ''
  loading.value = true
  try {
    const res = await $fetch<{ token: string }>(`${config.public.apiBase}/api/admin/login`, {
      method: 'POST',
      body: { email: email.value, password: password.value },
    })
    if (!res?.token) {
      error.value = 'Email atau password salah'
      return
    }
    localStorage.setItem('admin_token', res.token)
    navigateTo('/admin/dashboard')
  } catch {
    error.value = 'Email atau password salah'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center px-4"
    style="background: #0e0e0e;"
  >
    <!-- Card -->
    <div class="w-full max-w-[380px]">

      <!-- Logo + heading -->
      <div class="flex flex-col items-center mb-8">
        <img src="/logo.png" alt="Autobot" class="h-12 w-auto object-contain mb-4" />
        <h1 class="text-[22px] font-bold text-white tracking-tight">Admin Dashboard</h1>
        <p class="text-sm mt-1" style="color: rgba(255,255,255,0.35);">autobotws Admin</p>
      </div>

      <!-- Form card -->
      <div
        class="rounded-2xl p-7"
        style="background: #181818; border: 1px solid rgba(255,255,255,0.08);"
      >
        <form @submit.prevent="login" class="space-y-4">

          <!-- Email -->
          <div>
            <label class="block text-xs font-medium mb-1.5" style="color: rgba(255,255,255,0.45);">Email</label>
            <input
              v-model="email"
              type="email"
              required
              autocomplete="email"
              placeholder="admin@autobot.co.id"
              class="w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
              style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);"
              @focus="(e: any) => e.target.style.borderColor = 'rgba(255,255,255,0.25)'"
              @blur="(e: any) => e.target.style.borderColor = 'rgba(255,255,255,0.09)'"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-xs font-medium mb-1.5" style="color: rgba(255,255,255,0.45);">Password</label>
            <div class="relative">
              <input
                v-model="password"
                :type="showPass ? 'text' : 'password'"
                required
                autocomplete="current-password"
                placeholder="••••••••"
                class="w-full rounded-xl px-4 py-2.5 pr-11 text-sm text-white outline-none transition-colors"
                style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);"
                @focus="(e: any) => e.target.style.borderColor = 'rgba(255,255,255,0.25)'"
                @blur="(e: any) => e.target.style.borderColor = 'rgba(255,255,255,0.09)'"
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                style="color: rgba(255,255,255,0.3);"
                @click="showPass = !showPass"
                @mouseover="(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'"
                @mouseleave="(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'"
              >
                <!-- Eye open -->
                <svg v-if="!showPass" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6Z" stroke="currentColor" stroke-width="1.5"/>
                  <circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <!-- Eye closed -->
                <svg v-else width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M3 3l14 14M8.5 8.6A2.5 2.5 0 0 0 12.4 12.5M6.2 5.2C4.3 6.4 2.9 8.3 2 10c1.5 3.1 4.5 6 8 6 1.5 0 3-.5 4.2-1.2M10 4c.7 0 1.5.1 2.2.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Error -->
          <div
            v-if="error"
            class="flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm"
            style="background: rgba(239,68,68,0.10); border: 1px solid rgba(239,68,68,0.20); color: #f87171;"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0">
              <circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"/>
              <path d="M10 6v4M10 13v.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            {{ error }}
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full h-10 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 mt-1"
            style="background: #F0F0F0; color: #111;"
            @mouseover="(e: any) => !loading && (e.currentTarget.style.background = '#E0E0E0')"
            @mouseleave="(e: any) => e.currentTarget.style.background = '#F0F0F0'"
          >
            <span v-if="loading" class="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            <span v-else>Masuk</span>
          </button>
        </form>
      </div>

      <!-- Back link -->
      <div class="mt-5 text-center">
        <NuxtLink
          to="/"
          class="text-xs transition-colors"
          style="color: rgba(255,255,255,0.25);"
          @mouseover="(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'"
          @mouseleave="(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'"
        >
          ← Kembali ke Chat
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
