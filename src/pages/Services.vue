<template>
  <section class="mx-3 py-5 min-vh-100">
    <h2 class="fw-bold heading-highlight text-center mb-3">Services</h2>

    <p class="text-center mb-5 fs-5 text-on-primary">
      I’m currently <span class="fw-semibold">open to freelance, part-time, and full-time opportunities.</span>
    </p>

    <div class="row gy-4">
      <!-- Service Cards -->
      <div class="col-md-6 col-lg-6" v-for="(service, i) in services" :key="i">
        <div class="p-4 rounded block-bg highlight-border h-100">
          <h4 class="fw-bold mb-3">{{ service.title }}</h4>
          <p class="mb-0">{{ service.description }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
  import { useHead, useSeoMeta } from '@unhead/vue'

  const base = 'https://portfolio-esmaari.netlify.app'
  const og = `${base}/og-preview.png`

  // Canonical + Title
  useHead({
    title: 'Services | Esma Ari',
    link: [{ rel: 'canonical', href: base + '/services' }]
  })

  // SEO + Social
  useSeoMeta({
    title: 'Services | Esma Ari',
    description: 'Freelance frontend development and design services by Esma Ari — specialized in Vue.js, TypeScript, and responsive UI. Available for remote projects via Upwork.',
    ogTitle: 'Services | Esma Ari',
    ogDescription: 'Discover Esma Ari’s freelance frontend and UI/UX services. Hire via Upwork for Vue.js, TypeScript, or Bootstrap-based projects.',
    ogType: 'website',
    ogUrl: base + '/services',
    ogImage: og,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Services | Esma Ari',
    twitterDescription: 'Frontend • Vue.js • TypeScript • UI/UX Design — Available on Upwork.',
    twitterImage: og
  })

  const services = [
    {
      title: '🔹 Frontend Development',
      description: 'Vue.js & React based UI development for web applications and dashboards.'
    },
    {
      title: '🔹 Project-Based Support',
      description: 'Short-term support (3–6 months) for ongoing projects and product teams.'
    },
    {
      title: '🔹 UI Implementation',
      description: 'Turning designs (Figma) into clean, responsive interfaces.'
    },
    {
      title: '🔹 Maintenance & Improvements',
      description: 'Bug fixes, refactoring and small feature implementations.'
    }
  ]
</script>

<style scoped>
.block-bg {
  background-color: var(--block-bg);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
}
</style>
