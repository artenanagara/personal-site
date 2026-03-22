<template>
  <!-- About Section -->
  <section ref="sectionRef" class="min-h-screen flex items-center bg-white text-black px-4 md:px-10 py-16 lg:pt-32 lg:pb-16 overflow-hidden">
    <div class="container mx-auto">

      <!-- Section label -->
      <div class="overflow-hidden mb-8 lg:mb-8">
        <p
          v-motion
          :initial="{ y: 80 }"
          :visible="{ y: 0, transition: { duration: 1000, ease: [0.22, 1, 0.36, 1] } }"
          class="text-4xl lg:text-5xl font-medium"
        >
          About Me
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16">

        <!-- Small left column -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 900, delay: 200, ease: [0.22, 1, 0.36, 1] } }"
          class="md:col-span-1 space-y-2 text-sm lg:text-base leading-relaxed"
        >
          <p class="w-full">
            I'm a freelance web designer and co-founder of Cicle Studio, a studio focused on creating tailor-made websites.
          </p>

          <p class="underline decoration-solid relative shrink-0 w-full cursor-pointer hover:text-gray-500 transition-colors duration-300">
            Discover Cicle Studio
          </p>
        </div>

        <!-- Large right column — staggered paragraphs -->
        <div class="md:col-span-2 lg:col-span-3 space-y-8 lg:space-y-10 text-xl md:text-2xl lg:text-3xl leading-relaxed lg:leading-normal">

          <div
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 100, ease: [0.22, 1, 0.36, 1] } }"
          >
            <p>
              I prioritize clean and organized layouts, clear and clean typography, and meticulous alignment in all my designs. This focus on user-friendliness stems from my passion for minimalism. I believe in maximizing the impact of a brand's message, story, and visuals through each creation.
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 250, ease: [0.22, 1, 0.36, 1] } }"
          >
            <p>
              My background in training and designing presentations for domestic enterprises for many years has instilled in me a deep understanding of layout, content handling, and incorporating motion effects. Now, I leverage this expertise, along with my knowledge of front-end programming, to create beautiful and functional websites.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const sectionRef = ref(null)
</script>
