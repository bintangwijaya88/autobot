<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import { marked } from 'marked'
import { blogFallbackPosts, getBlogFallbackBySlug } from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  cover_image?: string
  author: string
  category: string
  tags?: string[]
  published_at: string | null
  read_time_minutes: number
}

const route = useRoute()
const config = useRuntimeConfig()
const fallback = getBlogFallbackBySlug(String(route.params.slug))

if (!fallback) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

const post = ref<BlogPost>(fallback)
const related = computed(() => blogFallbackPosts.filter((item) => item.slug !== post.value.slug).slice(0, 2))
const rendered = computed(() => marked.parse(post.value.content || ''))

useSeoMeta({
  title: () => `${post.value.title} — Autobot Blog`,
  description: () => post.value.excerpt,
})

function formatDate(date: string | null) {
  if (!date) return 'Draft'
  return new Date(date).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
}

onMounted(async () => {
  try {
    const result = await $fetch<BlogPost>(`${config.public.apiBase}/api/blog/${route.params.slug}`)
    if (result?.slug) post.value = result
  } catch {
    post.value = fallback
  }
})
</script>

<template>
  <article>
    <section class="border-b border-slate-200 bg-white py-14">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-950">
          <ArrowLeft class="h-4 w-4" />
          Back to blog
        </NuxtLink>
        <div class="mt-8">
          <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ post.category }}</p>
          <h1 class="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">{{ post.title }}</h1>
          <p class="mt-5 text-lg leading-8 text-slate-600">{{ post.excerpt }}</p>
          <div class="mt-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500">
            <span>{{ post.author }}</span>
            <span>·</span>
            <span>{{ formatDate(post.published_at) }}</span>
            <span>·</span>
            <span>{{ post.read_time_minutes }} min read</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-12">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div v-if="post.cover_image" class="mb-8 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <img :src="post.cover_image" :alt="post.title" class="aspect-[16/9] w-full object-cover" />
        </div>
        <div
          class="blog-content rounded-lg border border-slate-200 bg-white p-6 text-slate-700 shadow-sm sm:p-8"
          v-html="rendered"
        />
      </div>
    </section>

    <section class="border-t border-slate-200 bg-white py-14">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-2xl font-extrabold text-slate-950">Related articles</h2>
          <NuxtLink to="/blog" class="text-sm font-bold text-blue-700">All articles</NuxtLink>
        </div>
        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <NuxtLink v-for="item in related" :key="item.slug" :to="`/blog/${item.slug}`" class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs font-extrabold uppercase tracking-wider text-blue-700">{{ item.category }}</p>
            <h3 class="mt-2 font-extrabold text-slate-950">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.excerpt }}</p>
            <span class="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
              Read
              <ArrowRight class="h-4 w-4" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.blog-content :deep(h2) {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #020617;
  font-size: 1.35rem;
  font-weight: 800;
}

.blog-content :deep(p) {
  margin: 0.9rem 0;
  line-height: 1.8;
}

.blog-content :deep(ul) {
  margin: 1rem 0;
  padding-left: 1.25rem;
  list-style: disc;
}

.blog-content :deep(li) {
  margin: 0.4rem 0;
  line-height: 1.7;
}
</style>
