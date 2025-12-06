<template>
  <svg viewBox="0 0 100 30" class="w-20 h-6">
    <polyline :points="points" fill="none" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  values: { type: Array, default: () => [1,2,3,4,5] },
  color: { type: String, default: 'indigo' }
})

const stroke = computed(() => {
  switch (props.color) {
    case 'green': return '#16a34a'
    case 'amber': return '#c2410c'
    case 'rose': return '#be123c'
    default: return '#4f46e5'
  }
})

// compute points for svg polyline
const points = computed(() => {
  if (!props.values || !props.values.length) return ''
  const max = Math.max(...props.values)
  const min = Math.min(...props.values)
  const range = max - min || 1
  const w = 100 / (props.values.length - 1)
  return props.values.map((v, i) => {
    const x = (i * w).toFixed(2)
    const y = (30 - ((v - min) / range) * 28).toFixed(2)
    return `${x},${y}`
  }).join(' ')
})
</script>
