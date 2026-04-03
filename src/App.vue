<script setup>
import NavigationBar from './components/layout/NavigationBar.vue';
import CustomCursor from './components/ui/CustomCursor.vue';
import PreloaderScreen from './components/ui/PreloaderScreen.vue';
import { RouterView, useRoute } from 'vue-router'
import Lenis from 'lenis'
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { useCursor } from './composables/useCursor';
import { SpeedInsights } from "@vercel/speed-insights/vue";
import { useHead } from '@unhead/vue'

const showPreloader = ref(!sessionStorage.getItem('visited'))

const onPreloaderDone = () => {
  showPreloader.value = false
  sessionStorage.setItem('visited', '1')
}

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
  titleTemplate: (title) => title ? `${title} - Artena Nagara` : 'Artena Nagara',
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
        "description": "Simplicity, crafted for modern brands. Freelance UI/UX designer & frontend developer creating intuitive digital experiences for modern businesses.",
        "url": "https://artenanagara.my.id",
        "image": "https://artenanagara.my.id/og-image.jpg",
        "knowsAbout": ["UI Design", "UX Design", "Frontend Development", "Figma", "Web Design", "Product Design", "Minimalist Design"],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "UI/UX Designer",
          "occupationLocation": {
            "@type": "Country",
            "name": "Indonesia"
          },
          "skills": "UI Design, UX Design, Figma, Frontend Development, Web Design"
        },
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
          { "@type": "City", "name": "Klaten" },
          { "@type": "City", "name": "Surakarta", "alternateName": "Solo" },
          { "@type": "State", "name": "Central Java" },
          { "@type": "Country", "name": "Indonesia" }
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


let lenisInstance = null;
let lenisRafId = null;

onMounted(() => {
  lenisInstance = new Lenis({
    duration: 2.6,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    lenisInstance.raf(time);
    lenisRafId = requestAnimationFrame(raf);
  }

  lenisRafId = requestAnimationFrame(raf);
});

onUnmounted(() => {
  if (lenisRafId) cancelAnimationFrame(lenisRafId);
  if (lenisInstance) lenisInstance.destroy();
});

watch(route, () => {
  resetCursor();
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true });
  }
});
</script>

<template>
  <PreloaderScreen v-if="showPreloader" @done="onPreloaderDone" />
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
.page-leave-active {
  transition: opacity 0.6s ease;
}
.page-leave-to {
  opacity: 0;
}

.page-enter-active {
  transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(32px);
}
</style>

