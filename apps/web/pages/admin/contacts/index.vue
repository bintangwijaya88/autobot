<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const config = useRuntimeConfig()
const statusFilter = ref('')
const page = ref(0)
const limit = 20
const data = ref<any>(null)
const contacts = computed(() => data.value?.data || [])
const total = computed(() => data.value?.total || 0)

function getHeaders() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

async function refresh() {
  data.value = await $fetch(
    `${config.public.apiBase}/api/admin/contacts?status=${statusFilter.value}&limit=${limit}&offset=${page.value * limit}`,
    { headers: getHeaders() }
  )
}

const editing = ref<any>(null)
const editStatus = ref('')
const editNotes = ref('')
const saving = ref(false)

function openEdit(c: any) {
  editing.value = c
  editStatus.value = c.status
  editNotes.value = c.notes || ''
}

async function saveEdit() {
  saving.value = true
  await $fetch(`${config.public.apiBase}/api/admin/contacts/${editing.value.id}`, {
    method: 'PUT', headers: getHeaders(), body: { status: editStatus.value, notes: editNotes.value },
  })
  await refresh()
  editing.value = null
  saving.value = false
}

watch([statusFilter, page], refresh)
onMounted(refresh)

const typeColor: Record<string, string> = {
  order: 'bg-blue-500/20 text-blue-400',
  consultation: 'bg-purple-500/20 text-purple-400',
  demo_request: 'bg-yellow-500/20 text-yellow-400',
}
const statusColor: Record<string, string> = {
  new: 'bg-green-500/20 text-green-400',
  in_progress: 'bg-yellow-500/20 text-yellow-400',
  closed: 'bg-gray-500/20 text-gray-400',
}
</script>

<template>
  <div class="p-6 max-w-6xl mx-auto w-full">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-xl font-bold text-white">Contact Submissions</h1>
      <select v-model="statusFilter" @change="page = 0; refresh()" class="admin-input text-sm">
        <option value="">All Status</option>
        <option value="new">New</option>
        <option value="in_progress">In Progress</option>
        <option value="closed">Closed</option>
      </select>
    </div>

    <div class="rounded-2xl border border-white/8 overflow-hidden" style="background: rgba(255,255,255,0.02);">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/8 text-xs text-gray-500">
            <th class="px-5 py-3 text-left font-medium">Name</th>
            <th class="px-5 py-3 text-left font-medium">Contact</th>
            <th class="px-5 py-3 text-left font-medium">Type</th>
            <th class="px-5 py-3 text-left font-medium">Status</th>
            <th class="px-5 py-3 text-left font-medium">Date</th>
            <th class="px-5 py-3 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr v-for="c in contacts" :key="c.id" class="hover:bg-white/3 transition-colors">
            <td class="px-5 py-3 text-white">{{ c.name }}</td>
            <td class="px-5 py-3 text-gray-400 text-xs">
              <div>{{ c.email || '-' }}</div>
              <div>{{ c.phone || '' }}</div>
            </td>
            <td class="px-5 py-3">
              <span class="text-xs px-2 py-0.5 rounded-full" :class="typeColor[c.type] || 'bg-gray-500/20 text-gray-400'">
                {{ c.type }}
              </span>
            </td>
            <td class="px-5 py-3">
              <span class="text-xs px-2 py-0.5 rounded-full" :class="statusColor[c.status] || 'bg-gray-500/20 text-gray-400'">
                {{ c.status }}
              </span>
            </td>
            <td class="px-5 py-3 text-xs text-gray-500">{{ new Date(c.created_at).toLocaleDateString('id') }}</td>
            <td class="px-5 py-3 text-right">
              <button @click="openEdit(c)" class="text-xs text-blue-400 hover:text-blue-300">Update</button>
            </td>
          </tr>
          <tr v-if="!contacts.length">
            <td colspan="6" class="px-5 py-10 text-center text-gray-600">No submissions yet</td>
          </tr>
        </tbody>
      </table>
      <div v-if="total > limit" class="px-5 py-3 border-t border-white/8 flex items-center justify-between text-xs text-gray-500">
        <span>{{ total }} total</span>
        <div class="flex gap-2">
          <button :disabled="page === 0" @click="page--; refresh()" class="px-3 py-1 rounded border border-white/10 disabled:opacity-30">Prev</button>
          <button :disabled="(page + 1) * limit >= total" @click="page++; refresh()" class="px-3 py-1 rounded border border-white/10 disabled:opacity-30">Next</button>
        </div>
      </div>
    </div>

    <!-- Edit modal -->
    <Teleport to="body">
      <div v-if="editing" class="fixed inset-0 z-50 flex items-center justify-center p-4" style="background: rgba(0,0,0,0.7);">
        <div class="w-full max-w-md rounded-2xl border border-white/15 p-6" style="background: #1a1a1a;">
          <h2 class="text-white font-semibold mb-4">Update Contact: {{ editing.name }}</h2>
          <div class="space-y-3">
            <div>
              <label class="block text-xs text-gray-500 mb-1.5">Status</label>
              <select v-model="editStatus" class="admin-input w-full">
                <option value="new">New</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1.5">Notes</label>
              <textarea v-model="editNotes" rows="3" class="admin-input w-full" placeholder="Internal notes..."></textarea>
            </div>
          </div>
          <div class="flex justify-end gap-3 mt-5">
            <button @click="editing = null" class="px-4 h-9 rounded-lg border border-white/15 text-gray-400 text-sm hover:text-white">Cancel</button>
            <button @click="saveEdit" :disabled="saving" class="px-5 h-9 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 disabled:opacity-50">
              {{ saving ? 'Saving...' : 'Save' }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
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
