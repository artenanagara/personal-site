<script setup>
import AnimatedButton from '../components/ui/AnimatedButton.vue';
import FooterSection from '../components/layout/FooterSection.vue';
</script>

<template>
  <div class="min-h-screen w-full flex flex-col bg-white text-black pt-32 lg:pt-40 font-sans">
    <div class="flex-grow flex flex-col items-center justify-center px-6 mb-32">
      <div class="max-w-4xl w-full">
        <h1 class="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-12">
          Oops. It looks like the page you're trying to reach
          <span class="text-gray-400">doesn't exist</span> or has been moved.
        </h1>
        
        <AnimatedButton 
          to="/" 
          text="Go to home"
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
