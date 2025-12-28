<template>
  <div class="max-w-xl mx-auto mt-12 bg-white p-6 shadow rounded">
    <h2 class="text-2xl mb-4">Add Menu Item</h2>

    <form @submit.prevent="submit">
      <input v-model="name" placeholder="Name" class="w-full border p-2 mb-3" />
      <input v-model="price" type="number" placeholder="Price" class="w-full border p-2 mb-3" />
      <input v-model="category" placeholder="Category" class="w-full border p-2 mb-3" />
      <button class="w-full bg-brandRed text-white py-2 rounded">
        Save
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "@/api/axios";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref("");
const price = ref("");
const category = ref("");

const submit = async () => {
  await api.post("/api/menu", {
    name: name.value,
    price: price.value,
    category: category.value,
  });

  router.push("/menu");
};
</script>
