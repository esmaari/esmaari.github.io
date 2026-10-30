<template>
  <section class="section-spacious creating-page min-vh-100">
    <div class="page-shell creating-shell">
      <header class="creating-hero">
        <p class="hero-label mb-2">Creating</p>
        <h1 class="creating-title mb-3">Two Instagrams, a new YouTube, and one scene from class.</h1>
        <p class="creating-lead mb-0">
          I shoot and caption my own account. I keep the calendar and the edits for Uranyen Astroloji Derneği.
          YouTube is the channel I just opened. The last one is a scene we shot in a camera acting course.
        </p>
      </header>

      <div class="channel-list">
        <article class="channel-card channel-card--pink">
          <p class="channel-kicker">Mine</p>
          <h2>kozmiktarotesma</h2>
          <p>The account I shoot and caption myself. Drawing, film stills, and whatever I am in the middle of.</p>
          <a class="channel-link" href="https://www.instagram.com/kozmiktarotesma/" target="_blank" rel="noopener noreferrer">Open Instagram</a>
        </article>

        <article class="channel-card channel-card--aqua">
          <p class="channel-kicker">For someone else</p>
          <h2>Uranyen Astroloji Derneği</h2>
          <p>Not my name on it. I keep the calendar, cut the clips, and make sure it keeps posting.</p>
          <a class="channel-link" href="https://www.instagram.com/uranyenastrolojidernegi/" target="_blank" rel="noopener noreferrer">Open Instagram</a>
        </article>

        <article class="channel-card channel-card--sky">
          <p class="channel-kicker">Just started</p>
          <h2>esmavlogs90</h2>
          <p>The channel I just opened. It will look thin until there is more to show.</p>
          <a class="channel-link" href="https://www.youtube.com/@esmavlogs90" target="_blank" rel="noopener noreferrer">Open YouTube</a>
        </article>

        <article class="channel-card channel-card--lilac">
          <p class="channel-kicker">On camera</p>
          <h2>A scene from class</h2>
          <p>A scene we shot in a camera acting course I took.</p>
          <a class="channel-link" href="https://www.youtube.com/watch?v=L4Oy4uQ3sUo" target="_blank" rel="noopener noreferrer">Watch the scene</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from '@unhead/vue'

const base = 'https://esmaari.dev'
const og = `${base}/og-preview.png`

useHead({
  title: 'Creating | Esma Ari',
  link: [{ rel: 'canonical', href: base + '/creating' }]
})

useSeoMeta({
  title: 'Creating | Esma Ari',
  description: 'Esma Ari’s Instagram, the Uranyen Astroloji Derneği account she manages, her YouTube channel, and a scene from a camera acting course.',
  ogTitle: 'Creating | Esma Ari',
  ogDescription: 'Instagram and a new YouTube channel, beside the frontend work.',
  ogType: 'website',
  ogUrl: base + '/creating',
  ogImage: og,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Creating | Esma Ari',
  twitterDescription: 'Two Instagrams and a new YouTube channel.',
  twitterImage: og
})
</script>

<style scoped>
.creating-shell {
  max-width: 860px;
}

.creating-title {
  font-size: clamp(2.4rem, 6vw, 4.4rem);
  max-width: 16ch;
}

.creating-lead {
  max-width: 62ch;
  color: var(--text-muted);
  font-size: 1.08rem;
}

.channel-list {
  margin-top: 3.5rem;
  display: grid;
  gap: 1.25rem;
}

.channel-card {
  background: var(--surface);
  border-radius: 18px;
  padding: 1.5rem 1.5rem 1.35rem 1.4rem;
  border: 1px solid rgba(176, 132, 168, 0.28);
  box-shadow: 0 10px 28px rgba(92, 61, 85, 0.06);
}

.channel-card--pink {
  border-left: 6px solid var(--pink);
}

.channel-card--aqua {
  border-left: 6px solid var(--aqua);
}

.channel-card--sky {
  border-left: 6px solid var(--sky);
}

.channel-card--lilac {
  border-left: 6px solid var(--accent);
}

.channel-kicker {
  margin-bottom: 0.35rem;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8a6a78;
}

.channel-card h2 {
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  margin-bottom: 0.6rem;
}

.channel-card p {
  margin-bottom: 0.4rem;
}

.channel-link {
  display: inline-block;
  margin-top: 0.8rem;
  font-weight: 650;
  color: var(--primary);
  text-decoration: none;
}

.channel-link:hover {
  color: var(--interactive);
}
</style>
