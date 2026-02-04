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
            <img :src="project.image" :alt="`${project.title} Live Version Screenshot`" class="img-fluid rounded shadow" />
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
            v-for="(item, index) in project.gallery"
            :key="index"
              >
                <img
                  :src="item.path"
                  :alt="`${project.title} ${item.name} Design Preview Screenshot`"
                  class="w-100 shadow rounded gallery-image"
                  role="button"
                  @click="openGallery(item)"
                />
            </div>
        </div>
  
        <div
          v-if="activeImage"
          class="gallery-modal"
          role="dialog"
          aria-modal="true"
          @click.self="closeGallery"
        >
          <button class="gallery-close" type="button" @click="closeGallery" aria-label="Close image preview">
            ×
          </button>
          <img
            :src="activeImage.path"
            :alt="`${project.title} ${activeImage.name} Full Preview`"
            class="gallery-modal-image"
          />
          <p class="gallery-caption">{{ activeImage.name }}</p>
        </div>
      </div>
    </section>
  </template>
  
<script setup>
  import { useRoute } from 'vue-router'
  import { computed, watchEffect, ref, onMounted, onBeforeUnmount } from 'vue'
  import { useHead, useSeoMeta } from '@unhead/vue'
  import { projects } from '@/data/projects'

  const base = 'https://esmaari.dev'
  const route = useRoute()

  const project = computed(() =>
    projects.find(p => p.slug === route.params.slug)
  )

  const activeImage = ref(null)

  const openGallery = (item) => {
    activeImage.value = item
  }

  const closeGallery = () => {
    activeImage.value = null
  }

  const onKeydown = (event) => {
    if (event.key === 'Escape') {
      closeGallery()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeydown)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
  })

  // SEO + JSON-LD updates when new project
  watchEffect(() => {
    if (!project?.value) return

    const p = project.value
    const url = `${base}/projects/${p.slug}`
    const og  = p.ogImage ? p.ogImage : (p.image?.startsWith('http') ? p.image : base + p.image)

    // Canonical + Title
    useHead({
      title: `${p.title} | Esma Ari`,
      link: [{ rel: 'canonical', href: url }],
      script: [{
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: p.title,
          url,
          image: og,
          description: p.description || p.longDescription,
          ...(p.technologies ? { programmingLanguage: p.technologies.join(', ') } : {}),
          ...(p.datePublished ? { datePublished: p.datePublished } : {}),
          ...(p.keywords ? { keywords: p.keywords.join(', ') } : {}),
          author: { '@type': 'Person', name: 'Esma Ari', url: base + '/' }
        })
      }]
    })

    // OG / Twitter
    useSeoMeta({
      title: `${p.title} | Esma Ari`,
      description: p.description || p.longDescription,
      ogTitle: `${p.title} | Esma Ari`,
      ogDescription: p.description || p.longDescription,
      ogType: 'article',
      ogUrl: url,
      ogImage: og,
      twitterCard: 'summary_large_image',
      twitterTitle: `${p.title} | Esma Ari`,
      twitterDescription: p.description || p.longDescription,
      twitterImage: og
    })
  })
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
  .gallery-image {
    cursor: zoom-in;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .gallery-image:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }
  .gallery-modal {
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 10, 0.82);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    z-index: 1000;
  }
  .gallery-modal-image {
    max-width: min(1100px, 92vw);
    max-height: 78vh;
    width: auto;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  }
  .gallery-close {
    position: absolute;
    top: 20px;
    right: 24px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: none;
    font-size: 32px;
    line-height: 1;
    padding: 6px 12px;
    border-radius: 999px;
    cursor: pointer;
  }
  .gallery-close:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  .gallery-caption {
    margin-top: 12px;
    color: #f5f5f5;
    font-size: 0.95rem;
    text-align: center;
  }
  </style>
  
