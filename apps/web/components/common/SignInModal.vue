<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()
const config = useRuntimeConfig()
const auth = useAuth()

const googleLoading = ref(false)
const submitLoading = ref(false)
const error = ref('')
const googleBtnRef = ref<HTMLElement | null>(null)
const mode = ref<'login' | 'register'>('login')
const form = reactive({
  name: '',
  email: '',
  password: '',
})

onMounted(() => {
  const clientId = config.public.googleClientId as string
  if (!clientId) return

  const existing = document.querySelector('script[src="https://accounts.google.com/gsi/client"]')
  if (existing) {
    initGoogle(clientId)
    return
  }
  const script = document.createElement('script')
  script.src = 'https://accounts.google.com/gsi/client'
  script.async = true
  script.defer = true
  script.onload = () => initGoogle(clientId)
  document.head.appendChild(script)
})

function initGoogle(clientId: string) {
  const g = (window as any).google
  if (!g) return
  g.accounts.id.initialize({
    client_id: clientId,
    callback: handleGoogleCredential,
    auto_select: false,
  })
  if (googleBtnRef.value) {
    g.accounts.id.renderButton(googleBtnRef.value, {
      theme: 'filled_black',
      size: 'large',
      width: googleBtnRef.value.offsetWidth || 300,
      shape: 'pill',
      logo_alignment: 'left',
      text: 'continue_with',
    })
  }
}

async function handleGoogleCredential(response: { credential: string }) {
  googleLoading.value = true
  error.value = ''
  try {
    const res = await $fetch<{ access_key: string; name: string; email: string }>(
      `${config.public.apiBase}/api/auth/google`,
      { method: 'POST', body: { id_token: response.credential } }
    )
    auth.setUser(res)
    emit('close')
  } catch (e: any) {
    error.value = e.data?.error || 'Google sign in gagal, coba lagi'
  } finally {
    googleLoading.value = false
  }
}

async function submitForm() {
  submitLoading.value = true
  error.value = ''
  try {
    const endpoint = mode.value === 'register' ? '/api/auth/register' : '/api/auth/login'
    const payload =
      mode.value === 'register'
        ? { name: form.name, email: form.email, password: form.password }
        : { email: form.email, password: form.password }

    const res = await $fetch<{ access_key: string; name: string; email: string }>(
      `${config.public.apiBase}${endpoint}`,
      { method: 'POST', body: payload }
    )
    auth.setUser(res)
    emit('close')
  } catch (e: any) {
    error.value = e.data?.error || 'Gagal autentikasi, coba lagi'
  } finally {
    submitLoading.value = false
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 flex items-start sm:items-center justify-center px-4 py-4 overflow-y-auto"
      style="background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);"
      @click.self="emit('close')"
    >
      <div
        class="w-full max-w-[460px] rounded-[28px] relative flex flex-col items-center overflow-hidden shadow-2xl"
        style="background: linear-gradient(180deg, #171717 0%, #121212 100%); border: 1px solid rgba(255,255,255,0.10);"
      >
        <!-- Close -->
        <button
          class="absolute top-3.5 right-3.5 w-7 h-7 flex items-center justify-center rounded-lg transition-colors"
          style="color: rgba(255,255,255,0.3);"
          @mouseover="(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'"
          @mouseleave="(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'"
          @click="emit('close')"
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
          </svg>
        </button>

        <!-- Logo + heading -->
        <div class="flex flex-col items-center pt-10 pb-6 px-9 w-full">
          <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
            <img src="/logo.png" alt="Autobot" class="h-8 w-auto object-contain" />
          </div>
          <h2 class="text-[19px] font-bold text-white mb-1 tracking-tight">Masuk ke Autobot</h2>
          <p class="text-[13px] text-center max-w-[320px] leading-relaxed" style="color: rgba(255,255,255,0.38);">
            Lanjutkan percakapan & simpan riwayat chat kamu
          </p>
        </div>

        <div class="w-full h-px" style="background: rgba(255,255,255,0.07);" />

        <div class="px-9 pt-5 pb-3 w-full">
          <div class="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/8">
            <button class="h-9 rounded-xl text-[13px] font-medium transition-all" :class="mode === 'login' ? 'bg-white text-black shadow-sm' : 'text-white/65 hover:text-white'" @click="mode = 'login'">Login</button>
            <button class="h-9 rounded-xl text-[13px] font-medium transition-all" :class="mode === 'register' ? 'bg-white text-black shadow-sm' : 'text-white/65 hover:text-white'" @click="mode = 'register'">Register</button>
          </div>
        </div>

        <form class="px-9 pb-4 w-full flex flex-col gap-3" @submit.prevent="submitForm">
          <div class="rounded-2xl border border-white/8 bg-white/5 p-5 space-y-3">
            <div class="space-y-1">
              <p class="text-[12px] font-semibold tracking-wider uppercase" style="color: rgba(255,255,255,0.45);">
                {{ mode === 'login' ? 'Email & Password' : 'Data Akun' }}
              </p>
              <p class="text-[12px]" style="color: rgba(255,255,255,0.32);">
                {{ mode === 'login' ? 'Masukkan email yang terdaftar untuk masuk.' : 'Isi nama, email, dan password untuk membuat akun.' }}
              </p>
            </div>

            <input
              v-if="mode === 'register'"
              v-model.trim="form.name"
              type="text"
              placeholder="Nama"
              class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-[13px] text-white outline-none focus:border-white/25 placeholder:text-white/25 transition-colors"
            />
            <input
              v-model.trim="form.email"
              type="email"
              placeholder="Email"
              class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-[13px] text-white outline-none focus:border-white/25 placeholder:text-white/25 transition-colors"
            />
            <input
              v-model="form.password"
              type="password"
              placeholder="Password"
              class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-[13px] text-white outline-none focus:border-white/25 placeholder:text-white/25 transition-colors"
            />
            <button
              type="submit"
              :disabled="submitLoading"
              class="group relative flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 px-4 text-[13px] font-semibold text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
              style="background: linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.08) 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 25px rgba(0,0,0,0.22);"
            >
              <span
                class="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style="background: linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.12) 100%);"
              />
              <svg
                v-if="submitLoading"
                class="relative z-10 h-4 w-4 animate-spin text-white/80"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity="0.2" stroke-width="2" />
                <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
              <svg
                v-else
                class="relative z-10 h-4 w-4 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 12h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                <path d="M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="relative z-10">
                {{ submitLoading ? 'Memproses...' : (mode === 'register' ? 'Buat Akun' : 'Masuk') }}
              </span>
            </button>
          </div>
        </form>

        <div class="w-full px-9 pb-2">
          <div class="h-px bg-white/10" />
        </div>

        <div class="px-9 py-4 w-full flex flex-col items-center gap-3">
          <p class="text-[12px] w-full text-center" style="color: rgba(255,255,255,0.34);">
            {{ mode === 'login' ? 'Atau lanjutkan dengan Google' : 'Atau daftar menggunakan Google' }}
          </p>

          <!-- Google Identity Services rendered button -->
          <div
            v-if="(config.public.googleClientId as string)"
            ref="googleBtnRef"
            class="w-full overflow-hidden rounded-full"
            style="height: 40px;"
          />

          <!-- Fallback: no Google client ID configured -->
          <div
            v-else
            class="w-full flex items-center justify-center gap-2.5 h-[40px] rounded-full text-[13px] font-medium cursor-not-allowed"
            style="background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.35); border: 1px solid rgba(255,255,255,0.09);"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </div>

          <p v-if="googleLoading" class="text-xs" style="color: rgba(255,255,255,0.4);">
            Memproses...
          </p>
          <p v-if="error" class="text-xs text-red-400 text-center">{{ error }}</p>
        </div>

        <!-- Footer note -->
        <div class="pb-6 px-9 text-center">
          <p class="text-[11.5px]" style="color: rgba(255,255,255,0.22);">
            Dengan masuk, kamu setuju dengan
            <span class="underline cursor-pointer hover:text-white/40 transition-colors">Syarat & Ketentuan</span>
            kami.
          </p>
        </div>
      </div>
    </div>
  </Teleport>
</template>
