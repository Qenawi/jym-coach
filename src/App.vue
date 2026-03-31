<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <main class="main-content">
    <router-view />
  </main>
  <Footer />
</template>

<style scoped>
.main-content {
  min-height: 100vh;
}
</style>
