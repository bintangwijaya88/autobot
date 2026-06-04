<template>
  <div class="flex h-screen overflow-hidden" style="background: #0d0d12;">
    <PortalSidebar />
    <div class="flex-1 flex flex-col min-h-0 overflow-auto">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import PortalSidebar from '~/components/portal/PortalSidebar.vue'
</script>
