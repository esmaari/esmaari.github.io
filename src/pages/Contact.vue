<template>
  <section class="section-spacious contact-container min-vh-100">
    <div class="page-shell contact-shell">
      <header class="contact-hero">
        <p class="hero-label mb-2">Contact</p>
        <h1 class="contact-title mb-3">Open to a frontend role.</h1>
        <p class="contact-lead mb-0">
          Write if you are hiring for Vue or React. If you got here from a video, say which one.
          I can walk through CosmicTrack, SineVega, or the client sites.
        </p>
      </header>

      <p class="contact-note">
        Vue is the stack I used at work. React and Next.js are what I have been building since 2025.
      </p>

      <div class="reach-list">
        <a class="reach-card reach-card--pink" href="mailto:esmaari.dev@gmail.com">
          <p class="reach-kicker">Email</p>
          <p class="reach-value">esmaari.dev@gmail.com</p>
        </a>
        <a
          class="reach-card reach-card--sky"
          href="https://www.linkedin.com/in/esma-ari/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="reach-kicker">LinkedIn</p>
          <p class="reach-value">esma-ari</p>
        </a>
      </div>

      <p class="contact-place">Munich</p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useHead, useSeoMeta } from '@unhead/vue'

  const base = 'https://esmaari.dev'
  const og = `${base}/og-preview.png`

  useHead({
    title: 'Contact | Esma Ari Portfolio',
    link: [{ rel: 'canonical', href: base + '/contact' }]
  })

  useSeoMeta({
    title: 'Contact | Esma Ari Portfolio',
    description: 'Email or LinkedIn for Esma Ari, a frontend engineer in Munich.',
    ogTitle: 'Contact | Esma Ari',
    ogDescription: 'Email or LinkedIn. Open to a frontend role.',
    ogType: 'website',
    ogUrl: base + '/contact',
    ogImage: og,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contact | Esma Ari',
    twitterDescription: 'Frontend engineer in Munich. Open to roles.',
    twitterImage: og
  })
</script>

<style scoped>
.contact-container {
  background: transparent;
}

.contact-shell {
  max-width: 760px;
}

.contact-title {
  text-align: left;
  font-size: clamp(2.5rem, 4vw, 3.6rem);
  letter-spacing: -0.03em;
  color: var(--text);
}

.contact-lead,
.contact-note {
  max-width: 58ch;
  line-height: 1.75;
  color: var(--text-muted);
}

.contact-note {
  margin-top: 1.25rem;
}

.reach-list {
  margin-top: 2.5rem;
  display: grid;
  gap: 1.25rem;
}

.reach-card {
  display: block;
  background: var(--surface);
  border-radius: 18px;
  padding: 1.35rem 1.4rem 1.2rem;
  border: 1px solid rgba(176, 132, 168, 0.28);
  box-shadow: 0 10px 28px rgba(92, 61, 85, 0.06);
  text-decoration: none;
  color: inherit;
}

.reach-card--pink {
  border-left: 6px solid var(--pink);
}

.reach-card--sky {
  border-left: 6px solid var(--sky);
}

.reach-card:hover .reach-value {
  color: var(--interactive);
}

.reach-kicker {
  margin-bottom: 0.35rem;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8a6a78;
}

.reach-value {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--text);
}

.contact-place {
  margin-top: 1.5rem;
  margin-bottom: 0;
  color: var(--text-muted);
}

@media (min-width: 720px) {
  .reach-list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
