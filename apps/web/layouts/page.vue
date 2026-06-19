<template>
  <div style="background: #111111; min-height: 100vh;">
    <!-- Nav -->
    <nav
      class="sticky top-0 z-50 flex items-center justify-between px-6 h-[56px]"
      style="background: rgba(17,17,17,0.85); border-bottom: 1px solid rgba(255,255,255,0.06); backdrop-filter: blur(12px);"
    >
      <NuxtLink to="/" class="flex items-center gap-2.5 select-none">
        <img src="/logo.png" alt="Autobot" class="h-7 w-auto object-contain" />
        <span class="font-semibold text-[15px] tracking-tight hidden sm:block" style="color: #F0F0F0;">autobotws</span>
      </NuxtLink>

      <div class="flex items-center gap-1 text-[13.5px]">
        <NuxtLink to="/products" class="px-3 py-1.5 rounded-lg transition-colors" style="color: rgba(255,255,255,0.5);" active-class="!text-white bg-white/5">{{ t('layout.page.nav.products') }}</NuxtLink>
        <NuxtLink to="/pricing" class="px-3 py-1.5 rounded-lg transition-colors" style="color: rgba(255,255,255,0.5);" active-class="!text-white bg-white/5">{{ t('layout.page.nav.pricing') }}</NuxtLink>
        <NuxtLink to="/company" class="px-3 py-1.5 rounded-lg transition-colors" style="color: rgba(255,255,255,0.5);" active-class="!text-white bg-white/5">{{ t('layout.page.nav.about') }}</NuxtLink>
        <NuxtLink to="/contact" class="px-3 py-1.5 rounded-lg transition-colors" style="color: rgba(255,255,255,0.5);" active-class="!text-white bg-white/5">{{ t('layout.page.nav.contact') }}</NuxtLink>
        <NuxtLink
          to="/"
          class="ml-2 px-4 py-1.5 rounded-full font-medium transition-all hover:bg-gray-100 active:scale-[0.97]"
          style="background: #F0F0F0; color: #111111; font-size: 13px;"
        >
          {{ t('layout.page.nav.chat') }}
        </NuxtLink>
        <button
          class="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors"
          style="color: rgba(255,255,255,0.55); border: 1px solid rgba(255,255,255,0.08);"
          @click="openSearch"
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M15.5 15.5L12 12m-3.5 1.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span class="hidden sm:inline">Search</span>
          <span class="hidden md:inline text-[10px] tracking-[0.18em]" style="color: rgba(255,255,255,0.28);">⌘K</span>
        </button>
        <button
          class="ml-2 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors"
          style="color: rgba(255,255,255,0.55); border: 1px solid rgba(255,255,255,0.08);"
          @click="toggleLocale"
        >
          {{ locale.toUpperCase() }}
        </button>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-3xl mx-auto px-6 py-14">
      <slot />
    </main>

    <!-- Footer -->
    <footer
      class="px-6 pt-10 pb-8 text-[13px] mt-auto"
      style="border-top: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.3);"
    >
      <div class="max-w-5xl mx-auto">

        <!-- Top row: brand + nav columns -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">

          <!-- Brand -->
          <div class="col-span-2 sm:col-span-1">
            <p class="text-white font-semibold mb-1 text-[14px]">autobotws</p>
            <p class="text-xs leading-relaxed mb-3" style="color: rgba(255,255,255,0.3);">
              {{ t('layout.page.footer.brandDesc') }}
            </p>
            <p class="text-xs" style="color: rgba(255,255,255,0.25);">
              Jl. Raya Kebayoran Lama No. 12<br/>Jakarta Selatan 12240, Indonesia
            </p>
          </div>

          <!-- Produk -->
          <div>
            <p class="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">{{ t('layout.page.footer.products') }}</p>
            <ul class="space-y-2">
              <li><NuxtLink to="/products" class="hover:text-white/60 transition-colors">{{ t('layout.page.footer.allProducts') }}</NuxtLink></li>
              <li><NuxtLink to="/features" class="hover:text-white/60 transition-colors">{{ t('layout.page.footer.features') }}</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="hover:text-white/60 transition-colors">{{ t('layout.page.footer.pricing') }}</NuxtLink></li>
              <li><NuxtLink to="/order" class="hover:text-white/60 transition-colors">{{ t('layout.page.footer.subscribe') }}</NuxtLink></li>
            </ul>
          </div>

          <!-- Perusahaan -->
          <div>
            <p class="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">{{ t('layout.page.footer.company') }}</p>
            <ul class="space-y-2">
              <li><NuxtLink to="/company" class="hover:text-white/60 transition-colors">{{ t('layout.page.footer.about') }}</NuxtLink></li>
              <li><NuxtLink to="/partners" class="hover:text-white/60 transition-colors">{{ t('layout.page.footer.partners') }}</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-white/60 transition-colors">{{ t('layout.page.footer.contact') }}</NuxtLink></li>
              <li>
                <a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="hover:text-white/60 transition-colors">
                  {{ t('layout.page.footer.whatsappAdmin') }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <p class="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">{{ t('layout.page.footer.legal') }}</p>
            <ul class="space-y-2">
              <li><NuxtLink to="/privacy-policy" class="hover:text-white/60 transition-colors">{{ t('layout.page.footer.privacy') }}</NuxtLink></li>
              <li><NuxtLink to="/terms-of-service" class="hover:text-white/60 transition-colors">{{ t('layout.page.footer.terms') }}</NuxtLink></li>
              <li><NuxtLink to="/refund-policy" class="hover:text-white/60 transition-colors">{{ t('layout.page.footer.refund') }}</NuxtLink></li>
            </ul>
          </div>

        </div>

        <!-- Bottom row: copyright + contact -->
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 text-xs"
          style="border-top: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.22);"
        >
          <p>{{ t('layout.page.footer.copyright') }}</p>
          <div class="flex items-center gap-4">
            <a href="mailto:support@autobot.co.id" class="hover:text-white/40 transition-colors">support@autobot.co.id</a>
            <a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="hover:text-white/40 transition-colors">+62 821-6486-7681</a>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { locale, t, toggleLocale } = useLocale()
const { openSearch } = useSearchModal()
</script>
