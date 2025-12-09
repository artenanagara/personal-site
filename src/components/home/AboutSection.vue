<template>
  <!-- About Section -->
  <section class="min-h-screen flex items-center bg-white text-black px-4 md:px-10 py-16 lg:pt-32 lg:pb-16 overflow-hidden">
    <div class="container mx-auto">
      <p
        v-motion
        :initial="motionInitialHiddenMedium"
        :visible="sectionVisible(100)"
        class="text-4xl lg:text-5xl font-medium mb-8 lg:mb-8"
      >
        About Me
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16">
        <div 
          v-motion
          :initial="motionInitialHiddenMedium"
          :visible="sectionVisible(200)"
          class="md:col-span-1 space-y-2 text-sm lg:text-base leading-relaxed"
        >
          <p class="w-full">
            I'm a freelance web designer and co-founder of Cicle Studio, a studio focused on creating tailor-made websites.
          </p>

          <p 
            v-motion
            :hovered="hoverEffect"
            class="underline decoration-solid relative shrink-0 w-full cursor-pointer hover:text-gray-600 transition duration-300"
          >
            Discover Cicle Studio
          </p>
        </div>

        <div 
          v-motion
          :initial="motionInitialHiddenMedium"
          :visible="sectionVisible(300)"
          class="md:col-span-2 lg:col-span-3 space-y-8 lg:space-y-10 text-xl md:text-2xl lg:text-3xl leading-relaxed lg:leading-normal"
        >
          <p>
            I prioritize clean and organized layouts, clear and clean typography, and meticulous alignment in all my designs. This focus on user-friendliness stems from my passion for minimalism. I believe in maximizing the impact of a brand's message, story, and visuals through each creation.
          </p>
          
          <p class="mt-8">
            My background in training and designing presentations for domestic enterprises for many years has instilled in me a deep understanding of layout, content handling, and incorporating motion effects. Now, I leverage this expertise, along with my knowledge of front-end programming, to create beautiful and functional websites.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- About Section End -->
</template>

<script setup>
// Animation Constants
const transitionMain = { duration: 1200, ease: [0.22, 1, 0.36, 1] };
const transitionSection = { duration: 800, ease: [0.22, 1, 0.36, 1] };
const transitionQuick = { duration: 300, ease: [0.22, 1, 0.36, 1] };

const motionInitialHiddenMedium = { opacity: 0, y: 40 };


const sectionVisible = (delay) => ({
  opacity: 1,
  y: 0,
  transition: { ...transitionSection, delay: delay || 0 }
});



const hoverEffect = {
  x: 5,
  transition: transitionQuick
};
</script>
