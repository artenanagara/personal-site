<template>
  <!-- Hero Section -->
  <section class="h-screen flex flex-col justify-end bg-white text-black pb-8 px-4 md:px-8 md:pb-4 overflow-hidden">
    <div class="container mx-auto flex flex-col justify-between h-full">

      <!-- Main Headline -->
      <div class="font-sans font-normal leading-none relative w-full flex flex-col justify-center h-full">
        <h1 class="text-5xl font-light md:text-6xl lg:text-8xl leading-[1.1] w-full">

          <div class="overflow-hidden pb-[0.1em]">
            <div
              class="transition-transform will-change-transform"
              :class="entered ? 'translate-y-0' : 'translate-y-[110%]'"
              style="transition-duration: 1500ms; transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1); transition-delay: 100ms"
            >
              Creates intuitive and engaging
            </div>
          </div>

          <div class="overflow-hidden pb-[0.1em]">
            <div
              class="transition-transform will-change-transform"
              :class="entered ? 'translate-y-0' : 'translate-y-[110%]'"
              style="transition-duration: 1500ms; transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1); transition-delay: 320ms"
            >
              <span class="font-light italic">user experiences</span>
            </div>
          </div>

          <div class="overflow-hidden pb-[0.1em]">
            <div
              class="transition-transform will-change-transform"
              :class="entered ? 'translate-y-0' : 'translate-y-[110%]'"
              style="transition-duration: 1500ms; transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1); transition-delay: 540ms"
            >
              through minimalist design
            </div>
          </div>

        </h1>
      </div>

      <!-- Bottom Bar -->
      <div class="relative w-full pt-8 pb-0 md:pt-8 md:pb-4">

        <!-- Animated divider line -->
        <div
          class="absolute top-0 left-0 h-px bg-black transition-all will-change-transform"
          :class="entered ? 'w-full opacity-100' : 'w-0 opacity-0'"
          style="transition-duration: 1200ms; transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1); transition-delay: 750ms"
        ></div>

        <div class="flex justify-between items-end">
          <div class="overflow-hidden">
            <p
              class="text-xs md:text-sm lg:text-base leading-snug transition-transform will-change-transform"
              :class="entered ? 'translate-y-0' : 'translate-y-[110%]'"
              style="transition-duration: 1200ms; transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1); transition-delay: 900ms"
            >
              Located in<br />
              <span>Surakarta, Indonesia 🇮🇩</span>
            </p>
          </div>

          <div class="overflow-hidden">
            <p
              class="text-xs md:text-sm lg:text-base text-right leading-snug transition-transform will-change-transform"
              :class="entered ? 'translate-y-0' : 'translate-y-[110%]'"
              style="transition-duration: 1200ms; transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1); transition-delay: 1060ms"
            >
              Currently available for<br />
              <span>🌎 freelance worldwide</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const entered = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      entered.value = true
    })
  })
})
</script>
