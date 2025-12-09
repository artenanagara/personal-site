<template>
  <footer class="bg-black text-white pt-20 pb-8 px-4 md:px-20 mt-20">
    <div class="max-w-[1440px] mx-auto w-full flex flex-col justify-between min-h-[400px]">
      
      <!-- Top Section -->
      <div 
        v-motion
        :initial="motionInitialHiddenMedium"
        :visible="sectionVisible(100)"
        class="mb-10"
      >
        <h2 class="text-4xl md:text-[64px] font-light leading-tight max-w-3xl">
          Elevate Your Brand with Minimalist Design.
        </h2>
      </div>

      <!-- Bottom Section -->
      <div 
        v-motion
        :initial="motionInitialHiddenMedium"
        :visible="sectionVisible(200)"
        class="flex flex-col gap-8"
      >
        <!-- Links and Socials -->
        <div class="flex flex-col md:flex-row justify-between items-end pb-8 border-b border-white/20">
          <div class="flex gap-8 text-lg font-light">
            <RouterLink to="/" class="hover:text-gray-300 transition-colors">Home</RouterLink>
            <RouterLink to="/work" class="hover:text-gray-300 transition-colors">Work</RouterLink>
            <RouterLink to="/about" class="hover:text-gray-300 transition-colors">About</RouterLink>
          </div>

          <div class="flex gap-4 mt-8 md:mt-0">
             <!-- Social Icons -->
             <a href="https://instagram.com/artenanagara" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
               <Instagram :size="20" stroke-width="1.5" />
             </a>
             <a href="https://linkedin.com/in/artenanagara" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
               <Linkedin :size="20" stroke-width="1.5" />
             </a>
             <a href="https://dribbble.com/artenanagara" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
               <Dribbble :size="20" stroke-width="1.5" />
             </a>
             <a href="https://x.com/artenanagara" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
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

// Animation Constants
const transitionSection = { duration: 800, ease: [0.22, 1, 0.36, 1] };
const motionInitialHiddenMedium = { opacity: 0, y: 40 };

const sectionVisible = (delay) => ({
  opacity: 1,
  y: 0,
  transition: { ...transitionSection, delay: delay || 0 }
});
</script>
