<template>
  <div style="background: #111111; min-height: 100vh;">
    <!-- Nav -->
    <nav
      class="sticky top-0 z-50 flex items-center justify-between px-6 h-[56px]"
      style="background: rgba(17,17,17,0.85); border-bottom: 1px solid rgba(255,255,255,0.06); backdrop-filter: blur(12px);"
    >
      <NuxtLink to="/" class="flex items-center gap-2.5 select-none">
        <img src="/logo.png" alt="Autobot" class="h-7 w-auto object-contain" />
        <span class="font-semibold text-[15px] tracking-tight hidden sm:block" style="color: #F0F0F0;">AutobotWs</span>
      </NuxtLink>

      <div class="flex items-center gap-1 text-[13.5px]">
        <NuxtLink to="/products" class="px-3 py-1.5 rounded-lg transition-colors" style="color: rgba(255,255,255,0.5);" active-class="!text-white bg-white/5">Produk</NuxtLink>
        <NuxtLink to="/services" class="px-3 py-1.5 rounded-lg transition-colors" style="color: rgba(255,255,255,0.5);" active-class="!text-white bg-white/5">Jasa</NuxtLink>
        <NuxtLink to="/about" class="px-3 py-1.5 rounded-lg transition-colors" style="color: rgba(255,255,255,0.5);" active-class="!text-white bg-white/5">Tentang</NuxtLink>
        <NuxtLink to="/partners" class="px-3 py-1.5 rounded-lg transition-colors" style="color: rgba(255,255,255,0.5);" active-class="!text-white bg-white/5">Mitra</NuxtLink>
        <NuxtLink
          to="/"
          class="ml-2 px-4 py-1.5 rounded-full font-medium transition-all hover:bg-gray-100 active:scale-[0.97]"
          style="background: #F0F0F0; color: #111111; font-size: 13px;"
        >
          Chat
        </NuxtLink>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-3xl mx-auto px-6 py-14">
      <slot />
    </main>

    <!-- Footer -->
    <footer
      class="px-6 py-8 text-center text-[13px]"
      style="border-top: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.25);"
    >
      <p>© 2026 CV Autobot Wijaya Solution &nbsp;·&nbsp; Jakarta, Indonesia</p>
      <p class="mt-1">
        <a href="mailto:bintang@autobot.co.id" class="hover:text-white/50 transition-colors">bintang@autobot.co.id</a>
      </p>
    </footer>
  </div>
</template>
