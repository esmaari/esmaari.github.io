<template>
  <section class="portfolio-page section-spacious min-vh-100">
    <div class="page-shell portfolio-shell">
      <header class="portfolio-header mb-5">
        <p class="hero-label mb-2">Portfolio</p>
        <h1 class="portfolio-title fw-bold mb-3">Featured Projects</h1>
        <p class="portfolio-intro mb-0">
          Selected work focused on product delivery, scalable frontend architecture, and maintainable UI systems.
        </p>
      </header>

      <div class="row gy-5">
        <div v-for="project in featuredProjects" :key="project.slug" class="col-lg-6">
          <article class="project-item h-100 d-flex flex-column">
            <img :src="project.heroImage" class="project-image mb-4" :alt="project.title" />

            <h2 class="project-title h3 fw-bold mb-2">{{ project.title }}</h2>
            <p class="impact-line mb-3">{{ project.impact }}</p>

            <div class="d-flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in orderedTechnologies(project.technologies || [])"
                :key="`${project.slug}-${tech}`"
                :class="['tech-tag', techClass(tech)]"
              >
                {{ tech }}
              </span>
            </div>

            <router-link :to="project.route" class="custom-btn custom-btn-sm case-button mt-auto">View Case Study</router-link>
          </article>
        </div>
      </div>

      <details v-if="otherExperiments.length" class="other-experiments mt-5">
        <summary>More Projects</summary>
        <ul class="experiment-list mb-0">
          <li v-for="project in otherExperiments" :key="project.slug" class="py-2">
            <router-link :to="project.route" class="experiment-link">{{ project.title }}</router-link>
          </li>
        </ul>
      </details>
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

const featuredSlugs = [
  'cosmictrack',
  'sinevega',
  'react-take-a-guess',
  'uad',
  'se',
  'kbo'
]

const featuredProjects = computed(() => {
  return featuredSlugs
    .map(slug => projects.find(p => p.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project))
    .slice(0, 6)
})

const otherExperiments = computed(() => {
  const featuredSet = new Set(featuredProjects.value.map(p => p.slug))
  return projects.filter(project => !featuredSet.has(project.slug))
})

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

const techClass = (tech: string) => {
  if (/^vue(?:\s|$)/i.test(tech)) return 'tech-tag--vue'
  if (/^react(?:\s|$)/i.test(tech)) return 'tech-tag--react'
  return ''
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
  font-size: clamp(2.1rem, 4.8vw, 4rem);
  letter-spacing: -0.035em;
}

.portfolio-intro,
.impact-line {
  max-width: 700px;
  color: var(--saas-body);
}

.project-item {
  transition: transform var(--saas-transition);
}

.project-item:hover {
  transform: translateY(-2px);
}

.project-title {
  color: var(--saas-heading);
  position: relative;
  width: fit-content;
}

.project-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 1px;
  background: var(--saas-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--saas-transition);
}

.project-item:hover .project-title::after {
  transform: scaleX(1);
}

.project-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: contain;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
  transition: transform var(--saas-transition);
}

.project-item:hover .project-image {
  transform: scale(1.01);
}

.tech-tag {
  border: 1px solid rgba(167, 139, 250, 0.45);
  border-radius: 999px;
  padding: 0.25rem 0.65rem;
  font-size: 0.78rem;
  color: var(--saas-heading);
  background: rgba(167, 139, 250, 0.08);
}

.tech-tag--vue {
  border-color: rgba(66, 184, 131, 0.95);
  background: rgba(66, 184, 131, 0.24);
  color: #0f5132;
  font-weight: 700;
}

.tech-tag--react {
  border-color: rgba(97, 218, 251, 1);
  background: rgba(97, 218, 251, 0.28);
  color: #0b3d4a;
  font-weight: 700;
}

.case-button.custom-btn {
  width: fit-content;
  background: var(--saas-primary);
  border-color: var(--saas-primary);
  color: #ffffff;
  transition: background-color var(--saas-transition), border-color var(--saas-transition), transform var(--saas-transition);
}

.case-button.custom-btn:hover {
  background: var(--saas-hover);
  border-color: var(--saas-hover);
  transform: translateY(-1px);
}

.other-experiments {
  padding-top: 1.5rem;
}

.other-experiments summary {
  color: var(--saas-primary);
  cursor: pointer;
  font-weight: 600;
  width: fit-content;
}

.experiment-list {
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
  max-width: 700px;
}

.experiment-link {
  color: var(--saas-primary);
  position: relative;
  transition: color var(--saas-transition);
}

.experiment-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background: var(--saas-hover);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--saas-transition);
}

.experiment-link:hover {
  color: var(--saas-hover);
}

.experiment-link:hover::after {
  transform: scaleX(1);
}
</style>
