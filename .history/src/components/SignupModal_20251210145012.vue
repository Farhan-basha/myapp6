<template>
    <teleport to="body">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
            <div class="absolute inset-0 bg-black/50" @click="close"></div>
            <div class="bg-white rounded-lg p-6 z-10 w-11/12 max-w-md shadow-lg">
                <h3 class="text-xl font-semibold mb-4">Create an account</h3>
                <form @submit.prevent="submit">
                    <div class="mb-3"><label class="block text-sm text-gray-600">Name</label><input v-model="name"
                            type="text" required class="w-full border rounded px-3 py-2 mt-1" /></div>
                    <div class="mb-3"><label class="block text-sm text-gray-600">Email</label><input v-model="email"
                            type="email" required class="w-full border rounded px-3 py-2 mt-1" /></div>
                    <div class="mb-3"><label class="block text-sm text-gray-600">Password</label><input
                            v-model="password" type="password" required minlength="6"
                            class="w-full border rounded px-3 py-2 mt-1" /></div>


                    <div class="flex items-center justify-between mt-4">
                        <button type="submit" class="bg-brandRed text-white px-4 py-2 rounded">Sign up</button>
                        <button type="button" class="text-sm text-gray-600" @click="close">Cancel</button>
                    </div>
                    <p v-if="error" class="text-xs text-red-600 mt-3">{{ error }}</p>
                </form>


                <div class="mt-4 text-sm text-gray-600">
                    <span>Already have an account?</span>
                    <a href="#" class="ml-2" @click.prevent="openLogin">Sign in</a>
                </div>
            </div>
        </div>
    </teleport>
</template>


<script setup>
import { ref, computed } from 'vue'
import { modal, closeModal, openLogin } from '../store/ui.js'

const name = ref('')
const email = ref('')
const password = ref('')
const error = ref(null)

const isOpen = computed(() => modal.value.name === 'signup')

function close() {
    closeModal()
}

// Use the imported openLogin() in template to go back to login
const submit = async () => {
    error.value = null
    if (!name.value || !email.value || !password.value) {
        error.value = 'Please fill all fields.'
        return
    }
    try {
        const result = await signup(name.value, email.value, password.value)
        close()
        alert('Account created successfully!')
    } catch (e) {
        error.value = e.response?.data?.message || 'Failed to create account.'
    }
}

import api from "../api";

async function signup(name, email, password) {
    const res = await api.post("/api/auth/register", {
        name,
        email,
        password,
    });
    return res.data;
}

</script>
