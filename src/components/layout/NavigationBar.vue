<template>
  <header
    class="page-x fixed inset-x-0 top-0 z-[900] flex items-start justify-between py-5 text-white mix-blend-difference md:py-7"
  >
    <RouterLink to="/" class="text-[15px] font-medium tracking-[-0.01em]" @click="isMenuOpen = false">
      Artena Nagara
    </RouterLink>

    <p class="mono-label absolute left-1/2 top-[22px] hidden -translate-x-1/2 opacity-70 lg:block md:top-[30px]">
      Product Designer — Surakarta, {{ time }} WIB
    </p>

    <nav class="hidden items-start gap-8 text-[15px] md:flex" aria-label="Main">
      <RouterLink
        v-for="link in links"
        :key="link.name"
        :to="link.href"
        class="u-link"
      >
        {{ link.name }}<sup v-if="link.count" class="ml-0.5 font-mono text-[9px]">{{ link.count }}</sup>
      </RouterLink>
      <a href="mailto:artenanagara22@gmail.com" class="u-link">Contact</a>
    </nav>

    <button
      class="text-[15px] md:hidden"
      :aria-expanded="isMenuOpen"
      aria-controls="mobile-menu"
      @click="isMenuOpen = !isMenuOpen"
    >
      {{ isMenuOpen ? 'Close' : 'Menu' }}
    </button>
  </header>

  <Transition
    enter-active-class="transition-[clip-path] duration-700 ease-out-expo"
    enter-from-class="[clip-path:inset(0_0_100%_0)]"
    enter-to-class="[clip-path:inset(0_0_0_0)]"
    leave-active-class="transition-[clip-path] duration-500 ease-out-expo"
    leave-from-class="[clip-path:inset(0_0_0_0)]"
    leave-to-class="[clip-path:inset(0_0_100%_0)]"
  >
    <div
      v-if="isMenuOpen"
      id="mobile-menu"
      class="page-x fixed inset-0 z-[800] flex flex-col justify-end bg-paper pb-10 text-ink md:hidden"
    >
      <nav class="flex flex-col" aria-label="Mobile">
        <RouterLink
          v-for="link in [{ name: 'Home', href: '/' }, ...links]"
          :key="link.name"
          :to="link.href"
          class="border-t border-hairline py-3 text-[13vw] leading-none tracking-[-0.04em]"
          @click="isMenuOpen = false"
        >
          {{ link.name }}
        </RouterLink>
        <a
          href="mailto:artenanagara22@gmail.com"
          class="border-y border-hairline py-3 text-[13vw] leading-none tracking-[-0.04em]"
        >
          <span class="serif-i">Contact</span>
        </a>
      </nav>
      <p class="mono-label mt-8 text-graphite">Surakarta, {{ time }} WIB</p>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useLocalTime } from '../../composables/useLocalTime';
import worksData from '../../data/works';

const isMenuOpen = ref(false);
const { time } = useLocalTime();

const links = [
  { name: 'Work', href: '/work', count: worksData.length },
  { name: 'About', href: '/about' },
];

watch(isMenuOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : '';
});
</script>
