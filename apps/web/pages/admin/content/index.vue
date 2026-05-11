<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const config = useRuntimeConfig()
const data = ref<any>(null)
const pages = computed(() => data.value?.data || [])

function getHeaders() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

async function refresh() {
  data.value = await $fetch(`${config.public.apiBase}/api/admin/pages`, { headers: getHeaders() })
}

onMounted(refresh)

const editing = ref<any>(null)
const editTitle = ref('')
const editContent = ref('')
const editPublished = ref(true)
const saving = ref(false)
const error = ref('')

function openEdit(p: any) {
  editing.value = p
  editTitle.value = p.title
  editContent.value = p.content
  editPublished.value = p.is_published
}

async function saveEdit() {
  saving.value = true
  error.value = ''
  try {
    await $fetch(`${config.public.apiBase}/api/admin/pages/${editing.value.slug}`, {
      method: 'PUT', headers: getHeaders(),
      body: { title: editTitle.value, content: editContent.value, is_published: editPublished.value },
    })
    await refresh()
    editing.value = null
  } catch (e: any) {
    error.value = e.data?.error || 'Save failed'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="p-6 max-w-5xl mx-auto w-full">
    <h1 class="text-xl font-bold text-white mb-6">Content / Pages</h1>

    <div class="rounded-2xl border border-white/8 overflow-hidden" style="background: rgba(255,255,255,0.02);">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/8 text-xs text-gray-500">
            <th class="px-5 py-3 text-left font-medium">Slug</th>
            <th class="px-5 py-3 text-left font-medium">Title</th>
            <th class="px-5 py-3 text-left font-medium">Published</th>
            <th class="px-5 py-3 text-left font-medium">Updated</th>
            <th class="px-5 py-3 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr v-for="p in pages" :key="p.id" class="hover:bg-white/3 transition-colors">
            <td class="px-5 py-3 text-gray-400 font-mono text-xs">{{ p.slug }}</td>
            <td class="px-5 py-3 text-white">{{ p.title }}</td>
            <td class="px-5 py-3">
              <span class="text-xs" :class="p.is_published ? 'text-green-400' : 'text-gray-500'">
                {{ p.is_published ? 'Published' : 'Draft' }}
              </span>
            </td>
            <td class="px-5 py-3 text-xs text-gray-500">{{ new Date(p.updated_at).toLocaleDateString('id') }}</td>
            <td class="px-5 py-3 text-right">
              <button @click="openEdit(p)" class="text-xs text-blue-400 hover:text-blue-300">Edit</button>
            </td>
          </tr>
          <tr v-if="!pages.length">
            <td colspan="5" class="px-5 py-10 text-center text-gray-600">No pages found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit drawer -->
    <Teleport to="body">
      <div v-if="editing" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" style="background: rgba(0,0,0,0.7);">
        <div class="w-full max-w-2xl rounded-2xl border border-white/15 p-6" style="background: #1a1a1a; max-height: 90vh; overflow-y: auto;">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-white font-semibold">Edit: {{ editing.slug }}</h2>
            <label class="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
              <input type="checkbox" v-model="editPublished" class="rounded" />
              Published
            </label>
          </div>
          <div v-if="error" class="mb-3 px-3 py-2 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 text-xs">{{ error }}</div>
          <div class="space-y-3">
            <div>
              <label class="block text-xs text-gray-500 mb-1.5">Title</label>
              <input v-model="editTitle" class="admin-input w-full" placeholder="Page title" />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1.5">Content (Markdown)</label>
              <textarea v-model="editContent" rows="16" class="admin-input w-full font-mono text-xs" placeholder="# Heading&#10;Content here..."></textarea>
            </div>
          </div>
          <div class="flex justify-end gap-3 mt-5">
            <button @click="editing = null" class="px-4 h-9 rounded-lg border border-white/15 text-gray-400 text-sm hover:text-white">Cancel</button>
            <button @click="saveEdit" :disabled="saving" class="px-5 h-9 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 disabled:opacity-50">
              {{ saving ? 'Saving...' : 'Save Page' }}
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
