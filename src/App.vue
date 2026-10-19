<script setup>
import NavigationBar from './components/layout/NavigationBar.vue';
import CustomCursor from './components/ui/CustomCursor.vue';
import { RouterView, useRoute } from 'vue-router'
import Lenis from 'lenis'
import { onMounted, watch } from 'vue';
import { useCursor } from './composables/useCursor';

const route = useRoute();
const { resetCursor } = useCursor();
let lenis = null;

// Every navigation starts at the top. Runs once the old page has faded out,
// and resets Lenis too so its eased position doesn't drag the page back down.
const scrollToTop = () => {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  window.scrollTo(0, 0);
};

onMounted(() => {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  lenis = new Lenis({ lerp: 0.09 })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

watch(route, () => {
  resetCursor();
  // The CV page paints the body white; restore the paper background elsewhere.
  if (route.name !== 'cv') document.body.style.backgroundColor = '';
});
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition :name="route.meta.transition || 'page'" mode="out-in" @after-leave="scrollToTop">
      <component :is="Component" :key="route.path" />
    </transition>
  </RouterView>
  <NavigationBar v-if="!route.meta.hideNavigation" />
  <CustomCursor v-if="!route.meta.hideCursor" />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
