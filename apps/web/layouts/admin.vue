<template>
  <div class="flex h-screen overflow-hidden" style="background: #0e0e0e;">
    <AdminSidebar />
    <div class="flex-1 flex flex-col min-h-0 overflow-auto">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminSidebar from '~/components/admin/AdminSidebar.vue'
</script>
