<!-- <template>
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
</script> -->


<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white">
    <div class="w-full max-w-md">
      <LoginModal
        :email="email"
        :password="password"
        :error="error"
        @login="handleLogin"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";
import { loginUser } from "@/api/auth";
import { openLogin } from "@/store/ui";
import LoginModal from "./LoginModal.vue";

const router = useRouter();
const auth = useAuthStore();

const email = ref("");
const password = ref("");
const error = ref("");

onMounted(() => {
  openLogin();
});

const handleLogin = async () => {
  error.value = "";

  try {
    const res = await loginUser({
      email: email.value,
      password: password.value,
    });

    // ✅ SINGLE SOURCE OF TRUTH
    auth.login(res.data.user, res.data.token);

    // ✅ UI + router auto-reacts
    router.push("/dashboard");
  } catch (e) {
    error.value = "Invalid credentials";
  }
};


</script>
