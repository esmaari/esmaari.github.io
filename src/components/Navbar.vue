<template>
  <nav class="custom-navbar" :class="{ 'is-home-top': isHomeTop }">
    <div class="page-shell nav-inner d-flex justify-content-between align-items-center">
      <router-link to="/" class="brand">Esma Ari</router-link>

      <button class="menu-toggle d-md-none" type="button" aria-label="Toggle menu" @click="toggleMenu">
        <span :class="{ open: isOpen }"></span>
      </button>

      <ul class="nav-links d-md-flex gap-md-4 m-0 p-0" :class="{ open: isOpen }">
        <li><router-link to="/" exact @click="closeMenu">Home</router-link></li>
        <li><router-link to="/about" @click="closeMenu">About</router-link></li>
        <li><router-link to="/portfolio" @click="closeMenu">Portfolio</router-link></li>
        <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const isTop = ref(true)
const route = useRoute()

const isHomeTop = computed(() => route.path === '/' && isTop.value)

const onScroll = () => {
  isTop.value = window.scrollY < 32
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
    onScroll()
  }
)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.custom-navbar {
  position: sticky;
  top: 0;
  z-index: 1100;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid rgba(167, 139, 250, 0.28);
  backdrop-filter: saturate(160%) blur(6px);
  transition: background-color var(--transition-fast), border-color var(--transition-fast);
}

.custom-navbar.is-home-top {
  background: transparent;
  border-bottom-color: transparent;
  backdrop-filter: none;
}

.nav-inner {
  min-height: 72px;
}

.brand {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.04em;
}

.menu-toggle {
  border: none;
  background: transparent;
  width: 28px;
  height: 20px;
  padding: 0;
  position: relative;
}

.menu-toggle span,
.menu-toggle span::before,
.menu-toggle span::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: var(--text);
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.menu-toggle span {
  top: 50%;
  transform: translateY(-50%);
}

.menu-toggle span::before {
  top: -8px;
}

.menu-toggle span::after {
  top: 8px;
}

.menu-toggle span.open {
  background: transparent;
}

.menu-toggle span.open::before {
  transform: translateY(8px) rotate(45deg);
}

.menu-toggle span.open::after {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.3rem;
}

.nav-links a {
  position: relative;
  color: var(--text);
  font-weight: 500;
  padding-block: 0.2rem;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 1px;
  background: var(--interactive);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-fast);
}

.nav-links a:hover::after,
.nav-links .router-link-exact-active::after {
  transform: scaleX(1);
}

.nav-links .router-link-exact-active {
  color: var(--interactive);
}

@media (max-width: 768px) {
  .nav-inner {
    position: relative;
    min-height: 66px;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    right: 0;
    background: #ffffff;
    border-bottom: 1px solid rgba(167, 139, 250, 0.3);
    padding: 0.9rem 0;
    gap: 0.45rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links a {
    display: block;
    width: 100%;
    padding: 0.45rem 1.25rem;
  }

  .nav-links.open {
    display: flex;
  }
}
</style>
