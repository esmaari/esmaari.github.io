<template>
  <section class="section-spacious contact-container min-vh-100">
    <div class="page-shell">
      <header class="contact-hero pe-xl-5">
        <p class="hero-label mb-2">Contact</p>
        <h1 class="contact-title fw-bold mb-3">Let’s plan the next reliable frontend system.</h1>
        <p class="contact-lead">
          Share the goals, constraints, and delivery timeline you have in mind so I can suggest a structured plan
          for architecture, implementation, and collaboration.
        </p>
        <div class="contact-lead-underline"></div>
      </header>

      <div class="contact-grid">
        <div class="contact-info">
          <p class="contact-meta-label">Working scope</p>
          <p class="contact-meta">
            Product-focused frontend systems, design-to-code flows, and hands-on collaboration with product, design,
            and engineering stakeholders.
          </p>

          <div class="contact-details">
            <div>
              <p class="contact-meta-label mb-1">Email</p>
              <a href="mailto:esmaari.dev@gmail.com" class="contact-link">esmaari.dev@gmail.com</a>
            </div>
            <div>
              <p class="contact-meta-label mb-1">Location</p>
              <p class="contact-meta">Munich · Remote · Global</p>
            </div>
          </div>

          <div class="contact-alt">
            <p class="contact-meta-label mb-2">Prefer another channel?</p>
            <div class="contact-alt-links">
              <a href="https://www.linkedin.com/in/esma-ari/" target="_blank" rel="noopener" class="contact-link">
                <Linkedin :size="18" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.upwork.com/freelancers/~01c9ebe832d863bbaf?mp_source=share" target="_blank" rel="noopener" class="contact-link">
                <Briefcase :size="18" />
                <span>Upwork</span>
              </a>
              <a href="https://www.malt.de/profile/esmaari" target="_blank" rel="noopener" class="contact-link">
                <Briefcase :size="18" />
                <span>Malt</span>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form-shell">
          <form
            name="contact"
            method="POST"
            action="/thank-you.html"
            netlify
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p class="d-none">
              <label>
                Don’t fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>

            <div class="mb-3">
              <label for="name" class="form-label fw-semibold">Your Name</label>
              <input type="text" id="name" name="name" class="form-control" required />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label fw-semibold">Your Email</label>
              <input type="email" id="email" name="email" class="form-control" required />
            </div>

            <div class="mb-4">
              <label for="message" class="form-label fw-semibold">Message</label>
              <textarea id="message" name="message" class="form-control" rows="5" required></textarea>
            </div>

            <button type="submit" class="custom-btn w-100 fw-bold">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useHead, useSeoMeta } from '@unhead/vue'
  import { Briefcase, Linkedin } from 'lucide-vue-next'

  const base = 'https://esmaari.dev'
  const og = `${base}/og-preview.png`

  useHead({
    title: 'Contact | Esma Ari Portfolio',
    link: [{ rel: 'canonical', href: base + '/contact' }]
  })

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
</script>

<style scoped>
.contact-container {
  background: #ffffff;
}

.contact-grid {
  margin-top: clamp(3.5rem, 5vw, 4.5rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(2rem, 3vw, 3.5rem);
}

.contact-hero {
  max-width: 760px;
}

.contact-title {
  text-align: left;
  font-size: clamp(2.5rem, 4vw, 3.6rem);
  letter-spacing: -0.03em;
  color: var(--text);
}

.contact-lead {
  max-width: 58ch;
  line-height: 1.75;
  color: var(--text-muted);
}

.contact-lead-underline {
  width: 72px;
  height: 3px;
  background: var(--accent);
  margin-top: 1.4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-meta-label {
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #64748b;
}

.contact-meta {
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 60ch;
}

.contact-details {
  border-top: 1px solid rgba(167, 139, 250, 0.3);
  padding-top: 1.35rem;
  display: grid;
  gap: 1rem;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--primary);
  font-weight: 600;
  transition: color 200ms ease;
}

.contact-link:hover {
  color: var(--interactive);
}

.contact-alt-links {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.contact-form-shell {
  padding: 2.5rem;
  background: var(--surface);
  border: 1px solid rgba(167, 139, 250, 0.35);
  border-radius: 0.35rem;
  box-shadow: 0 20px 55px rgba(30, 41, 59, 0.09);
}

.contact-form-shell form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact-form-shell .custom-btn {
  margin-top: 0.5rem;
}
</style>
