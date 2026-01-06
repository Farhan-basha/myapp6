<template>
  <aside class="w-64 bg-white border-r min-h-screen px-4 py-6">
    
    <nav class="space-y-1 text-sm">
      <!-- <a class="block px-3 py-2 rounded hover:bg-gray-50" href="#">Dashboard</a> -->
      <a class="block px-3 py-2 rounded hover:bg-gray-50" href="Orders.">Orders</a>
      <a class="block px-3 py-2 rounded hover:bg-gray-50" href="#">Menu</a>
      <a class="block px-3 py-2 rounded hover:bg-gray-50" href="#">Rewards</a>
      <a class="block px-3 py-2 rounded hover:bg-gray-50" v-if="isAdmin" href="#">Users</a>
      <a class="block px-3 py-2 rounded hover:bg-gray-50" href="#">Settings</a>
    </nav>
  </aside>
</template>

<script setup>
const user = JSON.parse(localStorage.getItem('user'))
const isAdmin = user?.role === 'ROLE_ADMIN'
</script>