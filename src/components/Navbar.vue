<template>
  <nav class="custom-navbar px-4 py-3 d-flex justify-content-between align-items-center">
    <router-link to="/" class="brand highlight-4-text">Esma Ari</router-link>

    <!-- Hamburger Button (mobile only) -->
    <button class="menu-toggle d-md-none" @click="toggleMenu">
      <span :class="{ open: isOpen }"></span>
    </button>

    <!-- Navigation Links -->
    <ul class="nav-links d-md-flex gap-4 m-0 p-0" :class="{ open: isOpen }">
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/youtube">YouTube</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.custom-navbar {
  background-color: var(--primary-bg);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(6px);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.brand {
  font-weight: bold;
  font-size: 1.3rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 24px;
  position: relative;
}

.menu-toggle span,
.menu-toggle span::before,
.menu-toggle span::after {
  content: '';
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: var(--text-color);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.menu-toggle span {
  top: 50%;
  transform: translateY(-50%);
}

.menu-toggle span::before {
  top: -8px;
}

.menu-toggle span::after {
  bottom: -8px;
}

.menu-toggle span.open {
  background-color: transparent;
}

.menu-toggle span.open::before {
  top: 0;
  transform: rotate(45deg);
}

.menu-toggle span.open::after {
  bottom: 0;
  transform: rotate(-45deg);
}

.nav-links {
  list-style: none;
  transition: all 0.3s ease;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
  padding-bottom: 4px;
}

.nav-links a:hover {
  color: var(--highlight-3);
}

.router-link-exact-active {
  border-bottom: 2px solid var(--highlight-1);
  color: var(--highlight-1);
}

/* Mobile dropdown menu */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    background-color: var(--primary-bg);
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    padding: 1.5rem 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .nav-links.open {
    display: flex;
  }
}
</style>
