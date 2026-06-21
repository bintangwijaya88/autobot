<template>
  <div class="min-h-screen bg-slate-50 text-slate-950">
    <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/logo.png" alt="autobotws" class="h-8 w-auto object-contain" />
          <div class="leading-tight">
            <p class="text-sm font-bold tracking-tight text-slate-950">autobotws</p>
            <p class="hidden text-xs text-slate-500 sm:block">Software & AI Automation</p>
          </div>
        </NuxtLink>

        <nav class="hidden items-center gap-1 lg:flex">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            active-class="!bg-slate-100 !text-slate-950"
          >
            <component :is="item.icon" class="h-4 w-4 text-[#28767f]" />
            {{ t(item.labelKey) }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <div class="relative" data-language-menu>
            <button
              class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              type="button"
              :aria-label="t('marketing.language.label')"
              @click="languageOpen = !languageOpen"
            >
              <Languages class="h-4 w-4 text-[#28767f]" />
              <span>{{ currentLocale?.shortLabel }}</span>
              <ChevronDown class="h-3.5 w-3.5 text-slate-400" />
            </button>
            <div
              v-if="languageOpen"
              class="absolute right-0 mt-2 w-48 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
            >
              <button
                v-for="item in locales"
                :key="item.code"
                class="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium transition hover:bg-slate-50"
                :class="locale === item.code ? 'text-slate-950' : 'text-slate-600'"
                type="button"
                @click="selectLocale(item.code)"
              >
                <span>{{ item.label }}</span>
                <span class="text-xs font-bold text-[#28767f]">{{ item.shortLabel }}</span>
              </button>
            </div>
          </div>
          <NuxtLink
            to="/blog"
            class="hidden rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:inline-flex"
          >
            {{ t('marketing.nav.blog') }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {{ t('marketing.nav.bookConsultation') }}
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <p class="font-bold text-slate-950">autobotws</p>
          <p class="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            {{ t('marketing.footer.brandDesc') }}
          </p>
          <p class="mt-2 text-xs text-slate-400">{{ t('marketing.footer.legalLine') }}</p>
          <div class="mt-4 grid gap-2 text-sm">
            <a href="mailto:support@autobot.co.id" class="font-semibold text-slate-700 hover:text-slate-950">support@autobot.co.id</a>
            <a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="font-semibold text-slate-700 hover:text-slate-950">WhatsApp: +62 821-6486-7681</a>
            <a href="https://www.linkedin.com/in/bintangwijaya/" target="_blank" rel="noopener" class="font-semibold text-slate-700 hover:text-slate-950">Founder LinkedIn</a>
          </div>
        </div>
        <div class="grid gap-6 sm:grid-cols-3">
          <div>
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.footer.company') }}</p>
            <div class="mt-3 grid gap-2 text-sm text-slate-600">
              <NuxtLink to="/company" class="hover:text-slate-950">{{ t('marketing.footer.companyProfile') }}</NuxtLink>
              <NuxtLink to="/services" class="hover:text-slate-950">{{ t('marketing.footer.services') }}</NuxtLink>
              <NuxtLink to="/partners" class="hover:text-slate-950">{{ t('marketing.footer.partners') }}</NuxtLink>
              <NuxtLink to="/technology" class="hover:text-slate-950">{{ t('marketing.footer.technology') }}</NuxtLink>
              <NuxtLink to="/solutions" class="hover:text-slate-950">{{ t('marketing.footer.useCases') }}</NuxtLink>
            </div>
          </div>
          <div>
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.footer.platforms') }}</p>
            <div class="mt-3 grid gap-2 text-sm text-slate-600">
              <NuxtLink to="/platforms" class="hover:text-slate-950">{{ t('marketing.footer.allPlatforms') }}</NuxtLink>
              <NuxtLink to="/platforms/wasigap" class="hover:text-slate-950">WaSigap</NuxtLink>
              <NuxtLink to="/platforms/antarpro" class="hover:text-slate-950">AntarPro</NuxtLink>
            </div>
          </div>
          <div>
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.footer.resources') }}</p>
            <div class="mt-3 grid gap-2 text-sm text-slate-600">
              <NuxtLink to="/resources" class="hover:text-slate-950">{{ t('marketing.footer.research') }}</NuxtLink>
              <NuxtLink to="/blog" class="hover:text-slate-950">{{ t('marketing.footer.blog') }}</NuxtLink>
              <NuxtLink to="/privacy-policy" class="hover:text-slate-950">{{ t('marketing.footer.privacy') }}</NuxtLink>
              <NuxtLink to="/terms-of-service" class="hover:text-slate-950">Terms of Service</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Building2, ChevronDown, Cpu, FlaskConical, Languages, Layers3, Package, Wrench, Workflow } from 'lucide-vue-next'

const { locale, locales, setLocale, t } = useLocale()
const languageOpen = ref(false)
const currentLocale = computed(() => locales.find((item) => item.code === locale.value))

const navItems = [
  { labelKey: 'marketing.nav.product', to: '/products', icon: Package },
  { labelKey: 'marketing.nav.services', to: '/services', icon: Wrench },
  { labelKey: 'marketing.nav.research', to: '/resources', icon: FlaskConical },
  { labelKey: 'marketing.nav.platforms', to: '/platforms', icon: Layers3 },
  { labelKey: 'marketing.nav.solutions', to: '/solutions', icon: Workflow },
  { labelKey: 'marketing.nav.technology', to: '/technology', icon: Cpu },
  { labelKey: 'marketing.nav.company', to: '/company', icon: Building2 },
]

function selectLocale(next: typeof locales[number]['code']) {
  setLocale(next)
  languageOpen.value = false
}

function closeLanguageMenu(e: MouseEvent) {
  if (!(e.target as HTMLElement).closest('[data-language-menu]')) {
    languageOpen.value = false
  }
}

onMounted(() => window.addEventListener('click', closeLanguageMenu))
onUnmounted(() => window.removeEventListener('click', closeLanguageMenu))
</script>
