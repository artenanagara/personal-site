<template>
  <!-- Hero Section -->
  <section class="h-screen flex flex-col justify-end bg-white text-black pb-8 px-4 md:px-8 md:pb-4 overflow-hidden">
    <div class="container mx-auto flex flex-col justify-between h-full">
      <div class="font-sans font-normal leading-none relative w-full flex flex-col justify-center h-full pt-0">
        <h1 
          v-motion
          :initial="motionInitialHidden"
          :enter="heroTextEnter(200)"
          class="text-6xl font-light lg:text-8xl leading-tight w-full"
        >
          <p class="mb-0 overflow-hidden">
            <span>Creates intuitive and engaging </span>
          </p>

          <span class="inline-block">
            <span class="font-light italic">user experiences</span>
          </span>
          
          <p class="mb-0 overflow-hidden">
            through minimalist design
          </p>
        </h1>
      </div>

      <div
        v-motion
        :initial="motionInitialHiddenSmall"
        :enter="heroFooterEnter"
        class="flex justify-between items-end relative w-full pt-8 pb-0 md:pt-8 md:pb-4"
      >    
        <p class="text-xs md:text-sm lg:text-base leading-snug">
          Located in<br />
          <span>Surakarta, Indonesia 🇮🇩</span>
        </p>
        
        <p class="text-xs md:text-sm lg:text-base text-right leading-snug">
          Currently available for<br />
          <span>🌎 freelance worldwide</span>
        </p>
      </div>
    </div>
  </section>
  <!-- Hero Section End -->
</template>

<script setup>
// Animation Constants
const transitionMain = { duration: 1200, ease: [0.22, 1, 0.36, 1] };

const motionInitialHidden = { opacity: 0, y: 40 };
const motionInitialHiddenSmall = { opacity: 0, y: 40 };

const heroTextEnter = (delay) => ({
  opacity: 1,
  y: 0,
  transition: { ...transitionMain, delay }
});

const heroFooterEnter = {
  opacity: 1,
  y: 0,
  transition: { ...transitionMain, duration: 1000, delay: 800 }
};
</script>
