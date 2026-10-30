<template>
  <section class="case-page section-spacious thank-you-page">
    <div class="page-shell thank-you-shell">
      <div class="thank-you-card text-center">
        <p class="hero-label mb-3">Thank You</p>
        <h1 class="case-title fw-bold mb-3">Message received.</h1>
        <p class="section-copy mb-4">
          I will read it and reply. The portfolio is there if you want to look at CosmicTrack first.
        </p>
        <div class="thank-you-actions">
          <router-link to="/" class="custom-btn fw-bold">
            Back to Home
          </router-link>
          <router-link to="/contact" class="custom-btn custom-btn-outline fw-bold">
            Send another message
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from '@unhead/vue'

const base = 'https://esmaari.dev'
const og = `${base}/og-preview.png`

useHead({
  title: 'Thank You | Esma Ari Portfolio',
  link: [{ rel: 'canonical', href: `${base}/thank-you` }]
})

useSeoMeta({
  title: 'Thank You | Esma Ari Portfolio',
  description: 'Your message has been sent to Esma Ari.',
  ogTitle: 'Thank You | Esma Ari Portfolio',
  ogDescription: 'Your message has been sent successfully.',
  ogType: 'website',
  ogUrl: `${base}/thank-you`,
  ogImage: og,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Thank You | Esma Ari Portfolio',
  twitterDescription: 'Your message has been sent successfully.',
  twitterImage: og
})
</script>

<style scoped>
.thank-you-page {
  background: var(--saas-bg, #f8fafc);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.thank-you-shell {
  background: #5c3d55;
  border-radius: 1.5rem;
  padding: clamp(2.5rem, 4vw, 3.5rem);
  border: none;
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);
  width: 100%;
}

.thank-you-card {
  max-width: 640px;
  margin-inline: auto;
  color: #f8e7ee;
}

.thank-you-card .case-title {
  color: #ffffff;
  font-size: clamp(2.5rem, 4vw, 3.4rem);
  letter-spacing: -0.02em;
}

.thank-you-card .section-copy {
  color: rgba(248, 231, 238, 0.92);
  font-size: 1.1rem;
  line-height: 1.7;
}

.thank-you-actions {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.custom-btn-outline {
  background: transparent;
  border-color: rgba(248, 231, 238, 0.7);
  color: #f8e7ee;
}

.custom-btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
