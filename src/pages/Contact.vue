<template>
  <section class="contact-container py-5">
    <h2 class="mb-4 fw-bold heading-highlight text-center">Get in Touch</h2>

    <div class="contact-form p-4 highlight-border block-bg rounded">
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label fw-semibold">Your Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model="name"
            required
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label fw-semibold">Your Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="email"
            required
          />
        </div>

        <div class="mb-3">
          <label for="message" class="form-label fw-semibold">Your Message</label>
          <textarea
            id="message"
            class="form-control"
            rows="5"
            v-model="message"
            required
          ></textarea>
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
</style>
