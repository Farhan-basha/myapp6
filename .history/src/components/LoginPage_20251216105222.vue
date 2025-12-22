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
import { useUIStore } from '@/store/ui'

const ui = useUIStore()

onMounted(() => {
  ui.openLogin()
})


const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = async () => {
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

