<template>
  <teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/50" @click="close"></div>

      <div class="bg-white rounded-lg p-6 z-10 w-11/12 max-w-md shadow-lg">
        <h3 class="text-xl font-semibold mb-4">Login to DinePerks</h3>

        <form @submit.prevent="submit">
          <div class="mb-3">
            <label class="block text-sm text-gray-600">Email</label>
            <input v-model="email" type="email" required class="w-full border rounded px-3 py-2 mt-1" />
          </div>

          <div class="mb-3">
            <label class="block text-sm text-gray-600">Password</label>
            <input v-model="password" type="password" required minlength="6"
              class="w-full border rounded px-3 py-2 mt-1" />
          </div>

          <div class="flex items-center justify-between mt-4">
            <button type="submit" class="bg-brandRed text-white px-4 py-2 rounded">
              Sign in
            </button>
            <button type="button" class="text-sm text-gray-600" @click="close">
              Cancel
            </button>
          </div>

          <p v-if="error" class="text-xs text-red-600 mt-3">{{ error }}</p>
        </form>

        <div class="mt-4 text-sm text-gray-600">
          <a href="#" @click.prevent="openForgot">Forgot password?</a>
          <span class="mx-2">•</span>
          <a href="#" @click.prevent="openSignup">Create account</a>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, computed } from "vue";
import { modal, closeModal, openSignup, openForgot } from "../store/ui";
import { useAuthStore } from "@/store/auth";
import api from "@/api/axios";

const auth = useAuthStore();

const email = ref("");
const password = ref("");
const error = ref(null);

const isOpen = computed(() => modal.value.name === "login");

function close() {
  closeModal();
}

const submit = async () => {
  error.value = null;
  console.log("success".email, );
  if (!email.value || !password.value) {
    error.value = "Please provide email and password.";
    return;
  }

  try {
    await api.post("/api/auth/login", {
      email: email.value,
      password: password.value,
    });

    console.log("success", res);
    // ✅ THIS IS THE KEY FIX
    // auth.login(res.data.user, res.data.token);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    router.push("/dashboard");

    

    close();
  } catch (e) {
    error.value = e.response?.data?.message || "Failed to login.";
  }
};
</script>
