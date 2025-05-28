<template>
  <section class="sinevega-detail py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left: Text -->
        <div class="col-md-6 mb-4 mb-md-0">
          <h1 class="fw-bold display-5 mb-3 text-dark">SineVega</h1>
          <p class="lead text-muted">
            It started as a simple search on a quiet night.  
            But I realized... I wasn't looking for a movie—  
            I was trying to record myself.
          </p>
          <p>
            This project was built with Vue 3 and uses the TMDb API in real time.  
            You can search for movies and create your own favorites list.
          </p>
          <div class="mt-4">
            <a
              href="https://github.com/esmaari/sinevega"
              target="_blank"
              class="github-btn fw-bold me-3"
            >
              GitHub
            </a>
            <button
              href="https://sinevega.netlify.app"
              target="_blank"
              class="custom-btn fw-bold"
            >
              Live Demo ↗
            </button>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="col-md-6 text-center">
          <img
            src="@/assets/sinevega-preview.png"
            alt="SineVega Screenshot"
            class="img-fluid rounded shadow"
          />
        </div>
      </div>

      <!-- Technologies -->
      <div class="row mt-5">
        <div class="col text-center">
          <p class="text-muted mb-2">Technologies Used:</p>
          <span class="badge bg-secondary me-2">Vue 3</span>
          <span class="badge bg-secondary me-2">TMDb API</span>
          <span class="badge bg-secondary me-2">Pinia</span>
          <span class="badge bg-secondary">Bootstrap</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sinevega-detail {
  background: linear-gradient(135deg, #fdecef, #f8f4f9);
  min-height: 100vh;
  color: #333;
}
.lead {
  font-style: italic;
}
</style>
