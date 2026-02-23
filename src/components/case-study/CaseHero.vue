<template>
  <header class="hero-block">
    <div class="row gy-5 align-items-center">
      <div class="col-lg-5">
        <p class="hero-label mb-2">Case Study</p>
        <h1 class="case-title fw-bold mb-3">{{ title }}</h1>
        <p class="positioning mb-4">{{ positioning }}</p>

        <div class="d-flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in orderedTechnologies"
            :key="`hero-${tech}`"
            :class="['tech-tag', techClass(tech)]"
          >
            {{ tech }}
          </span>
        </div>

        <div class="d-flex flex-wrap gap-3">
          <a v-if="liveUrl" :href="liveUrl" target="_blank" rel="noopener" class="hero-action">Live Site</a>
          <a v-if="github" :href="github" target="_blank" rel="noopener" class="hero-action">GitHub</a>
        </div>
      </div>

      <div class="col-lg-7">
        <img v-if="heroImage" :src="heroImage" :alt="`${title} product screenshot`" class="hero-image" />
      </div>
    </div>

    <MetaInfoGrid class="mt-5" :meta-info="metaInfo" />
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MetaInfoGrid from './MetaInfoGrid.vue'

const props = defineProps<{
  title: string
  positioning: string
  technologies: string[]
  liveUrl?: string
  github?: string
  heroImage?: string
  metaInfo: {
    role: string
    timeline: string
    stack: string
    focus: string
    projectType: string
  }
}>()

const orderedTechnologies = computed(() => {
  const list = [...(props.technologies || [])]
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
</script>

<style scoped>
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

.hero-image {
  display: block;
  width: min(720px, 100%);
  margin-inline: auto;
  aspect-ratio: 16 / 10;
  object-fit: contain;
  background: transparent;
}
</style>
