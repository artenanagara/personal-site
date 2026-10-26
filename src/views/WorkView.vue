<script setup>
import { computed, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import FooterSection from '../components/layout/FooterSection.vue';
import works from '../data/works';
import { useCursor } from '../composables/useCursor';

const { setCursor, resetCursor } = useCursor();
onUnmounted(() => resetCursor());

// Featured projects lead; the first four fill the 2×2 grid at the top, the rest go to the archive
const ordered = [...works.filter((w) => w.featured), ...works.filter((w) => !w.featured)];
const featured = ordered.slice(0, 4);
const archive = ordered.slice(4);

const linkFor = (work) => {
  if (work.type === 'visit') return { is: 'a', href: work.url, target: '_blank', rel: 'noopener noreferrer' };
  if (work.type === 'soon') return { is: 'div' };
  return { is: RouterLink, to: `/work/${work.id}` };
};

const cursorLabel = { visit: 'Visit ↗', soon: 'Soon' };

const years = computed(() => {
  const ys = works.map((w) => Number(w.year)).filter(Boolean);
  return ys.length ? `${Math.min(...ys)}–${Math.max(...ys)}` : '';
});
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <!-- Masthead -->
    <section class="page-x pt-32 md:pt-40">
      <div v-reveal class="mono-label flex justify-between border-b border-hairline pb-3 text-graphite">
        <span>Selected work</span>
        <span class="hidden sm:inline">{{ years }}</span>
        <span>{{ works.length }} projects</span>
      </div>

      <h1 v-reveal.lines class="mt-10 text-[clamp(2.75rem,7.2vw,7.5rem)] leading-[0.98] tracking-[-0.05em] md:mt-14">
        <span class="line-mask"><span style="--d: 80ms">Ideas that left <span class="whitespace-nowrap">the canvas</span></span></span>
        <span class="line-mask md:pl-[12vw]"><span style="--d: 180ms">and went <em class="serif-i">live.</em></span></span>
      </h1>
    </section>

    <!-- Featured: 2×2 grid -->
    <section class="page-x pt-20 md:pt-28">
      <ul class="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 md:gap-y-24">
        <li v-for="(work, index) in featured" :id="`work-${work.id}`" :key="work.id" v-reveal="(index % 2) * 120">
          <component
            :is="linkFor(work).is"
            v-bind="{ ...linkFor(work), is: undefined }"
            class="group block"
            :class="{ 'cursor-default': work.type === 'soon' }"
            @mouseenter="setCursor({ text: cursorLabel[work.type] || 'View', variant: 'button' })"
            @mouseleave="resetCursor()"
          >
            <div class="relative aspect-[4/3] overflow-hidden bg-hairline">
              <img
                :src="work.cover.default"
                :alt="work.title"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out-expo group-hover:scale-[1.03]"
              />
              <img
                v-if="work.cover.hover || work.featured?.image"
                :src="work.cover.hover || work.featured.image"
                alt=""
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover transition-[clip-path] duration-1000 ease-out-expo [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)]"
              />
              <span
                v-if="work.type === 'soon'"
                class="absolute left-3 top-3 bg-paper px-2.5 py-1.5 text-[12px] leading-none text-ink"
              >Coming Soon</span>
            </div>

            <div class="mt-4 border-t border-hairline pt-3">
              <p class="mono-label flex justify-between gap-4 text-graphite">
                <span>{{ work.category }}</span>
                <span>{{ work.year || (work.type === 'soon' ? 'Soon' : '') }}</span>
              </p>
              <h2 class="mt-3 text-[clamp(2rem,3.4vw,3.25rem)] leading-[0.95] tracking-[-0.045em]">
                {{ work.title }}<span v-if="work.type === 'visit'" class="text-graphite"> ↗</span>
              </h2>
              <p class="mt-3 max-w-[48ch] text-[17px] leading-snug text-ink/80">{{ work.summary }}</p>
            </div>
          </component>
        </li>
      </ul>
    </section>

    <!-- Archive -->
    <section class="page-x flex-grow pb-32 pt-28 md:pb-48 md:pt-40">
      <div class="mb-10 flex items-end justify-between border-b border-hairline pb-3 md:mb-14">
        <h2 v-reveal class="text-[clamp(2rem,3.6vw,3.25rem)] leading-none tracking-[-0.04em]">Archive</h2>
        <p v-reveal="100" class="mono-label text-graphite">{{ archive.length }} projects</p>
      </div>

      <ul class="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(work, index) in archive" :id="`work-${work.id}`" :key="work.id" v-reveal="(index % 3) * 90">
          <component
            :is="linkFor(work).is"
            v-bind="{ ...linkFor(work), is: undefined }"
            class="group block"
            :class="{ 'cursor-default': work.type === 'soon' }"
            @mouseenter="setCursor({ text: cursorLabel[work.type] || 'View', variant: 'button' })"
            @mouseleave="resetCursor()"
          >
            <div class="relative aspect-[4/5] overflow-hidden bg-hairline">
              <img
                :src="work.cover.default"
                :alt="work.title"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.04]"
              />
              <img
                v-if="work.cover.hover"
                :src="work.cover.hover"
                alt=""
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover transition-[clip-path] duration-1000 ease-out-expo [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)]"
              />
              <span
                v-if="work.type === 'soon'"
                class="absolute left-3 top-3 bg-paper px-2.5 py-1.5 text-[12px] leading-none text-ink"
              >Coming Soon</span>
            </div>

            <div class="mt-4 border-t border-hairline pt-3">
              <div class="mono-label flex justify-between gap-4 text-graphite">
                <span>{{ work.category }}</span>
                <span>{{ work.year || (work.type === 'soon' ? 'Soon' : '') }}</span>
              </div>
              <h3 class="mt-3 text-[clamp(1.5rem,2vw,2rem)] leading-none tracking-[-0.035em]">
                {{ work.title }}<span v-if="work.type === 'visit'" class="text-graphite"> ↗</span>
              </h3>
              <p class="mt-2 max-w-[44ch] text-[15px] leading-snug text-graphite">{{ work.summary }}</p>
            </div>
          </component>
        </li>
      </ul>
    </section>

    <FooterSection />
  </div>
</template>
