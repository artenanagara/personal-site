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
          Freelance web designer and co-founder of Cicle Studio, a studio making tailor-made websites.
        </p>
      </aside>

      <p
        v-reveal="100"
        class="max-w-[22ch] text-[clamp(1.75rem,3.6vw,3.5rem)] leading-[1.08] tracking-[-0.035em]"
      >
        Clean layouts, clear typography, and meticulous alignment. A quiet design lets a brand's
        <span class="serif-i">message</span> speak louder.
      </p>

      <div class="mt-16 flex flex-col gap-6 md:ml-[38%] md:mt-24 md:max-w-[34ch]">
        <p v-reveal="150" class="text-[17px] leading-relaxed text-ink/80">
          Years of training and designing presentations for domestic enterprises taught me layout, content handling, and motion.
          Today I pair that with front-end knowledge to build websites that are both beautiful and functional.
        </p>
        <RouterLink v-reveal="200" to="/about" class="u-link self-start text-[15px]">More about me →</RouterLink>
      </div>
    </div>
  </section>
</template>
