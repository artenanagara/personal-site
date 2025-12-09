<script setup>
import FooterSection from '../components/layout/FooterSection.vue';

// Smooth custom bezier for premium feel
const transitionMain = { duration: 1200, ease: [0.22, 1, 0.36, 1] };

// Motion Variants
const motionContainer = {
  initial: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: transitionMain 
  }
};

const motionStagger = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      ...transitionMain,
      delay
    } 
  }
});
</script>

<template>
  <div class="bg-white min-h-screen pt-32 lg:pt-40 font-sans text-black flex flex-col">
    <div class="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-32 w-full flex-grow">
      
      <!-- Intro Section -->
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start mb-20 lg:mb-16">
        <!-- Intro Text (Left) -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 200 } }"
          class="flex flex-col gap-8 w-full pt-10"
        >
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight max-w-2xl">
            Simplicity, crafted for modern brands.
          </h1>
          
          <div class="lg:ml-32 max-w-xl mt-8">
            <p class="text-lg leading-7 font-normal text-black/80">
              In a world full of digital noise, the clearest message wins. That's the principle at the core of my work. As a UI/UX Designer and Frontend Developer with over 4 years of experience, I meticulously craft digital experiences that prioritize clarity and function. By leveraging tools like Figma, WordPress, and Webflow, I build intuitive interfaces that transform a brand's vision into a high-performing digital reality. My passion is to drive meaningful interaction and create a lasting, positive impression, providing modern brands with the ultimate sophistication: simplicity that works.
            </p>
          </div>
        </div>

        <!-- Profile Image (Right) -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { ...transitionMain, delay: 400 } }"
          class="w-full lg:w-80 h-80 bg-[#d9d9d9] shrink-0 rounded-none shadow-sm origin-center"
        >
            <!-- Using a gray placeholder as seen in screenshot -->
        </div>
      </div>

      <!-- Activities Section -->
      <div class="mb-20 lg:mb-32 mt-32">
        <!-- Activities Image -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { ...transitionMain } }"
          class="w-full h-96 md:h-[36rem] bg-[#d9d9d9] rounded-none mb-12 shadow-sm"
        >
             <!-- Placeholder -->
        </div>

        <div class="flex flex-col lg:flex-row gap-16 justify-between items-start">
          <div 
             v-motion
             :initial="{ opacity: 0, y: 30 }"
             :visible-once="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 200 } }"
             class="lg:w-xl"
          >
            <p class="text-lg leading-7 font-normal text-black/80">
              Beyond the world of code and design, I find balance and inspiration in a variety of activities. You might find me on the badminton court or in the swimming pool to clear my mind. Other times, I enjoy a casual cycle, a long walk while listening to music, and of course, adventuring to find the best local culinary gems. For me, life is all about the harmony between perfect pixels and flavorful adventures.
            </p>
          </div>
          
          <!-- Links -->
          <div class="flex flex-col gap-6 w-full lg:w-96 shrink-0">
             <!-- Experience -->
            <div 
              v-motion
              :initial="{ opacity: 0, x: 20 }"
              :visible-once="{ opacity: 1, x: 0, transition: { ...transitionMain, delay: 300 } }"
              class="border border-black/10 p-6 hover:border-black/30 transition-colors group cursor-pointer bg-white"
            >
              <div class="flex items-center gap-3 mb-1">
                 <div class="w-1.5 h-1.5 rounded-full bg-transparent border border-black group-hover:bg-black transition-colors"></div>
                 <h3 class="text-xl font-medium">View My Experience</h3>
              </div>
              <p class="text-gray-500 text-sm pl-4.5">My professional background and achievements</p>
            </div>
             <!-- Dribbble -->
            <div 
              v-motion
              :initial="{ opacity: 0, x: 20 }"
              :visible-once="{ opacity: 1, x: 0, transition: { ...transitionMain, delay: 400 } }"
              class="border border-black/10 p-6 hover:border-black/30 transition-colors group cursor-pointer bg-white"
            >
              <div class="flex items-center gap-3 mb-1">
                 <div class="w-1.5 h-1.5 rounded-full bg-transparent border border-black group-hover:bg-black transition-colors"></div>
                 <h3 class="text-xl font-medium">Dribbble</h3>
              </div>
              <p class="text-gray-500 text-sm pl-4.5">Check out my design exploration</p>
            </div>
             <!-- LinkedIn -->
            <div 
              v-motion
              :initial="{ opacity: 0, x: 20 }"
              :visible-once="{ opacity: 1, x: 0, transition: { ...transitionMain, delay: 500 } }"
              class="border border-black/10 p-6 hover:border-black/30 transition-colors group cursor-pointer bg-white"
            >
              <div class="flex items-center gap-3 mb-1">
                 <div class="w-1.5 h-1.5 rounded-full bg-transparent border border-black group-hover:bg-black transition-colors"></div>
                 <h3 class="text-xl font-medium">LinkedIn</h3>
              </div>
               <p class="text-gray-500 text-sm pl-4.5">Let's connect professionally.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Professional Journey Section -->
      <div class="mb-20 lg:mb-40">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <!-- Title -->
            <div 
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { ...transitionMain } }"
              class="lg:w-100 shrink-0"
            >
                <h2 class="text-4xl md:text-5xl font-normal leading-tight">My Professional<br>Journey</h2>
            </div>

            <!-- Right Content -->
            <div class="flex-grow">
                <p 
                  v-motion
                  :initial="{ opacity: 0, y: 30 }"
                  :visible-once="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 100 } }"
                  class="text-lg leading-7 font-normal text-black/80 mb-16"
                >
                    My career has been a journey through diverse roles, from UI/UX design to frontend development. Each position has been a valuable opportunity to solve unique problems, collaborate with talented teams, and deliver impactful, user-centered digital products.
                </p>

                <!-- Flexbox of Jobs -->
                <div class="flex flex-col md:flex-row flex-wrap gap-x-20 gap-y-16">
                     <!-- Job 1 -->
                     <div 
                       v-motion
                       :initial="{ opacity: 0, y: 30 }"
                       :visible-once="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 200 } }"
                       class="w-full md:w-[calc(50%-2.5rem)]"
                     >
                        <div class="flex justify-between items-baseline mb-1">
                            <h3 class="text-xl font-medium">Rintisan</h3>
                            <span class="text-sm font-medium">Now</span>
                        </div>
                        <p class="text-sm text-gray-800 font-medium italic mb-2">UI/UX Designer</p>
                        <p class="text-sm text-gray-500 leading-relaxed">Designing and product visualizing fintech and business Rintisan.</p>
                     </div>

                      <!-- Job 2 -->
                     <div 
                       v-motion
                       :initial="{ opacity: 0, y: 30 }"
                       :visible-once="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 300 } }"
                       class="w-full md:w-[calc(50%-2.5rem)]"
                     >
                        <div class="flex justify-between items-baseline mb-1">
                            <h3 class="text-xl font-medium">Digitakarya Creative</h3>
                            <span class="text-sm font-medium">2023-2024</span>
                        </div>
                        <p class="text-sm text-gray-800 font-medium italic mb-2">Website Designer</p>
                        <p class="text-sm text-gray-500 leading-relaxed">Designing and developing user-friendly company profile websites using WordPress.</p>
                     </div>

                      <!-- Job 3 -->
                     <div 
                       v-motion
                       :initial="{ opacity: 0, y: 30 }"
                       :visible-once="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 400 } }"
                       class="w-full md:w-[calc(50%-2.5rem)]"
                     >
                        <div class="flex justify-between items-baseline mb-1">
                            <h3 class="text-xl font-medium">Allure Industries</h3>
                            <span class="text-sm font-medium">2022</span>
                        </div>
                        <p class="text-sm text-gray-800 font-medium italic mb-2">Frontend Developer</p>
                         <p class="text-sm text-gray-500 leading-relaxed">Contributed to developing a responsive and user-friendly ERP interface.</p>
                     </div>

                      <!-- Job 4 -->
                     <div 
                       v-motion
                       :initial="{ opacity: 0, y: 30 }"
                       :visible-once="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 500 } }"
                       class="w-full md:w-[calc(50%-2.5rem)]"
                     >
                        <div class="flex justify-between items-baseline mb-1">
                            <h3 class="text-xl font-medium">Arkatama Multi Solusindo</h3>
                            <span class="text-sm font-medium">2022</span>
                        </div>
                         <p class="text-sm text-gray-800 font-medium italic mb-2">UI/UX Designer</p>
                         <p class="text-sm text-gray-500 leading-relaxed">Successfully delivered more than eight UI/UX design projects for clients.</p>
                     </div>
                </div>
            </div>
        </div>
      </div>

    </div>
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<style scoped>
</style>
