<template>
  <header class="bg-white border-b">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <button class="lg:hidden p-2 rounded bg-gray-100">☰</button>
        <div class="text-lg font-medium">Dashboard</div>
      </div>

      <div class="flex items-center gap-4">
        <div class="relative hidden md:block">
          <input v-model="query" placeholder="Search orders, users..." class="border rounded px-3 py-2 w-64 text-sm" />
        </div>
        <!-- <button class="p-2 rounded-full bg-gray-100" title="Notifications">🔔</button> -->
        <div class="flex items-center gap-3">
          <!-- <img src="/src/assets/images/logo.svg" alt="me" class="w-8 h-8 rounded-full object-cover" /> -->
          <!-- <div class="text-sm">Admin</div> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const query = ref('')
</script>
