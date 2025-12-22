src/components/MenuGrid.vue
<template>
  <section>
    <div class="text-center mt-10">
      <h2 class="font-serifDisplay text-5xl">Our Menu</h2>
      <p class="text-gray-500 mt-2 max-w-xl mx-auto">
        We consider all the drivers of change gives you the components you
        need to change to create a truly happens.
      </p>

      <!-- ✅ CATEGORY FILTER -->
      <div class="mt-6 flex gap-4 justify-center flex-wrap">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectCategory(category)"
          :class="[
            'px-5 py-2 rounded-full transition',
            activeCategory === category
              ? 'bg-brandRed text-white'
              : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- ✅ MENU GRID -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      <MenuCard
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import MenuCard from "./MenuCard.vue";

/* ✅ Categories */
const categories = [
  "All",
  "Breakfast",
  "Main Dishes",
  "Drinks",
  "Desserts"
];

const activeCategory = ref("All");

/* ✅ Menu Items (can be replaced with API later) */
const items = ref([
  {
    id: 1,
    title: "Fried Eggs",
    category: "Breakfast",
    price: "₹ 9.99",
    img: "/images/fried egg.jpg"
  },
  {
    id: 2,
    title: "Hawaiian Pizza",
    category: "Main Dishes",
    price: "₹ 15.99",
    img: "/images/hawaiian pizza.jpg"
  },
  {
    id: 3,
    title: "Martinez Cocktail",
    category: "Drinks",
    price: "₹ 7.25",
    img: "/images/Martinez Cocktail.webp"
  },
  {
    id: 4,
    title: "Butterscotch Cake",
    category: "Desserts",
    price: "₹ 20.99",
    img: "/images/Butterscotch Cake.webp"
  },
  {
    id: 5,
    title: "Mint Lemonade",
    category: "Drinks",
    price: "₹ 5.89",
    img: "/images/Mint Lemonade.jpeg"
  },
  {
    id: 6,
    title: "Chocolate Icecream",
    category: "Desserts",
    price: "₹ 18.05",
    img: "/images/Chocolate Icecream.webp"
  },
  {
    id: 7,
    title: "Cheese Burger",
    category: "Main Dishes",
    price: "₹ 12.55",
    img: "/images/Cheese Burger.webp"
  },
  {
    id: 8,
    title: "Classic Waffles",
    category: "Breakfast",
    price: "₹ 12.99",
    img: "/images/Classic Waffles.webp"
  }
]);

/* ✅ Filtered Items */
const filteredItems = computed(() => {
  if (activeCategory.value === "All") {
    return items.value;
  }
  return items.value.filter(
    item => item.category === activeCategory.value
  );
});

/* ✅ Handle Category Click */
function selectCategory(category) {
  activeCategory.value = category;
}
</script>
