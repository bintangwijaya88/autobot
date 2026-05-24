<script setup lang="ts">
definePageMeta({ layout: 'page' })
useSeoMeta({
  title: 'Klien & Mitra — Autobot',
  description: 'Klien dan mitra Autobot Wijaya Solution — dari klinik, SMKS, hingga perusahaan impor.',
  ogTitle: 'Klien & Mitra — Autobot',
  ogDescription: 'Perusahaan-perusahaan yang sudah mempercayakan solusi bot dan automasi kepada Autobot Wijaya Solution.',
  ogUrl: 'https://autobot.co.id/partners',
})

const config = useRuntimeConfig()
const { data } = await useFetch<{ data: any[] }>(`${config.public.apiBase}/api/partners`)
const partners = computed(() => data.value?.data || [])
const featured = computed(() => partners.value.filter(p => p.is_featured))
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold text-white mb-2">Klien & Mitra</h1>
    <p class="text-gray-400 mb-10">Kami bangga melayani berbagai industri di Indonesia.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      <div v-for="partner in partners" :key="partner.id"
        class="rounded-2xl border border-white/10 bg-white/3 p-5">
        <h3 class="text-white font-semibold">{{ partner.name }}</h3>
        <p v-if="partner.partnership_type" class="text-xs text-blue-400 mt-0.5 capitalize">{{ partner.partnership_type }}</p>
        <p v-if="partner.description" class="text-gray-400 text-sm mt-2">{{ partner.description }}</p>
        <blockquote v-if="partner.testimonial" class="mt-3 pl-3 border-l-2 border-white/20 text-gray-400 text-sm italic">
          "{{ partner.testimonial }}"
        </blockquote>
      </div>
    </div>

    <div class="text-center">
      <NuxtLink to="/" class="inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors">
        Jadi Mitra Kami
      </NuxtLink>
    </div>
  </div>
</template>
