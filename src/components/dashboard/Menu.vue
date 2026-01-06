<template>
  <div class="p-6">
    <div class="flex justify-between mb-4">
      <h1 class="text-2xl font-semibold">Menu</h1>
      <button class="bg-black text-white px-4 py-2 rounded">
        + Add Item
      </button>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in menu" :key="item.id" class="border p-4 rounded">
        <h3 class="font-semibold">{{ item.name }}</h3>
        <p class="text-sm text-gray-500">{{ item.category }}</p>
        <p class="mt-2 font-bold">₹{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const menu = [
  { id: 1, name: "Burger", category: "Fast Food", price: 150 },
  { id: 2, name: "Pizza", category: "Italian", price: 300 }
]
</script>
