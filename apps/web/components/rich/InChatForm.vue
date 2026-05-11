<template>
  <div class="rounded-2xl border border-white/10 bg-white/5 p-5 max-w-sm animate-scale-in">
    <h3 class="text-white font-semibold mb-1">{{ data.title }}</h3>
    <p v-if="data.description" class="text-gray-400 text-sm mb-4">{{ data.description }}</p>

    <form v-if="!submitted" @submit.prevent="submit" class="space-y-3">
      <div v-for="field in data.fields" :key="field.name">
        <label class="block text-xs text-gray-400 mb-1">
          {{ field.label }} <span v-if="field.required" class="text-red-400">*</span>
        </label>
        <textarea
          v-if="field.type === 'textarea'"
          v-model="formData[field.name]"
          :placeholder="field.placeholder"
          :required="field.required"
          rows="3"
          class="w-full bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-white/25 resize-none"
        />
        <select
          v-else-if="field.type === 'select'"
          v-model="formData[field.name]"
          :required="field.required"
          class="w-full bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-white/25"
        >
          <option value="" disabled>Pilih...</option>
          <option v-for="opt in field.options" :key="opt" :value="opt">{{ opt }}</option>
        </select>
        <input
          v-else
          v-model="formData[field.name]"
          :type="field.type"
          :placeholder="field.placeholder"
          :required="field.required"
          class="w-full bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-white/25"
        />
      </div>

      <button
        type="submit"
        :disabled="submitting"
        class="w-full py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors disabled:opacity-50"
      >
        {{ submitting ? 'Mengirim...' : data.submit_label }}
      </button>
    </form>

    <div v-else class="text-center py-4">
      <div class="text-3xl mb-2">✅</div>
      <p class="text-white font-medium text-sm">Data terkirim!</p>
      <p class="text-gray-400 text-xs mt-1">Kami akan segera menghubungi Anda.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>()
const emit = defineEmits<{ action: [payload: any] }>()

const formData = ref<Record<string, string>>({})
const submitted = ref(false)
const submitting = ref(false)

const submit = async () => {
  submitting.value = true
  await nextTick()
  emit('action', {
    type: 'form_submit',
    form_type: props.data.form_type,
    data: { ...formData.value },
  })
  submitted.value = true
  submitting.value = false
}
</script>
