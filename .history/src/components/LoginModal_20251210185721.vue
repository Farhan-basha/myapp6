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
                        <button type="submit" class="bg-brandRed text-white px-4 py-2 rounded">Sign in</button>
                        <button type="button" class="text-sm text-gray-600" @click="close">Cancel</button>
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
import { ref, computed } from 'vue'
import { modal, closeModal, openSignup, openForgot } from '../store/ui.js'
import { handleLogin } from "./LoginPage.vue"; // <-- import the function
import { loginUser } from "@/api/auth"; // <-- ensure path and .js

const email = ref('')
const password = ref('')
const error = ref(null)

const isOpen = computed(() => modal.value.name === 'login')

function close() {
    closeModal()
}

const submit = async () => {
    error.value = null
    if (!email.value || !password.value) {
        error.value = 'Please provide email and password.'
        return
    }

    try {

        const result = await handleLogin(email.value, password.value)
        console.log("Login successful:", result);
        // Save username in localStorage
        if (result && result.user && result.user.name) {
            localStorage.setItem('username', result.user.name)
        }
        close()
        alert('Login successful!')
    } catch (e) {
        error.value = e.response?.data?.message || 'Failed to login.'
    }
}

import api from "../api";

async function login(email, password) {
    
    const res = await api.post("/api/auth/login", { email, password });
    console.log("API imported:", api);
    // Save token in localStorage
    localStorage.setItem("token", res.data.token);

    return res.data;
    
}

const onLoginSuccess = (response) => {
  // defensive access — tolerate multiple response shapes
  const name =
    response?.result?.user?.name ||
    response?.result?.name ||
    response?.user?.name ||
    response?.name ||
    null;

  if (name) {
    localStorage.setItem('username', name);
    // notify other components in this tab
    window.dispatchEvent(new CustomEvent('user-updated', { detail: { username: name } }));
  }

  if (response?.result?.token || response?.token) {
    localStorage.setItem('token', response?.result?.token || response?.token);
  }
};

</script>
