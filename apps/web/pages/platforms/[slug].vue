<script setup lang="ts">
import { ArrowLeft, ArrowRight, Check } from 'lucide-vue-next'
import { getPlatformBySlug, platformGroups, platforms, useCases } from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

const { t } = useLocale()
const route = useRoute()
const platform = computed(() => getPlatformBySlug(String(route.params.slug)))
const related = computed(() => platforms.filter((item) => item.slug !== platform.value?.slug).slice(0, 3))

if (!platform.value) {
  throw createError({ statusCode: 404, statusMessage: 'Platform not found' })
}

useSeoMeta({
  title: () => `${platform.value?.name} — autobotws`,
  description: () => platform.value?.desc || 'Detail produk autobotws.',
})
</script>

<template>
  <div v-if="platform">
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/platforms" class="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-950">
          <ArrowLeft class="h-4 w-4" />
          {{ t('marketing.platforms.back') }}
        </NuxtLink>
        <div class="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ platform.group }}</p>
            <h1 class="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">{{ platform.name }}</h1>
            <p class="mt-4 text-xl font-semibold text-slate-600">{{ platform.tagline }}</p>
            <p class="mt-5 text-base leading-8 text-slate-600">{{ platform.desc }}</p>
            <p v-if="platform.targetUsers" class="mt-4 rounded-lg bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
              <span class="font-extrabold text-slate-950">{{ t('marketing.platforms.bestFor') }}: </span>{{ platform.targetUsers }}
            </p>
            <a
              v-if="platform.url"
              :href="platform.url"
              target="_blank"
              rel="noopener"
              class="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white"
            >
              {{ t('marketing.platforms.visit') }} {{ platform.domain }}
              <ArrowRight class="h-4 w-4" />
            </a>
            <NuxtLink v-else to="/contact" class="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white">
              {{ t('marketing.platforms.plan') }}
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div class="rounded-lg border border-slate-200 bg-white p-6">
              <component :is="platform.icon" class="h-10 w-10 text-blue-700" />
              <p class="mt-5 text-sm font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.platforms.coreModules') }}</p>
              <div class="mt-4 grid gap-3">
                <div v-for="feature in platform.features" :key="feature" class="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                  <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check class="h-4 w-4" />
                  </span>
                  <p class="text-sm font-bold text-slate-800">{{ feature }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-lg border border-slate-200 bg-white p-6">
            <p class="text-sm font-extrabold text-slate-950">{{ t('marketing.platforms.bestFor') }}</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ t('marketing.platforms.bestForDesc') }}</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-white p-6">
            <p class="text-sm font-extrabold text-slate-950">{{ t('marketing.platforms.implementation') }}</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ t('marketing.platforms.implementationDesc') }}</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-white p-6">
            <p class="text-sm font-extrabold text-slate-950">{{ t('marketing.platforms.connect') }}</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ t('marketing.platforms.connectDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.platforms.related') }}</p>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <NuxtLink v-for="item in useCases.slice(0, 3)" :key="item.slug" to="/solutions" class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <component :is="item.icon" class="h-6 w-6 text-slate-800" />
            <h3 class="mt-4 font-extrabold text-slate-950">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between gap-4">
          <div>
            <p class="text-sm font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.platforms.more') }}</p>
            <h2 class="mt-2 text-2xl font-extrabold text-slate-950">{{ t('marketing.platforms.moreTitle') }}</h2>
          </div>
          <NuxtLink to="/platforms" class="text-sm font-bold text-blue-700">{{ t('marketing.platforms.allPlatforms') }}</NuxtLink>
        </div>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <NuxtLink v-for="item in related" :key="item.slug" :to="`/platforms/${item.slug}`" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <component :is="item.icon" class="h-6 w-6 text-blue-700" />
            <h3 class="mt-4 font-extrabold text-slate-950">{{ item.name }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.tagline }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
