<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const config = useRuntimeConfig()
const data = ref<any>(null)
const entries = computed(() => data.value?.data || [])

function getHeaders() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

async function refresh() {
  data.value = await $fetch(`${config.public.apiBase}/api/admin/knowledge`, { headers: getHeaders() })
}

onMounted(refresh)

const showForm = ref(false)
const form = reactive({ category: '', question: '', answer: '', priority: 0 })
const saving = ref(false)
const deleting = ref<string | null>(null)

async function create() {
  saving.value = true
  await $fetch(`${config.public.apiBase}/api/admin/knowledge`, {
    method: 'POST', headers: getHeaders(),
    body: { ...form, priority: Number(form.priority) },
  })
  await refresh()
  Object.assign(form, { category: '', question: '', answer: '', priority: 0 })
  showForm.value = false
  saving.value = false
}

async function deleteEntry(id: string) {
  if (!confirm('Deactivate this entry?')) return
  deleting.value = id
  await $fetch(`${config.public.apiBase}/api/admin/knowledge/${id}`, { method: 'DELETE', headers: getHeaders() })
  await refresh()
  deleting.value = null
}
</script>

<template>
  <div class="p-6 max-w-5xl mx-auto w-full">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-xl font-bold text-white">Knowledge Base</h1>
      <button @click="showForm = !showForm"
        class="px-4 h-9 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors">
        {{ showForm ? 'Cancel' : '+ Add Entry' }}
      </button>
    </div>

    <!-- Add form -->
    <div v-if="showForm" class="rounded-2xl border border-white/8 p-5 mb-6 space-y-3" style="background: rgba(255,255,255,0.03);">
      <h2 class="text-sm font-medium text-white">New Knowledge Entry</h2>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs text-gray-500 mb-1">Category *</label>
          <input v-model="form.category" class="admin-input w-full" placeholder="pricing / features / product" />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1">Priority</label>
          <input v-model="form.priority" type="number" class="admin-input w-full" placeholder="0" />
        </div>
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1">Question (optional)</label>
        <input v-model="form.question" class="admin-input w-full" placeholder="Berapa harga WaBlastApp?" />
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1">Answer *</label>
        <textarea v-model="form.answer" rows="4" class="admin-input w-full" placeholder="Jawaban lengkap..."></textarea>
      </div>
      <div class="flex justify-end">
        <button @click="create" :disabled="saving || !form.answer || !form.category"
          class="px-5 h-9 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 disabled:opacity-50 transition-colors">
          {{ saving ? 'Saving...' : 'Add Entry' }}
        </button>
      </div>
    </div>

    <!-- Entries list -->
    <div class="space-y-3">
      <div v-for="e in entries" :key="e.id"
        class="rounded-xl border border-white/8 p-4 hover:border-white/15 transition-colors"
        style="background: rgba(255,255,255,0.02);">
        <div class="flex items-start justify-between gap-3">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1.5">
              <span class="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">{{ e.category }}</span>
              <span class="text-xs text-gray-600">priority: {{ e.priority }}</span>
            </div>
            <p v-if="e.question" class="text-sm text-gray-300 font-medium mb-1">Q: {{ e.question }}</p>
            <p class="text-sm text-gray-400 line-clamp-3">{{ e.answer }}</p>
          </div>
          <button @click="deleteEntry(e.id)" :disabled="deleting === e.id"
            class="text-xs text-red-400 hover:text-red-300 disabled:opacity-50 shrink-0">
            {{ deleting === e.id ? '...' : 'Remove' }}
          </button>
        </div>
      </div>
      <div v-if="!entries.length" class="text-center py-12 text-gray-600">No knowledge entries yet</div>
    </div>
  </div>
</template>

<style>
.admin-input {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 8px 12px;
  color: #f0f0f0;
  font-size: 13px;
  outline: none;
  resize: vertical;
}
.admin-input:focus { border-color: rgba(255,255,255,0.3); }
</style>
