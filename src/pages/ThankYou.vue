<template>
  <section class="section-spacious thank-you-container">
    <div class="page-shell">
      <div class="thank-you-card p-4 p-md-5 text-center thank-you-shell">
        <p class="hero-label mb-2">Thank You</p>
        <h1 class="mb-3 fw-bold">Thank You</h1>
        <p class="mb-4 text-on-primary">
          Your message has been sent successfully. I will get back to you within 24 business hours.
        </p>
        <router-link to="/" class="custom-btn fw-bold px-4 py-2 d-inline-block text-decoration-none">
          Back to Home
        </router-link>
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
.thank-you-container {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}

.thank-you-card {
  max-width: 720px;
  width: 100%;
  margin-inline: auto;
}

.thank-you-shell {
  background: #ffffff;
  border: 1px solid rgba(167, 139, 250, 0.35);
}
</style>
