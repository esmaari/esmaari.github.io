<template>
  <section class="services-page section-spacious min-vh-100">
    <div class="page-shell services-shell">
      <header class="services-hero">
        <p class="hero-label mb-2">How I work</p>
        <h1 class="services-title fw-bold mb-3">How I work on a frontend.</h1>
        <p class="services-subtitle mb-4">
          This is how I take a screen from a rough note to something the next person can change.
          I am looking for a frontend role. I am not running a client practice.
        </p>
        <div class="accent-divider" aria-hidden="true"></div>
      </header>

      <section class="services-section">
        <h2 class="section-title fw-bold mb-5">How I Work</h2>

        <div class="work-timeline">
          <article class="timeline-item">
            <p class="step-number mb-0">01</p>
            <div class="step-body">
              <h3 class="step-title mb-2">Read the task</h3>
              <p class="step-copy mb-0">
                I start with the screen, the constraint, and what already exists in the codebase.
                That keeps the change inside the product instead of beside it.
              </p>
            </div>
          </article>

          <article class="timeline-item">
            <p class="step-number mb-0">02</p>
            <div class="step-body">
              <h3 class="step-title mb-2">Place the state</h3>
              <p class="step-copy mb-0">
                I decide which component owns the interaction, what comes from the API, and what should stay local.
              </p>
            </div>
          </article>

          <article class="timeline-item">
            <p class="step-number mb-0">03</p>
            <div class="step-body">
              <h3 class="step-title mb-2">Build in the stack already there</h3>
              <p class="step-copy mb-0">
                Vue or React, TypeScript, and the patterns the repo already uses.
                A new feature should look like the rest of the app.
              </p>
            </div>
          </article>

          <article class="timeline-item">
            <p class="step-number mb-0">04</p>
            <div class="step-body">
              <h3 class="step-title mb-2">Leave it editable</h3>
              <p class="step-copy mb-0">
                I check the flow, the empty and error states, and whether the next person can change the screen without a rewrite.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="services-section">
        <h2 class="section-title fw-bold mb-4">Work I can take in a role</h2>

        <div class="row gy-4 ideal-grid">
          <div class="col-md-6">
            <article class="ideal-card">
              <h3 class="option-title mb-2">Vue product UI</h3>
              <p class="mb-0">Feature work in an existing Vue app: pages, Pinia or similar state, and API-backed screens.</p>
            </article>
          </div>
          <div class="col-md-6">
            <article class="ideal-card">
              <h3 class="option-title mb-2">React and Next.js</h3>
              <p class="mb-0">Feature work on a React codebase. CosmicTrack is where I practiced App Router, server state, and i18n.</p>
            </article>
          </div>
          <div class="col-md-6">
            <article class="ideal-card">
              <h3 class="option-title mb-2">Design to code</h3>
              <p class="mb-0">Implementing a Figma frame as components, including responsive layout and one interactive piece.</p>
            </article>
          </div>
          <div class="col-md-6">
            <article class="ideal-card">
              <h3 class="option-title mb-2">Content sites</h3>
              <p class="mb-0">WordPress and WooCommerce when the job is a client website rather than a custom app.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="cta-section text-center">
        <h2 class="cta-title fw-bold mb-3">Open to a frontend role.</h2>
        <p class="cta-copy mb-4">
          If a team needs someone who has shipped Vue in production and can show a React product, I would like to talk.
        </p>
        <router-link to="/contact" class="custom-btn cta-btn">Contact</router-link>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from '@unhead/vue'

const base = 'https://esmaari.dev'
const og = `${base}/og-preview.png`

useHead({
  title: 'How I work | Esma Ari',
  link: [{ rel: 'canonical', href: base + '/services' }]
})

useSeoMeta({
  title: 'How I work | Esma Ari',
  description: 'How Esma Ari works on frontend tasks: Vue product UI, React and Next.js, design-to-code, and content sites.',
  ogTitle: 'How I work | Esma Ari',
  ogDescription: 'Frontend working style and the kinds of UI work Esma Ari can take in a role.',
  ogType: 'website',
  ogUrl: base + '/services',
  ogImage: og,
  twitterCard: 'summary_large_image',
  twitterTitle: 'How I work | Esma Ari',
  twitterDescription: 'How Esma Ari takes a frontend task from the screen to a change someone else can edit.',
  twitterImage: og
})
</script>

<style scoped>
.services-page {
  background: transparent;
}

.services-shell {
  max-width: 1000px;
}

.services-hero {
  padding-top: 0.75rem;
}

.services-title {
  color: var(--text);
  font-size: clamp(2.7rem, 6vw, 5.5rem);
  letter-spacing: -0.045em;
  line-height: 0.98;
}

.services-subtitle {
  max-width: 760px;
  font-size: 1.12rem;
  color: var(--text-muted);
}

.accent-divider {
  width: 100%;
  max-width: 760px;
  height: 2px;
  background: rgba(167, 139, 250, 0.6);
}

.services-section {
  margin-top: 6.6rem;
}

.section-title {
  color: var(--text);
  font-size: clamp(1.9rem, 3.2vw, 2.9rem);
  letter-spacing: -0.03em;
  position: relative;
  width: fit-content;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 64px;
  height: 2px;
  background: rgba(167, 139, 250, 0.7);
}

.work-timeline {
  position: relative;
  padding-left: 1.2rem;
}

.work-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 1px;
  background: rgba(167, 139, 250, 0.5);
}

.timeline-item {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 1.2rem;
  padding-block: 1.35rem;
}

.step-number {
  color: var(--accent);
  font-size: clamp(2rem, 4vw, 3.1rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
}

.step-title,
.option-title {
  color: var(--text);
  font-size: 1.22rem;
  letter-spacing: -0.015em;
  font-weight: 700;
}

.step-copy,
.section-copy,
.option-title + p,
.cta-copy {
  max-width: 720px;
  color: var(--text-muted);
}

.ideal-card,
.engagement-card {
  height: 100%;
  background: #ffffff;
  border: 1px solid rgba(167, 139, 250, 0.35);
  padding: 1.2rem 1.25rem;
}

.engagement-card {
  transition: background-color var(--transition-fast), border-color var(--transition-fast);
}

.engagement-card:hover {
  background: rgba(167, 139, 250, 0.08);
  border-color: rgba(99, 102, 241, 0.5);
}

.cta-section {
  margin-top: 7rem;
  padding: 3.4rem 1.2rem;
  background: rgba(167, 139, 250, 0.12);
  border: 1px solid rgba(167, 139, 250, 0.34);
}

.cta-title {
  color: var(--text);
  font-size: clamp(2rem, 3.4vw, 3.1rem);
  letter-spacing: -0.03em;
}

.cta-copy {
  margin-inline: auto;
}

.cta-btn {
  padding-inline: 1.75rem;
}

@media (max-width: 768px) {
  .services-section,
  .cta-section {
    margin-top: 5.2rem;
  }

  .timeline-item {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 0.9rem;
  }
}
</style>
