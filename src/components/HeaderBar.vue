<template>
    <header class="bg-white shadow-sm">
        <div class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <div class="flex items-center gap-4">
                <!-- <img src="../assets/Header.png" alt="logo" class="h-12 object-contain" /> -->
            </div>


            <!-- <nav class="hidden md:flex gap-8 text-sm text-gray-700 font-medium">
                <a class="hover:text-olive" href="#">Home</a>
                <a class="hover:text-olive" href="#">About</a>
                <a class="hover:text-olive" href="#">Menu</a>
                <a class="hover:text-olive" href="#">Rewards</a>
                <a class="hover:text-olive" href="#">Contact</a>
            </nav> -->

            <nav class="hidden md:flex gap-8 text-sm text-gray-700 font-medium">
                <RouterLink class="hover:text-olive cursor-pointer" to="/">Home</RouterLink>
                <RouterLink class="hover:text-olive cursor-pointer" to="/about">About</RouterLink>
                <RouterLink class="hover:text-olive cursor-pointer" to="/menu">Menu</RouterLink>
                <RouterLink class="hover:text-olive cursor-pointer" to="/rewards">Rewards</RouterLink>
                <RouterLink class="hover:text-olive cursor-pointer" to="/contact">Contact</RouterLink>
            </nav>


            <div>
                <button @click="openLogin"
                    class="px-4 py-2 rounded-full border border-gray-300 text-gray-700">SignIn</button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { openLogin } from '../store/ui'
</script>