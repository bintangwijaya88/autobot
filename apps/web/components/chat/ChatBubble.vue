<template>
  <div class="animate-slide-up flex gap-3" :class="message.role === 'user' ? 'justify-end' : 'justify-start'">

    <!-- Assistant avatar -->
    <div
      v-if="message.role === 'assistant'"
      class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
      style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.10);"
    >
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style="color: #9A9A9A;">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm.5 11.5h-1v-5h1v5zm0-6.5h-1V5.5h1V7z" fill="currentColor"/>
      </svg>
    </div>

    <div class="max-w-[78%] space-y-2" :class="message.role === 'user' ? 'items-end flex flex-col' : ''">

      <!-- Text bubble — hidden when message IS the artifact content (document) -->
      <div
        v-if="message.content && !isArtifact"
        class="px-4 py-3 text-sm leading-relaxed"
        :class="[
          message.role === 'user' ? 'rounded-[18px] rounded-tr-[6px]' : 'rounded-[18px] rounded-tl-[6px]',
          message.role === 'assistant' ? 'chat-md' : '',
        ]"
        :style="message.role === 'user'
          ? 'background: rgba(255,255,255,0.08); color: #F0F0F0; border: 1px solid rgba(255,255,255,0.08); white-space: pre-wrap;'
          : 'color: #D4D4D4;'"
      >
        <!-- Streaming from WS -->
        <span v-if="message.isStreaming" v-html="renderMd(message.content)" /><span
          v-if="message.isStreaming"
          class="inline-block w-0.5 h-[14px] ml-0.5 align-middle animate-pulse rounded-sm"
          style="background: rgba(255,255,255,0.5);"
        />
        <!-- Typing animation for completed messages -->
        <template v-else-if="animating">
          <span v-html="renderMd(displayContent)" /><span
            class="inline-block w-0.5 h-[14px] ml-0.5 align-middle rounded-sm"
            style="background: rgba(255,255,255,0.45);"
            :style="{ opacity: cursorVisible ? 1 : 0, transition: 'opacity 0.15s' }"
          />
        </template>
        <span v-else-if="message.role === 'assistant'" v-html="renderMd(message.content)" />
        <span v-else>{{ message.content }}</span>
      </div>

      <!-- Artifact chip (document / selection_list) — replaces inline rich content -->
      <button
        v-if="isArtifact && message.richContent"
        class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-left transition-all w-full"
        style="background: rgba(99,102,241,0.10); border: 1px solid rgba(99,102,241,0.20);"
        @click="reopenArtifact"
        @mouseover="e => (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.16)'"
        @mouseleave="e => (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.10)'"
      >
        <div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
             style="background: rgba(99,102,241,0.20); border: 1px solid rgba(99,102,241,0.3);">
          <svg v-if="message.richContent.type === 'document'" width="13" height="13" viewBox="0 0 24 24" fill="none" style="color: #a5b4fc;">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
            <path d="M14 2v6h6M16 13H8M16 17H8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
          <svg v-else width="13" height="13" viewBox="0 0 24 24" fill="none" style="color: #a5b4fc;">
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-[13px] font-medium" style="color: #c4b5fd;">
            {{ message.richContent.data?.title || artifactTypeLabel(message.richContent.type) }}
          </p>
          <p class="text-[11px]" style="color: rgba(165,180,252,0.55);">
            Klik untuk buka di panel →
          </p>
        </div>
      </button>

      <!-- Rich content (non-artifact types) -->
      <div v-if="message.richContent && !animating && !isArtifact" class="animate-scale-in w-full">
        <component
          :is="getRichComponent(message.richContent.type)"
          :data="message.richContent.data"
          @action="$emit('action', $event)"
        />
      </div>

      <!-- Timestamp -->
      <div
        class="text-[11px] px-1 select-none"
        :class="message.role === 'user' ? 'text-right' : 'text-left'"
        style="color: rgba(255,255,255,0.20);"
      >
        {{ formatTime(message.timestamp) }}
      </div>
    </div>

    <!-- User spacer (no avatar, keep alignment) -->
    <div v-if="message.role === 'user'" class="w-7 shrink-0" />
  </div>
</template>

<script setup lang="ts">
import { Marked } from 'marked'
import type { ChatMessage } from '~/types'
import RichProductCard from '~/components/rich/ProductCard.vue'
import RichProductCarousel from '~/components/rich/ProductCarousel.vue'
import RichPricingTable from '~/components/rich/PricingTable.vue'
import RichInChatForm from '~/components/rich/InChatForm.vue'
import RichPartnerGrid from '~/components/rich/PartnerGrid.vue'
import RichComparisonTable from '~/components/rich/ComparisonTable.vue'
import RichAccountOffer from '~/components/rich/AccountOffer.vue'
import RichConsultationOffer from '~/components/rich/ConsultationOffer.vue'
import RichPaymentQR from '~/components/rich/PaymentQR.vue'

import { useArtifactStore } from '~/stores/artifact'

const md = new Marked({ breaks: true, gfm: true })

const renderMd = (text: string): string => md.parse(text) as string

const props = defineProps<{ message: ChatMessage }>()
const emit = defineEmits<{ action: [payload: any]; scroll: [] }>()

const artifactStore = useArtifactStore()

const ARTIFACT_TYPES = new Set(['document', 'selection_list', 'mermaid', 'excel', 'ppt', 'html'])
const ARTIFACT_LABELS: Record<string, string> = {
  document: 'Dokumen',
  mermaid: 'Diagram',
  excel: 'Spreadsheet',
  ppt: 'Presentasi',
  html: 'HTML Preview',
  selection_list: 'Daftar Referensi',
}
const artifactTypeLabel = (type: string) => ARTIFACT_LABELS[type] || 'Artifact'
const isArtifact = computed(() => !!props.message.richContent && ARTIFACT_TYPES.has(props.message.richContent.type))

const reopenArtifact = () => {
  if (!props.message.richContent) return
  emit('action', {
    type: 'open_artifact',
    artifact: { id: props.message.id, type: props.message.richContent.type, ...props.message.richContent.data },
  })
}

const displayContent = ref('')
const animating = ref(false)
const cursorVisible = ref(true)

onMounted(() => {
  // Auto-open artifact panel when this bubble has artifact content
  if (isArtifact.value && props.message.richContent) {
    reopenArtifact()
  }

  if (props.message.isTypingAnim && props.message.role === 'assistant' && props.message.content) {
    animating.value = true
    displayContent.value = ''

    const fullText = props.message.content
    let i = 0

    const blink = setInterval(() => { cursorVisible.value = !cursorVisible.value }, 530)

    const tick = () => {
      if (i < fullText.length) {
        const step = fullText[i] === '\n' ? 1 : Math.min(3, fullText.length - i)
        displayContent.value += fullText.slice(i, i + step)
        i += step
        emit('scroll')
        setTimeout(tick, 14)
      } else {
        clearInterval(blink)
        cursorVisible.value = false
        animating.value = false
        emit('scroll')
      }
    }

    setTimeout(tick, 60)
  }
})

type RichComponentType = typeof RichProductCard | typeof RichProductCarousel | typeof RichPricingTable | typeof RichInChatForm | typeof RichPartnerGrid | typeof RichComparisonTable | typeof RichAccountOffer | typeof RichConsultationOffer | typeof RichPaymentQR

const richComponentMap: Record<string, RichComponentType> = {
  product_card:        RichProductCard,
  carousel:            RichProductCarousel,
  pricing_table:       RichPricingTable,
  form:                RichInChatForm,
  partner_grid:        RichPartnerGrid,
  comparison_table:    RichComparisonTable,
  account_offer:       RichAccountOffer,
  consultation_offer:  RichConsultationOffer,
  payment_qr:          RichPaymentQR,
}

const getRichComponent = (type: string) => richComponentMap[type] ?? 'div'

const formatTime = (date: Date) => {
  return new Intl.DateTimeFormat('id', { hour: '2-digit', minute: '2-digit' }).format(date)
}
</script>
