<template>
  <div class="flex flex-col h-full">
    <!-- Header -->
    <div class="shrink-0 flex items-center gap-2.5 px-4 h-[52px]" style="border-bottom: 1px solid rgba(255,255,255,0.07);">
      <div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style="background: rgba(168,85,247,0.12); border: 1px solid rgba(168,85,247,0.2);">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="color: #c084fc;">
          <path d="M10 2l-6 6 6 6M14 2l6 6-6 6M8 21l8-18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-[13px] font-medium truncate" style="color: #e2e8f0;">{{ artifact.title }}</p>
        <p class="text-[11px]" style="color: rgba(255,255,255,0.30);">HTML Preview</p>
      </div>
      <div class="flex items-center gap-1.5">
        <button @click="mode = mode === 'preview' ? 'code' : 'preview'" class="artifact-btn">
          {{ mode === 'preview' ? '</> Code' : '⬚ Preview' }}
        </button>
        <button @click="copyHTML" class="artifact-btn">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="2"/></svg>
          {{ copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>
      <button @click="artifactStore.close()" class="w-7 h-7 flex items-center justify-center rounded-lg shrink-0" style="color: rgba(255,255,255,0.30);">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>

    <!-- Preview / Code -->
    <div class="flex-1 overflow-hidden">
      <iframe
        v-if="mode === 'preview'"
        :srcdoc="artifact.html"
        sandbox="allow-scripts"
        class="w-full h-full border-0 bg-white"
        title="HTML Preview"
      />
      <div v-else class="h-full overflow-auto p-4">
        <pre class="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{{ artifact.html }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArtifactStore } from '~/stores/artifact'

const artifactStore = useArtifactStore()
const artifact = computed(() => artifactStore.artifact as Extract<typeof artifactStore.artifact, { type: 'html' }>)
const mode = ref<'preview' | 'code'>('preview')
const copied = ref(false)

async function copyHTML() {
  await navigator.clipboard.writeText(artifact.value.html)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1800)
}
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
</style>
