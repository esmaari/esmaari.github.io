<template>
  <section class="hero-section min-vh-100 d-flex align-items-center">
    <div class="page-shell hero-wrap position-relative">
      <p class="hero-label mb-2">Home</p>
      <p class="label mb-3">Frontend engineer in Munich</p>

      <h1 class="hero-title mb-4">
        I build the interface, then I go and film something.
      </h1>

      <p class="hero-copy mb-5">
        The job was Vue for years. CosmicTrack is the Next.js app I have been making since.
        Off the clock I run my own Instagram, I run someone else's, and I just opened a YouTube channel.
      </p>

      <div class="d-flex flex-wrap gap-3 mb-5">
        <router-link to="/portfolio" class="custom-btn">The work</router-link>
        <router-link to="/creating" class="github-btn">The camera</router-link>
      </div>

      <div class="section-divider"></div>

      <p class="hero-meta mt-4 mb-0">
        Based in Munich. Open to frontend roles.
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
    description: 'Esma Ari builds frontend products in Vue and React, and also films for Instagram and YouTube.',
    ogTitle: 'Esma Ari',
    ogDescription: 'Frontend work and a camera. Vue, CosmicTrack, and new video.',
    ogType: 'website',
    ogUrl: base + '/',
    ogImage: og,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Esma Ari | Frontend Developer & Designer',
    twitterDescription: 'Frontend engineer. Vue, React, and Next.js.',
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
    border: 3px solid rgba(243, 198, 212, 0.9);
    box-shadow: 0 24px 40px rgba(92, 61, 85, 0.16);
    transform: scale(1.05);
  }

@media (max-width: 991px) {
  .hero-section {
    padding-block: 6.5rem;
  }
}
</style>
