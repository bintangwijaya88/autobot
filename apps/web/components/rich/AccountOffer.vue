<template>
  <div class="rounded-2xl overflow-hidden mt-1 w-full max-w-sm" style="border: 1px solid rgba(255,255,255,0.10); box-shadow: 0 8px 32px rgba(0,0,0,0.4);">

    <!-- Header gradient -->
    <div class="px-5 pt-5 pb-4" style="background: linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.12) 100%); border-bottom: 1px solid rgba(255,255,255,0.07);">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
          style="background: rgba(59,130,246,0.25); border: 1px solid rgba(59,130,246,0.35);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="color: #93c5fd;">
            <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <p class="text-sm font-semibold" style="color: #e2e8f0;">Buat Akun Gratis</p>
          <p class="text-xs mt-0.5" style="color: rgba(255,255,255,0.45);">Simpan riwayat & lanjutkan sesi kapan saja</p>
        </div>
      </div>
    </div>

    <!-- Form body -->
    <div v-if="!submitted" class="px-5 py-4 space-y-3" style="background: rgba(17,17,17,0.85);">

      <!-- Name field -->
      <div class="space-y-1.5">
        <label class="text-xs font-medium" style="color: rgba(255,255,255,0.50);">Nama</label>
        <input
          v-model="name"
          type="text"
          placeholder="Nama kamu"
          maxlength="60"
          class="w-full text-sm px-3.5 py-2.5 rounded-xl outline-none transition-all"
          :style="nameFocused
            ? 'background: rgba(255,255,255,0.08); border: 1px solid rgba(96,165,250,0.55); color: #F0F0F0; box-shadow: 0 0 0 3px rgba(59,130,246,0.12);'
            : 'background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10); color: #F0F0F0;'"
          @focus="nameFocused = true"
          @blur="nameFocused = false"
          @keydown.enter="emailInput?.focus()"
        />
      </div>

      <!-- Email field -->
      <div class="space-y-1.5">
        <label class="text-xs font-medium" style="color: rgba(255,255,255,0.50);">Email</label>
        <input
          ref="emailInput"
          v-model.trim="email"
          type="email"
          placeholder="email@kamu.com"
          class="w-full text-sm px-3.5 py-2.5 rounded-xl outline-none transition-all"
          :style="emailFocused
            ? 'background: rgba(255,255,255,0.08); border: 1px solid rgba(96,165,250,0.55); color: #F0F0F0; box-shadow: 0 0 0 3px rgba(59,130,246,0.12);'
            : 'background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10); color: #F0F0F0;'"
          @focus="emailFocused = true"
          @blur="emailFocused = false; emailBlurred = true"
          @keydown.enter="submit"
        />
        <p v-if="emailError" class="text-xs" style="color: #f87171;">{{ emailError }}</p>
      </div>

      <!-- Submit -->
      <button
        @click="submit"
        :disabled="!canSubmit"
        class="w-full py-2.5 rounded-xl text-sm font-semibold transition-all mt-1"
        :style="canSubmit
          ? 'background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; cursor: pointer; box-shadow: 0 4px 14px rgba(59,130,246,0.35);'
          : 'background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.25); cursor: not-allowed;'"
      >
        Buat Akun &amp; Kirim Kode Verifikasi
      </button>

      <!-- Privacy note + skip -->
      <div class="pt-1 space-y-1.5">
        <p class="text-center text-xs" style="color: rgba(255,255,255,0.22);">
          Kode 6 digit akan dikirim ke email kamu
        </p>
        <button
          @click="skip"
          class="w-full text-xs text-center py-1 transition-opacity hover:opacity-70"
          style="color: rgba(255,255,255,0.30);"
        >
          Lewati, lanjut sebagai tamu →
        </button>
      </div>
    </div>

    <!-- Submitted state -->
    <div v-else class="px-5 py-6 text-center" style="background: rgba(17,17,17,0.85);">
      <div class="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
        style="background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.3);">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="color: #4ade80;">
          <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <p class="text-sm font-medium" style="color: #e2e8f0;">Mengirim kode ke {{ email }}</p>
      <p class="text-xs mt-1" style="color: rgba(255,255,255,0.35);">Cek inbox atau folder spam kamu</p>
    </div>

  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ action: [payload: any] }>()

const name = ref('')
const email = ref('')
const nameFocused = ref(false)
const emailFocused = ref(false)
const submitted = ref(false)
const emailInput = ref<HTMLInputElement | null>(null)

const emailTrimmed = computed(() => email.value.trim())
const emailBlurred = ref(false)
const submitAttempted = ref(false)

// Lenient: just requires something@something.something
const isValidEmail = (v: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)

const emailError = computed(() => {
  if (!emailBlurred.value && !submitAttempted.value) return ''
  if (!emailTrimmed.value) return 'Email wajib diisi'
  return isValidEmail(emailTrimmed.value) ? '' : 'Format email tidak valid'
})

const canSubmit = computed(() =>
  name.value.trim().length >= 2 && isValidEmail(emailTrimmed.value)
)

const submit = () => {
  submitAttempted.value = true
  if (!canSubmit.value) return
  submitted.value = true
  emit('action', {
    type: 'register_form',
    name: name.value.trim(),
    email: emailTrimmed.value,
  })
}

const skip = () => {
  emit('action', { type: 'chat_message', text: 'lewati' })
}
</script>
