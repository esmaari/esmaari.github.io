<template>
    <section class="project-detail py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <h1 class="fw-bold display-5 mb-3 text-dark">{{ project.title }}</h1>
            <p class="lead text-muted">{{ project.description }}</p>
            <p>{{ project.longDescription }}</p>
  
            <div class="mt-4 d-flex flex-wrap align-items-center">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                class="github-btn fw-bold me-3 mb-2"
              >
                GitHub
              </a>
  
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener"
                class="custom-btn fw-bold mb-2"
              >
                Live Site ↗
              </a>
            </div>
          </div>
  
          <div class="col-md-6 text-center">
            <img :src="project.image" :alt="project.title" class="img-fluid rounded shadow" />
          </div>
        </div>
  
        <div v-if="project.technologies" class="row mt-5">
          <div class="col text-center">
            <p class="text-muted mb-2">Technologies Used:</p>
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="badge bg-secondary me-2"
            >
              {{ tech }}
            </span>
          </div>
        </div>
  
        <div v-if="project.gallery && project.gallery.length" class="row mt-5">
          <h5 class="text-center mb-4">Design Preview Gallery</h5>
          <div
            class="col-lg-4 col-md-6 mb-4"
            v-for="(img, index) in project.gallery"
            :key="index"
          >
            <img :src="img" class="w-100 shadow rounded" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  import { projects } from '@/data/projects'
  
  const route = useRoute()
  const project = computed(() =>
    projects.find((p) => p.slug === route.params.slug)
  )
  </script>
  
  <style scoped>
  .project-detail {
    background: linear-gradient(135deg, #f8f4f9, #f4fcf9);
    min-height: 100vh;
    color: #333;
  }
  .lead {
    font-style: italic;
  }
  </style>
  