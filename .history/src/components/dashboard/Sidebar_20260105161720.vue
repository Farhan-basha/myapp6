<template>
  <aside class="w-64 bg-white border-r min-h-screen px-4 py-6">
    <nav class="space-y-1 text-sm">

      <RouterLink to="/dashboard" class="nav-link" active-class="active-link">
        Dashboard
      </RouterLink>

      <RouterLink to="/dashboard/orders" class="nav-link" active-class="active-link">
        Orders
      </RouterLink>

      <RouterLink to="/dashboard/menu" class="nav-link" active-class="active-link">
        Menu
      </RouterLink>

      <RouterLink to="/dashboard/rewards" class="nav-link" active-class="active-link">
        Rewards
      </RouterLink>

      <!-- ADMIN ONLY -->
      <RouterLink v-if="isAdmin" to="/dashboard/users" class="nav-link" active-class="active-link">
        Users
      </RouterLink>

      <RouterLink to="/dashboard/settings" class="nav-link" active-class="active-link">
        Settings
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup>
import { computed } from "vue"

const user = JSON.parse(localStorage.getItem("user") || "{}")

const isAdmin = computed(() => user?.role === "ROLE_ADMIN")
</script>

<style scoped>
.nav-link {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
}

.nav-link:hover {
  background-color: #f9fafb;
}

.active-link {
  background-color: #111827;
  color: white;
}
</style>
