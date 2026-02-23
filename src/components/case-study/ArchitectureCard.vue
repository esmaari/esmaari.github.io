<template>
  <article class="decision-card">
    <h3 class="decision-title mb-3">{{ title }}</h3>

    <p class="decision-label mb-1">Decision</p>
    <p class="decision-text mb-3">{{ decision }}</p>

    <p class="decision-label mb-1">Why</p>
    <p class="decision-text mb-3">{{ why }}</p>

    <p class="decision-label mb-1">Impact</p>
    <p class="decision-text mb-0">{{ impact }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  decision: string
  why: string
  impact: string
}>()
</script>

<style scoped>
.decision-card {
  height: 100%;
  padding: 1.2rem;
  background: #ffffff;
  border: 1px solid rgba(167, 139, 250, 0.35);
}

.decision-title {
  color: var(--saas-heading);
  font-size: 1.2rem;
  letter-spacing: -0.02em;
}

.decision-label {
  color: var(--saas-primary);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  font-weight: 700;
}

.decision-text {
  color: var(--saas-body);
  font-size: 1.02rem;
  line-height: 1.75;
}
</style>
