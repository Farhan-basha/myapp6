<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white">
    <div class="w-full max-w-md">
      <LoginModal @login="handleLogin" />
      <p v-if="error" class="text-red-500 text-sm mt-3 text-center">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { loginUser } from "@/api/auth";
import { useAuthStore } from "@/store/auth";
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

const handleLogin = async ({ email, password }) => {
  try {
    const res = await loginUser({
      email,
      password,
    });

    // ✅ THIS IS THE KEY FIX (reactive)
    auth.login(res.data.user, res.data.token);

    // ✅ UI updates instantly, no reload
    router.push("/dashboard");
  } catch (e) {
    error.value = "Invalid credentials";
  }
};
</script>
