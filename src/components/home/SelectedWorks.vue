<template>
  <!-- Selected Works Section -->
  <section class="container mx-auto px-4 md:px-0 py-16 lg:py-24 text-black overflow-hidden">
    <div 
      v-motion
      :initial="motionInitialHiddenMedium"
      :visible="sectionVisible(100)"
      class="flex justify-between items-end mb-8 lg:mb-10 border-b border-gray-200 pb-4"
    >
      <p class="text-4xl lg:text-5xl font-medium">
        Selected Works
      </p>
      
      <RouterLink 
        to="/work"
        :hovered="hoverEffect"
        class="text-sm md:text-base lg:text-lg underline cursor-pointer hover:text-gray-600 transition duration-300"
      >
        See All
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      <WorkCard 
        v-for="(project, index) in works"
        :key="project.id"
        :project="project" 
        :delay="0.3 + index * 0.1" 
      />
    </div>
  </section>
  <!-- Selected Works Section End -->
</template>

<script setup>
import WorkCard from '../ui/WorkCard.vue';

// Animation Constants
const transitionSection = { duration: 800, ease: [0.22, 1, 0.36, 1] };
const transitionQuick = { duration: 300, ease: [0.22, 1, 0.36, 1] };

const motionInitialHiddenMedium = { opacity: 0, y: 40 };

const sectionVisible = (delay) => ({
  opacity: 1,
  y: 0,
  transition: { ...transitionSection, delay: delay || 0 }
});

const hoverEffect = {
  x: 5,
  transition: transitionQuick
};

// Data
import worksData from '../../data/works.json';

// Get first 4 items
const works = worksData.slice(0, 4);
</script>
