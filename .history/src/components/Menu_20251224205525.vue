<template>
  <section>
    <div class="text-center mt-10">
      <h2 class="font-serifDisplay text-5xl">Our Menu</h2>
      <p class="text-gray-500 mt-2 max-w-xl mx-auto">
        We consider all the drivers of change gives you the components you need.
      </p>

      <!-- 🔐 ADMIN ONLY ADD BUTTON -->
      <div class="mt-6 flex justify-center">
        <button v-if="auth.isAdmin" @click="goToAddMenu" class="px-6 py-2 bg-brandRed text-white rounded-full">
          + Add Menu Item
        </button>
      </div>

      <!-- Category Filter -->
      <div class="mt-6 flex gap-4 justify-center flex-wrap">
        <button v-for="category in categories" :key="category" @click="selectCategory(category)" :class="[
          'px-5 py-2 rounded-full transition',
          activeCategory === category
            ? 'bg-brandRed text-white'
            : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
        ]">
          {{ category }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";
import MenuCard from "./MenuCard.vue";
import api from "@/api/axios";

/* 🔐 AUTH */
const auth = useAuthStore();
const router = useRouter();

const goToAddMenu = () => {
  router.push("/menu/add");
};

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
    const res = await api.get("/api/menu");

    items.value = res.data.map(item => ({
      id: item.id,
      name: item.name,
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
