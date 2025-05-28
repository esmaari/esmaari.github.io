<template>
  <section class="mx-3 py-5 min-vh-100">
    <div class="row gy-4">
      <!-- Başlık -->
      <div class="col-md-6 col-lg-6">
        <div class="p-4 rounded block-bg h-100">
          <h1 class="fw-bold display-5">
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-1)">Developer.</span><br />
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-2)">Designer.</span><br />
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-3)">Programmer.</span><br />
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-4)">Youtuber.</span>
          </h1>
        </div>
      </div>

      <!-- Görsel -->
      <div class="col-md-6 col-lg-3">
        <div class="p-0 rounded block-bg h-100 overflow-hidden">
          <img src="@/assets/esma.jpeg" alt="Esma Ari" class="img-cover" />
        </div>
      </div>

      <!-- Projeler -->
      <div class="col-lg-3">
        <div class="p-4 rounded block-bg h-100 highlight-border">
          <h4 class="mb-3 heading-highlight">Latest Projects</h4>
          <div v-for="(project, index) in latestProjects" :key="index" class="mb-2">
            <a :href="project.link" target="_blank" class="text-black text-decoration-none">{{ project.title }}</a>
          </div>
          <router-link to="/portfolio" class="d-block mt-3 text-black text-decoration-none hover-highlight fw-bold">
            View All Projects ↗
          </router-link>
        </div>
      </div>

      <!-- Biyografi -->
      <div class="col-md-6">
        <div class="p-4 rounded block-bg highlight-border h-100">
          <p>
            Esma Ari is a creative who merges digital design with frontend development. She brings imagination to life through technology.
          </p>
        </div>
      </div>

      <!-- Contact -->
      <div class="col-md-3">
        <div class="p-4 rounded block-bg h-100 d-grid">
          <p class="label mb-2">Have some questions?</p>
          <router-link to="/contact" class="text-black text-decoration-none fs-5 fw-bold hover-highlight">
            Contact me ↗
          </router-link>
        </div>
      </div>

      <!-- Sosyal Medya -->
      <div class="col-md-3">
        <div class="p-3 rounded block-bg highlight-border h-100 d-flex flex-column justify-content-center">
          <a href="https://www.linkedin.com/in/esma-ari/" class="text-black text-decoration-none fw-bold hover-highlight mb-1">LINKEDIN</a>
          <a href="https://github.com/esmaari" class="text-black text-decoration-none fw-bold hover-highlight mb-1">GITHUB</a>
          <a href="https://www.instagram.com/esma.acts/" class="text-black text-decoration-none fw-bold hover-highlight mb-1">INSTAGRAM</a>
          <a href="https://www.youtube.com/@esmaActs" class="text-black text-decoration-none fw-bold hover-highlight">YOUTUBE</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '@/data/projects'
const latestProjects = projects.slice(0, 3)
</script>

<style scoped>
.block-bg {
  background-color: var(--block-bg);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
}
.label {
  font-size: 0.9rem;
  color: var(--subtle-text);
}
</style>
