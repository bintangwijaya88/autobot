<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const route = useRoute()
const config = useRuntimeConfig()
const isNew = route.params.id === 'new'

const form = reactive({
  id: '',
  slug: '',
  name: '',
  tagline: '',
  description: '',
  category: '',
  delivery_model: 'web',
  demo_url: '',
  status: 'active',
  sort_order: 0,
  features: '[]',
  pricing: '{}',
  tech_stack: '[]',
})

function getHeaders() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

onMounted(async () => {
  if (isNew) return
  const data = await $fetch<any>(`${config.public.apiBase}/api/admin/products`, { headers: getHeaders() })
  const product = (data?.data || []).find((p: any) => p.id === route.params.id)
  if (product) {
    Object.assign(form, {
      ...product,
      features: JSON.stringify(product.features || [], null, 2),
      pricing: JSON.stringify(product.pricing || {}, null, 2),
      tech_stack: JSON.stringify(product.tech_stack || [], null, 2),
      tagline: product.tagline || '',
      description: product.description || '',
      delivery_model: product.delivery_model || 'web',
      demo_url: product.demo_url || '',
    })
  }
})

const saving = ref(false)
const error = ref('')

async function save() {
  saving.value = true
  error.value = ''
  try {
    let features, pricing, techStack
    try {
      features = JSON.parse(form.features)
      pricing = JSON.parse(form.pricing)
      techStack = JSON.parse(form.tech_stack)
    } catch {
      error.value = 'Invalid JSON in features, pricing, or tech_stack'
      return
    }
    const body = {
      ...form,
      features,
      pricing,
      tech_stack: techStack,
      sort_order: Number(form.sort_order),
      tagline: form.tagline || null,
      description: form.description || null,
      delivery_model: form.delivery_model || null,
      demo_url: form.demo_url || null,
    }
    if (isNew) {
      await $fetch(`${config.public.apiBase}/api/admin/products`, { method: 'POST', headers: getHeaders(), body })
    } else {
      await $fetch(`${config.public.apiBase}/api/admin/products/${form.id}`, { method: 'PUT', headers: getHeaders(), body })
    }
    await navigateTo('/admin/products')
  } catch (e: any) {
    error.value = e.data?.error || 'Save failed'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto w-full">
    <div class="flex items-center gap-3 mb-6">
      <NuxtLink to="/admin/products" class="text-gray-500 hover:text-gray-300 text-sm">← Products</NuxtLink>
      <h1 class="text-xl font-bold text-white">{{ isNew ? 'New Product' : 'Edit Product' }}</h1>
    </div>

    <div v-if="error" class="mb-4 px-4 py-3 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 text-sm">{{ error }}</div>

    <form @submit.prevent="save" class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Name *</label>
          <input v-model="form.name" class="admin-input w-full" placeholder="WaBlastApp" required />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Slug *</label>
          <input v-model="form.slug" class="admin-input w-full" placeholder="wablastapp" required />
        </div>
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1.5">Tagline</label>
        <input v-model="form.tagline" class="admin-input w-full" placeholder="Platform blast WhatsApp terbaik" />
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1.5">Description</label>
        <textarea v-model="form.description" rows="3" class="admin-input w-full" placeholder="Deskripsi lengkap produk..."></textarea>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Category</label>
          <input v-model="form.category" class="admin-input w-full" placeholder="chatbot" />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Delivery Model</label>
          <input v-model="form.delivery_model" class="admin-input w-full" placeholder="web / desktop / api" />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Status</label>
          <select v-model="form.status" class="admin-input w-full">
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Demo URL</label>
          <input v-model="form.demo_url" class="admin-input w-full" placeholder="https://demo.autobot.co.id" />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1.5">Sort Order</label>
          <input v-model="form.sort_order" type="number" class="admin-input w-full" placeholder="0" />
        </div>
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1.5">Features (JSON array)</label>
        <textarea v-model="form.features" rows="5" class="admin-input w-full font-mono text-xs" placeholder='["Feature 1", "Feature 2"]'></textarea>
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1.5">Pricing (JSON)</label>
        <textarea v-model="form.pricing" rows="4" class="admin-input w-full font-mono text-xs" placeholder='{"starter": 99000}'></textarea>
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1.5">Tech Stack (JSON array)</label>
        <textarea v-model="form.tech_stack" rows="3" class="admin-input w-full font-mono text-xs" placeholder='["Go", "Vue 3"]'></textarea>
      </div>

      <div class="flex justify-end gap-3 pt-2">
        <NuxtLink to="/admin/products" class="px-4 h-9 rounded-lg border border-white/15 text-gray-400 text-sm flex items-center hover:text-white transition-colors">Cancel</NuxtLink>
        <button type="submit" :disabled="saving" class="px-5 h-9 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 disabled:opacity-50 transition-colors">
          {{ saving ? 'Saving...' : 'Save Product' }}
        </button>
      </div>
    </form>
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
  transition: border-color 0.15s;
  resize: vertical;
  width: 100%;
}
.admin-input:focus {
  border-color: rgba(255,255,255,0.3);
}
.admin-input::placeholder {
  color: rgba(255,255,255,0.2);
}
</style>
