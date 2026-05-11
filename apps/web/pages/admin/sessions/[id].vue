<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const route = useRoute()
const config = useRuntimeConfig()
const data = ref<any>(null)
const pending = ref(true)
const session = computed(() => data.value?.session)
const messages = computed(() => data.value?.messages || [])

onMounted(async () => {
  const token = localStorage.getItem('admin_token') || ''
  data.value = await $fetch(`${config.public.apiBase}/api/admin/sessions/${route.params.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  pending.value = false
})

function roleLabel(role: string) {
  return role === 'assistant' ? 'Bot' : 'User'
}
</script>

<template>
  <div class="min-h-screen" style="background: var(--bg-primary)">
    <nav class="border-b px-6 py-4 flex items-center gap-4" style="border-color: var(--border-color)">
      <NuxtLink to="/admin/sessions" class="text-gray-400 hover:text-white text-sm">← Sessions</NuxtLink>
      <span class="text-white font-medium">Session Detail</span>
    </nav>

    <div class="max-w-4xl mx-auto px-6 py-8" v-if="!pending && session">
      <!-- Session info -->
      <div class="rounded-2xl border border-white/8 p-5 mb-6 grid grid-cols-2 gap-4" style="background: rgba(255,255,255,0.02);">
        <div>
          <p class="text-xs text-gray-500 mb-0.5">Visitor</p>
          <p class="text-white text-sm font-medium">{{ session.visitor_name || 'Anonymous' }}</p>
          <p class="text-gray-500 text-xs">{{ session.visitor_email || '—' }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-0.5">Source / Status</p>
          <p class="text-white text-sm">{{ session.source }} · <span :class="session.status === 'active' ? 'text-green-400' : 'text-gray-400'">{{ session.status }}</span></p>
          <p class="text-gray-500 text-xs">{{ new Date(session.created_at).toLocaleString('id') }}</p>
        </div>
      </div>

      <!-- Messages -->
      <div class="space-y-3">
        <div v-for="msg in messages" :key="msg.id"
          class="rounded-xl border border-white/6 p-4"
          :style="msg.role === 'assistant' ? 'background: rgba(255,255,255,0.02)' : 'background: rgba(99,102,241,0.08)'">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="text-xs font-medium" :class="msg.role === 'assistant' ? 'text-blue-400' : 'text-indigo-300'">
              {{ roleLabel(msg.role) }}
            </span>
            <span class="text-gray-600 text-xs">{{ new Date(msg.created_at).toLocaleTimeString('id') }}</span>
          </div>
          <p class="text-gray-300 text-sm whitespace-pre-wrap">{{ msg.content }}</p>
        </div>
        <p v-if="!messages.length" class="text-center text-gray-600 py-8">Belum ada pesan</p>
      </div>
    </div>

    <div v-else-if="pending" class="flex items-center justify-center py-24">
      <div class="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
  </div>
</template>
