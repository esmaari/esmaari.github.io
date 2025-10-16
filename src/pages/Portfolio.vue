<template>
  <section class="portfolio py-5 min-vh-100">
    <div class="container">
      <h2 class="text-center mb-5 fw-bold display-6 heading-highlight">My Projects</h2>

      <div class="row gy-4">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <div class="p-3 rounded block-bg h-100 shadow-sm d-flex flex-column justify-content-between highlight-border">
            <img :src="project.image" class="img-fluid rounded mb-3" :alt="project.title" />

            <div>
              <h5 class="fw-bold mb-2">{{ project.title }}</h5>
              <p class="mb-3">{{ project.description }}</p>
            </div>

            <router-link
              :to="project.route"
              class="custom-btn-sm custom-btn w-100 fw-bold text-center"
            >
              Explore Project ↗
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { projects } from '@/data/projects'
  import { useHead, useSeoMeta } from '@unhead/vue'

  const base = 'https://portfolio-esmaari.netlify.app'
  const og = `${base}/og-preview.png`

  // Canonical + Title
  useHead({
    title: 'Portfolio | Esma Ari',
    link: [{ rel: 'canonical', href: base + '/portfolio' }]
  })

  // SEO + Social
  useSeoMeta({
    title: 'Portfolio | Esma Ari',
    description: 'A showcase of Esma Ari’s frontend development and design projects — built with Vue.js, TypeScript, and modern UI frameworks.',
    ogTitle: 'Portfolio | Esma Ari',
    ogDescription: 'Explore web projects and creative works by Esma Ari, Frontend Developer & Designer based in Munich.',
    ogType: 'website',
    ogUrl: base + '/portfolio',
    ogImage: og,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Portfolio | Esma Ari',
    twitterDescription: 'Frontend projects & design work by Esma Ari.',
    twitterImage: og
  })
</script>


<style scoped>
.block-bg {
  background-color: var(--block-bg);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
}
.heading-highlight {
  color: var(--highlight-4);
}
</style>
