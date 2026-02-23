<template>
  <div class="meta-grid">
    <div class="meta-item" v-for="item in items" :key="item.label">
      <p class="meta-label">{{ item.label }}</p>
      <p class="meta-value">{{ item.value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  metaInfo: {
    role: string
    timeline: string
    stack: string
    focus: string
    projectType: string
  }
}>()

const items = computed(() => [
  { label: 'Role', value: props.metaInfo.role },
  { label: 'Timeline', value: props.metaInfo.timeline },
  { label: 'Stack', value: props.metaInfo.stack },
  { label: 'Focus', value: props.metaInfo.focus },
  { label: 'Project Type', value: props.metaInfo.projectType }
])
</script>

<style scoped>
.meta-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
}

.meta-item {
  padding: 0.85rem 0.9rem;
  background: rgba(167, 139, 250, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.4);
}

.meta-label {
  margin: 0 0 0.2rem;
  color: var(--saas-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  font-weight: 700;
}

.meta-value {
  margin: 0;
  color: var(--saas-body);
  font-size: 0.9rem;
  line-height: 1.55;
}

@media (max-width: 1199px) {
  .meta-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 991px) {
  .meta-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575px) {
  .meta-grid {
    grid-template-columns: 1fr;
  }
}
</style>
