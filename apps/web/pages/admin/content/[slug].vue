<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const config = useRuntimeConfig()
const route = useRoute()
const isNew = route.params.slug === 'new'
useSeoMeta({ title: isNew ? 'Halaman Baru — Admin' : 'Edit Halaman — Admin', robots: 'noindex' })

const loading = ref(!isNew)
const saving = ref(false)
const saved = ref(false)
const error = ref('')

const form = reactive({
  slug: '', title: '', content: '', is_published: true, sort_order: 0,
})

function headers() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

onMounted(async () => {
  if (isNew) return
  try {
    const r = await $fetch<any>(`${config.public.apiBase}/api/admin/pages`, { headers: headers() })
    const p = (r.data ?? []).find((x: any) => x.slug === route.params.slug)
    if (p) Object.assign(form, { slug: p.slug, title: p.title, content: p.content, is_published: p.is_published, sort_order: p.sort_order ?? 0 })
    else error.value = 'Halaman tidak ditemukan'
  } catch { error.value = 'Gagal memuat halaman' }
  loading.value = false
})

function autoSlug() {
  if (!form.slug || isNew) {
    form.slug = form.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-')
  }
}

async function save() {
  if (!form.title || !form.slug) { error.value = 'Judul dan slug wajib diisi'; return }
  saving.value = true; error.value = ''
  try {
    if (isNew) {
      await $fetch(`${config.public.apiBase}/api/admin/pages`, { method: 'POST', headers: headers(), body: form })
      navigateTo(`/admin/content/${form.slug}`)
    } else {
      await $fetch(`${config.public.apiBase}/api/admin/pages/${route.params.slug}`, { method: 'PUT', headers: headers(), body: form })
      saved.value = true
      setTimeout(() => { saved.value = false }, 2000)
    }
  } catch (e: any) { error.value = e.data?.error || 'Gagal menyimpan' }
  saving.value = false
}
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto w-full">
    <div class="flex items-center gap-3 mb-6">
      <NuxtLink to="/admin/content" class="text-gray-500 hover:text-white transition-colors">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M12 5l-6 5 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </NuxtLink>
      <h1 class="text-xl font-bold text-white">{{ isNew ? 'Halaman Baru' : 'Edit Halaman' }}</h1>
      <div class="ml-auto flex items-center gap-3">
        <span v-if="saved" class="text-xs text-green-400">✓ Tersimpan</span>
        <span v-if="error" class="text-xs text-red-400">{{ error }}</span>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" v-model="form.is_published" class="w-4 h-4 accent-indigo-500" />
          <span class="text-sm text-gray-400">Published</span>
        </label>
        <button @click="save" :disabled="saving"
          class="px-4 py-2 rounded-xl text-sm font-medium text-white disabled:opacity-50" style="background: #6366f1;">
          {{ saving ? 'Menyimpan...' : (isNew ? 'Buat Halaman' : 'Simpan') }}
        </button>
      </div>
    </div>

    <div v-if="loading" class="h-48 flex items-center justify-center">
      <div class="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>

    <div v-else class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-2">
          <label class="block text-xs text-gray-500 mb-1.5">Judul *</label>
          <input v-model="form.title" @blur="autoSlug" type="text" placeholder="Judul halaman..."
            class="w-full h-11 rounded-xl px-4 text-white font-medium outline-none"
            style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);" />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Slug (URL) *</label>
          <input v-model="form.slug" type="text" :disabled="!isNew" placeholder="url-halaman"
            class="w-full h-11 rounded-xl px-4 text-white font-mono text-sm outline-none disabled:opacity-50"
            style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);" />
        </div>
      </div>

      <div>
        <label class="block text-xs text-gray-500 mb-1.5">Sort Order</label>
        <input v-model.number="form.sort_order" type="number" class="w-32 h-10 rounded-xl px-3 text-sm text-white outline-none"
          style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);" />
      </div>

      <div>
        <label class="block text-xs text-gray-500 mb-1.5">Konten (Markdown)</label>
        <textarea v-model="form.content" rows="24"
          placeholder="# Heading&#10;&#10;Konten halaman dalam format Markdown..."
          class="w-full rounded-xl px-4 py-3 text-sm text-white outline-none resize-y font-mono leading-relaxed"
          style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10); min-height: 500px;" />
      </div>

      <div class="flex justify-end pt-2">
        <button @click="save" :disabled="saving" class="px-6 py-2.5 rounded-xl text-sm font-medium text-white disabled:opacity-50" style="background: #6366f1;">
          {{ saving ? 'Menyimpan...' : (isNew ? 'Buat Halaman' : 'Simpan Perubahan') }}
        </button>
      </div>
    </div>
  </div>
</template>
