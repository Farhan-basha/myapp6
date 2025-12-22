<template>
    <header class="bg-white shadow-sm">
        <div class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <div class="flex items-center gap-4">
                <!-- <img src="../assets/Header.png" alt="logo" class="h-12 object-contain" /> -->
            </div>

            <nav class="hidden md:flex gap-8 text-sm text-gray-700 font-medium">
                <RouterLink class="hover:text-olive cursor-pointer" to="/">Home</RouterLink>
                <RouterLink class="hover:text-olive cursor-pointer" to="/about">About</RouterLink>
                <RouterLink class="hover:text-olive cursor-pointer" to="/menu">Menu</RouterLink>
                <RouterLink class="hover:text-olive cursor-pointer" to="/dashboard">Dashboard</RouterLink>
                <RouterLink class="hover:text-olive cursor-pointer" to="/contact">Contact</RouterLink>
            </nav>

            <div>
                <button v-if="!username" @click="openLogin"
                    class="px-4 py-2 rounded-full border border-gray-300 text-gray-700">SignIn</button>
                <span v-else class="px-4 py-2 rounded-full border border-gray-300 text-gray-700">{{ username }}</span>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { openLogin } from '../store/ui'

const username = ref(localStorage.getItem('username') || null)

function refreshFromStorage() {
  username.value = localStorage.getItem('username')
}

function onUserUpdated(e) {
  // custom event used for same-tab updates
  username.value = e?.detail?.username ?? localStorage.getItem('username')
}

function onStorage(e) {
  // storage event fires in other tabs/windows
  if (e.key === 'username') {
    username.value = e.newValue
  }
}

onMounted(() => {
  refreshFromStorage()
  window.addEventListener('user-updated', onUserUpdated)
  window.addEventListener('storage', onStorage)
})

onUnmounted(() => {
  window.removeEventListener('user-updated', onUserUpdated)
  window.removeEventListener('storage', onStorage)
})
</script>
