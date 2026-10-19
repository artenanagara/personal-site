<template>
  <section class="page-x pb-24 md:pb-40">
    <div class="mb-12 flex items-end justify-between border-b border-hairline pb-4 md:mb-20">
      <h2 v-reveal class="text-[clamp(2.25rem,5vw,4.5rem)] leading-none tracking-[-0.045em]">
        Selected <span class="serif-i">work</span>
      </h2>
      <RouterLink v-reveal="100" to="/work" class="u-link text-[15px]">
        All work <sup class="font-mono text-[9px]">{{ total }}</sup> →
      </RouterLink>
    </div>

    <!-- Staggered, off-grid composition on desktop; a simple stack on mobile -->
    <div class="flex flex-col gap-16 md:gap-0">
      <div
        v-for="(project, index) in works"
        :key="project.id"
        v-reveal="(index % 2) * 120"
        class="w-full"
        :class="layout[index].wrap"
      >
        <WorkCard :project="project" :aspect="layout[index].aspect" />
      </div>
    </div>
  </section>
</template>

<script setup>
import WorkCard from '../ui/WorkCard.vue';
import worksData from '../../data/works';

const works = worksData.slice(0, 4);
const total = worksData.length;

const layout = [
  { wrap: 'md:w-[58%]', aspect: 'aspect-[4/3]' },
  { wrap: 'md:ml-auto md:-mt-[20vw] md:w-[30%]', aspect: 'aspect-[3/4]' },
  { wrap: 'md:ml-[18%] md:mt-[9vw] md:w-[44%]', aspect: 'aspect-[16/11]' },
  { wrap: 'md:ml-auto md:mr-[3%] md:-mt-[6vw] md:w-[32%]', aspect: 'aspect-[4/5]' },
];
</script>
