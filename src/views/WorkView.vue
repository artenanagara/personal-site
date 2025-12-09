<script setup>
import FooterSection from '../components/layout/FooterSection.vue';
import WorkCard from '../components/ui/WorkCard.vue';

// Smooth custom bezier for premium feel
const transitionMain = { duration: 1200, ease: [0.22, 1, 0.36, 1] };

import worksData from '../data/works.json';

const works = worksData;

// Helper to determine column span
const getColSpan = (index) => {
  return index < 4 ? 'col-span-1 md:col-span-3' : 'col-span-1 md:col-span-2';
};
</script>

<template>
  <div class="min-h-screen bg-white text-black pt-32 lg:pt-40 overflow-hidden font-sans flex flex-col">
    
    <!-- Header Section -->
    <div class="px-4 md:px-20 max-w-screen-2xl mx-auto w-full mb-16">
      <div 
        class="flex flex-col lg:flex-row justify-between items-start w-full mt-52"
      >
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 200 } }"
          class="text-5xl font-medium leading-normal mb-8 lg:mb-0"
        >
          Works
        </h1>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 400 } }"
          class="text-xl md:text-22px text-black max-w-3xl leading-8 font-light mb-24"
        >
          This portfolio showcases a selection of my work, representing the range and diversity of projects I've undertaken. While some pieces are not displayed due to client confidentiality, I believe these examples capture the breadth of what I can bring to each project.
        </p>
      </div>

      <!-- Works Grid -->
      <div class="grid grid-cols-1 md:grid-cols-6 gap-x-10 gap-y-16">
        <WorkCard 
          v-for="(work, index) in works" 
          :key="work.id"
          :project="work"
          :delay="0.1"
          class="col-span-1"
          :class="getColSpan(index)"
        />
      </div>
    </div>

    <FooterSection />
  </div>
</template>
