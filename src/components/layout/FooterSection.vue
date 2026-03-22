<template>
  <footer class="bg-black text-white pt-20 pb-8 px-4 md:px-20 mt-20">
    <div class="max-w-[1440px] mx-auto w-full flex flex-col justify-between min-h-[400px]">

      <!-- Headline line reveal -->
      <div class="overflow-hidden mb-10">
        <h2
          v-motion
          :initial="{ y: 140 }"
          :visible="{ y: 0, transition: { duration: 1100, ease: [0.22, 1, 0.36, 1] } }"
          class="text-4xl md:text-[64px] font-light leading-tight max-w-3xl"
        >
          Elevate Your Brand with Minimalist Design.
        </h2>
      </div>

      <!-- Bottom Section -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 900, delay: 150, ease: [0.22, 1, 0.36, 1] } }"
        class="flex flex-col gap-8"
      >
        <!-- Links and Socials -->
        <div class="flex flex-col md:flex-row justify-between items-end pb-8 border-b border-white/20">
          <div class="flex gap-8 text-lg font-light">
            <RouterLink to="/" class="relative overflow-hidden group">
              <span class="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">Home</span>
              <span class="block absolute top-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0">Home</span>
            </RouterLink>
            <RouterLink to="/work" class="relative overflow-hidden group">
              <span class="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">Work</span>
              <span class="block absolute top-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0">Work</span>
            </RouterLink>
            <RouterLink to="/about" class="relative overflow-hidden group">
              <span class="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">About</span>
              <span class="block absolute top-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0">About</span>
            </RouterLink>
          </div>

          <div class="flex gap-4 mt-8 md:mt-0">
            <a v-magnetic="0.4" href="https://instagram.com/artenanagara" target="_blank" rel="noopener noreferrer"
              class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <Instagram :size="20" stroke-width="1.5" />
            </a>
            <a v-magnetic="0.4" href="https://linkedin.com/in/artenanagara" target="_blank" rel="noopener noreferrer"
              class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <Linkedin :size="20" stroke-width="1.5" />
            </a>
            <a v-magnetic="0.4" href="https://dribbble.com/artenanagara" target="_blank" rel="noopener noreferrer"
              class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <Dribbble :size="20" stroke-width="1.5" />
            </a>
            <a v-magnetic="0.4" href="https://x.com/artenanagara" target="_blank" rel="noopener noreferrer"
              class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <Twitter :size="20" stroke-width="1.5" />
            </a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="text-sm text-gray-400 font-light">
          <p>Artena Nagara © 2025. All Rights Reserved.</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { Instagram, Linkedin, Dribbble, Twitter } from 'lucide-vue-next';
</script>
