export type ArtifactItem = {
  id: string
  label: string
  description?: string
  tag?: string
}

export type PptSlide = {
  title: string
  bullets?: string[]
}

export type Artifact =
  | { id: string; type: 'document'; title: string; content: string }
  | { id: string; type: 'mermaid'; title: string; code: string }
  | { id: string; type: 'excel'; title: string; headers: string[]; rows: string[][]; sheetName?: string }
  | { id: string; type: 'ppt'; title: string; slides: PptSlide[] }
  | { id: string; type: 'html'; title: string; html: string }
  | { id: string; type: 'selection_list'; title: string; subtitle?: string; items: ArtifactItem[]; action_type: string }

export const useArtifactStore = defineStore('artifact', () => {
  const artifact = ref<Artifact | null>(null)
  const isOpen = computed(() => !!artifact.value)
  const open = (a: Artifact) => { artifact.value = a }
  const close = () => { artifact.value = null }
  return { artifact, isOpen, open, close }
})
