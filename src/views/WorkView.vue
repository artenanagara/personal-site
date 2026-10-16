<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import FooterSection from '../components/layout/FooterSection.vue';
import worksData from '../data/works.json';
import { useCursor } from '../composables/useCursor';

const works = worksData;
const { setCursor, resetCursor } = useCursor();

// Floating preview that trails the pointer over the index (desktop only)
const active = ref(-1);
const pos = { x: 0, y: 0 };
const target = { x: 0, y: 0 };
const preview = ref(null);
let frame;

const onMove = (e) => {
  target.x = e.clientX;
  target.y = e.clientY;
};

const tick = () => {
  // Horizontal drift is damped so the preview stays in the gutter column
  pos.x += (target.x * 0.08 - pos.x) * 0.12;
  pos.y += (target.y - pos.y) * 0.12;
  if (preview.value) {
    preview.value.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(0, -50%)`;
  }
  frame = requestAnimationFrame(tick);
};

onMounted(() => {
  window.addEventListener('mousemove', onMove);
  tick();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove);
  cancelAnimationFrame(frame);
  resetCursor();
});

const linkFor = (work) =>
  work.type === 'visit'
    ? { is: 'a', href: work.url, target: '_blank', rel: 'noopener noreferrer' }
    : { is: RouterLink, to: `/work/${work.id}` };

const enter = (index, work) => {
  active.value = index;
  setCursor({ text: work.type === 'visit' ? 'Visit ↗' : 'View', variant: 'button' });
};

const leave = () => {
  active.value = -1;
  resetCursor();
};

const activeWork = computed(() => works[active.value]);
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <section class="page-x pb-16 pt-36 md:pb-24 md:pt-52">
      <h1 v-reveal.lines class="text-[clamp(4rem,16vw,15rem)] leading-[0.85] tracking-[-0.06em]">
        <span class="line-mask"><span style="--d: 80ms">Work<sup class="ml-2 align-top font-mono text-[0.1em] tracking-normal">{{ works.length }}</sup></span></span>
      </h1>
      <p
        v-reveal="250"
        class="mt-10 max-w-[38ch] text-[17px] leading-relaxed text-ink/80 md:ml-[50%] md:mt-[-3vw]"
      >
        A selection of projects across web, mobile, and dashboards. Some work stays private for client confidentiality,
        but these show the range of what I bring to a project.
      </p>
    </section>

    <section class="page-x flex-grow pb-32 md:pb-48">
      <div class="mono-label hidden border-b border-hairline pb-3 text-graphite md:flex">
        <span>Project</span>
        <span class="ml-auto">Discipline</span>
      </div>

      <ul class="index-list" @mouseleave="leave">
        <li v-for="(work, index) in works" :key="work.id" v-reveal="index * 60" class="index-row border-b border-hairline">
          <component
            :is="linkFor(work).is"
            v-bind="{ ...linkFor(work), is: undefined }"
            class="group block py-6 md:flex md:items-baseline md:py-8"
            @mouseenter="enter(index, work)"
            @focus="active = index"
          >
            <img
              :src="work.cover.default"
              :alt="work.title"
              loading="lazy"
              class="mb-4 aspect-[4/3] w-full object-cover md:hidden"
            />
            <span
              class="block text-[clamp(2.25rem,6vw,6rem)] leading-[0.95] tracking-[-0.05em] transition-transform duration-700 ease-out-expo md:w-[55%] md:group-hover:translate-x-6"
            >
              {{ work.title }}<span v-if="work.type === 'visit'" class="serif-i text-[0.5em] text-graphite"> ↗</span>
            </span>
            <span class="mono-label mt-3 block text-graphite md:ml-auto md:mt-0 md:text-right">{{ work.category }}</span>
          </component>
        </li>
      </ul>
    </section>

    <!-- Pointer-following preview -->
    <div
      ref="preview"
      class="pointer-events-none fixed left-[58vw] top-0 z-[700] hidden w-[19vw] max-w-[320px] md:block"
      aria-hidden="true"
    >
      <div
        class="relative aspect-[4/5] overflow-hidden bg-hairline transition-[clip-path,opacity] duration-700 ease-out-expo"
        :class="activeWork ? 'opacity-100 [clip-path:inset(0_0_0_0)]' : 'opacity-0 [clip-path:inset(50%_0_50%_0)]'"
      >
        <img
          v-for="(work, index) in works"
          :key="work.id"
          :src="work.cover.hover || work.cover.default"
          alt=""
          class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          :class="index === active ? 'opacity-100' : 'opacity-0'"
        />
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<style scoped>
@media (hover: hover) {
  .index-list:hover .index-row {
    opacity: 0.3;
  }

  .index-list .index-row:hover {
    opacity: 1;
  }
}

.index-row {
  transition: opacity 0.5s var(--ease-out-expo), transform 1.2s var(--ease-out-expo);
}
</style>
