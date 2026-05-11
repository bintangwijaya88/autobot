<script setup lang="ts">
import { useChatStore } from '~/stores/chat'
import { useArtifactStore } from '~/stores/artifact'
import { useWebSocket } from '~/composables/useWebSocket'

useSeoMeta({
  title: 'Autobot — WhatsApp Chatbot & Automasi Bisnis Indonesia',
  description: 'Chat langsung dengan Autobot AI. Tanya tentang WaBlastApp, chatbot WhatsApp, blast massal, dan solusi automasi bisnis terbaik di Indonesia.',
  ogTitle: 'Autobot — WhatsApp Chatbot & Automasi Bisnis',
  ogDescription: 'Platform chatbot WhatsApp, blast massal, dan AI automation untuk bisnis Indonesia. Coba gratis sekarang.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id',
  twitterCard: 'summary',
  twitterImage: 'https://autobot.co.id/logo.png',
})

const config = useRuntimeConfig()
const chatStore = useChatStore()
const artifactStore = useArtifactStore()
const ws = useWebSocket()
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  try {
    const keyFromUrl = route.query.session as string | undefined
    const headers: Record<string, string> = {}
    if (keyFromUrl) headers['X-Access-Key'] = keyFromUrl

    const data = await $fetch<{
      session_id: string
      returning_user?: boolean
      user_name?: string
      access_key?: string
    }>(`${config.public.apiBase}/api/chat/session`, { method: 'POST', headers })

    if (!data?.session_id) return

    // Auto-login: restore user state from HTTP response (no WS round-trip needed)
    if (data.returning_user && data.user_name) {
      chatStore.userName = data.user_name
      chatStore.accessKey = data.access_key ?? keyFromUrl ?? null
    }

    chatStore.sessionId = data.session_id
    ws.sessionId.value = data.session_id
    ws.connect(data.session_id)
    ws.onMessage((msg) => {
      chatStore.handleWSMessage(msg)
      // New OTP login: write key to URL without triggering navigation/reload
      if (msg.type === 'user_authenticated' && msg.access_key) {
        const url = new URL(window.location.href)
        url.searchParams.set('session', msg.access_key)
        window.history.replaceState({}, '', url.toString())
      }
    })
  } catch (e) {
    console.error('Failed to init chat:', e)
  }
})

onUnmounted(() => ws.disconnect())

// Sidebar feature clicks arrive via store
watch(() => chatStore.pendingSend, (text) => {
  if (text) {
    chatStore.pendingSend = null
    handleSend(text)
  }
})

const handleSend = (text: string) => {
  if (!text.trim()) return
  chatStore.addMessage({ role: 'user', content: text })
  chatStore.isTyping = true
  ws.sendMessage(text)
}

const handleAction = (payload: any) => {
  switch (payload.type) {
    case 'open_artifact':
      artifactStore.open(payload.artifact)
      break
    case 'register_form':
      chatStore.addMessage({ role: 'user', content: payload.email })
      chatStore.isTyping = true
      ws.sendRegister(payload.name, payload.email)
      break
    case 'show_form':
      chatStore.addMessage({
        role: 'user',
        content: `Saya ingin ${payload.form_type === 'order' ? 'order' : payload.form_type === 'demo_request' ? 'request demo' : 'konsultasi'}`,
      })
      ws.sendMessage(`show_form:${payload.form_type}`)
      break
    case 'chat_message':
      handleSend(payload.text)
      break
    case 'form_submit':
      ws.submitForm(payload.form_type, payload.data)
      break
    case 'show_product':
      handleSend(`Ceritakan lebih detail tentang ${payload.slug}`)
      break
    case 'show_portfolio':
      handleSend(`Ceritakan lebih detail tentang proyek ${payload.label}`)
      break
  }
}
</script>

<template>
  <div class="flex h-full" style="background: #111111;">

    <!-- Chat column -->
    <div
      class="flex flex-col min-h-0 transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
      :style="artifactStore.isOpen ? 'width: 44%; min-width: 280px;' : 'width: 100%;'"
    >
      <div class="flex-1 overflow-hidden min-h-0">
        <ChatContainer @send="handleSend" @action="handleAction" />
      </div>
      <ChatInput
        v-if="chatStore.hasStarted"
        :disabled="chatStore.isTyping"
        @send="handleSend"
      />
    </div>

    <!-- Artifact panel (slides in from right) -->
    <Transition name="artifact-slide">
      <ArtifactPanel
        v-if="artifactStore.isOpen"
        class="flex-1 min-w-0"
        style="min-width: 320px;"
        @action="handleAction"
      />
    </Transition>

  </div>
</template>

<style scoped>
.artifact-slide-enter-active {
  animation: artifactIn 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.artifact-slide-leave-active {
  animation: artifactOut 0.2s ease-in both;
}
@keyframes artifactIn {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes artifactOut {
  from { opacity: 1; transform: translateX(0); }
  to   { opacity: 0; transform: translateX(20px); }
}
</style>
