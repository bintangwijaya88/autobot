<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const config = useRuntimeConfig()
const data = ref<any>(null)
const products = computed(() => data.value?.data || [])

function getHeaders() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

async function refresh() {
  data.value = await $fetch(`${config.public.apiBase}/api/admin/products`, { headers: getHeaders() })
}

onMounted(refresh)

const deleting = ref<string | null>(null)
async function deleteProduct(id: string) {
  if (!confirm('Archive this product?')) return
  deleting.value = id
  await $fetch(`${config.public.apiBase}/api/admin/products/${id}`, { method: 'DELETE', headers: getHeaders() })
  await refresh()
  deleting.value = null
}

const statusColor: Record<string, string> = {
  active: 'bg-green-500/20 text-green-400',
  archived: 'bg-gray-500/20 text-gray-400',
  draft: 'bg-yellow-500/20 text-yellow-400',
}
</script>

<template>
  <div class="p-6 max-w-6xl mx-auto w-full">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-xl font-bold text-white">Products</h1>
      <NuxtLink to="/admin/products/new"
        class="px-4 h-9 rounded-lg bg-white text-black text-sm font-medium flex items-center gap-1.5 hover:bg-gray-200 transition-colors">
        + New Product
      </NuxtLink>
    </div>

    <div class="rounded-2xl border border-white/8 overflow-hidden" style="background: rgba(255,255,255,0.02);">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/8 text-xs text-gray-500">
            <th class="px-5 py-3 text-left font-medium">Name</th>
            <th class="px-5 py-3 text-left font-medium">Slug</th>
            <th class="px-5 py-3 text-left font-medium">Category</th>
            <th class="px-5 py-3 text-left font-medium">Status</th>
            <th class="px-5 py-3 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr v-for="p in products" :key="p.id" class="hover:bg-white/3 transition-colors">
            <td class="px-5 py-3 text-white font-medium">{{ p.name }}</td>
            <td class="px-5 py-3 text-gray-400 font-mono text-xs">{{ p.slug }}</td>
            <td class="px-5 py-3 text-gray-400">{{ p.category }}</td>
            <td class="px-5 py-3">
              <span class="text-xs px-2 py-0.5 rounded-full" :class="statusColor[p.status] || 'bg-gray-500/20 text-gray-400'">
                {{ p.status }}
              </span>
            </td>
            <td class="px-5 py-3 text-right">
              <div class="flex items-center justify-end gap-2">
                <NuxtLink :to="`/admin/products/${p.id}`" class="text-xs text-blue-400 hover:text-blue-300">Edit</NuxtLink>
                <button @click="deleteProduct(p.id)" :disabled="deleting === p.id" class="text-xs text-red-400 hover:text-red-300 disabled:opacity-50">
                  {{ deleting === p.id ? '...' : 'Archive' }}
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="!products.length">
            <td colspan="5" class="px-5 py-10 text-center text-gray-600">No products yet</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
