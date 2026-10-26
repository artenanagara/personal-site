<script setup>
import { RouterLink } from 'vue-router';
import { profile, experience, skills, education, organizations } from '../data/cv';

// On cv.artenanagara.com the rest of the site lives on the main domain
const onCvSubdomain = window.location.hostname.startsWith('cv.');

const print = () => window.print();
</script>

<template>
  <div class="cv-page min-h-screen bg-[#F4F4F5] px-4 py-6 text-ink md:py-12">
    <nav class="mx-auto mb-6 flex max-w-[52rem] items-center justify-between text-[15px] print:hidden">
      <a v-if="onCvSubdomain" href="https://artenanagara.com/about" class="u-link">← Back to site</a>
      <RouterLink v-else to="/about" class="u-link">← Back to site</RouterLink>
      <button class="u-link" @click="print">Save as PDF</button>
    </nav>

    <article class="cv-sheet mx-auto max-w-[52rem] bg-white px-6 py-10 md:px-16 md:py-16">
      <!-- Header -->
      <header class="border-b border-ink pb-6">
        <h1 class="text-[clamp(2rem,5vw,3rem)] leading-none tracking-[-0.04em]">{{ profile.name }}</h1>
        <p class="serif-i mt-2 text-[22px]">{{ profile.title }} — {{ profile.focus }}</p>
        <p class="mono-label mt-4 flex flex-wrap gap-x-4 gap-y-1 text-graphite">
          <span>{{ profile.location }}</span>
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          <a :href="`https://${profile.linkedin}`" target="_blank" rel="noopener noreferrer">{{ profile.linkedin }}</a>
          <a :href="`https://${profile.website}`" target="_blank" rel="noopener noreferrer">{{ profile.website }}</a>
        </p>
      </header>

      <section class="cv-section">
        <h2 class="cv-heading">Summary</h2>
        <p class="text-[15px] leading-relaxed">{{ profile.summary }}</p>
      </section>

      <section class="cv-section">
        <h2 class="cv-heading">Work experience</h2>
        <div class="flex flex-col gap-6">
          <div v-for="job in experience" :key="job.role + job.period" class="cv-item">
            <div class="flex flex-col justify-between gap-x-6 md:flex-row md:items-baseline">
              <h3 class="text-[17px] font-medium tracking-[-0.01em]">{{ job.role }} <span class="font-normal text-graphite">— {{ job.company }}</span></h3>
              <span class="mono-label shrink-0 text-graphite">{{ job.period }}</span>
            </div>
            <p class="mono-label mt-0.5 text-graphite">{{ job.location }}</p>
            <ul class="mt-2 list-disc space-y-1 pl-5 text-[14.5px] leading-relaxed marker:text-graphite">
              <li v-for="point in job.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="cv-section">
        <h2 class="cv-heading">Skills</h2>
        <dl class="flex flex-col gap-2 text-[14.5px] leading-relaxed">
          <div v-for="skill in skills" :key="skill.label" class="md:flex md:gap-6">
            <dt class="font-medium md:w-36 md:shrink-0">{{ skill.label }}</dt>
            <dd>{{ skill.value }}</dd>
          </div>
        </dl>
      </section>

      <section class="cv-section">
        <h2 class="cv-heading">Education</h2>
        <div class="cv-item">
          <div class="flex flex-col justify-between gap-x-6 md:flex-row md:items-baseline">
            <h3 class="text-[17px] font-medium tracking-[-0.01em]">{{ education.degree }} <span class="font-normal text-graphite">— {{ education.school }}</span></h3>
            <span class="mono-label shrink-0 text-graphite">{{ education.period }}</span>
          </div>
          <p class="mono-label mt-0.5 text-graphite">GPA {{ education.gpa }}</p>
          <ul class="mt-2 list-disc space-y-1 pl-5 text-[14.5px] leading-relaxed marker:text-graphite">
            <li v-for="point in education.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </section>

      <section class="cv-section">
        <h2 class="cv-heading">Organizational experience</h2>
        <p class="text-[14.5px] leading-relaxed">{{ organizations }}</p>
      </section>
    </article>
  </div>
</template>

<style scoped>
.cv-section {
  margin-top: 2rem;
}

.cv-heading {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-graphite);
  margin-bottom: 0.875rem;
}

@media print {
  .cv-page {
    background: white !important;
    padding: 0 !important;
  }

  .cv-sheet {
    max-width: 100% !important;
    padding: 0 !important;
  }

  .cv-item {
    break-inside: avoid;
  }

  a {
    text-decoration: none !important;
    color: inherit !important;
  }

  @page {
    margin: 1.2cm;
  }
}
</style>
