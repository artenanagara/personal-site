<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useCursor } from '../../composables/useCursor';

const { text, variant } = useCursor();

const x = ref(0);
const y = ref(0);
const targetX = ref(0);
const targetY = ref(0);
const isVisible = ref(false);
const enabled = ref(false);
let frame;

const updateCursor = (e) => {
  targetX.value = e.clientX;
  targetY.value = e.clientY;
  if (!isVisible.value) isVisible.value = true;
};

const handleMouseEnter = () => { isVisible.value = true };
const handleMouseLeave = () => { isVisible.value = false };

const animate = () => {
  const ease = 0.18;
  x.value += (targetX.value - x.value) * ease;
  y.value += (targetY.value - y.value) * ease;
  frame = requestAnimationFrame(animate);
};

onMounted(() => {
  enabled.value = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!enabled.value) return;

  document.documentElement.classList.add('has-cursor');
  window.addEventListener('mousemove', updateCursor);
  document.body.addEventListener('mouseenter', handleMouseEnter);
  document.body.addEventListener('mouseleave', handleMouseLeave);
  animate();
});

onUnmounted(() => {
  document.documentElement.classList.remove('has-cursor');
  window.removeEventListener('mousemove', updateCursor);
  document.body.removeEventListener('mouseenter', handleMouseEnter);
  document.body.removeEventListener('mouseleave', handleMouseLeave);
  cancelAnimationFrame(frame);
});

const isButton = computed(() => variant.value === 'button');
</script>

<template>
  <div
    v-if="enabled"
    class="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center will-change-transform"
    :class="isButton ? '' : 'mix-blend-difference'"
    :style="{
      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
      opacity: isVisible ? 1 : 0,
    }"
    aria-hidden="true"
  >
    <div
      class="flex items-center justify-center rounded-full transition-all duration-500 ease-out-expo"
      :class="isButton ? 'h-24 w-24 bg-ink' : 'h-2.5 w-2.5 bg-white'"
    >
      <span
        class="mono-label whitespace-nowrap text-paper transition-opacity duration-300"
        :class="isButton && text ? 'opacity-100 delay-150' : 'opacity-0'"
      >
        {{ text }}
      </span>
    </div>
  </div>
</template>
