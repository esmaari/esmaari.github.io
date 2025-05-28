<template>
  <section class="mx-3 py-5 min-vh-100">
    <div class="row gy-4">

      <!-- Work Experience -->
      <div class="col-sm-12 col-md-12 col-lg-8 col-xl-6">
        <div class="p-4 rounded block-bg h-100 highlight-border">
          <h2 class="fw-bold mb-3">
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-2)">Work Experience</span>
          </h2>

          <p class="mb-3">
            <strong>Frontend Web Developer / Designer</strong><br />
            Netformic GmbH, Stuttgart (Remote) — <em>Jul 2023 – Feb 2025</em><br />
            Developed responsive e-commerce platforms using Pimcore, Tailwind CSS, Bootstrap, and Alpine.js. Created design systems with PatternLab and improved UX with the design team. Participated in client meetings and code reviews.
          </p>

          <p class="mb-3">
            <strong>Frontend Web Developer / Designer</strong><br />
            Pharma4u GmbH, Munich — <em>Jun 2018 – Jun 2023</em><br />
            Designed and developed SPAs using Vue.js, Material Design, and Tailwind CSS. Created wireframes and prototypes, and led testing with Cypress. Collaborated across teams to improve the app experience.
          </p>

          <p class="mb-3">
            <strong>Web Designer</strong><br />
            Bavarian State Library, Munich — <em>Nov 2016 – Nov 2017</em><br />
            Contributed to website relaunches, created responsive layouts with Bootstrap, and built Typo3 templates. Used Selenium for testing.
          </p>

          <p class="mb-0">
            <strong>Project Assistant</strong><br />
            VirtualWorks GmbH, Munich — <em>Jun 2016 – Jul 2016</em><br />
            Developed a Turkish electronic lexicon and synonym database for e-commerce usability.
          </p>
        </div>
      </div>

      <!-- Portrait -->
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="p-0 rounded block-bg h-100 overflow-hidden">
          <img src="@/assets/esma.jpeg" alt="Esma Ari" class="img-cover" />
        </div>
      </div>

      <!-- Education -->
      <div class="col-sm-12 col-md-6 col-lg-12 col-xl-3">
        <div class="p-4 rounded block-bg h-100 highlight-border">
          <h3 class="fw-bold mb-3">
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-3)">Education</span>
          </h3>
          <p class="mb-2">
            <strong>B.Sc. in Computational Linguistics</strong><br />
            Ludwig Maximilian University of Munich (2011–2016)<br />
            Minor: Language, Literature & Culture
          </p>
          <p class="mb-2">
            <strong>Studienkolleg</strong><br />
            Pre-University Studies, Munich (2010–2011)
          </p>
          <p class="mb-2">
            <strong>Burhan Felek High School</strong><br />
            Istanbul, Turkey (2004–2007)
          </p>
        </div>
      </div>

      <!-- Key Skills -->
      <div class="col-lg-6">
        <div class="p-4 rounded block-bg h-100">
          <h3 class="fw-bold mb-3">
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-4)">Key Skills</span>
          </h3>
          <ul class="mb-0 ps-3">
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, Vue.js, Tailwind CSS, Bootstrap, Pimcore, Twig</li>
            <li><strong>Tools:</strong> Git, JIRA, Adobe XD, Figma, PatternLab</li>
            <li><strong>Testing:</strong> Cypress, Browserstack</li>
            <li><strong>Web:</strong> Responsive Design, REST APIs, Cross-Browser Compatibility</li>
          </ul>
        </div>
      </div>

      <!-- Certifications & Languages -->
      <div class="col-lg-6">
        <div class="p-4 rounded block-bg h-100">
          <h3 class="fw-bold mb-3">
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-1)">Certifications & Languages</span>
          </h3>
          <p class="mb-2"><strong>Certifications:</strong> Google UX Design, JavaScript, PHP with MySQL</p>
          <p class="mb-0"><strong>Languages:</strong> German (Fluent), English (Fluent), Turkish (Native), Thai (Beginner)</p>
        </div>
      </div>

      <!-- Hobbies -->
      <div class="col-lg-4">
        <div class="p-4 rounded block-bg h-100 highlight-border">
          <h3 class="fw-bold mb-3">
            <span class="px-2 rounded text-black" style="background-color: var(--highlight-1)">Hobbies</span>
          </h3>
          <ul class="ps-3 mb-0">
            <li>Filmmaking & cinematic storytelling</li>
            <li>Drawing and illustration</li>
            <li>Blogging & digital content creation</li>
            <li>Learning Thai language & culture</li>
          </ul>
        </div>
      </div>

      <div class="col-lg-2">
        <div class="p-0 rounded block-bg h-100 overflow-hidden">
          <img src="@/assets/esma.jpeg" alt="Esma Ari" class="img-cover" />
        </div>
      </div>

      <!-- Values -->
      <div class="col-lg-3 col-md-6">
        <div class="p-4 rounded block-bg h-100">
          <h6 class="label mb-2">Tools I Love:</h6>
          <ul class="ps-3 mb-0">
            <li>Vue.js & Tailwind</li>
            <li>Figma</li>
          </ul>
          <h6 class="label mt-3">Strengths at Work:</h6>
          <ul class="ps-3 mb-0">
            <li>Fast learner</li>
            <li>Detail-oriented</li>
            <li>Cross-functional collaboration</li>
          </ul>
        </div>
      </div>

      <!-- Quote -->
      <div class="col-lg-3 col-md-6">
        <div class="p-4 rounded block-bg h-100 highlight-border d-flex flex-column ">
          <h6 class="label mb-2">My Creative Principles:</h6>
          <ul class="ps-3 mb-0">
            <li>Storytelling through design</li>
            <li>Human-centered thinking</li>
            <li>Attention to visual rhythm</li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

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
