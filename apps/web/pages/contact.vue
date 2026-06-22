<script setup lang="ts">
import { ArrowRight, Building2, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-vue-next'

definePageMeta({ layout: 'marketing' })
useSeoMeta({
  title: 'Kontak — Autobot',
  description: 'Hubungi autobotws via chat AI, WhatsApp, atau email. Konsultasi gratis untuk kebutuhan software, otomasi, dan integrasi sistem.',
  ogTitle: 'Hubungi Autobot',
  ogDescription: 'Konsultasi chatbot WhatsApp & automasi bisnis gratis. Tim kami siap membantu.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id/contact',
})
</script>

<template>
  <div class="contact-page overflow-hidden bg-slate-50">
    <section class="tech-pattern relative border-b border-slate-200 bg-white">
      <div class="pointer-events-none absolute right-10 top-12 hidden h-28 w-28 rounded-full border border-blue-200/80 lg:block orbit-shape" />
      <div class="pointer-events-none absolute bottom-12 left-[45%] hidden h-20 w-20 rotate-45 rounded-lg border border-cyan-200/80 bg-cyan-50/40 lg:block float-shape" />

      <div class="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div class="flex flex-col justify-center">
          <div class="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
            <MessageCircle class="h-4 w-4" />
            Konsultasi gratis untuk automasi bisnis
          </div>
          <h1 class="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Hubungi autobotws
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Ceritakan kebutuhan chatbot WhatsApp, CRM, workflow automation, atau integrasi sistem. Tim kami aktif Senin sampai Jumat pukul 09.00-17.00 WIB.
          </p>

          <div class="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/6282164867681"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              WhatsApp Admin
              <ArrowRight class="h-4 w-4" />
            </a>
            <NuxtLink
              to="/"
              class="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Chat dengan AI
            </NuxtLink>
          </div>
        </div>

        <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm animate-scale-in">
          <div class="rounded-lg border border-slate-200 bg-white">
            <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <div>
                <p class="text-sm font-bold text-slate-900">Contact Center</p>
                <p class="text-xs text-slate-500">autobotws</p>
              </div>
              <span class="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">ONLINE</span>
            </div>

            <div class="grid gap-3 p-4">
              <a
                href="https://wa.me/6282164867681"
                target="_blank"
                rel="noopener"
                class="group flex items-center gap-4 rounded-lg border border-emerald-100 bg-emerald-50 p-4 transition hover:border-emerald-200 hover:bg-white"
              >
                <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-700 shadow-sm">
                  <Phone class="h-5 w-5" />
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block text-sm font-extrabold text-slate-950 group-hover:text-emerald-700">WhatsApp Admin</span>
                  <span class="block text-sm text-slate-500">+62 821-6486-7681</span>
                </span>
                <ArrowRight class="h-4 w-4 text-slate-400 group-hover:text-emerald-700" />
              </a>

              <a
                href="mailto:support@autobot.co.id"
                class="group flex items-center gap-4 rounded-lg border border-blue-100 bg-blue-50 p-4 transition hover:border-blue-200 hover:bg-white"
              >
                <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-blue-700 shadow-sm">
                  <Mail class="h-5 w-5" />
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block text-sm font-extrabold text-slate-950 group-hover:text-blue-700">Email Support</span>
                  <span class="block truncate text-sm text-slate-500">support@autobot.co.id</span>
                </span>
                <ArrowRight class="h-4 w-4 text-slate-400 group-hover:text-blue-700" />
              </a>

              <NuxtLink
                to="/"
                class="group flex items-center gap-4 rounded-lg border border-cyan-100 bg-cyan-50 p-4 transition hover:border-cyan-200 hover:bg-white"
              >
                <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-cyan-700 shadow-sm">
                  <MessageCircle class="h-5 w-5" />
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block text-sm font-extrabold text-slate-950 group-hover:text-cyan-700">Chat dengan Autobot AI</span>
                  <span class="block text-sm text-slate-500">Respon instan 24/7</span>
                </span>
                <ArrowRight class="h-4 w-4 text-slate-400 group-hover:text-cyan-700" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
            <Building2 class="h-6 w-6" />
          </div>
          <p class="mt-5 text-sm font-extrabold uppercase tracking-wider text-blue-700">Identitas Bisnis</p>
          <h2 class="mt-3 text-2xl font-extrabold tracking-tight text-slate-950">autobotws</h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">
            Situs resmi:
            <span class="font-bold text-slate-950">autobot.co.id</span>
          </p>
          <p class="mt-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">Legal Entity</p>
          <p class="mt-2 text-sm leading-6 text-slate-600">
            <span class="font-bold text-slate-950">CV Autobot Wijaya Solution</span>
          </p>
          <p class="mt-1 text-sm text-slate-500">NIB: 1506220026754</p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <MapPin class="h-5 w-5 text-[#28767f]" />
            <p class="mt-4 text-sm font-extrabold text-slate-950">Alamat</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">Gg. Bina Warga III Desa No.36, Lubang Buaya, Cipayung, Jakarta Timur 13810, Indonesia</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <Clock class="h-5 w-5 text-[#28767f]" />
            <p class="mt-4 text-sm font-extrabold text-slate-950">Jam Operasional</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">Senin-Jumat, 09.00-17.00 WIB. Chat AI tersedia setiap hari.</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2">
            <Mail class="h-5 w-5 text-[#28767f]" />
            <p class="mt-4 text-sm font-extrabold text-slate-950">Email Resmi</p>
            <div class="mt-2 grid gap-1 text-sm leading-6 text-slate-600">
              <a href="mailto:support@autobot.co.id" class="font-semibold text-blue-700 hover:text-blue-800">support@autobot.co.id</a>
              <a href="mailto:admin@autobot.co.id" class="font-semibold text-blue-700 hover:text-blue-800">admin@autobot.co.id</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
          <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">Mulai dari paket yang tepat</p>
              <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Lihat opsi harga sebelum konsultasi.</h2>
              <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Bandingkan paket produk dan layanan agar diskusi dengan tim kami lebih cepat dan konkret.
              </p>
            </div>
            <NuxtLink
              to="/pricing"
              class="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Lihat Paket Harga
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

.orbit-shape {
  animation: orbit-drift 9s ease-in-out infinite;
}

.float-shape {
  animation: float-shape 6.5s ease-in-out infinite;
}

@keyframes orbit-drift {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(-12px, 10px, 0) rotate(12deg); }
}

@keyframes float-shape {
  0%, 100% { transform: translateY(0) rotate(45deg); }
  50% { transform: translateY(-12px) rotate(45deg); }
}

@media (prefers-reduced-motion: reduce) {
  .orbit-shape,
  .float-shape {
    animation: none;
  }
}
</style>
