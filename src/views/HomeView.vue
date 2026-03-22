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
import { defineAsyncComponent } from 'vue';
import HeroSection from '../components/home/HeroSection.vue';
import { useHead } from '@unhead/vue'

const AboutSection = defineAsyncComponent(() => import('../components/home/AboutSection.vue'));
const SelectedWorks = defineAsyncComponent(() => import('../components/home/SelectedWorks.vue'));
const MarqueeSection = defineAsyncComponent(() => import('../components/home/MarqueeSection.vue'));
const FooterSection = defineAsyncComponent(() => import('../components/layout/FooterSection.vue'));

useHead({
  title: 'Artena Nagara - Simplicity, crafted for modern brands',
  titleTemplate: null, // Override template for home to be exact
  meta: [
    { name: 'description', content: 'Simplicity, crafted for modern brands. Artena Nagara is a UI/UX designer & freelancer building intuitive, visually stunning digital experiences. View portfolio and recent works.' },
    { name: 'keywords', content: 'ui ux designer portfolio, ui ux designer indonesia, freelance ui ux designer, web designer portfolio, artena nagara, minimalist ui design, product designer, simplicity crafted for modern brands' },
    { property: 'og:title', content: 'UI/UX Designer Portfolio — Artena Nagara' },
    { property: 'og:description', content: 'Simplicity, crafted for modern brands. UI/UX designer & freelancer creating intuitive digital experiences for modern businesses worldwide.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Artena Nagara — UI/UX Designer Portfolio",
        "url": "https://artenanagara.my.id",
        "description": "Simplicity, crafted for modern brands. UI/UX designer portfolio by Artena Nagara.",
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
