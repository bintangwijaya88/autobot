<template>
  <div class="flex flex-col h-full">
    <!-- Header -->
    <ArtifactPanelHeader
      :title="artifact.title"
      type-label="Diagram"
      icon="diagram"
      @close="artifactStore.close()"
    >
      <button @click="downloadSVG" class="artifact-btn">
        <DownloadIcon /> SVG
      </button>
      <button @click="copyCode" class="artifact-btn">
        <CopyIcon /> {{ codeCopied ? 'Copied!' : 'Code' }}
      </button>
    </ArtifactPanelHeader>

    <!-- Diagram render -->
    <div class="flex-1 overflow-auto flex items-center justify-center p-6">
      <div v-if="error" class="text-red-400 text-sm text-center px-8">
        <p class="font-medium mb-2">Diagram render error</p>
        <pre class="text-xs text-left bg-white/5 rounded-lg p-3 overflow-auto">{{ artifact.code }}</pre>
      </div>
      <div v-else ref="container" class="max-w-full [&>svg]:max-w-full [&>svg]:h-auto" />
    </div>

    <!-- Code toggle -->
    <div class="shrink-0 border-t border-white/8 px-5 py-3">
      <button @click="showCode = !showCode" class="text-xs text-gray-500 hover:text-gray-300 transition-colors">
        {{ showCode ? 'Hide' : 'Show' }} Mermaid code ↕
      </button>
      <pre v-if="showCode" class="mt-2 text-xs text-gray-400 bg-white/4 rounded-lg p-3 overflow-auto font-mono">{{ artifact.code }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArtifactStore } from '~/stores/artifact'

const artifactStore = useArtifactStore()
const artifact = computed(() => artifactStore.artifact as Extract<typeof artifactStore.artifact, { type: 'mermaid' }>)

const container = ref<HTMLElement | null>(null)
const error = ref(false)
const showCode = ref(false)
const codeCopied = ref(false)
let svgContent = ''

onMounted(async () => {
  if (!import.meta.client) return
  try {
    const mermaid = (await import('mermaid')).default
    mermaid.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'loose' })
    const id = 'mermaid-' + Date.now()
    const { svg } = await mermaid.render(id, artifact.value.code)
    svgContent = svg
    if (container.value) container.value.innerHTML = svg
  } catch (e) {
    error.value = true
  }
})

function downloadSVG() {
  if (!svgContent) return
  const blob = new Blob([svgContent], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${artifact.value.title.replace(/\s+/g, '_')}.svg`
  a.click()
  URL.revokeObjectURL(url)
}

async function copyCode() {
  await navigator.clipboard.writeText(artifact.value.code)
  codeCopied.value = true
  setTimeout(() => { codeCopied.value = false }, 1800)
}

// ── Inline sub-components ────────────────────────────────────────────────────
const ArtifactPanelHeader = defineComponent({
  props: { title: String, typeLabel: String, icon: String },
  emits: ['close'],
  setup(props, { slots, emit }) {
    return () => h('div', {
      class: 'shrink-0 flex items-center gap-2.5 px-4 h-[52px]',
      style: 'border-bottom: 1px solid rgba(255,255,255,0.07);',
    }, [
      h('div', { class: 'w-7 h-7 rounded-lg flex items-center justify-center shrink-0', style: 'background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.2);' },
        h('svg', { width: 13, height: 13, viewBox: '0 0 24 24', fill: 'none', style: 'color: #a5b4fc;' },
          h('path', { d: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM17.5 14l4.5 7h-9l4.5-7z', stroke: 'currentColor', 'stroke-width': 1.8, 'stroke-linejoin': 'round' })
        )
      ),
      h('div', { class: 'flex-1 min-w-0' }, [
        h('p', { class: 'text-[13px] font-medium truncate', style: 'color: #e2e8f0;' }, props.title),
        h('p', { class: 'text-[11px]', style: 'color: rgba(255,255,255,0.30);' }, props.typeLabel),
      ]),
      slots.default?.(),
      h('button', { onClick: () => emit('close'), class: 'w-7 h-7 flex items-center justify-center rounded-lg transition-all shrink-0', style: 'color: rgba(255,255,255,0.30);' },
        h('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none' },
          h('path', { d: 'M18 6L6 18M6 6l12 12', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' })
        )
      ),
    ])
  },
})
const DownloadIcon = () => h('svg', { width: 11, height: 11, viewBox: '0 0 24 24', fill: 'none' },
  h('path', { d: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
)
const CopyIcon = () => h('svg', { width: 11, height: 11, viewBox: '0 0 24 24', fill: 'none' }, [
  h('rect', { x: 9, y: 9, width: 13, height: 13, rx: 2, stroke: 'currentColor', 'stroke-width': 2 }),
  h('path', { d: 'M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1', stroke: 'currentColor', 'stroke-width': 2 }),
])
</script>

<style>
.artifact-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 10px;
  height: 28px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255,255,255,0.45);
  border: 1px solid rgba(255,255,255,0.08);
  transition: border-color 0.15s;
  flex-shrink: 0;
}
.artifact-btn:hover { border-color: rgba(255,255,255,0.22); color: rgba(255,255,255,0.75); }
</style>
