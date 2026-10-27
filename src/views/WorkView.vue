<script setup>
import { computed } from 'vue';
import works from '../data/works';


// Featured projects lead; the first four fill the 2×2 grid at the top, the rest follow in three columns
const ordered = [...works.filter((w) => w.featured), ...works.filter((w) => !w.featured)];
const featured = ordered.slice(0, 4);
const rest = ordered.slice(4);

const linkFor = (work) => {
  if (work.type === 'visit') return { is: 'a', href: work.url, target: '_blank', rel: 'noopener noreferrer' };
  if (work.type === 'soon') return { is: 'div' };
  return { is: 'a', href: `/work/${work.id}`, 'data-transition-label': work.title };
};

const cursorLabel = { visit: 'Visit ↗', soon: 'Soon' };

const years = computed(() => {
  const ys = works.map((w) => Number(w.year)).filter(Boolean);
  return ys.length ? `${Math.min(...ys)}–${Math.max(...ys)}` : '';
});
</script>

<template>
  <div class="flex flex-grow flex-col">
    <!-- Masthead -->
    <!-- Marginal label, the headline, a small index set off to the right, then one rule before the work -->
    <section class="page-x pt-32 md:pt-44">
      <p data-reveal class="mono-label text-graphite">(Selected work)</p>

      <h1 data-reveal data-reveal-lines class="mt-6 text-[clamp(2.75rem,7.2vw,7.5rem)] leading-[0.98] tracking-[-0.05em] md:mt-8">
        <span class="line-mask"><span style="--d: 80ms">Ideas that left <span class="whitespace-nowrap">the canvas</span></span></span>
        <span class="line-mask md:pl-[12vw]"><span style="--d: 180ms">and went <em class="serif-i">live.</em></span></span>
      </h1>

      <dl data-reveal="300" class="mt-12 flex gap-x-[7vw] md:ml-[42%] md:mt-16">
        <div>
          <dt class="mono-label text-graphite">Years</dt>
          <dd class="mt-1 text-[15px]">{{ years }}</dd>
        </div>
        <div>
          <dt class="mono-label text-graphite">Projects</dt>
          <dd class="mt-1 text-[15px]">{{ String(works.length).padStart(2, '0') }}</dd>
        </div>
      </dl>

      <hr data-reveal="350" class="mt-16 border-hairline md:mt-24" />
    </section>

    <!-- Featured: 2×2 grid -->
    <section class="page-x pt-20 md:pt-28">
      <ul class="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 md:gap-y-24">
        <li v-for="(work, index) in featured" :id="`work-${work.id}`" :key="work.id" :data-reveal="(index % 2) * 120">
          <component
            :is="linkFor(work).is"
            v-bind="{ ...linkFor(work), is: undefined }"
            class="group block"
            :class="{ 'cursor-default': work.type === 'soon' }"
            :data-cursor="cursorLabel[work.type] || 'View'"
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

    <!-- The rest continue the same list in three columns -->
    <section class="page-x flex-grow pb-32 pt-16 md:pb-48 md:pt-24">
      <ul class="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(work, index) in rest" :id="`work-${work.id}`" :key="work.id" :data-reveal="(index % 3) * 90">
          <component
            :is="linkFor(work).is"
            v-bind="{ ...linkFor(work), is: undefined }"
            class="group block"
            :class="{ 'cursor-default': work.type === 'soon' }"
            :data-cursor="cursorLabel[work.type] || 'View'"
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
  </div>
</template>
