<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <!-- Logo can go here -->
      </div>

      <!-- NAV LINKS -->
      <nav class="hidden md:flex gap-8 text-sm text-gray-700 font-medium">
        <RouterLink class="hover:text-olive cursor-pointer" to="/">Home</RouterLink>
        <RouterLink class="hover:text-olive cursor-pointer" to="/about">About</RouterLink>
        <RouterLink class="hover:text-olive cursor-pointer" to="/menu">Menu</RouterLink>

        <!-- 🔐 ADMIN ONLY -->
        <RouterLink
          v-if="auth.isAdmin"
          class="hover:text-olive cursor-pointer"
          to="/dashboard"
        >
          Dashboard
        </RouterLink>

        <RouterLink class="hover:text-olive cursor-pointer" to="/contact">
          Contact
        </RouterLink>
      </nav>

      <!-- AUTH ACTIONS -->
      <div>
        <!-- Not logged in -->
        <button
          v-if="!auth.isLoggedIn"
          @click="openLogin"
          class="px-4 py-2 rounded-full border border-gray-300 text-gray-700"
        >
          Sign In
        </button>

        <!-- Logged in -->
        <div v-else class="flex items-center gap-3">
          <span class="text-sm text-gray-700">
            {{ auth.user?.email }}
          </span>

          <button
            @click="handleLogout"
            class="px-4 py-2 rounded-full border border-gray-300 text-gray-700"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";
import { openLogin } from "@/store/ui";

const router = useRouter();
const auth = useAuthStore();

/**
 * 🔓 Logout (reactive)
 */
const handleLogout = () => {
  auth.logout();        // ✅ Pinia state update
  router.push("/");     // optional redirect
};
</script>
