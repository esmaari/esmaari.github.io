<template>
  <section class="hero-section min-vh-100 d-flex align-items-center">
    <div class="page-shell hero-wrap position-relative">
      <p class="hero-label mb-2">Home</p>
      <p class="label mb-3">Senior Frontend Engineer</p>

      <h1 class="hero-title fw-bold mb-4">
        I build serious, product-focused frontend experiences that scale.
      </h1>

      <p class="hero-copy mb-5">
        Freelance Frontend Developer specializing in Vue, TypeScript, and high-quality interface architecture.
      </p>

      <div class="d-flex flex-wrap gap-3 mb-5">
        <router-link to="/portfolio" class="custom-btn">View Projects</router-link>
        <router-link to="/contact" class="github-btn">Contact</router-link>
      </div>

      <div class="section-divider"></div>

      <p class="hero-meta mt-4 mb-0">
        Based in Munich, available for remote product teams and long-term frontend delivery.
      </p>

      <div class="hero-orb d-none d-lg-block" aria-hidden="true">
        <img src="@/assets/esmaHome.JPG" alt="" class="img-cover" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useHead, useSeoMeta } from '@unhead/vue'

  const base = 'https://esmaari.dev'
  const og = `${base}/og-preview.png`

  useHead({
    title: 'Home | Esma Ari Portfolio',
    link: [{ rel: 'canonical', href: base + '/' }]
  })

  useSeoMeta({
    title: 'Home | Esma Ari Portfolio',
    description: 'Frontend Developer & Designer specializing in Vue.js, TypeScript, and modern UI design.',
    ogTitle: 'Esma Ari Portfolio',
    ogDescription: 'Explore Esma Ari’s latest frontend projects, UI designs, and creative works.',
    ogType: 'website',
    ogUrl: base + '/',
    ogImage: og,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Esma Ari | Frontend Developer & Designer',
    twitterDescription: 'Frontend • Vue • TypeScript • UI/UX',
    twitterImage: og
  })
</script>

<style scoped>
.hero-section {
  padding-block: 8rem;
}

.hero-wrap {
  max-width: 1050px;
}

.hero-title {
  font-size: clamp(2.9rem, 8.2vw, 6.4rem);
  letter-spacing: -0.04em;
  max-width: 14ch;
  word-break: normal;
  overflow-wrap: normal;
}

.hero-copy,
.hero-meta {
  max-width: 600px;
  font-size: 1.12rem;
  color: var(--text-muted);
}

  .hero-orb {
    position: absolute;
    right: -30px;
    top: -20px;
    width: 270px;
    height: 270px;
    border-radius: 999px;
    overflow: hidden;
    opacity: 0.94;
    border: 1px solid rgba(167, 139, 250, 0.4);
    box-shadow: 0 35px 65px rgba(30, 41, 59, 0.28);
    transform: scale(1.05);
  }

@media (max-width: 991px) {
  .hero-section {
    padding-block: 6.5rem;
  }
}
</style>
