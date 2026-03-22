<template>
  <!-- Selected Works Section -->
  <section class="container mx-auto px-4 md:px-0 py-16 lg:py-24 text-black overflow-hidden">

    <!-- Header -->
    <div class="flex justify-between items-end mb-8 lg:mb-10 border-b border-gray-200 pb-4">
      <div class="overflow-hidden">
        <p
          v-motion
          :initial="{ y: 80 }"
          :visible="{ y: 0, transition: { duration: 1000, ease: [0.22, 1, 0.36, 1] } }"
          class="text-4xl lg:text-5xl font-medium"
        >
          Selected Works
        </p>
      </div>

      <RouterLink
        to="/work"
        class="relative overflow-hidden group text-sm md:text-base lg:text-lg shrink-0"
      >
        <span class="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          See All
        </span>
        <span class="block absolute top-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0">
          See All
        </span>
      </RouterLink>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      <WorkCard
        v-for="(project, index) in works"
        :key="project.id"
        :project="project"
        :delay="0.15 + index * 0.12"
      />
    </div>

  </section>
</template>

<script setup>
import WorkCard from '../ui/WorkCard.vue';
import worksData from '../../data/works.json';

const works = worksData.slice(0, 4);
</script>
