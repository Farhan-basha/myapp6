<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <!-- Logo can go here -->
        <div class="flex items-center gap-3">
          <img src="/src/assets/images/logo.svg" alt="logo" class="h-10 w-10 object-contain" />
          <div>
            <div class="font-semibold text-lg">DinePerks</div>
            <div class="text-xs text-gray-500">Admin Panel</div>
          </div>
        </div>
      </div>

      <!-- NAV LINKS -->
      <nav class="hidden md:flex gap-8 text-sm text-gray-700 font-medium">
        <RouterLink class="hover:text-olive cursor-pointer" to="/">Home</RouterLink>
        <RouterLink class="hover:text-olive cursor-pointer" to="/about">About</RouterLink>
        <RouterLink class="hover:text-olive cursor-pointer" to="/menu">Menu</RouterLink>

        <!-- 🔐 ADMIN ONLY -->
        <RouterLink v-if="isAdmin" class="hover:text-olive cursor-pointer" to="/dashboard">
          Dashboard
        </RouterLink>

        <RouterLink class="hover:text-olive cursor-pointer" to="/contact">Contact</RouterLink>
      </nav>

      <!-- AUTH ACTIONS -->
      <div>
        <!-- Not logged in -->
        <button 
        v-else @click="openLogin()"n"
          class="px-4 py-2 rounded-full border border-gray-300 text-gray-700">
          Sign In
        </button>

        <!-- Logged in -->
        <div v-else class="flex items-center gap-3">
          <span class="text-sm text-gray-700">
            {{ user?.name }}
          </span>

          <button v-if="auth.isLoggedIn" @click="auth.logout()" class="px-4 py-2 rounded-full border border-gray-300 text-gray-700">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { openLogin } from "../store/ui";

import { useAuthStore } from '@/store/auth'

const auth = useAuthStore()


const router = useRouter();

/**
 * 🔐 Reactive user (computed from localStorage)
 * Vue will re-render navbar on login/logout
 */
const user = computed(() => {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
});

/**
 * 🔐 Auth flags
 */
const isLoggedIn = computed(() => !!localStorage.getItem("token"));
const isAdmin = computed(() => user.value?.role === "ROLE_ADMIN");

/**
 * 🔓 Logout
 */
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  router.push("/login");
}
</script>
