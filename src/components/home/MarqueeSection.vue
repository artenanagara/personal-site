<template>
  <section class="py-24 overflow-hidden bg-white text-black" data-name="Another Exploration Section">
    <div class="container mx-auto px-4 md:px-0 mb-12">
      <p 
        v-motion
        :initial="motionInitialHiddenMedium"
        :visible="sectionVisible(100)"
        class="text-4xl lg:text-5xl font-medium"
      >
        Another Exploration
      </p>
    </div>

    <!-- Marquee Container -->
    <div 
      v-motion
      :initial="motionInitialHiddenMedium"
      :visible="sectionVisible(200)"
      class="relative w-full overflow-hidden"
    >
      <!-- Gradient Masks for smooth fade out at edges (optional, removed for now to match strict Figma if needed, but usually good for marquee) -->
      <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div class="flex select-none w-max">
        <!-- Original Set -->
        <div class="flex gap-8 items-center animate-marquee pl-8">
          <a 
            v-for="(item, index) in items" 
            :key="`original-${index}`"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="shrink-0 w-[300px] md:w-[450px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[400px] bg-[#d9d9d9] relative group overflow-hidden"
          >
            <!-- Placeholder for image -->
             <img 
               v-if="item.image"
               :src="item.image" 
               class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               alt="Exploration"
             />
             <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
               Image {{ index + 1 }}
             </div>
          </a>
        </div>

        <!-- Duplicate Set for looping -->
        <div class="flex gap-8 items-center animate-marquee pl-8" aria-hidden="true">
          <a 
            v-for="(item, index) in items" 
            :key="`duplicate-${index}`"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="shrink-0 w-[300px] md:w-[450px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[400px] bg-[#d9d9d9] relative group overflow-hidden"
          >
             <img 
               v-if="item.image"
               :src="item.image" 
               class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               alt="Exploration"
             />
             <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
               Image {{ index + 1 }}
             </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Animation Constants
const transitionSection = { duration: 800, ease: [0.22, 1, 0.36, 1] };
const motionInitialHiddenMedium = { opacity: 0, y: 40 };
const sectionVisible = (delay) => ({
  opacity: 1,
  y: 0,
  transition: { ...transitionSection, delay: delay || 0 }
});

const items = [
  { link: 'https://dribbble.com/shots/26790239-Jobar-Smart-Job-Portal-App', image: 'https://cdn.dribbble.com/userupload/45759357/file/bfa45f83b652d083d553519c8b83e425.jpg?resize=752x&vertical=center' },
  { link: 'https://dribbble.com/shots/26759374-Bakr-Modern-POS-System-for-Bakeries', image: 'https://cdn.dribbble.com/userupload/45661058/file/22a9db05acb54835b1ab69f55db89a54.jpg?resize=752x&vertical=center' },
  { link: 'https://dribbble.com/shots/26051673-Kemayu-Beauty-Clinic-Homepage', image: 'https://cdn.dribbble.com/userupload/43399396/file/original-9d3525b9aab6058d2086ccffec6927db.jpg?resize=752x&vertical=center' },
  { link: 'https://dribbble.com/shots/26025028-Ecovolt-Electric-Vehicle-Power-Landing-Page', image: 'https://cdn.dribbble.com/userupload/43315629/file/original-3fe75f38f4d5408916e8a12e37567bd3.png?resize=752x&vertical=center' },
  { link: 'https://dribbble.com/shots/24438455-Finansiku-Finance-Landing-Page', image: 'https://cdn.dribbble.com/userupload/15354141/file/original-d91d339d1fb58c2ecf15be404fae0516.png?resize=752x&vertical=center' },
  { link: 'https://dribbble.com/shots/24472371-BuyCar-Automotive-Landing-Page', image: 'https://cdn.dribbble.com/userupload/15454180/file/original-16cf8321ec01359363643379605a214a.png?resize=752x&vertical=center' },
  { link: 'https://dribbble.com/shots/23668006--Umah-Real-Estate-Landing-Page', image: 'https://cdn.dribbble.com/userupload/13127156/file/original-701489418a9b8ff84c3dc4ac5425bdfe.jpg?resize=752x&vertical=center' },
];
</script>

<style scoped>
.animate-marquee {
  animation: marquee 90s linear infinite;
}

/* Pause animation when the container is hovered */
.relative:hover .animate-marquee {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
