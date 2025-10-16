<template>
  <section class="mx-3 py-5 min-vh-100">
    <div class="row gy-4">
      <!-- Başlık -->
      <div class="col-md-6 col-lg-6">
        <div class="p-4 rounded block-bg h-100 d-flex flex-column justify-content-between">
          <h1 class="fw-bold display-5">
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-1)">Frontend Developer.</span><br />
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-2)">UI Designer.</span><br />
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-3)">Content Creator.</span><br />
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-4)">Storyteller.</span>
          </h1>

           <p class="mt-3 fs-5">
            <span class="fw-semibold">Freelance Frontend Developer</span> — available for remote projects.
            <a href="https://www.upwork.com/freelancers/~01c9ebe832d863bbaf?mp_source=share"
              target="_blank" rel="noopener"
              class="fw-semibold text-decoration-none hover-highlight ms-2">
              Hire me on Upwork ↗
            </a>
          </p>

        </div>
      </div>

      <!-- Görsel -->
      <div class="col-md-6 col-lg-3">
        <div class="p-0 rounded block-bg h-100 overflow-hidden">
          <img src="@/assets/esma.jpeg" alt="Esma Ari — Frontend Developer & Designer professional headshot" class="img-cover" />
        </div>
      </div>

      <!-- Projeler -->
      <div class="col-lg-3">
        <div class="p-4 rounded block-bg h-100 highlight-border">
          <h4 class="mb-3 heading-highlight">Latest Projects</h4>

          <div v-for="(project, index) in latestProjects" :key="index" class="mb-3">
            <router-link
              :to="project.route"
              class="text-black text-decoration-none d-block mb-1"
            >
              {{ project.title }}
            </router-link>

            <div class="d-flex flex-column">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener"
                class="text-decoration-none small text-black"
              >
              </a>
            </div>
          </div>

          <router-link
            to="/portfolio"
            class="d-block mt-3 text-black text-decoration-none hover-highlight fw-bold"
          >
            View All Projects ↗
          </router-link>
        </div>
      </div>


      <!-- Biyografi -->
      <div class="col-md-6">
        <div class="p-4 rounded block-bg highlight-border h-100 d-flex align-items-center">
          <p>
          Esma Ari is a <strong>mid-senior freelance frontend developer</strong> specializing in 
          <strong>Vue, TypeScript, and UI design</strong>. and currently diving into <strong>React.</strong></p>
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
          <a href="https://www.youtube.com/@esmaacts90" class="text-black text-decoration-none fw-bold hover-highlight">YOUTUBE</a>
          <a href="https://www.upwork.com/freelancers/~01c9ebe832d863bbaf?mp_source=share" target="_blank" rel="noopener" class="text-black text-decoration-none fw-bold hover-highlight">UPWORK</a>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { projects } from '@/data/projects'
  import { useHead, useSeoMeta } from '@unhead/vue'

  const base = 'https://portfolio-esmaari.netlify.app'
  const og   = `${base}/og-preview.png` // OG görselinin mutlak URL’i

  // Canonical
  useHead({
    title: 'Home | Esma Ari Portfolio',
    link: [{ rel: 'canonical', href: base + '/' }]
  })

  // SEO + Social
  useSeoMeta({
    title: 'Home | Esma Ari Portfolio',
    description: 'Frontend Developer & Designer specializing in Vue.js, TypeScript, and modern UI design.',
    // Open Graph
    ogTitle: 'Esma Ari Portfolio',
    ogDescription: 'Explore Esma Ari’s latest frontend projects, UI designs, and creative works.',
    ogType: 'website',
    ogUrl: base + '/',
    ogImage: og,
    // Twitter
    twitterCard: 'summary_large_image',
    twitterTitle: 'Esma Ari | Frontend Developer & Designer',
    twitterDescription: 'Frontend • Vue • TypeScript • UI/UX',
    twitterImage: og
  })

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
