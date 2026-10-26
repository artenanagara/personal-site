<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';
import FooterSection from '../components/layout/FooterSection.vue';
import worksData from '../data/works';
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
  } catch (error) {
    console.error('Failed to load project data:', error);
    project.value = null;
  } finally {
    loading.value = false;
  }
};

onMounted(loadProjectData);
watch(() => route.params.id, loadProjectData);

useHead({
  title: computed(() => project.value?.title || (loading.value ? 'Project' : 'Project Not Found')),
  meta: [
    { name: 'description', content: computed(() => project.value?.description) },
    { name: 'robots', content: computed(() => (!loading.value && !project.value ? 'noindex' : 'index, follow')) },
  ],
});

// The next case study in list order, skipping external-only and upcoming entries
const nextProject = computed(() => {
  const caseStudies = worksData.filter((w) => w.type === 'open');
  const index = caseStudies.findIndex((w) => w.id === route.params.id);
  if (index === -1 || caseStudies.length < 2) return null;
  return caseStudies[(index + 1) % caseStudies.length];
});

// Galleries sit on a tight 4-column grid; quarter-width items pair up on mobile
const galleryItemClass = (span) => {
  if (span?.includes('col-span-4')) return 'col-span-2 md:col-span-4';
  if (span?.includes('col-span-3')) return 'col-span-2 md:col-span-3';
  if (span?.includes('col-span-2')) return 'col-span-2';
  return 'col-span-1';
};

// Points can be plain strings or { title, text }
const pointText = (point) => (typeof point === 'string' ? point : point.text);
const pointNumber = (idx) => String(idx + 1).padStart(2, '0');
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
      <!-- Content blocks: text sits in the right half of a two-column grid, images on a tight 4-column grid -->
      <div class="flex flex-col gap-3 pb-32 md:pb-48">
        <template v-for="(section, index) in project.content" :key="index">
          <figure v-if="section.type === 'full-width-image'" v-reveal class="page-x">
            <div class="overflow-hidden rounded-[4px] bg-hairline">
              <img
                v-if="section.src && section.src.startsWith('/')"
                :src="section.src"
                :alt="`${project.title} visual`"
                loading="lazy"
                class="h-auto w-full"
              />
            </div>
          </figure>

          <section
            v-else-if="section.type === 'text-block'"
            v-reveal
            class="page-x grid grid-cols-1 gap-3 pb-10 pt-20 md:grid-cols-2 md:pb-12 md:pt-40"
          >
            <p class="mono-label text-graphite">{{ section.label }}</p>
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-3">
                <h2 v-if="section.heading" class="text-[17px] leading-relaxed">{{ section.heading }}</h2>
                <p v-if="section.content" class="max-w-[60ch] text-[17px] leading-relaxed text-ink/80">
                  {{ section.content }}
                </p>
              </div>

              <ol v-if="section.points?.length" class="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2">
                <li v-for="(point, idx) in section.points" :key="idx" class="flex gap-3">
                  <span class="shrink-0 text-[15px] leading-relaxed text-ink/60">( {{ pointNumber(idx) }} )</span>
                  <div class="flex flex-col gap-1">
                    <p v-if="point.title" class="text-[15px] leading-relaxed">{{ point.title }}</p>
                    <p class="text-[15px] leading-relaxed text-ink/80">{{ pointText(point) }}</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <div v-else-if="section.type === 'gallery-grid'" class="page-x grid grid-cols-2 gap-3 md:grid-cols-4">
            <div
              v-for="(item, idx) in section.items"
              :key="idx"
              v-reveal="(idx % 2) * 120"
              class="overflow-hidden rounded-[4px] bg-hairline"
              :class="galleryItemClass(item.span)"
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
