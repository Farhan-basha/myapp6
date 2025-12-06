<!-- <template>
    <div class="bg-white border rounded-lg overflow-hidden shadow-sm">
        <div class="h-44 overflow-hidden">
            <img :src="item.img" alt="item" class="w-full h-full object-cover" />
        </div>
        <div class="p-5 text-center">
            <div class="text-brandRed font-semibold">{{ item.price }}</div>
            <h3 class="mt-2 font-semibold">{{ item.title }}</h3>
            <p class="text-sm text-gray-500 mt-2">Made with eggs, lettuce, salt, oil and other ingredients.</p>
        </div>
    </div>
</template>


<script setup>
import { defineProps } from 'vue'
const props = defineProps({ item: Object })
</script> -->

<!-- src/components/MenuCard.vue -->
<template>
  <div class="bg-white border rounded-lg overflow-hidden shadow-sm">
    <div class="h-44 overflow-hidden bg-gray-100">
      <img :src="item.img" alt="item" class="w-full h-full object-cover" />
    </div>
    <div class="p-5 text-center">
      <div class="text-brandRed font-semibold">{{ item.price }}</div>
      <h3 class="mt-2 font-semibold">{{ item.title }}</h3>
      <p class="text-sm text-gray-500 mt-2">Made with premium ingredients for an unforgettable experience.</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ item: Object })
</script>
