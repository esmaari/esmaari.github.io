<template>
  <section class="portfolio-page section-spacious min-vh-100">
    <div class="page-shell portfolio-shell">
      <header class="portfolio-header mb-5">
        <p class="hero-label mb-2">Portfolio</p>
        <h1 class="portfolio-title fw-bold mb-3">Selected Work</h1>
        <p class="portfolio-intro mb-0">
          Senior frontend collaborations where clarity, architecture, and delivery integrity mattered.
        </p>
      </header>

      <div v-if="featuredProject" class="featured-wrapper">
        <article class="featured-project">
          <img :src="featuredProject.heroImage" :alt="featuredProject.title" class="featured-image" />
          <div class="featured-content">
            <h2 class="project-title h3 fw-bold mb-3">{{ featuredProject.title }}</h2>
            <p class="project-description mb-3">{{ featuredProject.description }}</p>
            <p class="tech-line mb-4">{{ formatTechnologies(featuredProject.technologies || []) }}</p>
            <div class="project-link-group">
              <a
                :href="featuredProject.liveUrl"
                class="link-button link-button--primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
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
              <div class="project-link-group">
                <a
                  :href="project.liveUrl"
                  class="link-button link-button--primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
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
  description: 'A showcase of frontend case studies and product-focused UI engineering work.',
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

const curatedSlugs = ['cosmictrack', 'sinevega', 'se', 'kbo', 'uad']

const featuredDescriptions: Record<string, string> = {
  cosmictrack:
    'CosmicTrack is a tarot-based journaling platform with structured reflections, Supabase-backed persistence, and composables that tame growing feature complexity. The journey model keeps multi-step flows predictable while making it easy to expand future rituals without rewiring the UI.'
}

const curatedProjects = computed(() =>
  curatedSlugs
    .map(slug => projects.find(p => p.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project))
    .map(project => ({
      ...project,
      description: featuredDescriptions[project.slug] || project.overview || project.impact || ''
    }))
)

const featuredProject = computed(() => curatedProjects.value[0])
const remainingProjects = computed(() => curatedProjects.value.slice(1))

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
