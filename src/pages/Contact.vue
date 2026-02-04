<template>
  <section class="contact-container py-5">
    <h2 class="mb-4 fw-bold heading-highlight text-center">Get in Touch</h2>

    <div class="text-center mb-5">
      <p class="mb-2 fs-5 fw-semibold text-on-primary">Let’s build something together.</p>
      <p class="mb-0 text-muted-on-primary">Send a quick message and I’ll reply within 24–48 hours.</p>
    </div>


    <!-- Form -->
    <div class="contact-form p-4 highlight-border block-bg rounded">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="d-none">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <div class="mb-3">
          <label for="name" class="form-label fw-semibold text-on-primary">Your Name</label>
          <input type="text" id="name" name="name" class="form-control" v-model="name" required />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label fw-semibold text-on-primary">Your Email</label>
          <input type="email" id="email" name="email" class="form-control" v-model="email" required />
        </div>

        <div class="mb-3">
          <label for="message" class="form-label fw-semibold text-on-primary">Your Message</label>
          <textarea id="message" name="message" class="form-control" rows="5" v-model="message" required></textarea>
        </div>

        <button type="submit" class="btn-sm custom-btn w-100 fw-bold" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>

        <p v-if="status === 'error'" class="mt-3 mb-0 text-danger fw-semibold">
          Message could not be sent. Please try again.
        </p>
      </form>
    </div>

    <div class="contact-alt mt-4 text-center">
      <p class="mb-3 text-muted-on-primary">Prefer another channel?</p>
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <a href="https://www.linkedin.com/in/esma-ari/" target="_blank" rel="noopener"
          class="icon-link">
          <Linkedin :size="18" />
          <span>LinkedIn</span>
        </a>
        <a href="https://www.upwork.com/freelancers/~01c9ebe832d863bbaf?mp_source=share"
          target="_blank" rel="noopener"
          class="icon-link">
          <Briefcase :size="18" />
          <span>Upwork</span>
        </a>
        <a href="https://www.malt.de/profile/esmaari"
          target="_blank" rel="noopener"
          class="icon-link">
          <Briefcase :size="18" />
          <span>Malt</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useHead, useSeoMeta } from '@unhead/vue'
  import { Briefcase, Linkedin } from 'lucide-vue-next'

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
  const isSubmitting = ref(false)
  const status = ref<'idle' | 'error'>('idle')
  const router = useRouter()

  const encode = (data: Record<string, string>) =>
    Object.entries(data)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')

  const handleSubmit = async () => {
    isSubmitting.value = true
    status.value = 'idle'

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: name.value,
          email: email.value,
          message: message.value
        })
      })

      if (!response.ok) {
        throw new Error(`Form submit failed with status ${response.status}`)
      }

      name.value = ''
      email.value = ''
      message.value = ''
      await router.push('/thank-you')
    } catch (error) {
      console.error(error)
      status.value = 'error'
    } finally {
      isSubmitting.value = false
    }
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

.icon-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  color: var(--text-color);
  background: var(--block-bg);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.icon-link:hover {
  color: var(--highlight-2);
  border-color: var(--highlight-2);
  transition: 0.3s;
}

.hover-highlight:hover {
  color: var(--highlight-2);
  transition: 0.3s;
}

</style>
