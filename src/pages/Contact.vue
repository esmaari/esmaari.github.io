<template>
  <section class="contact-container py-5">
    <h2 class="mb-4 fw-bold heading-highlight text-center">Get in Touch</h2>

   <!-- Üstte iletişim satırları -->
    <div class="text-center mb-5">
      <p class="mb-3 fs-5">You can reach me directly via:</p>

      <!-- 1. satır: e-posta + mailto link -->
      <div class="d-flex justify-content-center align-items-center gap-2 flex-wrap mb-3">
        <span class="fw-semibold text-black">esmaari.dev@gmail.com</span>
        <a href="mailto:esmaari.dev@gmail.com"
          class="fw-semibold text-decoration-none hover-highlight ms-2">
          Send email ↗
        </a>
      </div>

      <!-- 2. satır: diğer linkler -->
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <a href="https://www.linkedin.com/in/esma-ari/" target="_blank" rel="noopener"
          class="fw-semibold text-decoration-none hover-highlight">
          LinkedIn ↗
        </a>

        <a href="https://github.com/esmaari" target="_blank" rel="noopener"
          class="fw-semibold text-decoration-none hover-highlight">
          GitHub ↗
        </a>

        <a href="https://www.upwork.com/freelancers/~01c9ebe832d863bbaf?mp_source=share"
          target="_blank" rel="noopener"
          class="fw-semibold text-decoration-none hover-highlight">
          Hire me on Upwork ↗
        </a>

      </div>
    </div>


    <!-- Form -->
    <div class="contact-form p-4 highlight-border block-bg rounded">
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label fw-semibold">Your Name</label>
          <input type="text" id="name" class="form-control" v-model="name" required />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label fw-semibold">Your Email</label>
          <input type="email" id="email" class="form-control" v-model="email" required />
        </div>

        <div class="mb-3">
          <label for="message" class="form-label fw-semibold">Your Message</label>
          <textarea id="message" class="form-control" rows="5" v-model="message" required></textarea>
        </div>

        <button type="submit" class="btn-sm custom-btn w-100 fw-bold">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useHead, useSeoMeta } from '@unhead/vue'

  const base = 'https://portfolio-esmaari.netlify.app'
  const og = `${base}/og-preview.png`

  // Canonical + Title
  useHead({
    title: 'Contact | Esma Ari Portfolio',
    link: [{ rel: 'canonical', href: base + '/contact' }]
  })

  // SEO + Social
  useSeoMeta({
    title: 'Contact | Esma Ari Portfolio',
    description: 'Get in touch with Esma Ari — Frontend Developer & Designer based in Munich.',
    ogTitle: 'Contact | Esma Ari',
    ogDescription: 'Reach out for freelance or remote collaboration opportunities.',
    ogType: 'website',
    ogUrl: base + '/contact',
    ogImage: og,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contact | Esma Ari',
    twitterDescription: 'Freelance Frontend Developer & Designer — Contact Page',
    twitterImage: og
  })

  const name = ref('')
  const email = ref('')
  const message = ref('')

  const handleSubmit = () => {
    console.log('Form submitted:', name.value, email.value, message.value)
    alert('Thank you! Your message has been received.')
  }
</script>


<style scoped>
.contact-container {
  background-color: var(--primary-bg);
  color: var(--text-color);
  min-height: 100vh;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.hover-highlight:hover {
  color: var(--highlight-2);
  transition: 0.3s;
}

</style>
