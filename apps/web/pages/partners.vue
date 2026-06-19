<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

definePageMeta({ layout: 'marketing' })

useSeoMeta({
  title: 'Mitra & Studi Kasus — autobotws',
  description: 'Klien dan mitra autobotws — dari klinik, pendidikan, hingga perusahaan jasa yang mempercayakan solusi software dan otomasi bisnis.',
  ogTitle: 'Mitra & Studi Kasus — autobotws',
  ogDescription: 'Perusahaan dan organisasi yang telah menggunakan solusi software dan otomasi dari autobotws.',
  ogUrl: 'https://autobot.co.id/partners',
})

const config = useRuntimeConfig()
const { data } = await useFetch<{ data: any[] }>(`${config.public.apiBase}/api/partners`)
const partners = computed(() => data.value?.data || [])
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700">Mitra & Studi Kasus</p>
        <h1 class="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Klien dan mitra kami</h1>
        <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          autobotws bangga mendukung berbagai industri di Indonesia melalui solusi software, otomasi WhatsApp, dan sistem digital yang disesuaikan dengan kebutuhan operasional.
        </p>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <article
          v-for="partner in partners"
          :key="partner.id"
          class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 class="text-xl font-extrabold text-slate-950">{{ partner.name }}</h2>
          <p v-if="partner.partnership_type" class="mt-1 text-xs font-bold uppercase tracking-wider text-emerald-700">{{ partner.partnership_type }}</p>
          <p v-if="partner.description" class="mt-3 text-sm leading-6 text-slate-600">{{ partner.description }}</p>
          <blockquote v-if="partner.testimonial" class="mt-4 border-l-2 border-emerald-200 pl-4 text-sm italic leading-6 text-slate-500">
            "{{ partner.testimonial }}"
          </blockquote>
        </article>

        <div v-if="!partners.length" class="md:col-span-2 rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
          <p class="text-sm font-semibold text-slate-500">Data mitra akan ditampilkan di sini setelah tersedia.</p>
        </div>
      </div>
    </section>

    <section class="border-t border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-lg bg-slate-950 p-8 text-white sm:p-10">
          <h2 class="text-3xl font-extrabold">Ingin menjadi mitra atau klien berikutnya?</h2>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Diskusikan kebutuhan otomasi, software, atau integrasi sistem dengan tim kami.
          </p>
          <NuxtLink to="/contact" class="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950">
            Hubungi Kami
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>