<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()
const config = useRuntimeConfig()
const auth = useAuth()

const googleLoading = ref(false)
const error = ref('')
const googleBtnRef = ref<HTMLElement | null>(null)

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

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center px-4"
      style="background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);"
      @click.self="emit('close')"
    >
      <div
        class="w-full max-w-[340px] rounded-2xl relative flex flex-col items-center"
        style="background: #161616; border: 1px solid rgba(255,255,255,0.09);"
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
        <div class="flex flex-col items-center pt-9 pb-7 px-8 w-full">
          <img src="/logo.png" alt="Autobot" class="h-10 w-auto object-contain mb-4" />
          <h2 class="text-[18px] font-bold text-white mb-1">Masuk ke Autobot</h2>
          <p class="text-[13px] text-center" style="color: rgba(255,255,255,0.38);">
            Lanjutkan percakapan & simpan riwayat chat kamu
          </p>
        </div>

        <!-- Divider -->
        <div class="w-full h-px" style="background: rgba(255,255,255,0.07);" />

        <!-- Google button area -->
        <div class="px-8 py-7 w-full flex flex-col items-center gap-4">

          <!-- Google Identity Services rendered button -->
          <div
            v-if="(config.public.googleClientId as string)"
            ref="googleBtnRef"
            class="w-full overflow-hidden rounded-full"
            style="height: 46px;"
          />

          <!-- Fallback: no Google client ID configured -->
          <div
            v-else
            class="w-full flex items-center justify-center gap-3 h-[46px] rounded-full text-sm font-medium cursor-not-allowed"
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
        <div class="pb-6 px-8 text-center">
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
