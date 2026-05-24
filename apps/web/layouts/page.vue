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
        <NuxtLink to="/pricing" class="px-3 py-1.5 rounded-lg transition-colors" style="color: rgba(255,255,255,0.5);" active-class="!text-white bg-white/5">Harga</NuxtLink>
        <NuxtLink to="/about" class="px-3 py-1.5 rounded-lg transition-colors" style="color: rgba(255,255,255,0.5);" active-class="!text-white bg-white/5">Tentang</NuxtLink>
        <NuxtLink to="/contact" class="px-3 py-1.5 rounded-lg transition-colors" style="color: rgba(255,255,255,0.5);" active-class="!text-white bg-white/5">Kontak</NuxtLink>
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
      class="px-6 pt-10 pb-8 text-[13px] mt-auto"
      style="border-top: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.3);"
    >
      <div class="max-w-5xl mx-auto">

        <!-- Top row: brand + nav columns -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">

          <!-- Brand -->
          <div class="col-span-2 sm:col-span-1">
            <p class="text-white font-semibold mb-1 text-[14px]">CV Autobot Wijaya Solution</p>
            <p class="text-xs leading-relaxed mb-3" style="color: rgba(255,255,255,0.3);">
              Spesialis chatbot WhatsApp &amp; AI automation untuk bisnis Indonesia.
            </p>
            <p class="text-xs" style="color: rgba(255,255,255,0.25);">
              Jl. Raya Kebayoran Lama No. 12<br/>Jakarta Selatan 12240, Indonesia
            </p>
          </div>

          <!-- Produk -->
          <div>
            <p class="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">Produk</p>
            <ul class="space-y-2">
              <li><NuxtLink to="/products" class="hover:text-white/60 transition-colors">Semua Produk</NuxtLink></li>
              <li><NuxtLink to="/features" class="hover:text-white/60 transition-colors">Fitur</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="hover:text-white/60 transition-colors">Harga</NuxtLink></li>
              <li><NuxtLink to="/order" class="hover:text-white/60 transition-colors">Mulai Berlangganan</NuxtLink></li>
            </ul>
          </div>

          <!-- Perusahaan -->
          <div>
            <p class="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">Perusahaan</p>
            <ul class="space-y-2">
              <li><NuxtLink to="/about" class="hover:text-white/60 transition-colors">Tentang Kami</NuxtLink></li>
              <li><NuxtLink to="/partners" class="hover:text-white/60 transition-colors">Mitra &amp; Case Study</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-white/60 transition-colors">Kontak</NuxtLink></li>
              <li>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" class="hover:text-white/60 transition-colors">
                  WhatsApp Admin
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <p class="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">Legal</p>
            <ul class="space-y-2">
              <li><NuxtLink to="/privacy-policy" class="hover:text-white/60 transition-colors">Kebijakan Privasi</NuxtLink></li>
              <li><NuxtLink to="/terms-of-service" class="hover:text-white/60 transition-colors">Syarat &amp; Ketentuan</NuxtLink></li>
              <li><NuxtLink to="/refund-policy" class="hover:text-white/60 transition-colors">Kebijakan Refund</NuxtLink></li>
            </ul>
          </div>

        </div>

        <!-- Bottom row: copyright + contact -->
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 text-xs"
          style="border-top: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.22);"
        >
          <p>© 2026 CV Autobot Wijaya Solution · Seluruh hak cipta dilindungi.</p>
          <div class="flex items-center gap-4">
            <a href="mailto:support@autobot.co.id" class="hover:text-white/40 transition-colors">support@autobot.co.id</a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" class="hover:text-white/40 transition-colors">+62 812-3456-7890</a>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>
