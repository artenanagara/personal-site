<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import FooterSection from '../components/layout/FooterSection.vue';
import WorkCard from '../components/ui/WorkCard.vue';
import worksData from '../data/works.json';
import { useCursor } from '../composables/useCursor';
import AnimatedButton from '../components/ui/AnimatedButton.vue';

const route = useRoute();
const project = ref(null);
const loading = ref(true);
const nextProjects = ref([]);
const { setCursor, resetCursor } = useCursor();

const transitionMain = { duration: 1200, ease: [0.22, 1, 0.36, 1] };

const loadProjectData = async () => {
  loading.value = true;
  try {
    const data = await import(`../data/work-details/${route.params.id}.json`);
    project.value = data.default;
    
    // Update document title for SEO
    if (project.value && project.value.title) {
      document.title = `${project.value.title} | Artena Nagara`;
    }
    
    // Get random next projects
    const currentId = route.params.id;
    nextProjects.value = worksData
      .filter(w => String(w.id) !== String(currentId))
      .slice(0, 2);
      
  } catch (error) {
    console.error('Failed to load project data:', error);
    project.value = null; // Handle 404 state if needed
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadProjectData();
});

watch(() => route.params.id, () => {
  loadProjectData();
});
</script>

<template>
  <div class="min-h-screen bg-white text-black font-sans flex flex-col">
    <div v-if="loading" class="h-screen flex items-center justify-center">
      <!-- Simple loading state -->
      <div class="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
    </div>

    <div v-else-if="project" class="flex-grow pt-32 lg:pt-40 px-4 md:px-20 max-w-screen-2xl mx-auto w-full">
      <!-- Breadcrumb -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 200 } }"
        class="mb-4 text-xl font-medium"
      >
        <span class="text-gray-400 text-sm">Work / </span>
        <span>{{ project.title }}</span>
      </div>

      <!-- Title & Subtitle -->
      <div class="mb-16 lg:mb-8">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 450 } }"
          class="text-5xl md:text-7xl max-w-8xl mb-8 leading-normal"
        >
          {{ project.subtitle }}
        </h1>

        <AnimatedButton
          v-if="project.url"
          :href="project.url"
          text="Visit Site"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 550 } }"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </AnimatedButton>
      </div>

      <!-- Metadata Grid -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 600 } }"
        class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-24 border-t pt-8 border-gray-200"
      >
        <div v-for="(meta, index) in project.metadata" :key="index">
          <h3 class="text-gray-500 font-light mb-1">{{ meta.label }}</h3>
          <p class="text-lg md:text-xl font-light">{{ meta.value }}</p>
        </div>
      </div>

      <!-- Introduction Text -->
      <div 
        v-if="project.description"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: 700 } }"
        class="mb-8 md:mb-24 max-w-4xl"
      >
        <p class="text-lg md:text-xl leading-8 font-light text-gray-800">
          {{ project.description }}
        </p>
      </div>

      <!-- Dynamic Content Rendering -->
      <div class="flex flex-col gap-10 lg:gap-20 mb-32">
        <template v-for="(section, index) in project.content" :key="index">
          
          <!-- Full Width Image -->
          <div 
            v-if="section.type === 'full-width-image'"
            v-motion
            :initial="{ opacity: 0, y: 60 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { ...transitionMain, duration: 1500 } }"
            class="w-full h-auto md:h-[90vh] bg-[#d9d9d9] overflow-hidden"
          >
            <!-- Placeholder for actual image -->
            <img v-if="section.src && section.src !== '#d9d9d9'" :src="section.src" class="w-full h-full object-cover">
          </div>

          <!-- Text Block -->
          <div 
            v-else-if="section.type === 'text-block'"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { ...transitionMain } }"
            class="flex w-full"
            :class="{
                'justify-start': section.align === 'left' || !section.align,
                'justify-end': section.align === 'right'
            }"
          >
            <div 
              class="w-full lg:w-[60%]"
            >
                <h2 class="text-sm md:text-base text-gray-400 mb-4 font-light tracking-wide">
                    {{ section.label }}
                </h2>
                <p class="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
                    {{ section.content }}
                </p>
            </div>
          </div>

          <!-- Two Column Images -->
          <div 
            v-else-if="section.type === 'two-column-image'"
            class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10"
          >
            <div 
              v-for="(item, idx) in section.items" 
              :key="idx"
              v-motion
              :initial="{ opacity: 0, y: 60 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: idx * 100 } }"
              class="bg-[#d9d9d9] w-full h-auto lg:h-[80vh]"
            >
             <img v-if="item.src && item.src !== '#d9d9d9'" :src="item.src" class="w-full h-full object-cover">
            </div>
          </div>

           <!-- Gallery Grid -->
           <div 
            v-else-if="section.type === 'gallery-grid'"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <div 
              v-for="(item, idx) in section.items"
              :key="idx"
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { ...transitionMain, delay: idx * 100 } }"
              class="bg-[#d9d9d9] h-auto md:h-[50vh] lg:h-[80vh]"
              :class="item.span || 'col-span-1'"
            >
              <img 
                v-if="item.src && item.src !== '#d9d9d9'" 
                :src="item.src" 
                class="w-full h-full object-cover"
                alt="Gallery image"
              >
            </div>
          </div>

        </template>
      </div>

      <!-- More Projects Section -->
      <div v-if="nextProjects.length > 0" class="mb-32">
         <h3 
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { ...transitionMain } }"
            class="text-3xl md:text-4xl font-medium mb-12"
          >
            We move this way
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <WorkCard 
              v-for="(work, index) in nextProjects"
              :key="work.id"
              :project="work"
              :delay="index * 0.1"
              class="col-span-1"
            />
          </div>
      </div>
    </div>
    
    <div v-else class="min-h-screen  flex-grow flex flex-col items-center justify-center px-6 mb-20">
      <div class="max-w-4xl w-full">
        <h1 class="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-12">
          Oops. It looks like the project you're trying to reach
          <span class="text-gray-400">doesn't exist</span> or has been moved.
        </h1>
        
        <AnimatedButton 
          to="/work" 
          text="Back to works"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </AnimatedButton>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  *, *::before, *::after {
    cursor: none !important;
  }
}
</style>
