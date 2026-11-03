<template>
  <section class="page-x pb-24 md:pb-40">
    <div class="mb-12 flex items-end justify-between border-b border-hairline pb-4 md:mb-20">
      <h2 data-reveal class="text-[clamp(2.25rem,5vw,4.5rem)] leading-none tracking-[-0.045em]">
        Selected <span class="serif-i">work</span>
      </h2>
      <a data-reveal="100" href="/work" class="u-link text-[15px]">
        All work <sup class="font-mono text-[9px]">{{ total }}</sup> →
      </a>
    </div>

    <!-- Desktop: a sticky caption on the left swaps as the images scroll past on the right.
         Mobile: each image with its caption, one after another. -->
    <div class="md:grid md:grid-cols-12 md:gap-x-6">
      <aside class="hidden md:col-span-5 md:block">
        <div class="sticky top-0 flex h-screen flex-col justify-between py-[12vh]">
          <div>
            <p class="mono-label flex gap-2 text-graphite">
              <span class="relative inline-block h-[1.5em] overflow-hidden">
                <span
                  class="block transition-transform duration-700 ease-out-expo"
                  :style="{ transform: `translateY(-${active * 1.5}em)` }"
                >
                  <span v-for="(_, i) in works" :key="i" class="block h-[1.5em]">{{ pad(i + 1) }}</span>
                </span>
              </span>
              <span>/ {{ pad(works.length) }}</span>
            </p>

            <!-- Titles stacked in one cell; the active one slides up into view -->
            <div class="mt-8 grid">
              <component
                :is="linkFor(project).is"
                v-for="(project, i) in works"
                :key="project.id"
                v-bind="{ ...linkFor(project), is: undefined }"
                class="col-start-1 row-start-1 block overflow-hidden pb-[0.12em]"
                :class="i === active ? 'pointer-events-auto' : 'pointer-events-none'"
                :tabindex="i === active ? 0 : -1"
                :aria-hidden="i !== active"
                :data-cursor="cursorLabel[project.type] || 'View'"
              >
                <span
                  class="block text-[clamp(3rem,6.4vw,6.5rem)] leading-[0.95] tracking-[-0.05em] transition-transform duration-[1100ms] ease-out-expo"
                  :style="{ transform: `translateY(${i === active ? 0 : i < active ? -110 : 110}%)` }"
                >
                  {{ project.title }}<span v-if="project.type === 'visit'" class="serif-i text-graphite">↗</span>
                </span>
              </component>
            </div>

            <div class="mt-6 grid max-w-[30ch]">
              <p
                v-for="(project, i) in works"
                :key="project.id"
                class="col-start-1 row-start-1 text-[17px] leading-snug text-ink/80 transition-[opacity,transform] duration-700 ease-out-expo"
                :class="i === active ? 'opacity-100' : 'translate-y-2 opacity-0'"
              >
                {{ project.summary }}
              </p>
            </div>
          </div>

          <!-- Index: every title, the active one in ink, with a progress rule -->
          <div>
            <div class="relative mb-5 h-px w-full bg-hairline">
              <div
                class="absolute inset-y-0 left-0 bg-ink transition-[width] duration-700 ease-out-expo"
                :style="{ width: `${((active + 1) / works.length) * 100}%` }"
              ></div>
            </div>
            <ol class="flex flex-col gap-1.5">
              <li v-for="(project, i) in works" :key="project.id">
                <button
                  type="button"
                  class="mono-label flex w-full items-baseline gap-4 text-left transition-colors duration-500"
                  :class="i === active ? 'text-ink' : 'text-graphite/60 hover:text-graphite'"
                  @click="scrollTo(i)"
                >
                  <span>{{ pad(i + 1) }}</span>
                  <span>{{ project.title }}</span>
                  <span class="ml-auto">{{ project.category }}</span>
                </button>
              </li>
            </ol>
          </div>
        </div>
      </aside>

      <div class="flex flex-col gap-16 md:col-span-7 md:gap-[18vh] md:py-[12vh]">
        <article
          v-for="(project, i) in works"
          :key="project.id"
          :ref="(el) => (items[i] = el)"
          :data-index="i"
          data-reveal
        >
          <component
            :is="linkFor(project).is"
            v-bind="{ ...linkFor(project), is: undefined }"
            class="group block"
            :data-cursor="cursorLabel[project.type] || 'View'"
          >
            <div class="relative aspect-[4/5] overflow-hidden bg-hairline md:aspect-[5/6]">
              <img
                :src="project.cover.default"
                :alt="project.title"
                loading="lazy"
                decoding="async"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.04]"
              />
              <img
                v-if="project.cover.hover"
                :src="project.cover.hover"
                alt=""
                loading="lazy"
                decoding="async"
                class="absolute inset-0 h-full w-full object-cover transition-[clip-path] duration-1000 ease-out-expo [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)]"
              />
              <span class="mono-label absolute left-4 top-4 bg-paper px-2 py-1 text-ink">{{ pad(i + 1) }}</span>
            </div>

            <!-- Caption for mobile; desktop reads it from the sticky column -->
            <div class="mt-3 flex items-baseline justify-between gap-4 md:hidden">
              <h3 class="text-lg tracking-[-0.02em]">
                {{ project.title }}<span v-if="project.type === 'visit'" class="ml-1 text-graphite">↗</span>
              </h3>
              <p class="mono-label text-right text-graphite">{{ project.category }}</p>
            </div>
          </component>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import worksData from '../../data/works';

const works = worksData.slice(0, 4);
const total = worksData.length;

const active = ref(0);
const items = [];
let observer;

const pad = (n) => String(n).padStart(2, '0');

const linkFor = (work) => {
  if (work.type === 'visit') return { is: 'a', href: work.url, target: '_blank', rel: 'noopener noreferrer' };
  if (work.type === 'soon') return { is: 'div' };
  return { is: 'a', href: `/work/${work.id}`, 'data-transition-label': work.title };
};

const cursorLabel = { visit: 'Visit ↗', soon: 'Soon' };

const scrollTo = (i) => items[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });

// The image crossing the middle of the viewport sets the caption
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) active.value = Number(entry.target.dataset.index);
      });
    },
    { rootMargin: '-50% 0px -50% 0px' },
  );
  items.forEach((el) => el && observer.observe(el));
});

onBeforeUnmount(() => observer?.disconnect());
</script>
