

<template>
  <section>
    <div class="text-center mt-10">
      <h2 class="font-serifDisplay text-5xl">Our Menu</h2>
      <p class="text-gray-500 mt-2 max-w-xl mx-auto">
        We consider all the drivers of change gives you the components you need.
      </p>

      <!-- Category Filter -->
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

    <!-- Loading -->
    <p v-if="loading" class="text-center mt-10 text-gray-500">
      Loading menu...
    </p>

    <!-- Menu Grid -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
    >
      <MenuCard
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import MenuCard from "./MenuCard.vue";
import api from "@/api/axios";

/* Categories */
const categories = [
  "All",
  "Breakfast",
  "Main Dishes",
  "Drinks",
  "Desserts"
];

const activeCategory = ref("All");
const items = ref([]);
const loading = ref(false);

/* Fetch menu from backend */
const fetchMenu = async () => {
  try {
    loading.value = true;
    const res = await api.get("/menu");

    // map backend → frontend
    items.value = res.data.map(item => ({
      id: item.id,
      title: item.title,
      category: item.category,
      price: `₹ ${item.price}`,
      img: item.imageUrl
    }));
  } catch (err) {
    console.error("Failed to load menu", err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchMenu);

/* Filter logic */
const filteredItems = computed(() => {
  if (activeCategory.value === "All") return items.value;
  return items.value.filter(
    item => item.category === activeCategory.value
  );
});

function selectCategory(category) {
  activeCategory.value = category;
}
</script>

