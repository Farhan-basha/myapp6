<template>
  <div class="bg-white shadow rounded-lg p-4 flex flex-col">
    <div class="flex items-center justify-between">
      <div class="text-xs font-medium text-gray-500">{{ title }}</div>
      <div class="text-sm text-gray-400">{{ icon }}</div>
    </div>

    <div class="mt-3 flex items-end justify-between">
      <div class="text-2xl font-semibold">{{ value }}</div>
      <div class="text-xs text-gray-500">
        <slot name="trend" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  icon: { type: String, default: '' }
})
</script>
