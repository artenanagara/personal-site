<script setup>
import NavigationBar from './components/layout/NavigationBar.vue';
import CustomCursor from './components/ui/CustomCursor.vue';
import { RouterView, useRoute } from 'vue-router'
import Lenis from 'lenis'
import { onMounted, watch } from 'vue';
import { useCursor } from './composables/useCursor';

const route = useRoute();
const { resetCursor } = useCursor();

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const lenis = new Lenis({ lerp: 0.09 })

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
    <transition :name="route.meta.transition || 'page'" mode="out-in">
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
