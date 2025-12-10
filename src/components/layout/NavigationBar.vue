<template>
  <div class="relative">
    <header
      v-motion
      :initial="{ y: -100, opacity: 0 }"
      :enter="{ y: 0, opacity: 1, transition: { duration: 1000, ease: [0.22, 1, 0.36, 1] } }"
      class="fixed top-0 left-0 w-full z-[900] px-4 md:px-10 py-5 lg:py-8 transition-colors duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
      :class="{ 
        'bg-white/10 backdrop-blur-sm text-black': !isMenuOpen,
        'bg-black text-white': isMenuOpen,
      }"
    >
      <div class="container mx-auto flex justify-between items-center h-full">

        <p
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 100, ease: [0.22, 1, 0.36, 1] } }"
          class="text-xl md:text-2xl font-normal cursor-pointer transition-colors duration-700"
          :class="{ 'text-white': isMenuOpen, 'text-black': !isMenuOpen }"
        >
          artena.
        </p>

        <nav 
          class="hidden md:flex space-x-10 text-base font-sans font-normal text-nowrap transition-opacity duration-500"
          :class="{ 'opacity-0 pointer-events-none': isMenuOpen }"
        >
          <div
            v-motion
            :initial="{ opacity: 0, y: -10 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300, ease: [0.22, 1, 0.36, 1] } }"
            class="flex gap-10 items-center"
          >
            <RouterLink 
              v-for="(link, index) in links" 
              :key="link.name" 
              :to="link.href" 
              class="relative shrink-0 cursor-pointer hover:text-gray-600 transition duration-300"
            >
              <p
                v-motion
                :initial="{ opacity: 0, y: -10 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 + index * 150, ease: [0.22, 1, 0.36, 1] } }"
                :hovered="{ y: -2, transition: { duration: 400, ease: [0.22, 1, 0.36, 1] } }"
              >
                {{ link.name }}
              </p>
            </RouterLink>
          </div>
        </nav>

        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 -mr-2 focus:outline-none z-50 transition-colors duration-700"
          aria-label="Toggle navigation menu"
        >
          <svg
            class="w-6 h-6 transition-colors duration-700"
            :class="{ 'text-white': isMenuOpen, 'text-black': !isMenuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'"
            ></path>
          </svg>
        </button>
      </div>
    </header>

    <Transition
      enter-active-class="transition-transform duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)]"
      enter-from-class="-translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="transition-transform duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)]"
      leave-from-class="translate-y-0"
      leave-to-class="-translate-y-full"
    >
      <div
        v-if="isMenuOpen"
        class="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black flex flex-col pt-[80px]" 
        @click.self="isMenuOpen = false"
      >
        <nav class="flex flex-col flex-grow mt-4">
          <RouterLink
            v-for="(link, index) in links"
            :key="link.name"
            :to="link.href"
            @click="isMenuOpen = false"
            class="text-6xl sm:text-5xl font-extralight py-10 px-4 md:px-10 border-b border-gray-800 text-white hover:bg-gray-900 transition duration-300"
          >
            <p
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 + index * 200, ease: 'easeOut' } }"
            >
              {{ link.name }}
            </p>
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const links = [
  { name: 'Home', href: '/' },
  { name: 'Works', href: '/work' },
  { name: 'About', href: '/about' },
];
</script>