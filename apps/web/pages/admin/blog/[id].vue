<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const config = useRuntimeConfig()
const route = useRoute()
const isNew = route.params.id === 'new'
useSeoMeta({ title: isNew ? 'Artikel Baru — Admin' : 'Edit Artikel — Admin', robots: 'noindex' })

const loading = ref(!isNew)
const saving = ref(false)
const saved = ref(false)
const error = ref('')

const form = reactive({
  title: '', slug: '', excerpt: '', content: '', cover_image: '',
  author: 'Autobot Team', category: 'general', tags: '',
  is_published: false, read_time_minutes: 5, sort_order: 0,
})

function headers() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

onMounted(async () => {
  if (isNew) return
  try {
    const p = await $fetch<any>(`${config.public.apiBase}/api/admin/blog/${route.params.id}`, { headers: headers() })
    Object.assign(form, {
      title: p.title, slug: p.slug, excerpt: p.excerpt, content: p.content,
      cover_image: p.cover_image, author: p.author, category: p.category,
      tags: p.tags === '[]' ? '' : p.tags, is_published: p.is_published,
      read_time_minutes: p.read_time_minutes, sort_order: p.sort_order,
    })
  } catch { error.value = 'Artikel tidak ditemukan' }
  loading.value = false
})

function autoSlug() {
  if (!form.slug || isNew) {
    form.slug = form.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-')
  }
}

async function save() {
  if (!form.title) { error.value = 'Judul wajib diisi'; return }
  saving.value = true; error.value = ''
  try {
    if (isNew) {
      const r = await $fetch<any>(`${config.public.apiBase}/api/admin/blog`, {
        method: 'POST', headers: headers(), body: form,
      })
      navigateTo(`/admin/blog/${r.id}`)
    } else {
      await $fetch(`${config.public.apiBase}/api/admin/blog/${route.params.id}`, {
        method: 'PUT', headers: headers(), body: form,
      })
      saved.value = true
      setTimeout(() => { saved.value = false }, 2000)
    }
  } catch (e: any) {
    error.value = e.data?.error || 'Gagal menyimpan'
  }
  saving.value = false
}

const categories = ['general', 'tutorial', 'update', 'tips', 'case-study', 'announcement']
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto w-full">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-6">
      <NuxtLink to="/admin/blog" class="text-gray-500 hover:text-white transition-colors">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M12 5l-6 5 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </NuxtLink>
      <h1 class="text-xl font-bold text-white">{{ isNew ? 'Artikel Baru' : 'Edit Artikel' }}</h1>
      <div class="ml-auto flex items-center gap-2">
        <span v-if="saved" class="text-xs text-green-400">✓ Tersimpan</span>
        <span v-if="error" class="text-xs text-red-400">{{ error }}</span>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" v-model="form.is_published" class="w-4 h-4 rounded accent-indigo-500" />
          <span class="text-sm text-gray-400">Publish</span>
        </label>
        <button @click="save" :disabled="saving"
          class="px-4 py-2 rounded-xl text-sm font-medium text-white disabled:opacity-50 transition-all"
          style="background: #6366f1;">
          {{ saving ? 'Menyimpan...' : (isNew ? 'Buat Artikel' : 'Simpan') }}
        </button>
      </div>
    </div>

    <div v-if="loading" class="h-64 flex items-center justify-center">
      <div class="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>

    <div v-else class="space-y-5">
      <!-- Title -->
      <div>
        <label class="block text-xs text-gray-500 mb-1.5">Judul Artikel *</label>
        <input v-model="form.title" @blur="autoSlug" type="text" placeholder="Judul artikel..."
          class="w-full h-11 rounded-xl px-4 text-white text-base font-medium outline-none transition-colors"
          style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);"
          @focus="(e:any) => e.target.style.borderColor = 'rgba(255,255,255,0.25)'"
          @blur2="(e:any) => e.target.style.borderColor = 'rgba(255,255,255,0.10)'"
        />
      </div>

      <!-- Row: Slug + Category + Author -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Slug (URL)</label>
          <input v-model="form.slug" type="text" placeholder="url-artikel"
            class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);" />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Kategori</label>
          <select v-model="form.category" class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="background: rgba(30,30,40,1); border: 1px solid rgba(255,255,255,0.10);">
            <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Author</label>
          <input v-model="form.author" type="text" placeholder="Autobot Team"
            class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);" />
        </div>
      </div>

      <!-- Row: Cover image + Read time -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Cover Image URL</label>
          <input v-model="form.cover_image" type="text" placeholder="https://..."
            class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);" />
          <img v-if="form.cover_image" :src="form.cover_image" class="mt-2 h-24 object-cover rounded-lg" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs text-gray-500 mb-1.5">Waktu Baca (menit)</label>
            <input v-model.number="form.read_time_minutes" type="number" min="1"
              class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);" />
          </div>
          <div>
            <label class="block text-xs text-gray-500 mb-1.5">Sort Order</label>
            <input v-model.number="form.sort_order" type="number"
              class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);" />
          </div>
        </div>
      </div>

      <!-- Excerpt -->
      <div>
        <label class="block text-xs text-gray-500 mb-1.5">Excerpt (ringkasan)</label>
        <textarea v-model="form.excerpt" rows="2" placeholder="Ringkasan singkat artikel..."
          class="w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none resize-none" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);" />
      </div>

      <!-- Content -->
      <div>
        <label class="block text-xs text-gray-500 mb-1.5">Konten (Markdown)</label>
        <textarea v-model="form.content" rows="20" placeholder="Tulis artikel dalam format Markdown...&#10;&#10;## Heading&#10;&#10;Paragraf teks..."
          class="w-full rounded-xl px-4 py-3 text-sm text-white outline-none resize-y font-mono leading-relaxed" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10); min-height: 400px;" />
      </div>

      <!-- Tags -->
      <div>
        <label class="block text-xs text-gray-500 mb-1.5">Tags (JSON array, misal: ["chatbot","whatsapp"])</label>
        <input v-model="form.tags" type="text" placeholder='["chatbot","whatsapp"]'
          class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none font-mono" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);" />
      </div>

      <!-- Bottom save -->
      <div class="flex justify-end pt-2">
        <button @click="save" :disabled="saving"
          class="px-6 py-2.5 rounded-xl text-sm font-medium text-white disabled:opacity-50"
          style="background: #6366f1;">
          {{ saving ? 'Menyimpan...' : (isNew ? 'Buat Artikel' : 'Simpan Perubahan') }}
        </button>
      </div>
    </div>
  </div>
</template>
