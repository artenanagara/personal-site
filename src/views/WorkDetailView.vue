<script setup>
import { computed } from 'vue';
import worksData from '../data/works';
import AnimatedButton from '../components/ui/AnimatedButton.vue';

const props = defineProps({
  project: { type: Object, required: true },
});

// The next case study in list order, skipping external-only and upcoming entries
const nextProject = computed(() => {
  const caseStudies = worksData.filter((w) => w.type === 'open');
  const index = caseStudies.findIndex((w) => w.id === props.project.id);
  if (index === -1 || caseStudies.length < 2) return null;
  return caseStudies[(index + 1) % caseStudies.length];
});

// Galleries sit on a tight 4-column grid; quarter-width items pair up on mobile
// A gallery-grid has 4 columns by default; "columns": 3 switches the row to thirds (items then ignore span).
const galleryItemClass = (span, columns) => {
  if (columns === 3) return 'col-span-1';
  if (span?.includes('col-span-4')) return 'col-span-2 md:col-span-4';
  if (span?.includes('col-span-3')) return 'col-span-2 md:col-span-3';
  if (span?.includes('col-span-2')) return 'col-span-2';
  return 'col-span-1';
};

// Points can be plain strings or { title, text }
const pointText = (point) => (typeof point === 'string' ? point : point.text);
</script>

<template>
  <article class="flex-grow">
    <!-- Header -->
    <header class="page-x pb-16 pt-32 md:pb-24 md:pt-44">
      <p data-reveal class="mono-label text-graphite">
        <a href="/work" class="u-link">Work</a>
        <span class="mx-2">/</span>{{ project.category }}
      </p>

      <h1 data-reveal data-reveal-lines class="mt-6 text-[clamp(3.5rem,13vw,13rem)] leading-[0.86] tracking-[-0.06em]">
        <span class="line-mask"><span style="--d: 100ms">{{ project.title }}</span></span>
      </h1>

      <div class="mt-10 flex flex-col gap-10 md:mt-14 md:flex-row md:items-start md:justify-between">
        <p
          data-reveal="250"
          class="serif-i max-w-[24ch] text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.1] md:ml-[12%]"
        >
          {{ project.subtitle }}
        </p>

        <dl data-reveal="350" class="grid grid-cols-2 gap-x-10 gap-y-5 md:w-[30%] md:min-w-[320px]">
          <div v-for="meta in project.metadata" :key="meta.label">
            <dt class="mono-label text-graphite">{{ meta.label }}</dt>
            <dd class="mt-1 text-[15px] leading-snug">{{ meta.value }}</dd>
          </div>
        </dl>
      </div>

      <div v-if="project.description || project.url" class="mt-16 md:ml-[42%] md:mt-24 md:max-w-[46ch]">
        <p v-if="project.description" data-reveal class="text-[17px] leading-relaxed text-ink/80">
          {{ project.description }}
        </p>
        <AnimatedButton v-if="project.url" data-reveal="100" :href="project.url" text="Visit live site" class="mt-8">
          <span aria-hidden="true">↗</span>
        </AnimatedButton>
      </div>
    </header>

    <!-- Content blocks: text sits in a two-column grid, images on a tight 4-column grid -->
    <div class="flex flex-col gap-3 pb-32 md:pb-48">
      <template v-for="(section, index) in project.content" :key="index">
        <figure v-if="section.type === 'full-width-image'" data-reveal class="page-x">
          <div class="overflow-hidden rounded-[4px] bg-hairline">
            <img
              v-if="section.src && section.src.startsWith('/')"
              :src="section.src"
              :alt="`${project.title} visual`"
              :loading="index === 0 ? 'eager' : 'lazy'"
              :fetchpriority="index === 0 ? 'high' : undefined"
              decoding="async"
              class="h-auto w-full"
            />
          </div>
        </figure>

        <!--
          Every text section follows one template: eyebrow (label), title (heading), body (content),
          then goals, a numbered list (points), or one image beside the text (style "split").
        -->
        <section
          v-else-if="section.type === 'text-block'"
          class="page-x grid grid-cols-1 gap-3 pb-10 pt-20 md:grid-cols-2 md:pb-12 md:pt-40"
        >
          <p v-if="section.style !== 'split'" data-reveal class="mono-label text-graphite">{{ section.label }}</p>

          <div data-reveal class="flex flex-col" :class="{ 'pb-8 md:pb-0 md:pr-[4vw]': section.style === 'split' }">
            <p v-if="section.style === 'split'" class="mono-label mb-6 text-graphite">{{ section.label }}</p>
            <h2 class="max-w-[24ch] text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.2] tracking-[-0.02em]">{{ section.heading }}</h2>
            <p v-if="section.content" class="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-ink/80">{{ section.content }}</p>

            <div v-if="section.goals?.length" class="mt-10">
              <p class="mono-label text-graphite">Goals</p>
              <ol class="mt-4 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
                <li v-for="(goal, idx) in section.goals" :key="idx" class="flex gap-3 text-[15px] leading-relaxed">
                  <span class="shrink-0 text-ink/60">({{ idx + 1 }})</span>
                  <span class="text-ink/80">{{ pointText(goal) }}</span>
                </li>
              </ol>
            </div>

            <ol v-if="section.points?.length" class="mt-10 grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2">
              <li v-for="(point, idx) in section.points" :key="idx" class="flex gap-3 text-[15px] leading-relaxed">
                <span class="shrink-0 text-ink/60">({{ idx + 1 }})</span>
                <div class="flex flex-col gap-1">
                  <p v-if="point.title">{{ point.title }}</p>
                  <p class="text-ink/80">{{ pointText(point) }}</p>
                </div>
              </li>
            </ol>
          </div>

          <figure v-if="section.style === 'split'" data-reveal="120" class="aspect-[4/3] overflow-hidden rounded-[4px] bg-hairline">
            <img :src="section.image" :alt="`${project.title} visual`" loading="lazy" class="h-full w-full object-cover" />
          </figure>
        </section>

        <div
          v-else-if="section.type === 'gallery-grid'"
          class="page-x grid gap-3"
          :class="section.columns === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-4'"
        >
          <div
            v-for="(item, idx) in section.items"
            :key="idx"
            :data-reveal="(idx % 2) * 120"
            class="overflow-hidden rounded-[4px] bg-hairline"
            :class="galleryItemClass(item.span, section.columns)"
          >
            <img v-if="item.src && item.src.startsWith('/')" :src="item.src" :alt="`${project.title} detail`" loading="lazy" class="h-auto w-full" />
          </div>
        </div>
      </template>
    </div>

    <!-- Next project -->
    <a
      v-if="nextProject"
      :href="`/work/${nextProject.id}`"
      :data-transition-label="nextProject.title"
      class="page-x group block border-t border-hairline pb-24 pt-8 md:pb-32"
      data-cursor="Next"
    >
      <p class="mono-label text-graphite">Next project</p>
      <div class="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <p class="text-[clamp(3rem,10vw,10rem)] leading-[0.86] tracking-[-0.06em] transition-transform duration-700 ease-out-expo md:group-hover:translate-x-6">
          {{ nextProject.title }}
        </p>
        <div class="aspect-[4/3] w-full overflow-hidden bg-hairline md:w-[26vw]">
          <img
            :src="nextProject.cover.default"
            :alt="nextProject.title"
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.05]"
          />
        </div>
      </div>
    </a>
  </article>
</template>
