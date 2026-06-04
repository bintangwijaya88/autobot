<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
useSeoMeta({ title: 'Integrations — Admin', robots: 'noindex' })

const config = useRuntimeConfig()

interface Integration {
  id: string; name: string; slug: string; description: string; logo_url: string
  category: string; status: string; is_featured: boolean; sort_order: number
  docs_url: string; knowledge_base: string; created_at: string
}

const integrations = ref<Integration[]>([])
const total = ref(0)
const loading = ref(true)
const editModal = ref<Integration | null>(null)
const isNew = ref(false)
const saving = ref(false)
const deleting = ref<string | null>(null)

const form = reactive<Integration>({
  id: '', name: '', slug: '', description: '', logo_url: '',
  category: 'general', status: 'coming_soon', is_featured: false,
  sort_order: 0, docs_url: '', knowledge_base: '', created_at: '',
})

function headers() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

async function fetch() {
  loading.value = true
  const r = await $fetch<any>(`${config.public.apiBase}/api/admin/integrations`, { headers: headers() }).catch(() => ({ integrations: [], total: 0 }))
  integrations.value = r.integrations
  total.value = r.total
  loading.value = false
}

onMounted(fetch)

function openNew() {
  isNew.value = true
  Object.assign(form, { id: '', name: '', slug: '', description: '', logo_url: '', category: 'general', status: 'coming_soon', is_featured: false, sort_order: 0, docs_url: '', knowledge_base: '' })
  editModal.value = form as any
}

function openEdit(i: Integration) {
  isNew.value = false
  Object.assign(form, i)
  editModal.value = form as any
}

function autoSlug() {
  if (!form.slug || isNew.value) {
    form.slug = form.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-')
  }
}

async function save() {
  if (!form.name) return
  saving.value = true
  try {
    if (isNew.value) {
      await $fetch(`${config.public.apiBase}/api/admin/integrations`, { method: 'POST', headers: headers(), body: form })
    } else {
      await $fetch(`${config.public.apiBase}/api/admin/integrations/${form.id}`, { method: 'PUT', headers: headers(), body: form })
    }
    editModal.value = null
    fetch()
  } catch {}
  saving.value = false
}

async function del(i: Integration) {
  if (!confirm(`Hapus "${i.name}"?`)) return
  deleting.value = i.id
  await $fetch(`${config.public.apiBase}/api/admin/integrations/${i.id}`, { method: 'DELETE', headers: headers() }).catch(() => {})
  deleting.value = null
  fetch()
}

const statusColor: Record<string, string> = {
  active: 'bg-green-500/20 text-green-400',
  coming_soon: 'bg-yellow-500/20 text-yellow-400',
  deprecated: 'bg-red-500/20 text-red-400',
}
</script>

<template>
  <div class="p-6 max-w-5xl mx-auto w-full">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-xl font-bold text-white">Integrations</h1>
        <p class="text-xs text-gray-500 mt-0.5">{{ total }} integrasi</p>
      </div>
      <button @click="openNew"
        class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white" style="background: #6366f1;">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        Tambah Integrasi
      </button>
    </div>

    <div v-if="loading" class="space-y-3">
      <div v-for="i in 4" :key="i" class="rounded-xl border border-white/8 p-4 h-16 animate-pulse" style="background: rgba(255,255,255,0.03);" />
    </div>
    <div v-else-if="!integrations.length" class="rounded-2xl border border-white/8 py-16 text-center" style="background: rgba(255,255,255,0.02);">
      <p class="text-gray-500 text-sm">Belum ada integrasi</p>
    </div>
    <div v-else class="rounded-2xl border border-white/8 overflow-hidden" style="background: rgba(255,255,255,0.02);">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/8" style="background: rgba(255,255,255,0.03);">
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Integrasi</th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Kategori</th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Featured</th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr v-for="i in integrations" :key="i.id" class="hover:bg-white/2 transition-colors">
            <td class="px-4 py-3">
              <div class="flex items-center gap-3">
                <img v-if="i.logo_url" :src="i.logo_url" class="w-8 h-8 rounded-lg object-contain" style="background: rgba(255,255,255,0.08);" />
                <div v-else class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style="background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.5);">{{ i.name.charAt(0) }}</div>
                <div>
                  <p class="font-medium text-white">{{ i.name }}</p>
                  <p class="text-xs text-gray-500">{{ i.slug }}</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-xs text-gray-400">{{ i.category }}</td>
            <td class="px-4 py-3">
              <span class="text-[11px] px-2 py-0.5 rounded-full font-medium" :class="statusColor[i.status] || 'bg-gray-500/20 text-gray-400'">
                {{ i.status === 'coming_soon' ? 'Segera Hadir' : i.status === 'active' ? 'Aktif' : i.status }}
              </span>
            </td>
            <td class="px-4 py-3 text-xs">
              <span v-if="i.is_featured" class="text-yellow-400">★ Featured</span>
              <span v-else class="text-gray-600">—</span>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                <button @click="openEdit(i)" class="text-xs text-blue-400 hover:text-blue-300">Edit</button>
                <button @click="del(i)" :disabled="deleting === i.id" class="text-xs text-red-500 hover:text-red-400 disabled:opacity-40">Hapus</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit/New Modal -->
    <Teleport to="body">
      <div v-if="editModal" class="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto py-8" style="background: rgba(0,0,0,0.75);" @click.self="editModal = null">
        <div class="w-full max-w-[560px] rounded-2xl p-6" style="background: #1a1a1a; border: 1px solid rgba(255,255,255,0.10);">
          <h3 class="text-base font-semibold text-white mb-5">{{ isNew ? 'Tambah Integrasi' : 'Edit Integrasi' }}</h3>
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs text-gray-500 mb-1">Nama *</label>
                <input v-model="form.name" @blur="autoSlug" type="text" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none" placeholder="WhatsApp" />
              </div>
              <div>
                <label class="block text-xs text-gray-500 mb-1">Slug</label>
                <input v-model="form.slug" type="text" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none font-mono" placeholder="whatsapp" />
              </div>
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">Logo URL</label>
              <input v-model="form.logo_url" type="text" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none" placeholder="https://..." />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">Deskripsi</label>
              <textarea v-model="form.description" rows="3" class="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white outline-none resize-none" placeholder="Deskripsi singkat integrasi..." />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs text-gray-500 mb-1">Kategori</label>
                <input v-model="form.category" type="text" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none" placeholder="crm, payment, ai..." />
              </div>
              <div>
                <label class="block text-xs text-gray-500 mb-1">Status</label>
                <select v-model="form.status" class="w-full h-10 rounded-xl border border-white/10 px-3 text-sm text-white outline-none" style="background: rgba(30,30,40,1);">
                  <option value="active">Aktif</option>
                  <option value="coming_soon">Segera Hadir</option>
                  <option value="deprecated">Deprecated</option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs text-gray-500 mb-1">Sort Order</label>
                <input v-model.number="form.sort_order" type="number" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none" />
              </div>
              <div class="flex items-end pb-1">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input v-model="form.is_featured" type="checkbox" class="w-4 h-4 rounded accent-yellow-400" />
                  <span class="text-sm text-gray-400">Featured</span>
                </label>
              </div>
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">Docs URL</label>
              <input v-model="form.docs_url" type="text" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none" placeholder="https://docs.example.com" />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">Knowledge Base (untuk chatbot AI)</label>
              <textarea v-model="form.knowledge_base" rows="4" class="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white outline-none resize-none" placeholder="Informasi tentang integrasi ini yang akan digunakan chatbot..." />
            </div>
          </div>
          <div class="flex justify-end gap-2 mt-5">
            <button @click="editModal = null" class="px-4 py-2 rounded-xl text-sm text-gray-400 hover:text-white border border-white/10">Batal</button>
            <button @click="save" :disabled="saving" class="px-4 py-2 rounded-xl text-sm font-medium text-white disabled:opacity-50" style="background: #6366f1;">
              {{ saving ? 'Menyimpan...' : 'Simpan' }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
