<template>
  <section class="page-x py-28 md:py-44">
    <div class="relative md:pl-[30%]">
      <!-- Marginalia -->
      <aside
        v-reveal
        class="mb-10 max-w-[16rem] md:absolute md:left-0 md:top-2 md:mb-0"
      >
        <p class="mono-label text-graphite">(About)</p>
        <p class="mt-3 text-[15px] leading-snug">
          Freelance and contract product designer for SaaS, web, and apps. Design and front-end, from one person.
        </p>
      </aside>

      <p
        v-reveal="100"
        class="max-w-[22ch] text-[clamp(1.75rem,3.6vw,3.5rem)] leading-[1.08] tracking-[-0.035em]"
      >
        A good interface doesn't need explaining. I design for the user who has to understand it and the developer who has to
        <span class="serif-i">build</span> it.
      </p>

      <div class="mt-16 flex flex-col gap-6 md:ml-[38%] md:mt-24 md:max-w-[34ch]">
        <p v-reveal="150" class="text-[17px] leading-relaxed text-ink/80">
          You get one person for the whole path: product thinking, interface design, a design system your developers can
          follow, and front-end code when you need it. Built for teams that need a product launched, not just a mockup.
        </p>
        <RouterLink v-reveal="200" to="/about" class="u-link self-start text-[15px]">More about me →</RouterLink>
      </div>
    </div>
  </section>
</template>
