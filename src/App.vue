<script setup>
import NavigationBar from './components/layout/NavigationBar.vue';
import CustomCursor from './components/ui/CustomCursor.vue';
import { RouterView, useRoute } from 'vue-router'
import Lenis from 'lenis'
import { onMounted, watch, computed } from 'vue';
import { useCursor } from './composables/useCursor';
import { SpeedInsights } from "@vercel/speed-insights/vue";
import { useHead } from '@unhead/vue'

const route = useRoute();
const { resetCursor } = useCursor();

const canonicalUrl = computed(() => {
  const base = window.location.hostname.startsWith('cv.') 
    ? 'https://cv.artenanagara.my.id' 
    : 'https://artenanagara.my.id';
  const path = route.path === '/' ? '' : route.path;
  return `${base}${path}`;
});

useHead({
  titleTemplate: (title) => title ? `${title} | Artena Nagara` : 'Artena Nagara - UI/UX Designer',
  meta: [
    { name: 'author', content: 'Artena Nagara' },
    { property: 'og:site_name', content: 'Artena Nagara' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Arttenna Dhyttya Nagara",
        "alternateName": ["Artena", "Artena Nagara"],
        "jobTitle": "UI/UX Designer",
        "url": "https://artenanagara.my.id",
        "workLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Klaten",
            "addressRegion": "Central Java",
            "addressCountry": "ID"
          }
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Klaten"
          },
          {
            "@type": "City",
            "name": "Surakarta",
            "alternateName": "Solo"
          },
          {
            "@type": "State",
            "name": "Central Java"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/in/artenanagara",
          "https://dribbble.com/artenanagara",
          "https://instagram.com/artenanagara",
          "https://x.com/artenanagara"
        ]
      })
    }
  ]
})


onMounted(() => {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

watch(route, () => {
  resetCursor();
});
</script>

<template>
  <NavigationBar v-if="!route.meta.hideNavigation" />
  <RouterView v-slot="{ Component }">
    <transition :name="route.meta.transition || 'page'" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
  <CustomCursor v-if="!route.meta.hideCursor" />
  <SpeedInsights />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.98) translateY(10px);
}
</style>

