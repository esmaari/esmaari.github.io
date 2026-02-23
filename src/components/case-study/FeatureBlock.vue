<template>
  <article class="feature-story">
    <div class="row gy-4 align-items-center">
      <div class="col-lg-5" :class="reverse ? 'order-lg-2' : 'order-lg-1'">
        <h3 class="feature-title mb-2">{{ title }}</h3>
        <p class="feature-copy mb-3">{{ description }}</p>
        <ul class="feature-points mb-0">
          <li v-for="(point, i) in bullets" :key="`${title}-${i}`">{{ point }}</li>
        </ul>
      </div>

      <div class="col-lg-7" :class="reverse ? 'order-lg-1' : 'order-lg-2'">
        <img :src="image" :alt="imageAlt" class="feature-image" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  bullets: string[]
  image: string
  imageAlt: string
  reverse?: boolean
}>()
</script>

<style scoped>
.feature-title {
  color: var(--saas-heading);
  font-size: clamp(1.35rem, 2.5vw, 2rem);
  letter-spacing: -0.02em;
}

.feature-copy,
.feature-points li {
  color: var(--saas-body);
  font-size: 1.06rem;
  line-height: 1.85;
}

.feature-points {
  padding-left: 1.1rem;
}

.feature-points li {
  margin-bottom: 0.45rem;
}

.feature-image {
  display: block;
  width: min(680px, 100%);
  margin-inline: auto;
  aspect-ratio: 16 / 10;
  object-fit: contain;
  background: transparent;
}
</style>
