<template>
  <footer class="page-x bg-ink pb-6 pt-24 text-paper md:pt-36">
    <div class="md:pl-[30%]">
      <p v-reveal class="mono-label text-paper/50">(Contact)</p>
      <h2
        v-reveal="100"
        class="mt-4 max-w-[16ch] text-[clamp(2.25rem,5.5vw,5.5rem)] leading-[1] tracking-[-0.045em]"
      >
        Have a project in mind? Let's keep it <span class="serif-i">simple.</span>
      </h2>
      <a
        v-reveal="200"
        href="mailto:artenanagara22@gmail.com"
        class="u-link mt-10 inline-block break-all text-[clamp(1.25rem,2.4vw,2.25rem)] tracking-[-0.02em] md:mt-14"
      >
        artenanagara22@gmail.com
      </a>
    </div>

    <div class="mt-28 flex flex-wrap items-end gap-x-[6vw] gap-y-8 border-t border-paper/15 pt-5 md:mt-40">
      <nav aria-label="Footer" class="flex flex-col gap-1 text-[15px]">
        <span class="mono-label mb-1 text-paper/50">Pages</span>
        <RouterLink to="/" class="u-link self-start">Home</RouterLink>
        <RouterLink to="/work" class="u-link self-start">Work</RouterLink>
        <RouterLink to="/about" class="u-link self-start">About</RouterLink>
      </nav>

      <div class="flex flex-col gap-1 text-[15px]">
        <span class="mono-label mb-1 text-paper/50">Elsewhere</span>
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="u-link self-start"
        >{{ social.name }} ↗</a>
      </div>

      <div class="mono-label flex w-full justify-between text-paper/50 md:ml-auto md:w-auto md:flex-col md:items-end md:gap-1">
        <span>Surakarta, {{ time }} WIB</span>
        <span>© {{ year }} Artena Nagara</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLocalTime } from '../../composables/useLocalTime';

const { time } = useLocalTime();
const year = new Date().getFullYear();

const socials = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/artenanagara' },
  { name: 'Dribbble', href: 'https://dribbble.com/artenanagara' },
  { name: 'Instagram', href: 'https://instagram.com/artenanagara' },
  { name: 'X', href: 'https://x.com/artenanagara' },
];
</script>
