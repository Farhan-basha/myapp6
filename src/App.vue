<!-- <template>
  <div class="min-h-screen bg-white">
    <TopBar />
    <HeaderBar />
    <router-view />
    <Home />
    <main class="max-w-6xl mx-auto px-6 py-12">
      <MenuGrid />
    </main>
    <Footer />

    <LoginModal />
    <SignupModal />
    <ForgotPasswordModal />
  </div>
</template>


<script setup>
import TopBar from './components/TopBar.vue'
import HeaderBar from './components/HeaderBar.vue'
import Home from './components/Home.vue'
import MenuGrid from './components/Menu.vue'
import Footer from './components/About.vue'
import LoginModal from './components/LoginModal.vue'
import SignupModal from './components/SignupModal.vue'
import ForgotPasswordModal from './components/ForgotPasswordModal.vue'
</script> -->

<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-white">
    <TopBar />
    <HeaderBar />

    <!-- router-view will render the current page (Home, Menu, About, Dashboard, etc.) -->
    <main class="max-w-6xl mx-auto px-6 py-12">
      <router-view />
    </main>

    <!-- Site footer (keep this as a layout component) -->
    <About />
    <!-- <Footer /> -->
     <Footer />

    <!-- Global modals -->
    <LoginModal />
    <SignupModal />
    <ForgotPasswordModal />
  </div>
</template>

<script setup>
import TopBar from './components/TopBar.vue'
import HeaderBar from './components/HeaderBar.vue'
import Footer from './components/Footer.vue'               // <-- ensure this is Footer.vue
import LoginModal from './components/LoginModal.vue'
import SignupModal from './components/SignupModal.vue'
import ForgotPasswordModal from './components/ForgotPasswordModal.vue'
</script>
