<template>
    <teleport to="body">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
            <div class="absolute inset-0 bg-black/50" @click="close"></div>
            <div class="bg-white rounded-lg p-6 z-10 w-11/12 max-w-md shadow-lg">
                <h3 class="text-xl font-semibold mb-4">Reset password</h3>
                <form @submit.prevent="submit">
                    <div class="mb-3"><label class="block text-sm text-gray-600">Email</label><input v-model="email"
                            type="email" required class="w-full border rounded px-3 py-2 mt-1" /></div>
                    <div class="flex items-center justify-between mt-4">
                        <button type="submit" class="bg-brandRed text-white px-4 py-2 rounded">Send reset link</button>
                        <button type="button" class="text-sm text-gray-600" @click="close">Cancel</button>
                    </div>
                    <p v-if="message" class="text-xs text-green-600 mt-3">{{ message }}</p>
                    <p v-if="error" class="text-xs text-red-600 mt-3">{{ error }}</p>
                </form>


                <div class="mt-4 text-sm text-gray-600">
                    <a href="#" @click.prevent="openLogin">Back to Login</a>
                </div>
            </div>
        </div>
    </teleport>
</template>


<script setup>
import { ref, computed } from 'vue'
import { modal, closeModal, openLogin } from '../store/ui.js'

const email = ref('')
const message = ref(null)
const error = ref(null)

const isOpen = computed(() => modal.value.name === 'forgot')

function close() {
    closeModal()
}

// Use imported openLogin() directly in template to go back to login

const submit = async () => {
    error.value = null
    message.value = null
    if (!email.value) {
        error.value = 'Please enter your email.'
        return
    }
    try {
        message.value = 'If that account exists, a reset link has been sent (mock).'
    } catch (e) {
        error.value = 'Failed to send reset link.'
    }
}
</script>