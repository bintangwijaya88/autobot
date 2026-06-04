<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
useSeoMeta({ title: 'Content — Admin', robots: 'noindex' })

const config = useRuntimeConfig()

interface Page {
  id: string; slug: string; title: string; content: string
  is_published: boolean; sort_order: number; updated_at: string
}

const pages = ref<Page[]>([])
const loading = ref(true)
const deleting = ref<string | null>(null)

function headers() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

async function fetch() {
  loading.value = true
  const r = await $fetch<any>(`${config.public.apiBase}/api/admin/pages`, { headers: headers() }).catch(() => ({ data: [] }))
  pages.value = r.data ?? []
  loading.value = false
}

onMounted(fetch)

async function del(slug: string, title: string) {
  if (!confirm(`Hapus halaman "${title}"?`)) return
  deleting.value = slug
  await $fetch(`${config.public.apiBase}/api/admin/pages/${slug}`, { method: 'DELETE', headers: headers() }).catch(() => {})
  deleting.value = null
  fetch()
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('id', { day: '2-digit', month: 'short', year: 'numeric' })
}
</script>

<template>
  <div class="p-6 max-w-5xl mx-auto w-full">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-xl font-bold text-white">Content / Pages</h1>
        <p class="text-xs text-gray-500 mt-0.5">{{ pages.length }} halaman</p>
      </div>
      <NuxtLink to="/admin/content/new"
        class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white" style="background: #6366f1;">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        Halaman Baru
      </NuxtLink>
    </div>

    <div v-if="loading" class="rounded-2xl border border-white/8 p-8 text-center text-gray-500 animate-pulse" style="background: rgba(255,255,255,0.02);">Memuat...</div>

    <div v-else class="rounded-2xl border border-white/8 overflow-hidden" style="background: rgba(255,255,255,0.02);">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/8" style="background: rgba(255,255,255,0.03);">
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Slug</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Judul</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Status</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Update</th>
            <th class="px-5 py-3 text-right text-xs font-medium text-gray-500">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr v-for="p in pages" :key="p.id" class="hover:bg-white/2 transition-colors">
            <td class="px-5 py-3 font-mono text-xs text-gray-400">{{ p.slug }}</td>
            <td class="px-5 py-3 text-white font-medium">{{ p.title }}</td>
            <td class="px-5 py-3">
              <span class="text-xs" :class="p.is_published ? 'text-green-400' : 'text-gray-500'">
                {{ p.is_published ? 'Published' : 'Draft' }}
              </span>
            </td>
            <td class="px-5 py-3 text-xs text-gray-500">{{ fmtDate(p.updated_at) }}</td>
            <td class="px-5 py-3 text-right">
              <div class="flex items-center justify-end gap-3">
                <NuxtLink :to="`/admin/content/${p.slug}`" class="text-xs text-blue-400 hover:text-blue-300 transition-colors">Edit</NuxtLink>
                <button @click="del(p.slug, p.title)" :disabled="deleting === p.slug"
                  class="text-xs text-red-500 hover:text-red-400 disabled:opacity-40 transition-colors">Hapus</button>
              </div>
            </td>
          </tr>
          <tr v-if="!pages.length">
            <td colspan="5" class="px-5 py-12 text-center text-gray-600 text-sm">Belum ada halaman</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
