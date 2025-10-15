<template>
  <section class="mx-3 py-5 min-vh-100">
    <h2 class="fw-bold heading-highlight text-center mb-3">Services</h2>

    <p class="text-center mb-5 fs-5">
      I’m currently <span class="fw-semibold">open to freelance, part-time, and full-time opportunities.</span><br />
      Feel free to connect with me on
      <a href="https://www.linkedin.com/in/esma-ari/"
         target="_blank" rel="noopener"
         class="fw-semibold text-decoration-none hover-highlight">
        LinkedIn ↗
      </a>.
    </p>

    <div class="row gy-4">
      <!-- Service Cards -->
      <div class="col-md-4" v-for="(service, i) in services" :key="i">
        <div class="p-4 rounded block-bg highlight-border h-100">
          <h4 class="fw-bold mb-3">{{ service.title }}</h4>
          <p class="mb-0">{{ service.description }}</p>
        </div>
      </div>

      <!-- Upwork Box -->
      <div class="col-md-4">
        <div class="p-4 rounded block-bg highlight-border h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <h4 class="fw-bold mb-3">Hire Me on Upwork</h4>
          <p class="mb-4">Let’s collaborate on your next project through a trusted freelance platform.</p>
          <a href="https://www.upwork.com/freelancers/~01c9ebe832d863bbaf?mp_source=share"
             target="_blank" rel="noopener"
             class="fw-semibold text-decoration-none hover-highlight fs-5">
            Go to Upwork Profile ↗
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Landing Page Design & Development',
    description: 'Modern, responsive landing pages built with Vue or React — optimized for performance, accessibility, and conversions.'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal or professional portfolio websites with a clean design and strong visual identity, built using Vue or Tailwind CSS.'
  },
  {
    title: 'Website Redesign & UI Improvements',
    description: 'Transform outdated designs into modern, user-friendly interfaces that enhance the overall user experience.'
  },
  {
    title: 'Custom Components (Vue / React)',
    description: 'Reusable and scalable UI components crafted with Vue 3 or React, fully tailored for your brand and app logic.'
  },
  {
    title: 'Design to Code Conversion',
    description: 'Pixel-perfect implementation of Figma or Adobe XD designs into responsive, maintainable front-end code.'
  }
]
</script>

<style scoped>
.block-bg {
  background-color: var(--block-bg);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
}
</style>
