<template>
  <RouterLink 
    :to="`/work/${project.id}`"
    @mouseenter="isHovering = true" 
    @mouseleave="isHovering = false"
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: delay * 1000, ease: [0.22, 1, 0.36, 1] } }"
    :delay="delay * 1000"
    class="block group cursor-pointer"
  >
    <div 
      class="w-full relative mb-3 overflow-hidden bg-gray-200 aspect-[4/3]"
    >
      <img 
        :src="project.cover.hover" 
        :alt="project.title + ' Hover'"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        :class="{
          'translate-x-0 opacity-100': isHovering,
          'translate-x-full opacity-0': !isHovering,
        }"
      />

      <div
        class="absolute inset-0 bg-black/0 transition-colors duration-400"
        :class="{ 'bg-black/10': isHovering }"
      ></div>
    </div>

    <div class="flex flex-col gap-0.5">
      <p class="font-normal text-base text-black md:text-lg">{{ project.title }}</p>
      <p class="font-normal text-sm text-gray-500">{{ project.category }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  project: Object,
  delay: Number,
});

const isHovering = ref(false);
</script>