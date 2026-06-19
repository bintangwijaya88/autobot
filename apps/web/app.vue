<template>
  <div :data-theme="isDarkShell ? 'dark' : undefined">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CommonSearchModal v-if="showSearch" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useLocale()
const { showSearch, openSearch } = useSearchModal()
const isDarkShell = computed(() => route.meta.layout !== 'marketing')

function onGlobalKeydown(e: KeyboardEvent) {
  const target = e.target as HTMLElement | null
  const tag = target?.tagName?.toLowerCase()
  const isTypingField = tag === 'input' || tag === 'textarea' || target?.isContentEditable
  if (isTypingField) return
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    openSearch()
  }
}

onMounted(() => window.addEventListener('keydown', onGlobalKeydown))
onUnmounted(() => window.removeEventListener('keydown', onGlobalKeydown))

useHead(() => ({
  bodyAttrs: {
    class: 'antialiased',
    style: isDarkShell.value
      ? 'background-color: #111111; color: #F0F0F0;'
      : 'background-color: #f8fafc; color: #0f172a;',
  },
  htmlAttrs: {
    lang: locale.value,
  },
}))
</script>
