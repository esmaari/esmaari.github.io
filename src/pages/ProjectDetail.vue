<template>
  <section class="case-page section-spacious min-vh-100">
    <div class="page-shell case-shell" v-if="project">
      <CaseHero
        :title="project.title"
        :positioning="positioningStatement"
        :technologies="orderedTechnologies"
        :live-url="project.liveUrl"
        :github="project.github"
        :hero-image="project.heroImage"
        :meta-info="metaInfo"
      />

      <section class="content-block contact-block text-center">
        <p class="contact-copy mb-3">
          Need a calm, modern case study page? I can scope the first step with you in under 15 minutes.
        </p>
        <router-link to="/contact" class="hero-action">Start a conversation</router-link>
      </section>

      <section class="content-block">
        <h2 class="section-title accent-title mb-4">Context & Objective</h2>
        <div class="row gy-4">
          <div class="col-lg-6">
            <h3 class="sub-title mb-2">Problem</h3>
            <p class="section-copy mb-0">{{ contextProblem }}</p>
          </div>
          <div class="col-lg-6">
            <h3 class="sub-title mb-2">Objective</h3>
            <p class="section-copy mb-0">{{ contextObjective }}</p>
          </div>
        </div>
      </section>

      <section class="content-block">
        <h2 class="section-title accent-title mb-4">Product Strategy</h2>
        <p class="section-copy strategy-copy mb-0">{{ productStrategy }}</p>
      </section>

      <section class="content-block">
        <h2 class="section-title accent-title mb-4">Architecture Decisions</h2>
        <div class="row gy-4">
          <div v-for="(item, index) in architectureCards" :key="`arch-${index}`" class="col-lg-4">
            <ArchitectureCard
              :title="item.title"
              :decision="item.decision"
              :why="item.why"
              :impact="item.impact"
            />
          </div>
        </div>
      </section>

      <section class="content-block" v-if="normalizedFeatures.length">
        <h2 class="section-title accent-title mb-5">Core Features</h2>

        <FeatureBlock
          v-for="(feature, index) in normalizedFeatures"
          :key="`${project.slug}-feature-${index}`"
          :title="feature.title"
          :description="feature.description"
          :bullets="feature.bullets"
          :image="feature.image"
          :image-alt="`${project.title} ${feature.title}`"
          :reverse="index % 2 === 1"
          class="feature-spacing"
        />
      </section>

      <section class="content-block">
        <h2 class="section-title accent-title mb-4">Technical Challenges</h2>
        <ul class="challenge-list mb-0">
          <li v-for="(item, index) in technicalChallenges" :key="`challenge-${index}`">{{ item }}</li>
        </ul>
      </section>

      <section class="content-block">
        <h2 class="section-title accent-title mb-4">Results</h2>
        <ResultsGrid :technical-outcomes="results.technical" :product-outcomes="results.product" />
      </section>

      <section class="content-block">
        <h2 class="section-title accent-title mb-4">What I'd Improve</h2>
        <ul class="improve-list mb-0">
          <li v-for="(item, index) in improvements" :key="`improve-${index}`">{{ item }}</li>
        </ul>
      </section>

      <section class="stack-section content-block text-center">
        <h2 class="stack-title accent-title mb-3">Technology Stack</h2>
        <div class="d-flex flex-wrap justify-content-center gap-2">
          <span
            v-for="tech in orderedTechnologies"
            :key="`stack-${project.slug}-${tech}`"
            :class="['tech-tag', techClass(tech)]"
          >
            {{ tech }}
          </span>
        </div>
      </section>

      <section class="content-block mini-gallery-section" v-if="miniGalleryImages.length">
        <h2 class="stack-title accent-title mb-4">Mini Gallery</h2>
        <div class="row g-3">
          <div class="col-6 col-md-4 col-lg-3" v-for="(item, index) in miniGalleryImages" :key="`${project.slug}-gallery-${index}`">
            <button type="button" class="gallery-link gallery-button d-block" @click="openGallery(item)">
              <img :src="item.src" :alt="`${project.title} ${item.label}`" class="gallery-thumb" />
            </button>
          </div>
        </div>
      </section>

      <div v-if="activeGalleryImage" class="gallery-modal" role="dialog" aria-modal="true" @click.self="closeGallery">
        <button type="button" class="gallery-close" @click="closeGallery">Close</button>
        <img :src="activeGalleryImage.src" :alt="`${project.title} ${activeGalleryImage.label}`" class="gallery-modal-image" />
      </div>
    </div>

    <div v-else class="page-shell case-shell">
      <h1 class="case-title fw-bold mb-3">Project not found</h1>
      <p class="positioning">The requested case study is not available.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import { projects } from '@/data/projects'
import CaseHero from '@/components/case-study/CaseHero.vue'
import ArchitectureCard from '@/components/case-study/ArchitectureCard.vue'
import FeatureBlock from '@/components/case-study/FeatureBlock.vue'
import ResultsGrid from '@/components/case-study/ResultsGrid.vue'

const base = 'https://esmaari.dev'
const route = useRoute()

const project = computed(() => projects.find(p => p.slug === route.params.slug))
const activeGalleryImage = ref<{ src: string; label: string } | null>(null)

const openGallery = (item: { src: string; label: string }) => {
  activeGalleryImage.value = item
}

const closeGallery = () => {
  activeGalleryImage.value = null
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeGallery()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})

const hasTech = (term: string) => {
  return (project.value?.technologies || []).some(tech => tech.toLowerCase().includes(term.toLowerCase()))
}

const orderedTechnologies = computed(() => {
  const list = [...(project.value?.technologies || [])]
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
})

const techClass = (tech: string) => {
  if (/^vue(?:\s|$)/i.test(tech)) return 'tech-tag--vue'
  if (/^react(?:\s|$)/i.test(tech)) return 'tech-tag--react'
  return ''
}

const positioningStatement = computed(() => {
  return project.value?.impact || 'Scalable frontend product delivery focused on maintainability, performance, and UX clarity.'
})

const metaInfo = computed(() => {
  const stack = (project.value?.technologies || []).slice(0, 3).join(' · ') || 'Modern Frontend Stack'

  const projectType = hasTech('wordpress')
    ? 'Client Platform'
    : hasTech('react') || hasTech('vue')
      ? 'SaaS / Product Web App'
      : 'Frontend Product Case Study'

  return {
    role: 'Frontend Engineer / UI Architect',
    timeline: 'Iterative delivery across planning, build, and refinement',
    stack,
    focus: 'Scalability, maintainability, and product clarity',
    projectType
  }
})

const contextProblem = computed(() => {
  return project.value?.overview || 'The product needed a structured frontend approach to avoid fragmented UI behavior and technical debt as scope expanded.'
})

const contextObjective = computed(() => {
  return project.value?.technical || 'Deliver a stable product foundation with predictable architecture, reusable components, and clear user flows.'
})

const productStrategy = computed(() => {
  if (!project.value) return ''
  if (project.value.strategy) return project.value.strategy

  const base = 'The strategy leaned on calm, bite-size sections so prospects could scan the story without feeling overwhelmed.'
  const featureCount = (project.value?.features || []).length

  if (featureCount) {
    return `${base} It also highlighted ${featureCount} concrete flows so each story feels tangible and easy to grasp.`
  }

  return base
})

const architectureCards = computed(() => {
  if (project.value?.architectureDecisions?.length) {
    return project.value.architectureDecisions.slice(0, 3)
  }

  const frontendTitle = hasTech('vue')
    ? 'Thoughtful Component Layers'
    : hasTech('react')
      ? 'Clean Component Economy'
      : 'Modular Frontend Experience'

  const backendTitle = hasTech('supabase')
    ? 'Trustworthy Data Boundaries'
    : 'Predictable Access Flow'

  return [
    {
      title: frontendTitle,
      decision: 'Leaned on reusable blocks and purposeful spacing to keep every interaction crystal clear.',
      why: 'Clients need to feel confident at first glance.',
      impact: 'More readable content and predictable behavior across the entire site.'
    },
    {
      title: backendTitle,
      decision: 'Kept data and authentication flows consistent so form submissions and gated content never jitter.',
      why: 'Trust breaks when a visitor lands on a stale page mid-flow.',
      impact: 'Visitors stay in motion and trust builds with every click.'
    },
    {
      title: 'Future-Friendly Structure',
      decision: 'Organized the experience around repeatable patterns rather than one-off pages.',
      why: 'New case studies should drop in without a major rewrite.',
      impact: 'Saves time on future storytelling updates.'
    }
  ]
})

const buildFeatureBullets = (title: string) => {
  return [
    `${title}: structured for predictable state transitions and clear UX feedback.`,
    'Built with reusable UI patterns to reduce duplication and simplify iteration.',
    'Designed to support future extension without rewriting core flow logic.'
  ]
}

const normalizedFeatures = computed(() => {
  const source = (project.value?.features || []).slice(0, 4)

  if (source.length === 0 && project.value?.heroImage) {
    return [
      {
        title: 'Core Product Flow',
        description: 'Primary workflow designed for clarity, speed, and maintainable interaction logic.',
        bullets: buildFeatureBullets('Core Product Flow'),
        image: project.value.heroImage
      }
    ]
  }

  return source
    .filter(feature => feature?.image)
    .map(feature => ({
      title: feature.title,
      description: feature.description,
      bullets: buildFeatureBullets(feature.title),
      image: feature.image
    }))
})

const miniGalleryImages = computed(() => {
  const combined: Array<{ src: string; label: string }> = []

  if (project.value?.heroImage) {
    combined.push({ src: project.value.heroImage, label: 'Hero' })
  }

  ;(project.value?.features || []).forEach((feature, index) => {
    if (feature?.image) {
      combined.push({ src: feature.image, label: feature.title || `Feature ${index + 1}` })
    }
  })

  ;(project.value?.design?.images || []).forEach((image, index) => {
    if (image) {
      combined.push({ src: image, label: `Design ${index + 1}` })
    }
  })

  const seen = new Set<string>()
  return combined.filter(item => {
    if (seen.has(item.src)) return false
    seen.add(item.src)
    return true
  })
})

const technicalChallenges = computed(() => {
  return [
    'Keeping each section short, focused, and easy to scan for busy decision-makers.',
    'Serving rich imagery while keeping performance snappy on every screen size.',
    'Structuring new content so additional case stories slot in without rewriting the layout.'
  ]
})

const results = computed(() => {
  return {
    technical: [
      'Delivered consistent layouts that feel like a modern SaaS page.',
      'Kept the stack ready for quick updates and reliable shipping.',
      'Favored spacing and hierarchy so stories stay readable across breakpoints.'
    ],
    product: [
      'Helped visitors grasp the value quickly and stay inspired to act.',
      'Structured narratives that end with a clear next step.',
      'Made it easy to point clients toward a conversation without overwhelming them.'
    ]
  }
})

const improvements = computed(() => {
  return [
    'Add simple lead tracking to see which stories resonate most with visitors.',
    'Introduce quick demos or motion snippets to surface energy faster.',
    'Refresh the case studies as new flagship projects ship so the gallery feels current.'
  ]
})

watchEffect(() => {
  if (!project?.value) return

  const p = project.value
  const url = `${base}/projects/${p.slug}`
  const og = p.heroImage?.startsWith('http') ? p.heroImage : base + p.heroImage

  useHead({
    title: `${p.title} | Esma Ari`,
    link: [{ rel: 'canonical', href: url }],
    script: [{
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: p.title,
        url,
        image: og,
        description: p.impact || p.overview,
        ...(p.technologies ? { programmingLanguage: p.technologies.join(', ') } : {}),
        author: { '@type': 'Person', name: 'Esma Ari', url: base + '/' }
      })
    }]
  })

  useSeoMeta({
    title: `${p.title} | Esma Ari`,
    description: p.impact || p.overview,
    ogTitle: `${p.title} | Esma Ari`,
    ogDescription: p.impact || p.overview,
    ogType: 'article',
    ogUrl: url,
    ogImage: og,
    twitterCard: 'summary_large_image',
    twitterTitle: `${p.title} | Esma Ari`,
    twitterDescription: p.impact || p.overview,
    twitterImage: og
  })
})
</script>

<style scoped>
.case-page {
  --saas-primary: #1e293b;
  --saas-accent: #a78bfa;
  --saas-hover: #6366f1;
  --saas-bg: #f8fafc;
  --saas-heading: #0f172a;
  --saas-body: #334155;
  --saas-transition: 200ms ease;
  background: var(--saas-bg);
}

.case-shell {
  max-width: 1100px;
}

.content-block {
  margin-top: 7rem;
}

.hero-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 122px;
  padding: 0.62rem 1.1rem;
  border: 1px solid var(--saas-primary);
  background: var(--saas-primary);
  color: #ffffff;
  font-weight: 600;
  transition: border-color var(--saas-transition), background-color var(--saas-transition), color var(--saas-transition), transform var(--saas-transition);
}

.hero-action:hover {
  border-color: var(--saas-hover);
  background: var(--saas-hover);
  color: #ffffff;
  transform: translateY(-1px);
}

.case-title {
  color: var(--saas-heading);
  font-size: clamp(2.7rem, 7vw, 6rem);
  letter-spacing: -0.05em;
  line-height: 0.98;
  word-break: normal;
  overflow-wrap: normal;
}

.positioning {
  max-width: 680px;
  color: var(--saas-body);
  font-size: clamp(1.08rem, 2.1vw, 1.35rem);
  line-height: 1.7;
}

.section-title {
  color: var(--saas-heading);
  font-size: clamp(2rem, 3.8vw, 3rem);
  letter-spacing: -0.035em;
}

.sub-title {
  color: var(--saas-primary);
  font-size: 1.1rem;
  letter-spacing: -0.015em;
  font-weight: 700;
}

.accent-title {
  position: relative;
  width: fit-content;
}

.accent-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 74px;
  height: 3px;
  background: var(--saas-accent);
}

.section-copy,
.strategy-copy,
.challenge-list li,
.improve-list li {
  color: var(--saas-body);
  font-size: 1.06rem;
  line-height: 1.85;
}

.tech-tag {
  border: 1px solid rgba(167, 139, 250, 0.5);
  border-radius: 999px;
  padding: 0.34rem 0.8rem;
  font-size: 0.8rem;
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

.feature-spacing + .feature-spacing {
  margin-top: 4.8rem;
}

.challenge-list,
.improve-list {
  padding-left: 1.1rem;
}

.challenge-list li,
.improve-list li {
  margin-bottom: 0.45rem;
}

.contact-block {
  margin-top: 3rem;
  padding: 2rem 0;
  margin-bottom: 2rem;
}

.contact-copy {
  margin: 0 auto;
  max-width: 520px;
  font-size: 1.08rem;
  color: var(--saas-body);
}

.stack-title {
  color: var(--saas-primary);
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.09em;
}

.gallery-link {
  border: none;
  background: transparent;
  padding: 0;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: transform var(--saas-transition);
}

.gallery-link:hover {
  transform: translateY(-1px);
}

.gallery-button:focus-visible {
  outline: 2px solid var(--saas-hover);
  outline-offset: 2px;
}

.gallery-thumb {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: contain;
  background: #ffffff;
}

.gallery-modal {
  position: fixed;
  inset: 0;
  z-index: 1300;
  background: rgba(15, 23, 42, 0.88);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-modal-image {
  width: min(1100px, 92vw);
  max-height: 84vh;
  object-fit: contain;
  background: #ffffff;
}

.gallery-close {
  position: absolute;
  top: 1.4rem;
  right: 1.4rem;
  border: 1px solid #ffffff;
  background: transparent;
  color: #ffffff;
  padding: 0.45rem 0.9rem;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: border-color var(--saas-transition), color var(--saas-transition);
}

.gallery-close:hover {
  border-color: var(--saas-accent);
  color: var(--saas-accent);
}

@media (max-width: 991px) {
  .content-block {
    margin-top: 6rem;
  }

  .feature-spacing + .feature-spacing {
    margin-top: 3.8rem;
  }
}
</style>
