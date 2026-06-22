<template>
  <div class="min-h-screen bg-slate-50 text-slate-950">
    <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-2.5">
          <img src="/logo.png" alt="WaSigap" class="h-8 w-auto object-contain" />
          <div class="leading-tight">
            <p class="text-sm font-bold tracking-tight text-slate-950">WaSigap</p>
            <p class="hidden text-xs text-slate-500 sm:block">AI WhatsApp Automation</p>
          </div>
        </NuxtLink>

        <nav class="hidden items-center gap-1 lg:flex">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            active-class="!bg-slate-100 !text-slate-950"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <button
            class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 lg:hidden"
            type="button"
            aria-label="Open menu"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            <svg v-else class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <a
            href="https://wa.autobot.co.id/"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Get Started
          </a>
        </div>
      </div>

      <div v-if="mobileOpen" class="border-t border-slate-200 bg-white px-4 pb-4 pt-2 lg:hidden">
        <nav class="grid gap-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
            active-class="!bg-emerald-50 !text-emerald-800"
            @click="mobileOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <div class="flex items-center gap-2.5">
              <img src="/logo.png" alt="WaSigap" class="h-7 w-auto" />
              <p class="font-bold text-slate-950">WaSigap</p>
            </div>
            <p class="mt-3 max-w-xs text-sm leading-6 text-slate-500">
              AI WhatsApp automation and CRM platform for Indonesian SMEs, clinics, e-commerce sellers, and service businesses.
            </p>
            <p class="mt-3 text-xs text-slate-400">A product by AutobotWS · CV Autobot Wijaya Solution</p>
            <div class="mt-4 grid gap-1.5 text-sm">
              <a href="mailto:support@autobot.co.id" class="font-medium text-slate-600 hover:text-slate-950">support@autobot.co.id</a>
              <a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="font-medium text-slate-600 hover:text-slate-950">WhatsApp: +62 821-6486-7681</a>
            </div>
          </div>
          <div class="grid gap-6 sm:grid-cols-3">
            <div>
              <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Product</p>
              <div class="mt-3 grid gap-2 text-sm text-slate-600">
                <NuxtLink to="/features" class="hover:text-slate-950">Features</NuxtLink>
                <NuxtLink to="/pricing" class="hover:text-slate-950">Pricing</NuxtLink>
                <NuxtLink to="/startup" class="hover:text-slate-950">Startup Profile</NuxtLink>
              </div>
            </div>
            <div>
              <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Company</p>
              <div class="mt-3 grid gap-2 text-sm text-slate-600">
                <NuxtLink to="/about" class="hover:text-slate-950">About</NuxtLink>
                <NuxtLink to="/contact" class="hover:text-slate-950">Contact</NuxtLink>
              </div>
            </div>
            <div>
              <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Legal</p>
              <div class="mt-3 grid gap-2 text-sm text-slate-600">
                <NuxtLink to="/privacy-policy" class="hover:text-slate-950">Privacy Policy</NuxtLink>
                <NuxtLink to="/terms-of-service" class="hover:text-slate-950">Terms of Service</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          © {{ new Date().getFullYear() }} WaSigap by AutobotWS · CV Autobot Wijaya Solution · All rights reserved · <a href="https://wa.autobot.co.id" class="hover:text-slate-600">wa.autobot.co.id</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)

const navItems = [
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Startup', to: '/startup' },
  { label: 'Contact', to: '/contact' },
]
</script>
