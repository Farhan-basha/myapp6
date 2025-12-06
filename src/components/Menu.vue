<!-- src/components/MenuGrid.vue -->
<template>
  <section>
    <div class="text-center mt-10">
      <h2 class="font-serifDisplay text-5xl">Our Menu</h2>
      <p class="text-gray-500 mt-2 max-w-xl mx-auto">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>

      <div class="mt-6 flex gap-4 justify-center">
        <button class="px-5 py-2 rounded-full bg-brandRed text-white">All</button>
        <button class="px-5 py-2 rounded-full border">Breakfast</button>
        <button class="px-5 py-2 rounded-full border">Main Dishes</button>
        <button class="px-5 py-2 rounded-full border">Drinks</button>
        <button class="px-5 py-2 rounded-full border">Desserts</button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      <MenuCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import MenuCard from './MenuCard.vue'

const items = ref([
  { id: 1, title: 'Fried Eggs', price: '₹ 9.99', img: '/images/fried egg.jpg' },
  { id: 2, title: 'Hawaiian Pizza', price: '₹ 15.99', img: '/images/hawaiian pizza.jpg' },
  { id: 3, title: 'Martinez Cocktail', price: '₹ 7.25', img: '/images/Martinez Cocktail.webp' },
  { id: 4, title: 'Butterscotch Cake', price: '₹ 20.99', img: '/images/Butterscotch Cake.webp' },
  { id: 5, title: 'Mint Lemonade', price: '₹ 5.89', img: '/images/Mint Lemonade.jpeg' },
  { id: 6, title: 'Chocolate Icecream', price: '₹ 18.05', img: '/images/Chocolate Icecream.webp' },
  { id: 7, title: 'Cheese Burger', price: '₹ 12.55', img: '/images/Cheese Burger.webp' },
  { id: 8, title: 'Classic Waffles', price: '₹ 12.99', img: '/images/Classic Waffles.webp' }
])
</script>
