<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useCursor } from '../../composables/useCursor';

const { text, variant } = useCursor();

const x = ref(0);
const y = ref(0);
const targetX = ref(0);
const targetY = ref(0);
const isVisible = ref(false);

const updateCursor = (e) => {
  targetX.value = e.clientX;
  targetY.value = e.clientY;
  if (!isVisible.value) isVisible.value = true;
};

const handleMouseEnter = () => {
    isVisible.value = true
}

const handleMouseLeave = () => {
    isVisible.value = false
}

const animate = () => {
  const ease = 0.15; // Adjustable smoothing factor
  
  x.value += (targetX.value - x.value) * ease;
  y.value += (targetY.value - y.value) * ease;
  
  requestAnimationFrame(animate);
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursor);
  document.body.addEventListener('mouseenter', handleMouseEnter);
  document.body.addEventListener('mouseleave', handleMouseLeave);
  // Initialize position
  x.value = targetX.value;
  y.value = targetY.value;
  animate();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor);
  document.body.removeEventListener('mouseenter', handleMouseEnter);
  document.body.removeEventListener('mouseleave', handleMouseLeave);
});

const isButton = computed(() => variant.value === 'button');
</script>

<template>
  <div 
    class="custom-cursor hidden md:flex items-center justify-center pointer-events-none fixed z-[9999] w-3 h-3"
    :style="{ 
      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
      opacity: isVisible ? 1 : 0
    }"
  >
    <div 
      class="cursor-bg absolute inset-0 bg-black rounded-full transition-transform duration-300 ease-out"
      :class="{ 'scale-100': !isButton, 'scale-[8]': isButton }"
    ></div>
    <span 
      v-if="text" 
      class="relative text-white font-medium text-[10px] tracking-wider uppercase transition-opacity duration-300 z-10 text-center px-1 whitespace-nowrap"
      :class="{ 'opacity-100 delay-100': isButton, 'opacity-0': !isButton }"
    >
      {{ text }}
    </span>
  </div>
</template>

<style scoped>
.custom-cursor {
  /* Positioning handled by style binding */
  top: 0;
  left: 0;
  will-change: transform;
}
</style>
