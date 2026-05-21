<template>
  <section class="case-page section-spacious min-vh-100">
    <div class="page-shell case-shell" v-if="project">
      <CaseHero
        :title="project.title"
        :positioning="positioningStatement"
        :technologies="orderedTechnologies"
        :live-url="project.liveUrl"
        :github="project.github"
        :styleguide-url="project.styleguideUrl"
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

      <section class="content-block" v-if="priorIteration">
        <h2 class="section-title accent-title mb-4">Vue First, React Second</h2>
        <p class="section-copy mb-4">{{ priorIteration.summary }}</p>

        <div class="row gy-4">
          <div class="col-lg-6">
            <h3 class="sub-title mb-2">Why Vue first</h3>
            <p class="section-copy mb-0">{{ priorIteration.whyVueFirst }}</p>
          </div>
          <div class="col-lg-6">
            <h3 class="sub-title mb-2">Why React next</h3>
            <p class="section-copy mb-0">{{ priorIteration.whyReactSecond }}</p>
          </div>
        </div>

        <ul class="challenge-list mt-4 mb-4">
          <li v-for="(item, index) in priorIteration.highlights" :key="`prior-${index}`">{{ item }}</li>
        </ul>

        <div class="d-flex flex-wrap gap-3">
          <a
            v-if="priorIteration.liveUrl"
            :href="priorIteration.liveUrl"
            target="_blank"
            rel="noopener"
            class="hero-action hero-action--outline"
          >
            {{ priorIteration.framework }} live
          </a>
          <a
            v-if="priorIteration.github"
            :href="priorIteration.github"
            target="_blank"
            rel="noopener"
            class="hero-action hero-action--outline"
          >
            {{ priorIteration.framework }} repo
          </a>
        </div>

        <div v-if="priorIterationImages.length" class="version-gallery mt-5">
          <h3 class="sub-title mb-3">{{ priorIteration.framework }} screenshots <span class="version-tag version-tag--vue">archived build</span></h3>
          <div class="row g-3">
            <div
              v-for="(item, index) in priorIterationImages"
              :key="`vue-shot-${index}`"
              class="col-md-4"
            >
              <button type="button" class="gallery-link gallery-button d-block w-100" @click="openGallery(item)">
                <img :src="item.src" :alt="item.label" class="gallery-thumb" />
                <span class="screenshot-label">{{ item.label }}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="content-block" v-if="frameworkTransition">
        <h2 class="section-title accent-title mb-4">Vue → React: Architectural Reset</h2>
        <p class="section-copy mb-5">{{ frameworkTransition.intro }}</p>

        <div class="transition-points">
          <article
            v-for="(point, index) in frameworkTransition.frictionPoints"
            :key="`transition-${index}`"
            class="transition-point"
          >
            <h3 class="sub-title mb-2">{{ index + 1 }}. {{ point.title }}</h3>
            <p class="section-copy mb-0">{{ point.body }}</p>
          </article>
        </div>

        <div class="transition-verdict mt-5">
          <h3 class="sub-title mb-2">Honest verdict</h3>
          <p class="section-copy mb-4">{{ frameworkTransition.verdict }}</p>
          <p class="section-copy status-copy mb-4">
            <strong>Current status:</strong> {{ frameworkTransition.status }}
          </p>
          <a
            v-if="frameworkTransition.styleguideUrl"
            :href="frameworkTransition.styleguideUrl"
            target="_blank"
            rel="noopener"
            class="hero-action"
          >
            {{ frameworkTransition.styleguideLabel || 'View styleguide' }}
          </a>
        </div>
      </section>

      <section class="content-block">
        <h2 class="section-title accent-title mb-4">Architecture Decisions</h2>
        <div class="row gy-4">
          <div
            v-for="(item, index) in architectureCards"
            :key="`arch-${index}`"
            :class="architectureColClass"
          >
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
        <h2 class="section-title accent-title mb-3">Core Features</h2>
        <p v-if="priorIteration" class="section-copy features-intro mb-5">
          Screenshots from the React / Next.js build — the version I ship and continue to develop.
          <span class="version-tag version-tag--react ms-1">current</span>
        </p>

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
const priorIteration = computed(() => project.value?.priorIteration)
const frameworkTransition = computed(() => project.value?.frameworkTransition)
const priorIterationImages = computed(() => priorIteration.value?.images || [])

const architectureColClass = computed(() => {
  const count = architectureCards.value.length
  if (count <= 3) return 'col-lg-4'
  if (count === 4) return 'col-lg-6'
  return 'col-lg-4'
})
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
  if (project.value?.metaInfo) {
    return project.value.metaInfo
  }

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
    return project.value.architectureDecisions
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
      bullets: feature.bullets?.length ? feature.bullets : buildFeatureBullets(feature.title),
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

  ;(project.value?.priorIteration?.images || []).forEach((item) => {
    if (item?.src) {
      combined.push({ src: item.src, label: item.label })
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
  if (project.value?.technicalChallenges?.length) {
    return project.value.technicalChallenges
  }

  return [
    'Keeping each section short, focused, and easy to scan for busy decision-makers.',
    'Serving rich imagery while keeping performance snappy on every screen size.',
    'Structuring new content so additional case stories slot in without rewriting the layout.'
  ]
})

const results = computed(() => {
  if (project.value?.results) {
    return project.value.results
  }

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
  if (project.value?.improvements?.length) {
    return project.value.improvements
  }

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

.hero-action--outline {
  background: transparent;
  color: var(--saas-primary);
}

.hero-action--outline:hover {
  background: var(--saas-primary);
  color: #ffffff;
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

.features-intro {
  max-width: 720px;
}

.version-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  vertical-align: middle;
}

.version-tag--react {
  border: 1px solid rgba(97, 218, 251, 0.9);
  background: rgba(97, 218, 251, 0.2);
  color: #0b3d4a;
}

.version-tag--vue {
  border: 1px solid rgba(66, 184, 131, 0.9);
  background: rgba(66, 184, 131, 0.18);
  color: #0f5132;
}

.screenshot-label {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.82rem;
  color: var(--saas-body);
  text-align: center;
}

.version-gallery .gallery-thumb {
  border: 1px solid rgba(66, 184, 131, 0.35);
}

.transition-points {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
}

.transition-point {
  padding-bottom: 2.25rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.35);
}

.transition-point:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.transition-verdict {
  padding: 1.75rem 1.5rem;
  background: rgba(167, 139, 250, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.28);
  border-radius: 4px;
}

.status-copy strong {
  color: var(--saas-heading);
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
