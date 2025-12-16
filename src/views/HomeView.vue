<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SelectedWorks />
    <MarqueeSection />
    <FooterSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue';
import AboutSection from '../components/home/AboutSection.vue';
import SelectedWorks from '../components/home/SelectedWorks.vue';
import MarqueeSection from '../components/home/MarqueeSection.vue';
import FooterSection from '../components/layout/FooterSection.vue';
import { useHead } from '@unhead/vue'

useHead({
  title: 'Artena Nagara - UI/UX Designer',
  titleTemplate: null, // Override template for home to be exact
  meta: [
    { name: 'description', content: 'Artena Nagara is a UI/UX Designer specializing in creating intuitive and visually stunning digital experiences. View portfolio and recent works.' },
    { property: 'og:title', content: 'Artena Nagara - UI/UX Designer' },
    { property: 'og:description', content: 'Artena Nagara is a UI/UX Designer specializing in creating intuitive and visually stunning digital experiences. View portfolio and recent works.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Artena Nagara Portfolio",
        "url": "https://artenanagara.my.id",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://artenanagara.my.id/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }
  ]
})

</script>
