<template>
  <div class="row gy-4">
    <div class="col-lg-6">
      <h3 class="sub-title mb-2">Technical Outcomes</h3>
      <ul class="outcome-list mb-0">
        <li v-for="(item, index) in technicalOutcomes" :key="`res-tech-${index}`">{{ item }}</li>
      </ul>
    </div>

    <div class="col-lg-6">
      <h3 class="sub-title mb-2">Product Outcomes</h3>
      <ul class="outcome-list mb-0">
        <li v-for="(item, index) in productOutcomes" :key="`res-product-${index}`">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  technicalOutcomes: string[]
  productOutcomes: string[]
}>()
</script>

<style scoped>
.sub-title {
  color: var(--saas-primary);
  font-size: 1.1rem;
  letter-spacing: -0.015em;
  font-weight: 700;
}

.outcome-list {
  padding-left: 1.1rem;
}

.outcome-list li {
  color: var(--saas-body);
  font-size: 1.06rem;
  line-height: 1.85;
  margin-bottom: 0.45rem;
}
</style>
