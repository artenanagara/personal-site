<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import FooterSection from '../components/layout/FooterSection.vue';
import worksData from '../data/works.json';
import AnimatedButton from '../components/ui/AnimatedButton.vue';
import { useCursor } from '../composables/useCursor';

const route = useRoute();
const project = ref(null);
const loading = ref(true);
const { setCursor, resetCursor } = useCursor();

const loadProjectData = async () => {
  loading.value = true;
  try {
    const data = await import(`../data/work-details/${route.params.id}.json`);
    project.value = data.default;
    if (project.value?.title) {
      document.title = `${project.value.title} | Artena Nagara`;
    }
  } catch (error) {
    console.error('Failed to load project data:', error);
    project.value = null;
  } finally {
    loading.value = false;
  }
};

onMounted(loadProjectData);
watch(() => route.params.id, loadProjectData);

// The next case study in list order, skipping external-only entries
const nextProject = computed(() => {
  const caseStudies = worksData.filter((w) => w.type !== 'visit');
  const index = caseStudies.findIndex((w) => w.id === route.params.id);
  if (index === -1 || caseStudies.length < 2) return null;
  return caseStudies[(index + 1) % caseStudies.length];
});

const galleryItemClass = (span) => {
  if (span?.includes('col-span-4')) return 'md:w-full';
  if (span?.includes('col-span-2')) return 'md:w-[calc(50%-1vw)]';
  return 'md:w-[calc(25%-1.5vw)]';
};

// Pairs in a gallery are staggered vertically so the page never reads as a rigid grid
const galleryItemOffset = (items, idx) => {
  const span = items[idx].span || '';
  if (span.includes('col-span-4')) return '';
  return idx % 2 === 1 ? 'md:mt-[7vw]' : '';
};
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <div v-if="loading" class="h-screen"></div>

    <article v-else-if="project" class="flex-grow">
      <!-- Header -->
      <header class="page-x pb-16 pt-32 md:pb-24 md:pt-44">
        <p v-reveal class="mono-label text-graphite">
          <RouterLink to="/work" class="u-link">Work</RouterLink>
          <span class="mx-2">/</span>{{ project.category }}
        </p>

        <h1 v-reveal.lines class="mt-6 text-[clamp(3.5rem,13vw,13rem)] leading-[0.86] tracking-[-0.06em]">
          <span class="line-mask"><span style="--d: 100ms">{{ project.title }}</span></span>
        </h1>

        <div class="mt-10 flex flex-col gap-10 md:mt-14 md:flex-row md:items-start md:justify-between">
          <p
            v-reveal="250"
            class="serif-i max-w-[24ch] text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.1] md:ml-[12%]"
          >
            {{ project.subtitle }}
          </p>

          <dl v-reveal="350" class="grid grid-cols-2 gap-x-10 gap-y-5 md:w-[30%] md:min-w-[320px]">
            <div v-for="meta in project.metadata" :key="meta.label">
              <dt class="mono-label text-graphite">{{ meta.label }}</dt>
              <dd class="mt-1 text-[15px] leading-snug">{{ meta.value }}</dd>
            </div>
          </dl>
        </div>

        <div v-if="project.description || project.url" class="mt-16 md:ml-[42%] md:mt-24 md:max-w-[46ch]">
          <p v-if="project.description" v-reveal class="text-[17px] leading-relaxed text-ink/80">
            {{ project.description }}
          </p>
          <AnimatedButton v-if="project.url" v-reveal="100" :href="project.url" text="Visit live site" class="mt-8">
            <span aria-hidden="true">↗</span>
          </AnimatedButton>
        </div>
      </header>

      <!-- Content blocks -->
      <div class="flex flex-col gap-20 pb-32 md:gap-36 md:pb-48">
        <template v-for="(section, index) in project.content" :key="index">
          <figure v-if="section.type === 'full-width-image'" v-reveal class="w-full overflow-hidden bg-hairline">
            <img
              v-if="section.src && section.src.startsWith('/')"
              :src="section.src"
              :alt="`${project.title} visual`"
              loading="lazy"
              class="h-auto w-full"
            />
          </figure>

          <div
            v-else-if="section.type === 'text-block'"
            v-reveal
            class="page-x md:flex md:gap-[4vw]"
            :class="section.align === 'right' ? 'md:pl-[34%]' : 'md:pl-[8%]'"
          >
            <p class="mono-label mb-4 shrink-0 pt-2 text-graphite md:mb-0 md:w-36">{{ section.label }}</p>
            <p class="max-w-[38ch] text-[clamp(1.3rem,2.1vw,1.9rem)] leading-[1.32] tracking-[-0.02em]">
              {{ section.content }}
            </p>
          </div>

          <div
            v-else-if="section.type === 'two-column-image'"
            class="page-x flex flex-col gap-4 md:flex-row md:items-start md:gap-[2vw]"
          >
            <div
              v-for="(item, idx) in section.items"
              :key="idx"
              v-reveal="idx * 120"
              class="bg-hairline md:w-1/2"
              :class="idx === 1 ? 'md:mt-[8vw]' : ''"
            >
              <img v-if="item.src && item.src.startsWith('/')" :src="item.src" :alt="`${project.title} detail`" loading="lazy" class="h-auto w-full" />
            </div>
          </div>

          <div
            v-else-if="section.type === 'gallery-grid'"
            class="page-x flex flex-col gap-4 md:flex-row md:flex-wrap md:items-start md:gap-[2vw]"
          >
            <div
              v-for="(item, idx) in section.items"
              :key="idx"
              v-reveal="(idx % 2) * 120"
              class="w-full bg-hairline"
              :class="[galleryItemClass(item.span), galleryItemOffset(section.items, idx)]"
            >
              <img v-if="item.src && item.src.startsWith('/')" :src="item.src" :alt="`${project.title} detail`" loading="lazy" class="h-auto w-full" />
            </div>
          </div>
        </template>
      </div>

      <!-- Next project -->
      <RouterLink
        v-if="nextProject"
        :to="`/work/${nextProject.id}`"
        class="page-x group block border-t border-hairline pb-24 pt-8 md:pb-32"
        @mouseenter="setCursor({ text: 'Next', variant: 'button' })"
        @mouseleave="resetCursor()"
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
      </RouterLink>
    </article>

    <section v-else class="page-x flex flex-grow flex-col justify-end pb-24 pt-40">
      <p class="mono-label text-graphite">Project not found</p>
      <h1 class="mt-6 max-w-[18ch] text-[clamp(2.5rem,6vw,6rem)] leading-[0.98] tracking-[-0.045em]">
        This project doesn't exist or has <span class="serif-i">moved.</span>
      </h1>
      <AnimatedButton to="/work" text="Back to all work" class="mt-10 self-start" />
    </section>

    <FooterSection />
  </div>
</template>
