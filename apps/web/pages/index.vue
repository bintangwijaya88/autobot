<script setup lang="ts">
import { ArrowRight, BarChart3, Check, ChevronRight, Monitor, PlugZap, Sparkles, Smartphone, Workflow } from 'lucide-vue-next'
import { corePlatforms, useCases } from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

const { t } = useLocale()

useSeoMeta({
  title: 'autobotws — Software, AI Automation & Digital Systems',
  description: 'autobotws membantu bisnis mengotomatisasi proses kerja, mengelola komunikasi pelanggan, dan membangun sistem digital yang scalable melalui software, AI, dan solusi otomasi praktis.',
  ogTitle: 'autobotws — Software, AI Automation & Digital Systems',
  ogDescription: 'WaSigap, KlopDana, SanyClean, Bintanx, dan custom development untuk bisnis Indonesia.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id',
  twitterCard: 'summary',
  twitterImage: 'https://autobot.co.id/logo.png',
})

useHead({ meta: [{ name: 'theme-color', content: '#f8fafc' }] })

const capabilities = [
  'marketing.home.capabilities.sales',
  'marketing.home.capabilities.workflow',
  'marketing.home.capabilities.integration',
]

const stats = [
  { value: '4', labelKey: 'marketing.home.stats.platforms' },
  { value: '600K+', labelKey: 'marketing.home.stats.records' },
  { value: '9+', labelKey: 'marketing.home.stats.years' },
]

const mediaSlots = [
  { labelKey: 'marketing.home.visual.browser', typeKey: 'marketing.home.visual.browserType', type: 'Browser frame', accent: 'blue', className: 'sm:col-span-2', icon: Monitor },
  { labelKey: 'marketing.home.visual.dashboard', typeKey: 'marketing.home.visual.dashboardType', type: 'Analytics board', accent: 'emerald', className: '', icon: BarChart3 },
  { labelKey: 'marketing.home.visual.workflow', typeKey: 'marketing.home.visual.workflowType', type: 'Automation map', accent: 'amber', className: '', icon: Workflow },
  { labelKey: 'marketing.home.visual.mobile', typeKey: 'marketing.home.visual.mobileType', type: 'Phone preview', accent: 'cyan', className: '', icon: Smartphone },
]
</script>

<template>
  <div class="landing-page overflow-hidden">
    <section class="tech-pattern relative border-b border-slate-200 bg-white">
      <div class="pointer-events-none absolute right-6 top-12 hidden h-28 w-28 rounded-full border border-blue-200/80 lg:block orbit-shape" />
      <div class="pointer-events-none absolute bottom-14 left-[48%] hidden h-20 w-20 rotate-45 rounded-lg border border-cyan-200/80 bg-cyan-50/40 lg:block float-shape" />
      <div class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
        <div class="relative z-10 flex flex-col justify-center">
          <div class="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
            <Sparkles class="h-4 w-4" />
            {{ t('marketing.home.badge') }}
          </div>
          <h1 class="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {{ t('marketing.home.heroTitle') }}
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {{ t('marketing.home.heroDesc') }}
          </p>

          <div class="mt-8 grid gap-3">
            <div v-for="item in capabilities" :key="item" class="flex items-start gap-3 text-sm font-medium text-slate-700">
              <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Check class="h-3.5 w-3.5" />
              </span>
              {{ t(item) }}
            </div>
          </div>

          <div class="mt-10 flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              to="/platforms"
              class="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              {{ t('marketing.home.explorePlatforms') }}
              <ChevronRight class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink
              to="/solutions"
              class="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              {{ t('marketing.home.viewUseCases') }}
            </NuxtLink>
          </div>

          <div class="mt-12 grid grid-cols-3 gap-3">
            <div v-for="item in stats" :key="item.labelKey" class="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p class="text-2xl font-extrabold text-slate-950">{{ item.value }}</p>
              <p class="mt-1 text-xs leading-5 text-slate-500">{{ t(item.labelKey) }}</p>
            </div>
          </div>
        </div>

        <div class="relative z-10">
          <div class="absolute -left-6 top-16 hidden h-24 w-24 rounded-full bg-blue-100/70 blur-2xl lg:block pulse-soft" />
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm animate-scale-in">
            <div class="rounded-lg border border-slate-200 bg-white">
              <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div>
                  <p class="text-sm font-bold text-slate-900">{{ t('marketing.home.commandCenter.title') }}</p>
                  <p class="text-xs text-slate-500">{{ t('marketing.home.commandCenter.subtitle') }}</p>
                </div>
                <span class="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">{{ t('marketing.home.commandCenter.live') }}</span>
              </div>

              <div class="grid gap-3 p-4 sm:grid-cols-2">
                <div class="rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <BarChart3 class="h-5 w-5 text-blue-700" />
                  <p class="mt-4 text-2xl font-extrabold text-slate-950">1,284</p>
                  <p class="text-xs text-slate-500">{{ t('marketing.home.commandCenter.conversations') }}</p>
                </div>
                <div class="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                  <Workflow class="h-5 w-5 text-emerald-700" />
                  <p class="mt-4 text-2xl font-extrabold text-slate-950">73%</p>
                  <p class="text-xs text-slate-500">{{ t('marketing.home.commandCenter.automated') }}</p>
                </div>
                <div class="rounded-lg border border-amber-100 bg-amber-50 p-4">
                  <Sparkles class="h-5 w-5 text-amber-700" />
                  <p class="mt-4 text-2xl font-extrabold text-slate-950">42%</p>
                  <p class="text-xs text-slate-500">{{ t('marketing.home.commandCenter.followup') }}</p>
                </div>
                <div class="rounded-lg border border-cyan-100 bg-cyan-50 p-4">
                  <PlugZap class="h-5 w-5 text-cyan-700" />
                  <p class="mt-4 text-2xl font-extrabold text-slate-950">18</p>
                  <p class="text-xs text-slate-500">{{ t('marketing.home.commandCenter.sources') }}</p>
                </div>
              </div>

              <div class="border-t border-slate-200 p-4">
                <p class="mb-3 text-sm font-bold text-slate-900">{{ t('marketing.home.commandCenter.pipeline') }}</p>
                <div class="grid gap-2">
                  <div class="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                    <span class="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <p class="flex-1 text-sm font-semibold text-slate-700">{{ t('marketing.home.commandCenter.lead') }}</p>
                    <span class="text-xs text-slate-400">00:02</span>
                  </div>
                  <div class="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                    <span class="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <p class="flex-1 text-sm font-semibold text-slate-700">{{ t('marketing.home.commandCenter.qualification') }}</p>
                    <span class="text-xs text-slate-400">00:08</span>
                  </div>
                  <div class="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                    <span class="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <p class="flex-1 text-sm font-semibold text-slate-700">{{ t('marketing.home.commandCenter.proposal') }}</p>
                    <span class="text-xs text-slate-400">00:15</span>
                  </div>
                </div>
              </div>

              <div class="border-t border-slate-200 p-4">
                <div class="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  <img
                    src="/images/placeholders/banner.png"
                    alt="Connected product command center"
                    class="block h-auto w-full"
                  />
                  <div class="absolute right-4 top-1/2 z-10 w-[42%] -translate-y-1/2 rounded-lg bg-white/82 p-4 shadow-sm backdrop-blur-sm">
                    <p class="text-base font-extrabold text-slate-950">Connected product command center</p>
                    <p class="mt-2 text-sm font-semibold leading-6 text-slate-600">
                      Monitor leads, automations, team handoffs, and customer journeys from one operational dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-slate-50 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
          <div class="banner-image media-shine relative aspect-[21/7] min-h-[220px] overflow-hidden rounded-lg border border-blue-100">
            <div class="relative z-10 flex h-full max-w-xl flex-col justify-center px-6 py-8 sm:px-10">
              <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">autobotws</p>
              <h2 class="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                {{ t('marketing.home.bannerTitle') }}
              </h2>
              <p class="mt-4 max-w-md text-sm font-semibold leading-6 text-slate-600 sm:text-base">
                {{ t('marketing.home.bannerDesc') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tech-pattern relative bg-slate-50 py-16">
      <div class="pointer-events-none absolute left-0 top-20 h-48 w-48 rounded-full bg-blue-100/60 blur-3xl" />
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative z-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div class="max-w-2xl">
            <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.home.platformSuite.eyebrow') }}</p>
            <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.home.platformSuite.title') }}</h2>
          </div>
          <NuxtLink to="/platforms" class="inline-flex items-center gap-2 text-sm font-bold text-blue-700">
            {{ t('marketing.home.platformSuite.directory') }}
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>

        <div class="relative z-10 mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="platform in corePlatforms"
            :key="platform.slug"
            :to="`/platforms/${platform.slug}`"
            class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <div class="mb-5 flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-blue-700 shadow-sm">
                <component :is="platform.icon" class="h-6 w-6" />
              </div>
              <div class="min-w-0">
                <p class="truncate text-sm font-extrabold text-slate-950">{{ platform.name }}</p>
                <p class="mt-1 truncate text-xs font-semibold text-slate-500">{{ platform.domain }}</p>
              </div>
            </div>
            <p class="text-xs font-extrabold uppercase tracking-wider text-blue-700">{{ platform.group }}</p>
            <h3 class="mt-3 font-extrabold text-slate-950">{{ platform.tagline }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ platform.desc }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="tech-pattern border-y relative border-slate-200 bg-white py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl">
            <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.home.visual.eyebrow') }}</p>
            <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.home.visual.title') }}</h2>
            <p class="mt-3 text-sm leading-6 text-slate-600">
              {{ t('marketing.home.visual.desc') }}
            </p>
          </div>
          <NuxtLink to="/platforms" class="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-700">
            {{ t('marketing.home.visual.cta') }}
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>

        <div class="relative z-10 mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="slot in mediaSlots"
            :key="slot.labelKey"
            class="product-visual-placeholder media-shine relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            :class="`visual-${slot.accent}`"
          >
            <div class="relative z-10 flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-extrabold text-slate-950">{{ t(slot.labelKey) }}</p>
                <p class="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">{{ t(slot.typeKey) }}</p>
              </div>
              <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-blue-700">
                <component :is="slot.icon" class="h-5 w-5" />
              </div>
            </div>

            <div class="relative z-10 mt-4 rounded-lg border border-slate-100 bg-slate-50 p-3">
              <div class="mb-3 flex items-center gap-1.5" v-if="slot.type === 'Browser frame'">
                <span class="h-2 w-2 rounded-full bg-rose-300" />
                <span class="h-2 w-2 rounded-full bg-amber-300" />
                <span class="h-2 w-2 rounded-full bg-emerald-300" />
                <span class="ml-2 h-4 flex-1 rounded-full bg-white" />
              </div>

              <div v-if="slot.type === 'Analytics board'" class="grid grid-cols-3 gap-2">
                <span class="h-14 rounded-lg bg-emerald-100" />
                <span class="h-14 rounded-lg bg-blue-100" />
                <span class="h-14 rounded-lg bg-slate-200" />
              </div>
              <div v-else-if="slot.type === 'Automation map'" class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <span class="h-12 rounded-lg bg-amber-100" />
                <ArrowRight class="h-4 w-4 text-amber-500" />
                <span class="h-12 rounded-lg bg-blue-100" />
              </div>
              <div v-else-if="slot.type === 'Phone preview'" class="mx-auto h-24 w-16 rounded-[18px] border-4 border-slate-900 bg-white p-2">
                <span class="block h-7 rounded-lg bg-cyan-100" />
                <span class="mt-2 block h-4 rounded bg-slate-100" />
                <span class="mt-2 block h-5 rounded bg-cyan-500" />
              </div>
              <div v-else class="grid grid-cols-[1.2fr_0.8fr] gap-3">
                <div>
                  <span class="block h-5 w-3/4 rounded bg-slate-900" />
                  <span class="mt-2 block h-2.5 w-full rounded bg-slate-200" />
                  <span class="mt-2 block h-2.5 w-2/3 rounded bg-slate-200" />
                  <span class="mt-3 block h-7 w-20 rounded-lg bg-blue-600" />
                </div>
                <span class="h-20 rounded-lg bg-blue-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tech-pattern relative border-b border-slate-200 bg-white py-16">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700">{{ t('marketing.home.useCases.eyebrow') }}</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.home.useCases.title') }}</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">
            {{ t('marketing.home.useCases.desc') }}
          </p>
          <NuxtLink to="/solutions" class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
            {{ t('marketing.home.useCases.cta') }}
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <NuxtLink
            v-for="item in useCases.slice(0, 4)"
            :key="item.slug"
            to="/solutions"
            class="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-200 hover:bg-white"
          >
            <component :is="item.icon" class="h-6 w-6 text-slate-800" />
            <h3 class="mt-4 font-extrabold text-slate-950">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.home.next.eyebrow') }}</p>
              <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.home.next.title') }}</h2>
              <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                {{ t('marketing.home.next.desc') }}
              </p>
            </div>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              {{ t('marketing.home.next.cta') }}
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tech-pattern::before {
  background-image:
    radial-gradient(circle at 78% 16%, rgba(37, 99, 235, 0.12), transparent 24%),
    radial-gradient(circle at 18% 72%, rgba(6, 182, 212, 0.10), transparent 22%);
  background-size: 100% 100%, 100% 100%;
  content: '';
  inset: 0;
  opacity: 0.9;
  pointer-events: none;
  position: absolute;
}

.banner-image {
  background-image:
    linear-gradient(90deg, rgba(248, 250, 252, 0.88), rgba(239, 246, 255, 0.62), rgba(236, 254, 255, 0.82)),
    url('/images/placeholders/banner_01.png');
  background-position: center;
  background-size: cover;
}

.media-placeholder {
  background-image:
    linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(6, 182, 212, 0.04));
  background-size: auto;
  overflow: hidden;
  position: relative;
}

.product-visual-placeholder::before {
  border-radius: 999px;
  content: '';
  height: 180px;
  pointer-events: none;
  position: absolute;
  right: -64px;
  top: -72px;
  width: 180px;
}

.visual-blue::before {
  background: rgba(37, 99, 235, 0.10);
}

.visual-emerald::before {
  background: rgba(16, 185, 129, 0.12);
}

.visual-amber::before {
  background: rgba(245, 158, 11, 0.14);
}

.visual-cyan::before {
  background: rgba(6, 182, 212, 0.12);
}

.media-placeholder::after,
.media-shine::after {
  animation: shine-sweep 5.8s ease-in-out infinite;
  background: linear-gradient(105deg, transparent 18%, rgba(255, 255, 255, 0.74) 45%, transparent 68%);
  content: '';
  inset: -40% -70%;
  pointer-events: none;
  position: absolute;
  transform: translateX(-55%) rotate(10deg);
}

.orbit-shape {
  animation: orbit-drift 9s ease-in-out infinite;
}

.float-shape {
  animation: float-shape 6.5s ease-in-out infinite;
}

.pulse-soft {
  animation: pulse-soft 4.2s ease-in-out infinite;
}

@keyframes shine-sweep {
  0%, 45% { transform: translateX(-55%) rotate(10deg); opacity: 0; }
  58% { opacity: 0.8; }
  100% { transform: translateX(55%) rotate(10deg); opacity: 0; }
}

@keyframes orbit-drift {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(-12px, 10px, 0) rotate(12deg); }
}

@keyframes float-shape {
  0%, 100% { transform: translateY(0) rotate(45deg); }
  50% { transform: translateY(-12px) rotate(45deg); }
}

@keyframes pulse-soft {
  0%, 100% { opacity: 0.45; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.08); }
}

@media (prefers-reduced-motion: reduce) {
  .media-placeholder::after,
  .media-shine::after,
  .orbit-shape,
  .float-shape,
  .pulse-soft {
    animation: none;
  }
}
</style>
