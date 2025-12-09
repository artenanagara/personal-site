<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
</script>

<template>
  <div 
    class="custom-cursor"
    :style="{ 
      transform: `translate(${x}px, ${y}px)`,
      opacity: isVisible ? 1 : 0
    }"
  ></div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  background-color: black;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform-origin: center center;
  margin-top: -6px;
  margin-left: -6px;
  /* Removed transition for js-based smoothing */
  will-change: transform;
}
</style>
