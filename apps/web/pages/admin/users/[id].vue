<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const route = useRoute()
const config = useRuntimeConfig()
const data = ref<any>(null)
const user = computed(() => data.value || {})

onMounted(async () => {
  const token = localStorage.getItem('admin_token') || ''
  data.value = await $fetch(`${config.public.apiBase}/api/admin/users/${route.params.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
})
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto w-full">
    <div class="flex items-center gap-3 mb-6">
      <NuxtLink to="/admin/users" class="text-gray-500 hover:text-gray-300 text-sm">← Users</NuxtLink>
      <h1 class="text-xl font-bold text-white">User Detail</h1>
    </div>

    <div class="rounded-2xl border border-white/8 p-6 space-y-4" style="background: rgba(255,255,255,0.02);">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-xs text-gray-500 mb-1">Name</p>
          <p class="text-white">{{ user.name || '-' }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-1">Email</p>
          <p class="text-white">{{ user.email }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-1">Role</p>
          <p class="text-white">{{ user.role }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-1">Status</p>
          <span class="text-xs px-2 py-0.5 rounded-full"
            :class="user.is_active ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'">
            {{ user.is_active ? 'Active' : 'Inactive' }}
          </span>
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-1">Email Verified</p>
          <p :class="user.is_verified ? 'text-green-400' : 'text-gray-500'">{{ user.is_verified ? 'Yes' : 'No' }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-1">Joined</p>
          <p class="text-white text-sm">{{ user.created_at ? new Date(user.created_at).toLocaleString('id') : '-' }}</p>
        </div>
      </div>
      <div v-if="user.access_key">
        <p class="text-xs text-gray-500 mb-1">Access Key</p>
        <p class="text-white font-mono text-xs break-all">{{ user.access_key }}</p>
      </div>
    </div>
  </div>
</template>
