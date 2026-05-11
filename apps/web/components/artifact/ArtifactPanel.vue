<template>
  <div class="flex flex-col h-full" style="background: #161616; border-left: 1px solid rgba(255,255,255,0.07);">

    <!-- ── Mermaid ── -->
    <ArtifactMermaid v-if="artifact.type === 'mermaid'" />

    <!-- ── Excel ── -->
    <ArtifactExcel v-else-if="artifact.type === 'excel'" />

    <!-- ── PPT ── -->
    <ArtifactPpt v-else-if="artifact.type === 'ppt'" />

    <!-- ── HTML ── -->
    <ArtifactHtml v-else-if="artifact.type === 'html'" />

    <!-- ── Document (markdown) ── -->
    <template v-else-if="artifact.type === 'document'">
      <div class="shrink-0 flex items-center gap-2.5 px-4 h-[52px]"
           style="border-bottom: 1px solid rgba(255,255,255,0.07);">
        <div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
             style="background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.2);">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="color: #a5b4fc;">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-[13px] font-medium truncate" style="color: #e2e8f0;">{{ artifact.title }}</p>
          <p class="text-[11px]" style="color: rgba(255,255,255,0.30);">Dokumen</p>
        </div>
        <button @click="copyContent" class="artifact-btn">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="2"/></svg>
          {{ copied ? 'Copied!' : 'Copy' }}
        </button>
        <button @click="downloadMd" class="artifact-btn">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          .md
        </button>
        <button @click="downloadDocx" :disabled="exportingDocx" class="artifact-btn">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          {{ exportingDocx ? '...' : '.docx' }}
        </button>
        <CloseBtn />
      </div>
      <article class="flex-1 overflow-y-auto px-7 py-6 chat-md text-sm leading-[1.75]"
        style="color: #d4d4d4;"
        v-html="renderMd((artifact as any).content)" />
    </template>

    <!-- ── Selection list ── -->
    <template v-else-if="artifact.type === 'selection_list'">
      <div class="shrink-0 flex items-center gap-2.5 px-4 h-[52px]"
           style="border-bottom: 1px solid rgba(255,255,255,0.07);">
        <div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
             style="background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.2);">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="color: #a5b4fc;">
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-[13px] font-medium truncate" style="color: #e2e8f0;">{{ artifact.title }}</p>
          <p class="text-[11px]" style="color: rgba(255,255,255,0.30);">Pilih referensi</p>
        </div>
        <CloseBtn />
      </div>
      <div class="flex-1 overflow-y-auto p-4 space-y-2">
        <p v-if="(artifact as any).subtitle" class="text-xs px-1 pb-1" style="color: rgba(255,255,255,0.30);">
          {{ (artifact as any).subtitle }}
        </p>
        <button
          v-for="item in (artifact as any).items"
          :key="item.id"
          class="w-full text-left px-4 py-3 rounded-xl transition-all"
          style="border: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.02);"
          @click="selectItem(item)"
          @mouseover="e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'"
          @mouseleave="e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'"
        >
          <div class="flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-medium" style="color: #e2e8f0;">{{ item.label }}</p>
              <p v-if="item.description" class="text-xs mt-0.5 truncate" style="color: rgba(255,255,255,0.40);">{{ item.description }}</p>
            </div>
            <span v-if="item.tag" class="text-[11px] px-2 py-0.5 rounded-full shrink-0 font-medium"
              style="background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.2); color: #a5b4fc;">
              {{ item.tag }}
            </span>
          </div>
        </button>
      </div>
    </template>

  </div>
</template>

<script setup lang="ts">
import { Marked } from 'marked'
import { useArtifactStore, type ArtifactItem } from '~/stores/artifact'
import ArtifactMermaid from './ArtifactMermaid.vue'
import ArtifactExcel from './ArtifactExcel.vue'
import ArtifactPpt from './ArtifactPpt.vue'
import ArtifactHtml from './ArtifactHtml.vue'

const emit = defineEmits<{ action: [payload: any] }>()

const artifactStore = useArtifactStore()
const artifact = computed(() => artifactStore.artifact!)

const md = new Marked({ breaks: true, gfm: true })
const renderMd = (text: string) => md.parse(text) as string

const copied = ref(false)
const exportingDocx = ref(false)

const copyContent = async () => {
  if (artifact.value?.type !== 'document') return
  await navigator.clipboard.writeText((artifact.value as any).content)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1800)
}

const downloadMd = () => {
  if (artifact.value?.type !== 'document') return
  const a = artifact.value as any
  const blob = new Blob([a.content], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const el = document.createElement('a')
  el.href = url; el.download = `${a.title.replace(/\s+/g, '_')}.md`; el.click()
  URL.revokeObjectURL(url)
}

const downloadDocx = async () => {
  if (!import.meta.client || artifact.value?.type !== 'document') return
  exportingDocx.value = true
  try {
    const { Document, Paragraph, TextRun, HeadingLevel, Packer } = await import('docx')
    const a = artifact.value as any
    const children = a.content.split('\n').map((line: string) => {
      if (line.startsWith('# ')) return new Paragraph({ text: line.slice(2), heading: HeadingLevel.HEADING_1 })
      if (line.startsWith('## ')) return new Paragraph({ text: line.slice(3), heading: HeadingLevel.HEADING_2 })
      if (line.startsWith('### ')) return new Paragraph({ text: line.slice(4), heading: HeadingLevel.HEADING_3 })
      if (line.startsWith('- ') || line.startsWith('* ')) return new Paragraph({ text: line.slice(2), bullet: { level: 0 } })
      return new Paragraph({ children: [new TextRun({ text: line || ' ' })] })
    })
    const doc = new Document({ sections: [{ children }] })
    const buffer = await Packer.toBuffer(doc)
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
    const url = URL.createObjectURL(blob)
    const el = document.createElement('a')
    el.href = url; el.download = `${a.title.replace(/\s+/g, '_')}.docx`; el.click()
    URL.revokeObjectURL(url)
  } catch (e) {
    console.error('docx error', e)
  } finally {
    exportingDocx.value = false
  }
}

const selectItem = (item: ArtifactItem) => {
  if (artifact.value?.type !== 'selection_list') return
  emit('action', { type: (artifact.value as any).action_type, id: item.id, label: item.label })
  artifactStore.close()
}

const CloseBtn = defineComponent({
  setup() {
    return () => h('button', {
      onClick: () => artifactStore.close(),
      class: 'w-7 h-7 flex items-center justify-center rounded-lg transition-all shrink-0',
      style: 'color: rgba(255,255,255,0.30);',
    }, h('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none' },
      h('path', { d: 'M18 6L6 18M6 6l12 12', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' })
    ))
  },
})
</script>

<style>
.artifact-btn {
  display: flex; align-items: center; gap: 4px;
  padding: 0 10px; height: 28px; border-radius: 8px;
  font-size: 12px; font-weight: 500;
  color: rgba(255,255,255,0.45); border: 1px solid rgba(255,255,255,0.08);
  transition: border-color 0.15s; flex-shrink: 0;
}
.artifact-btn:hover { border-color: rgba(255,255,255,0.22); color: rgba(255,255,255,0.75); }
.artifact-btn:disabled { opacity: 0.5; }
</style>
