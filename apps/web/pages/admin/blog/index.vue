<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
useSeoMeta({ title: 'Blog — Admin', robots: 'noindex' })

const config = useRuntimeConfig()

interface Post {
  id: string; slug: string; title: string; excerpt: string; cover_image: string
  author: string; category: string; is_published: boolean; published_at: string | null
  read_time_minutes: number; created_at: string
}

const posts = ref<Post[]>([])
const total = ref(0)
const loading = ref(true)
const deleting = ref<string | null>(null)

function headers() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

async function fetch() {
  loading.value = true
  const r = await $fetch<any>(`${config.public.apiBase}/api/admin/blog`, { headers: headers() }).catch(() => ({ posts: [], total: 0 }))
  posts.value = r.posts
  total.value = r.total
  loading.value = false
}

onMounted(fetch)

async function deletePost(id: string, title: string) {
  if (!confirm(`Hapus "${title}"?`)) return
  deleting.value = id
  await $fetch(`${config.public.apiBase}/api/admin/blog/${id}`, { method: 'DELETE', headers: headers() }).catch(() => {})
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
        <h1 class="text-xl font-bold text-white">Blog</h1>
        <p class="text-xs text-gray-500 mt-0.5">{{ total }} artikel</p>
      </div>
      <NuxtLink to="/admin/blog/new"
        class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all"
        style="background: #6366f1;">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        Artikel Baru
      </NuxtLink>
    </div>

    <div v-if="loading" class="space-y-3">
      <div v-for="i in 4" :key="i" class="rounded-xl border border-white/8 p-4 h-20 animate-pulse" style="background: rgba(255,255,255,0.03);" />
    </div>
    <div v-else-if="!posts.length" class="rounded-2xl border border-white/8 py-16 text-center" style="background: rgba(255,255,255,0.02);">
      <p class="text-gray-500 text-sm">Belum ada artikel. Buat artikel pertama Anda!</p>
    </div>
    <div v-else class="space-y-2">
      <div v-for="p in posts" :key="p.id"
        class="flex items-start gap-4 rounded-xl border border-white/8 p-4 hover:border-white/16 transition-all"
        style="background: rgba(255,255,255,0.02);">
        <img v-if="p.cover_image" :src="p.cover_image" class="w-16 h-16 object-cover rounded-lg shrink-0" />
        <div v-else class="w-16 h-16 rounded-lg shrink-0 flex items-center justify-center" style="background: rgba(255,255,255,0.06);">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="opacity-30"><path d="M4 4h12M4 8h12M4 12h7" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <span class="text-[11px] px-1.5 py-0.5 rounded-full" :class="p.is_published ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'">
              {{ p.is_published ? 'Published' : 'Draft' }}
            </span>
            <span v-if="p.category" class="text-[11px] px-1.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300">{{ p.category }}</span>
          </div>
          <p class="font-medium text-white truncate">{{ p.title }}</p>
          <p class="text-xs text-gray-500 truncate">{{ p.excerpt }}</p>
          <p class="text-[11px] text-gray-600 mt-0.5">{{ p.author }} · {{ fmtDate(p.created_at) }} · {{ p.read_time_minutes }} min read</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <NuxtLink :to="`/admin/blog/${p.id}`" class="text-xs text-blue-400 hover:text-blue-300 transition-colors">Edit</NuxtLink>
          <button @click="deletePost(p.id, p.title)" :disabled="deleting === p.id"
            class="text-xs text-red-500 hover:text-red-400 disabled:opacity-40 transition-colors">Hapus</button>
        </div>
      </div>
    </div>
  </div>
</template>
