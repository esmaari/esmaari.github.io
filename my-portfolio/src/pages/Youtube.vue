<template>
  <section class="youtube py-5 min-vh-100">
    <div class="container">
      <h2 class="text-center mb-5 fw-bold display-6 heading-highlight">My YouTube Videos</h2>

      <div class="row gy-4 justify-content-center">
        <div
          class="col-md-6 col-lg-5"
          v-for="(video, index) in videos"
          :key="index"
        >
          <div class="p-3 rounded block-bg h-100 shadow-sm highlight-border">
            <div class="ratio ratio-16x9 mb-3 rounded overflow-hidden">
              <iframe
                :src="`https://www.youtube.com/embed/${video.id}`"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <h5 class="fw-bold text-center">{{ video.title }}</h5>
          </div>
        </div>
      </div>

      <div class="text-center mt-5">
        <button
          href="https://www.youtube.com/@esmaActs"
          target="_blank"
          class="custom-btn btn-lg fw-bold"
        >
        Visit My Channel ↗
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const videos = [
  {
    id: 'jicAutSuyhw',
    title: 'Daily Vlogs: The Dreamer King'
  },
  {
    id: 'QcRlX1o4HBc',
    title: 'Cinematic: A Place That Stayed'
  }
]
</script>

<style scoped>
.block-bg {
  background-color: var(--block-bg);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
}
.heading-highlight {
  color: var(--highlight-4);
}
</style>
