<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white">
    <div class="w-full max-w-md">
      <LoginModal />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginUser } from "@/api/auth";

import { onMounted } from 'vue'
import { openLogin } from '@/store/ui'
import LoginModal from './LoginModal.vue'

onMounted(() => {
  openLogin()
})

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");

export async function handleLogin() {
  try {
    const res = await loginUser({
      email: email.value,
      password: password.value
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    router.push("/dashboard");
  } catch (e) {
    error.value = "Invalid credentials";
  }
};
</script>
