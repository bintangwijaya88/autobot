<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const config = useRuntimeConfig()
const page = ref(0)
const data = ref<{ data: any[]; total: number } | null>(null)
const sessions = computed(() => data.value?.data || [])
const total = computed(() => data.value?.total || 0)

async function refresh() {
  const token = localStorage.getItem('admin_token') || ''
  data.value = await $fetch(`${config.public.apiBase}/api/admin/sessions?limit=20&offset=${page.value * 20}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

watch(page, refresh)
onMounted(refresh)
</script>

<template>
  <div class="min-h-screen" style="background: var(--bg-primary)">
    <nav class="border-b px-6 py-4 flex items-center gap-4" style="border-color: var(--border-color)">
      <NuxtLink to="/admin/dashboard" class="text-gray-400 hover:text-white text-sm">← Dashboard</NuxtLink>
      <span class="text-white font-medium">Chat Sessions</span>
    </nav>

    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold text-white">Sessions <span class="text-gray-500 font-normal text-lg">({{ total }})</span></h1>
        <button @click="refresh" class="text-sm text-gray-400 hover:text-white">↻ Refresh</button>
      </div>

      <div class="rounded-2xl border border-white/10 overflow-hidden">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b" style="border-color: var(--border-color)">
              <th class="text-left px-4 py-3 text-gray-500 font-medium">Visitor</th>
              <th class="text-left px-4 py-3 text-gray-500 font-medium">Source</th>
              <th class="text-left px-4 py-3 text-gray-500 font-medium">Status</th>
              <th class="text-left px-4 py-3 text-gray-500 font-medium">Created</th>
              <th class="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody class="divide-y" style="border-color: var(--border-color)">
            <tr v-for="s in sessions" :key="s.id" class="hover:bg-white/3 transition-colors">
              <td class="px-4 py-3">
                <p class="text-white">{{ s.visitor_name || 'Anonymous' }}</p>
                <p class="text-gray-600 text-xs">{{ s.visitor_email || s.visitor_id?.slice(0, 12) + '...' }}</p>
              </td>
              <td class="px-4 py-3 text-gray-400">{{ s.source }}</td>
              <td class="px-4 py-3">
                <span class="text-xs px-2 py-0.5 rounded-full"
                  :class="s.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'">
                  {{ s.status }}
                </span>
              </td>
              <td class="px-4 py-3 text-gray-500 text-xs">{{ new Date(s.created_at).toLocaleString('id') }}</td>
              <td class="px-4 py-3 text-right">
                <NuxtLink :to="`/admin/sessions/${s.id}`" class="text-blue-400 hover:text-blue-300 text-xs">Detail →</NuxtLink>
              </td>
            </tr>
            <tr v-if="!sessions.length">
              <td colspan="5" class="px-4 py-8 text-center text-gray-600">Belum ada sessions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
