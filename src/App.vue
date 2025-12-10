<script setup>
import NavigationBar from './components/layout/NavigationBar.vue';
import CustomCursor from './components/ui/CustomCursor.vue';
import { RouterView, useRoute } from 'vue-router'
import Lenis from 'lenis'
import { onMounted, watch } from 'vue';
import { useCursor } from './composables/useCursor';
import { SpeedInsights } from "@vercel/speed-insights/vue";
const route = useRoute();
const { resetCursor } = useCursor();

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
  <RouterView v-slot="{ Component }">
    <transition :name="route.meta.transition || 'page'" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
  <NavigationBar v-if="!route.meta.hideNavigation" />
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

