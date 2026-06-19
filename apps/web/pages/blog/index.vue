<script setup lang="ts">
import { ArrowRight, Search } from 'lucide-vue-next'
import { blogFallbackPosts } from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

useSeoMeta({
  title: 'Blog — autobotws',
  description: 'Artikel autobotws tentang AI agent, workflow automation, CRM, WhatsApp automation, dan sistem digital untuk bisnis.',
})

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  cover_image?: string
  author: string
  category: string
  tags?: string[]
  published_at: string | null
  read_time_minutes: number
}

const config = useRuntimeConfig()
const posts = ref<BlogPost[]>(blogFallbackPosts)
const query = ref('')
const activeCategory = ref('all')
const loading = ref(false)

const categories = computed(() => ['all', ...Array.from(new Set(posts.value.map((post) => post.category).filter(Boolean)))])
const filteredPosts = computed(() => {
  const q = query.value.trim().toLowerCase()
  return posts.value.filter((post) => {
    const categoryMatch = activeCategory.value === 'all' || post.category === activeCategory.value
    const queryMatch = !q || [post.title, post.excerpt, post.category, ...(post.tags || [])].join(' ').toLowerCase().includes(q)
    return categoryMatch && queryMatch
  })
})

function formatDate(date: string | null) {
  if (!date) return 'Draft'
  return new Date(date).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
}

onMounted(async () => {
  loading.value = true
  try {
    const result = await $fetch<{ posts: BlogPost[] }>(`${config.public.apiBase}/api/blog`)
    if (result.posts?.length) posts.value = result.posts
  } catch {
    posts.value = blogFallbackPosts
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">Autobot Blog</p>
        <div class="mt-3 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Ideas for AI, automation, and digital operations.
          </h1>
          <p class="text-lg leading-8 text-slate-600">
            Practical notes for founders, operators, and teams who want to turn manual work into measurable digital workflows.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div class="relative max-w-md flex-1">
          <Search class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            v-model="query"
            type="search"
            placeholder="Search articles"
            class="h-11 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>
        <div class="flex gap-2 overflow-x-auto pb-1">
          <button
            v-for="category in categories"
            :key="category"
            class="rounded-lg px-4 py-2 text-sm font-bold"
            :class="activeCategory === category ? 'bg-slate-950 text-white' : 'border border-slate-300 bg-white text-slate-700'"
            @click="activeCategory = category"
          >
            {{ category === 'all' ? 'All' : category }}
          </button>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 pb-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p v-if="loading" class="mb-4 text-sm text-slate-500">Loading latest articles...</p>
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="post in filteredPosts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <div v-if="post.cover_image" class="mb-5 overflow-hidden rounded-lg border border-slate-200">
              <img :src="post.cover_image" :alt="post.title" class="aspect-[16/9] w-full object-cover" />
            </div>
            <div v-else class="mb-5 flex aspect-[16/9] items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700">
              <span class="text-sm font-extrabold uppercase tracking-wider">{{ post.category }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs font-bold text-slate-500">
              <span>{{ formatDate(post.published_at) }}</span>
              <span>·</span>
              <span>{{ post.read_time_minutes }} min read</span>
            </div>
            <h2 class="mt-3 text-xl font-extrabold text-slate-950">{{ post.title }}</h2>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ post.excerpt }}</p>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
              Read article
              <ArrowRight class="h-4 w-4" />
            </span>
          </NuxtLink>
        </div>

        <div v-if="!filteredPosts.length" class="rounded-lg border border-slate-200 bg-white p-10 text-center">
          <p class="font-bold text-slate-950">No articles found.</p>
          <p class="mt-2 text-sm text-slate-500">Try another keyword or category.</p>
        </div>
      </div>
    </section>
  </div>
</template>
