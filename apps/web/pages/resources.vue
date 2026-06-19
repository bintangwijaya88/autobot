<script setup lang="ts">
import { ArrowRight, BookOpen, FileText, FlaskConical, Layers3 } from 'lucide-vue-next'

definePageMeta({ layout: 'marketing' })

const { t } = useLocale()

useSeoMeta({
  title: 'Research — autobotws',
  description: 'Riset, catatan produk, referensi integrasi, dan insight implementasi dari autobotws.',
})

const resources = [
  {
    icon: FlaskConical,
    titleKey: 'marketing.research.platform.title',
    descKey: 'marketing.research.platform.desc',
    labelKey: 'marketing.research.platform.label',
  },
  {
    icon: Layers3,
    titleKey: 'marketing.research.architecture.title',
    descKey: 'marketing.research.architecture.desc',
    labelKey: 'marketing.research.architecture.label',
  },
  {
    icon: FileText,
    titleKey: 'marketing.research.guides.title',
    descKey: 'marketing.research.guides.desc',
    labelKey: 'marketing.research.guides.label',
  },
  {
    icon: BookOpen,
    titleKey: 'marketing.research.docs.title',
    descKey: 'marketing.research.docs.desc',
    labelKey: 'marketing.research.docs.label',
  },
]
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.research.eyebrow') }}</p>
        <div class="mt-3 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            {{ t('marketing.research.title') }}
          </h1>
          <p class="text-lg leading-8 text-slate-600">
            {{ t('marketing.research.desc') }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <article
          v-for="item in resources"
          :key="item.titleKey"
          class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <component :is="item.icon" class="h-6 w-6" />
            </div>
            <span class="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-500">
              {{ t(item.labelKey) }}
            </span>
          </div>
          <h2 class="mt-5 text-xl font-extrabold text-slate-950">{{ t(item.titleKey) }}</h2>
          <p class="mt-3 text-sm leading-7 text-slate-600">{{ t(item.descKey) }}</p>
          <div class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
            {{ t('marketing.research.comingSoon') }}
            <ArrowRight class="h-4 w-4" />
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
