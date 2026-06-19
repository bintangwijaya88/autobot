<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { platformGroups, platforms } from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

const { t } = useLocale()

useSeoMeta({
  title: 'Produk — autobotws',
  description: 'Produk autobotws: WaSigap, KlopDana, SanyClean, Bintanx, dan solusi vertikal AntarPro & SuratMedis.',
})

const route = useRoute()
const activeGroup = computed(() => String(route.query.group || 'all'))
const filteredGroups = computed(() =>
  activeGroup.value === 'all' ? platformGroups : platformGroups.filter((group) => group.slug === activeGroup.value),
)
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.platforms.eyebrow') }}</p>
        <div class="mt-3 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            {{ t('marketing.platforms.title') }}
          </h1>
          <p class="text-lg leading-8 text-slate-600">
            {{ t('marketing.platforms.desc') }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex gap-2 overflow-x-auto pb-2">
          <NuxtLink
            to="/platforms"
            class="rounded-lg px-4 py-2 text-sm font-bold"
            :class="activeGroup === 'all' ? 'bg-slate-950 text-white' : 'border border-slate-300 bg-white text-slate-700'"
          >
            {{ t('marketing.platforms.all') }}
          </NuxtLink>
          <NuxtLink
            v-for="group in platformGroups"
            :key="group.slug"
            :to="`/platforms?group=${group.slug}`"
            class="rounded-lg px-4 py-2 text-sm font-bold"
            :class="activeGroup === group.slug ? 'bg-slate-950 text-white' : 'border border-slate-300 bg-white text-slate-700'"
          >
            {{ group.eyebrow }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 pb-16">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:px-8">
        <article v-for="group in filteredGroups" :key="group.slug" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="max-w-3xl">
            <p class="text-xs font-extrabold uppercase tracking-wider text-blue-700">{{ group.eyebrow }}</p>
            <h2 class="mt-2 text-2xl font-extrabold text-slate-950">{{ group.title }}</h2>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ group.desc }}</p>
          </div>

          <div class="mt-6 grid gap-4 md:grid-cols-3">
            <NuxtLink
              v-for="product in group.products"
              :key="product.slug"
              :to="`/platforms/${product.slug}`"
              class="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md"
            >
              <component :is="product.icon" class="h-7 w-7 text-blue-700" />
              <h3 class="mt-4 font-extrabold text-slate-950">{{ product.name }}</h3>
              <p class="mt-1 text-sm font-semibold text-slate-500">{{ product.tagline }}</p>
              <p class="mt-3 text-sm leading-6 text-slate-600">{{ product.desc }}</p>
              <span class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                {{ t('marketing.platforms.viewPlatform') }}
                <ArrowRight class="h-4 w-4" />
              </span>
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section class="border-t border-slate-200 bg-white py-14">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-lg bg-slate-950 p-8 text-white">
          <p class="text-sm font-extrabold uppercase tracking-wider text-blue-300">{{ platforms.length }} {{ t('marketing.platforms.customEyebrow') }}</p>
          <h2 class="mt-3 text-3xl font-extrabold">{{ t('marketing.platforms.customTitle') }}</h2>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            {{ t('marketing.platforms.customDesc') }}
          </p>
          <NuxtLink to="/contact" class="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950">
            {{ t('marketing.platforms.customCta') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
