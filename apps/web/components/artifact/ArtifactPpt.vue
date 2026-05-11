<template>
  <div class="flex flex-col h-full">
    <!-- Header -->
    <div class="shrink-0 flex items-center gap-2.5 px-4 h-[52px]" style="border-bottom: 1px solid rgba(255,255,255,0.07);">
      <div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style="background: rgba(251,146,60,0.12); border: 1px solid rgba(251,146,60,0.2);">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="color: #fb923c;">
          <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/>
          <path d="M8 20h8M12 18v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-[13px] font-medium truncate" style="color: #e2e8f0;">{{ artifact.title }}</p>
        <p class="text-[11px]" style="color: rgba(255,255,255,0.30);">Presentasi · {{ slides.length }} slide</p>
      </div>
      <button @click="downloadPptx" :disabled="downloading" class="artifact-btn">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        {{ downloading ? '...' : '.pptx' }}
      </button>
      <button @click="artifactStore.close()" class="w-7 h-7 flex items-center justify-center rounded-lg shrink-0" style="color: rgba(255,255,255,0.30);">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>

    <!-- Slide thumbnails -->
    <div class="flex-1 overflow-y-auto p-4 space-y-3">
      <div v-for="(slide, i) in slides" :key="i"
        class="rounded-xl border border-white/8 p-5 transition-colors hover:border-white/18"
        style="background: rgba(251,146,60,0.04);"
        :class="activeSlide === i ? 'border-orange-500/40' : ''"
        @click="activeSlide = i"
      >
        <div class="flex items-start gap-3">
          <span class="text-xs font-bold text-orange-500/60 shrink-0 mt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-white mb-2">{{ slide.title }}</p>
            <ul v-if="slide.bullets?.length" class="space-y-1">
              <li v-for="(b, bi) in slide.bullets" :key="bi" class="text-xs text-gray-400 flex gap-2">
                <span class="text-orange-500/50 shrink-0">•</span>
                {{ b }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="!slides.length" class="text-center text-gray-600 py-8 text-sm">No slides generated</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArtifactStore } from '~/stores/artifact'
import type { PptSlide } from '~/stores/artifact'

const artifactStore = useArtifactStore()
const artifact = computed(() => artifactStore.artifact as Extract<typeof artifactStore.artifact, { type: 'ppt' }>)
const slides = computed(() => (artifact.value.slides || []) as PptSlide[])
const activeSlide = ref(0)
const downloading = ref(false)

async function downloadPptx() {
  if (!import.meta.client) return
  downloading.value = true
  try {
    const pptxgen = (await import('pptxgenjs')).default
    const pptx = new pptxgen()
    pptx.layout = 'LAYOUT_16x9'
    pptx.theme = { headFontFace: 'Arial', bodyFontFace: 'Arial' }

    for (const slide of slides.value) {
      const s = pptx.addSlide()
      s.background = { color: '1a1a1a' }
      s.addText(slide.title, {
        x: 0.5, y: 0.8, w: '90%', h: 1,
        fontSize: 28, bold: true, color: 'F0F0F0',
      })
      if (slide.bullets?.length) {
        const bulletText = slide.bullets.map(b => ({ text: b, options: { bullet: true } }))
        s.addText(bulletText, {
          x: 0.5, y: 2.2, w: '90%', h: 3.5,
          fontSize: 16, color: 'CCCCCC',
        })
      }
    }

    await pptx.writeFile({ fileName: `${artifact.value.title.replace(/\s+/g, '_')}.pptx` })
  } catch (e) {
    console.error('pptx error', e)
  } finally {
    downloading.value = false
  }
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
.artifact-btn:disabled { opacity: 0.5; }
</style>
