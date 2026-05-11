<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const config = useRuntimeConfig()
const search = ref('')
const page = ref(0)
const limit = 20
const data = ref<any>(null)
const users = computed(() => data.value?.data || [])
const total = computed(() => data.value?.total || 0)

function getHeaders() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

async function refresh() {
  data.value = await $fetch(
    `${config.public.apiBase}/api/admin/users?search=${search.value}&limit=${limit}&offset=${page.value * limit}`,
    { headers: getHeaders() }
  )
}

watch(search, () => { page.value = 0; refresh() })
watch(page, refresh)
onMounted(refresh)

const toggling = ref<string | null>(null)
async function toggleStatus(user: any) {
  toggling.value = user.id
  await $fetch(`${config.public.apiBase}/api/admin/users/${user.id}/status`, {
    method: 'PUT', headers: getHeaders(), body: { is_active: !user.is_active },
  })
  await refresh()
  toggling.value = null
}
</script>

<template>
  <div class="p-6 max-w-6xl mx-auto w-full">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-xl font-bold text-white">Users</h1>
      <input v-model="search" type="search" placeholder="Search by email or name..."
        class="admin-input w-64" />
    </div>

    <div class="rounded-2xl border border-white/8 overflow-hidden" style="background: rgba(255,255,255,0.02);">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/8 text-xs text-gray-500">
            <th class="px-5 py-3 text-left font-medium">Name</th>
            <th class="px-5 py-3 text-left font-medium">Email</th>
            <th class="px-5 py-3 text-left font-medium">Role</th>
            <th class="px-5 py-3 text-left font-medium">Verified</th>
            <th class="px-5 py-3 text-left font-medium">Status</th>
            <th class="px-5 py-3 text-left font-medium">Joined</th>
            <th class="px-5 py-3 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr v-for="u in users" :key="u.id" class="hover:bg-white/3 transition-colors">
            <td class="px-5 py-3 text-white">{{ u.name || '-' }}</td>
            <td class="px-5 py-3 text-gray-400 text-xs">{{ u.email }}</td>
            <td class="px-5 py-3 text-gray-500 text-xs">{{ u.role }}</td>
            <td class="px-5 py-3">
              <span class="text-xs" :class="u.is_verified ? 'text-green-400' : 'text-gray-600'">
                {{ u.is_verified ? '✓ Yes' : 'No' }}
              </span>
            </td>
            <td class="px-5 py-3">
              <span class="text-xs px-2 py-0.5 rounded-full"
                :class="u.is_active ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'">
                {{ u.is_active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td class="px-5 py-3 text-xs text-gray-500">{{ new Date(u.created_at).toLocaleDateString('id') }}</td>
            <td class="px-5 py-3 text-right">
              <div class="flex items-center justify-end gap-2">
                <NuxtLink :to="`/admin/users/${u.id}`" class="text-xs text-blue-400 hover:text-blue-300">Detail</NuxtLink>
                <button @click="toggleStatus(u)" :disabled="toggling === u.id"
                  class="text-xs disabled:opacity-50" :class="u.is_active ? 'text-red-400 hover:text-red-300' : 'text-green-400 hover:text-green-300'">
                  {{ toggling === u.id ? '...' : (u.is_active ? 'Deactivate' : 'Activate') }}
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="!users.length">
            <td colspan="7" class="px-5 py-10 text-center text-gray-600">No users found</td>
          </tr>
        </tbody>
      </table>
      <div v-if="total > limit" class="px-5 py-3 border-t border-white/8 flex items-center justify-between text-xs text-gray-500">
        <span>{{ total }} total</span>
        <div class="flex gap-2">
          <button :disabled="page === 0" @click="page--; refresh()" class="px-3 py-1 rounded border border-white/10 hover:border-white/25 disabled:opacity-30">Prev</button>
          <button :disabled="(page + 1) * limit >= total" @click="page++; refresh()" class="px-3 py-1 rounded border border-white/10 hover:border-white/25 disabled:opacity-30">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.admin-input {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 8px 12px;
  color: #f0f0f0;
  font-size: 13px;
  outline: none;
}
.admin-input:focus { border-color: rgba(255,255,255,0.3); }
</style>
