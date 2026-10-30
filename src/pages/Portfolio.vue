<template>
  <section class="portfolio-page section-spacious min-vh-100">
    <div class="page-shell portfolio-shell">
      <header class="portfolio-header mb-5">
        <p class="hero-label mb-2">Portfolio</p>
        <h1 class="portfolio-title fw-bold mb-3">Selected Work</h1>
        <p class="portfolio-intro mb-0">
          CosmicTrack is the project I can walk through in detail. SineVega is the Vue app, with the code on GitHub.
          Client websites sit below that.
        </p>
      </header>

      <div v-if="featuredProject" class="featured-wrapper">
        <article class="featured-project">
          <img :src="featuredProject.heroImage" :alt="featuredProject.title" class="featured-image" />
          <div class="featured-content">
            <h2 class="project-title h3 fw-bold mb-3">{{ featuredProject.title }}</h2>
            <p class="project-description mb-3">{{ featuredProject.description }}</p>
            <p class="tech-line mb-4">{{ formatTechnologies(featuredProject.technologies || []) }}</p>
            <p v-if="featuredProject.availabilityNote" class="availability-note mb-3">
              {{ featuredProject.availabilityNote }}
            </p>
            <div class="project-link-group">
              <a
                v-if="featuredProject.liveUrl"
                :href="featuredProject.liveUrl"
                class="link-button link-button--primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
              <a
                v-if="featuredProject.github"
                :href="featuredProject.github"
                class="link-button link-button--ghost"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <router-link
                v-if="featuredProject.route"
                :to="featuredProject.route"
                class="link-button link-button--ghost"
              >
                Case Study
              </router-link>
            </div>
          </div>
        </article>
      </div>

      <div class="project-grid">
        <article
          v-for="project in remainingProjects"
          :key="project.slug"
          class="project-card"
        >
          <img :src="project.heroImage" :alt="project.title" class="project-card__image" />
          <div class="project-card__body">
            <div class="project-card__content">
              <h3 class="project-card__title fw-bold mb-2">{{ project.title }}</h3>
              <p class="project-description mb-3">{{ project.description }}</p>
              <p class="tech-line mb-3">{{ formatTechnologies(project.technologies || []) }}</p>
            </div>
            <div class="project-card__links">
              <p v-if="project.availabilityNote" class="availability-note mb-3">
                {{ project.availabilityNote }}
              </p>
              <div class="project-link-group">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  class="link-button link-button--primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  class="link-button link-button--ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <router-link
                  v-if="project.route"
                  :to="project.route"
                  class="link-button link-button--ghost"
                >
                  Case Study
                </router-link>
              </div>
            </div>
          </div>
        </article>
      </div>

      <section v-if="clientProjects.length" class="client-section">
        <h2 class="client-title fw-bold mb-2">Client websites</h2>
        <p class="portfolio-intro mb-4">
          Earlier client work in WordPress and Next.js. These are published sites, not product case studies.
        </p>
        <div class="project-grid">
          <article
            v-for="project in clientProjects"
            :key="project.slug"
            class="project-card"
          >
            <img :src="project.heroImage" :alt="project.title" class="project-card__image" />
            <div class="project-card__body">
              <div class="project-card__content">
                <h3 class="project-card__title fw-bold mb-2">{{ project.title }}</h3>
                <p class="project-description mb-3">{{ project.description }}</p>
                <p class="tech-line mb-3">{{ formatTechnologies(project.technologies || []) }}</p>
              </div>
              <div class="project-card__links">
                <div class="project-link-group">
                  <a
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    class="link-button link-button--primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                  <a
                    v-if="project.github"
                    :href="project.github"
                    class="link-button link-button--ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <router-link
                    v-if="project.route"
                    :to="project.route"
                    class="link-button link-button--ghost"
                  >
                    Case Study
                  </router-link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '@/data/projects'
import { useHead, useSeoMeta } from '@unhead/vue'

const base = 'https://esmaari.dev'
const og = `${base}/og-preview.png`

useHead({
  title: 'Portfolio | Esma Ari',
  link: [{ rel: 'canonical', href: base + '/portfolio' }]
})

useSeoMeta({
  title: 'Portfolio | Esma Ari',
  description: 'Selected frontend work by Esma Ari: CosmicTrack, SineVega, and client websites.',
  ogTitle: 'Portfolio | Esma Ari',
  ogDescription: 'Explore frontend case studies by Esma Ari.',
  ogType: 'website',
  ogUrl: base + '/portfolio',
  ogImage: og,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Portfolio | Esma Ari',
  twitterDescription: 'Frontend case studies and product work.',
  twitterImage: og
})

const productSlugs = ['cosmictrack', 'sinevega']
const clientSlugs = ['se', 'kbo', 'uad']

const featuredDescriptions: Record<string, string> = {
  cosmictrack:
    'Personal product. Vue 3 first, in Turkish, then a Next.js rebuild with English and Turkish, server-checked APIs, and TanStack Query. Still in final QA.',
  sinevega:
    'Vue 3 movie app with TMDb, accounts, and favorites. The Railway API is offline. The repository still has the app and the service layer.',
  se: 'Next.js marketing site from Figma, including a card-selection interaction.',
  kbo: 'WordPress school site with WooCommerce for readings and memberships.',
  uad: 'WordPress membership site. Public pages explain the association; member content stays behind login.'
}

const mapProjects = (slugs: string[]) =>
  slugs
    .map(slug => projects.find(p => p.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project))
    .map(project => ({
      ...project,
      description: featuredDescriptions[project.slug] || project.overview || project.impact || ''
    }))

const productProjects = computed(() => mapProjects(productSlugs))
const clientProjects = computed(() => mapProjects(clientSlugs))

const featuredProject = computed(() => productProjects.value[0])
const remainingProjects = computed(() => productProjects.value.slice(1))

const orderedTechnologies = (techs: string[]) => {
  const list = [...(techs || [])]
  const front: string[] = []
  const rest: string[] = []

  list.forEach((tech) => {
    if (/^vue(?:\s|$)/i.test(tech)) {
      front.push(tech)
      return
    }
    if (/^react(?:\s|$)/i.test(tech)) {
      front.push(tech)
      return
    }
    rest.push(tech)
  })

  front.sort((a, b) => {
    if (/^vue/i.test(a) && /^react/i.test(b)) return -1
    if (/^react/i.test(a) && /^vue/i.test(b)) return 1
    return 0
  })

  return [...front, ...rest]
}

const formatTechnologies = (techs: string[]) => {
  const ordered = orderedTechnologies(techs)
  return ordered.length ? ordered.join(' · ') : ''
}
</script>

<style scoped>
.portfolio-page {
  --saas-primary: #1e293b;
  --saas-accent: #a78bfa;
  --saas-hover: #6366f1;
  --saas-bg: #f8fafc;
  --saas-heading: #0f172a;
  --saas-body: #334155;
  --saas-transition: 200ms ease;
  background: var(--saas-bg);
}

.portfolio-shell {
  max-width: 1100px;
}

.portfolio-title {
  color: var(--saas-heading);
  font-size: clamp(2.1rem, 4.4vw, 3.8rem);
  letter-spacing: -0.035em;
}

.portfolio-intro,
.impact-line,
.project-description {
  max-width: 720px;
  color: var(--saas-body);
  line-height: 1.5;
}

.featured-wrapper {
  margin-bottom: 3rem;
}

.client-section {
  margin-top: 4.5rem;
}

.client-title {
  color: var(--saas-heading);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  letter-spacing: -0.03em;
}

.availability-note {
  color: var(--saas-body);
  font-size: 0.95rem;
}

.featured-project {
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(163, 147, 255, 0.45);
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.15);
}

.featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 360px;
}

.featured-content {
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project-card {
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid rgba(99, 102, 241, 0.18);
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform var(--saas-transition);
  min-height: 460px;
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-card__image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-card__body {
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-card__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.project-card__title {
  color: var(--saas-heading);
}

.tech-line {
  color: rgba(15, 23, 42, 0.7);
  font-size: 0.92rem;
  letter-spacing: 0.02em;
}

.project-card__links {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.project-link-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.link-button {
  padding: 0.65rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid transparent;
  transition: background var(--saas-transition), color var(--saas-transition),
    border-color var(--saas-transition), transform var(--saas-transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  min-height: 44px;
  line-height: 1;
}

.link-button--primary {
  background: var(--saas-primary);
  color: #ffffff;
  border-color: var(--saas-primary);
}

.link-button--primary:hover {
  background: var(--saas-hover);
  border-color: var(--saas-hover);
}

.link-button--ghost {
  background: transparent;
  color: var(--saas-heading);
  border-color: rgba(15, 23, 42, 0.2);
}

.link-button--ghost:hover {
  color: var(--saas-primary);
  border-color: var(--saas-primary);
}

@media (max-width: 768px) {
  .featured-content {
    padding: 1.5rem;
  }

  .project-card__image {
    height: 200px;
  }
}
</style>
