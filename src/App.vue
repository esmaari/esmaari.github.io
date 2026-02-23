<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app-layout">
    <Navbar />

    <main>
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="page-shell d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
        <p class="m-0">© {{ new Date().getFullYear() }} Esma Ari. Product-focused frontend engineering.</p>
        <div class="d-flex gap-3 footer-links">
          <a href="https://github.com/esmaari" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/esma-ari/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="mailto:esmaari.dev@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-bottom: 6rem;
}

.site-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 20;
}
</style>
