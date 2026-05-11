<template>
  <div class="flex flex-col h-full">
    <!-- Header -->
    <div class="shrink-0 flex items-center gap-2.5 px-4 h-[52px]" style="border-bottom: 1px solid rgba(255,255,255,0.07);">
      <div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style="background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.2);">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="color: #4ade80;">
          <path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18" stroke="currentColor" stroke-width="1.8"/>
        </svg>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-[13px] font-medium truncate" style="color: #e2e8f0;">{{ artifact.title }}</p>
        <p class="text-[11px]" style="color: rgba(255,255,255,0.30);">Spreadsheet · {{ rows.length }} baris</p>
      </div>
      <button @click="downloadXlsx" :disabled="downloading" class="artifact-btn">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        {{ downloading ? '...' : '.xlsx' }}
      </button>
      <button @click="copyCSV" class="artifact-btn">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="2"/></svg>
        {{ copied ? 'Copied!' : 'CSV' }}
      </button>
      <button @click="artifactStore.close()" class="w-7 h-7 flex items-center justify-center rounded-lg shrink-0" style="color: rgba(255,255,255,0.30);">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>

    <!-- Table -->
    <div class="flex-1 overflow-auto p-4">
      <table v-if="headers.length" class="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th v-for="h in headers" :key="h"
              class="px-3 py-2 text-left text-xs font-semibold border-b border-white/10"
              style="color: #4ade80; background: rgba(34,197,94,0.05);">
              {{ h }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, ri) in rows" :key="ri" class="border-b border-white/5 hover:bg-white/3 transition-colors">
            <td v-for="(cell, ci) in row" :key="ci" class="px-3 py-2 text-xs" style="color: #d4d4d4;">
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="text-center text-gray-600 py-8 text-sm">No table data found in response</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArtifactStore } from '~/stores/artifact'

const artifactStore = useArtifactStore()
const artifact = computed(() => artifactStore.artifact as Extract<typeof artifactStore.artifact, { type: 'excel' }>)
const headers = computed(() => artifact.value.headers || [])
const rows = computed(() => artifact.value.rows || [])

const downloading = ref(false)
const copied = ref(false)

async function downloadXlsx() {
  if (!import.meta.client) return
  downloading.value = true
  try {
    const ExcelJS = (await import('exceljs')).default
    const wb = new ExcelJS.Workbook()
    const ws = wb.addWorksheet(artifact.value.sheetName || 'Sheet1')
    ws.addRow(headers.value)
    ws.getRow(1).font = { bold: true }
    rows.value.forEach(row => ws.addRow(row))
    ws.columns.forEach(col => { col.width = 18 })
    const buffer = await wb.xlsx.writeBuffer()
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${artifact.value.title.replace(/\s+/g, '_')}.xlsx`
    a.click()
    URL.revokeObjectURL(url)
  } finally {
    downloading.value = false
  }
}

async function copyCSV() {
  const csv = [headers.value, ...rows.value].map(row => row.join(',')).join('\n')
  await navigator.clipboard.writeText(csv)
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
.artifact-btn:disabled { opacity: 0.5; }
</style>
