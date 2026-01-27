<template>
  <div class="min-h-screen bg-white">
    <TopBar />
    <HeaderBar />

    <!-- router-view renders the current page (Home, Menu, About, Dashboard, etc.) -->
    <main class="max-w-6xl mx-auto px-6 py-12">
      <router-view />
    </main>

    <!-- Site footer -->
    <Footer />

    <!-- Global modals -->
    <LoginModal />
    <SignupModal />
    <ForgotPasswordModal />
  </div>
</template>

<script setup>
import TopBar from './components/common/TopBar.vue'
import HeaderBar from '../components/common/HeaderBar.vue'
import Footer from '../components/common/Footer.vue'
import LoginModal from '../components/auth/LoginModal.vue'
import SignupModal from '../components/auth/SignupModal.vue'
import ForgotPasswordModal from '../components/auth/ForgotPasswordModal.vue'
</script>
