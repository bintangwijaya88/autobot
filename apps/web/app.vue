<template>
  <div data-theme="dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CommonSearchModal v-if="showSearch" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useLocale()
const { showSearch, openSearch } = useSearchModal()

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
  },
  htmlAttrs: {
    lang: locale.value,
  },
}))
</script>
