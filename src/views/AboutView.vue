<script setup>
import FooterSection from '../components/layout/FooterSection.vue';
import { journey } from '../data/cv';

const experience = journey;

const links = [
  { label: 'Full CV', note: 'Experience, skills, education', to: '/cv' },
  { label: 'Dribbble', note: 'Design explorations', href: 'https://dribbble.com/artenanagara' },
  { label: 'LinkedIn', note: "Let's connect", href: 'https://linkedin.com/in/artenanagara' },
];
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <!-- Intro -->
    <section class="page-x relative pb-24 pt-36 md:pb-40 md:pt-52">
      <h1 v-reveal.lines class="text-[clamp(3rem,9vw,9.5rem)] leading-[0.9] tracking-[-0.055em]">
        <span class="line-mask"><span style="--d: 80ms">Simplicity,</span></span>
        <span class="line-mask md:pl-[14vw]"><span style="--d: 180ms">crafted for</span></span>
        <span class="line-mask"><span style="--d: 280ms"><em class="serif-i">modern brands.</em></span></span>
      </h1>

      <div class="mt-16 flex flex-col gap-12 md:mt-24 md:flex-row md:items-start">
        <figure v-reveal="200" class="w-[60%] md:ml-[4%] md:w-[22%]">
          <img src="../assets/images/photo-me.webp" alt="Portrait of Artena Nagara" class="aspect-[4/5] w-full object-cover grayscale" />
          <figcaption class="mono-label mt-2 text-graphite">Artena Nagara, Surakarta</figcaption>
        </figure>

        <div class="md:ml-[14%] md:mt-[10vw] md:max-w-[44ch]">
          <p v-reveal="300" class="text-[clamp(1.3rem,1.9vw,1.75rem)] leading-[1.3] tracking-[-0.02em]">
            In a world full of digital noise, the clearest message wins. That's the principle at the core of my work.
          </p>
          <p v-reveal="350" class="mt-6 text-[17px] leading-relaxed text-ink/80">
            I'm a Product Designer with 3+ years designing SaaS and industrial web products, from tablet POS, billing, and
            loyalty apps for F&amp;B businesses to a multi-unit manufacturing group website. I build scalable design systems in
            Figma and understand front-end implementation (React, Next.js, Tailwind CSS), so every design stays grounded in
            what can be built, and ships pixel-accurate.
          </p>
        </div>
      </div>
    </section>

    <!-- Life outside work -->
    <figure v-reveal class="overflow-hidden bg-hairline">
      <img src="../assets/images/about-me.webp" alt="Artena outside of work" loading="lazy" class="h-[70vh] w-full object-cover md:h-[92vh]" />
    </figure>

    <section class="page-x py-24 md:py-40">
      <div class="relative md:pl-[30%]">
        <p v-reveal class="mono-label mb-6 text-graphite md:absolute md:left-0 md:top-2 md:mb-0">(Off screen)</p>
        <p v-reveal="100" class="max-w-[30ch] text-[clamp(1.5rem,2.8vw,2.6rem)] leading-[1.15] tracking-[-0.03em]">
          Badminton, swimming, a slow bike ride, long walks with music, and hunting for the best local food.
          Life is the balance between <span class="serif-i">perfect pixels</span> and good flavours.
        </p>
      </div>
    </section>

    <!-- Experience -->
    <section class="page-x pb-24 md:pb-40">
      <div class="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <h2 v-reveal class="text-[clamp(2.25rem,5vw,4.5rem)] leading-none tracking-[-0.045em]">
          Professional <span class="serif-i">journey</span>
        </h2>
        <p v-reveal="100" class="max-w-[38ch] text-[15px] leading-relaxed text-ink/70 md:mr-[6%]">
          From front-end development to product design for SaaS and manufacturing, each role meant new problems, close work with engineers, and user-centred products.
        </p>
      </div>

      <ol>
        <li
          v-for="(job, index) in experience"
          :key="job.company"
          v-reveal="index * 60"
          class="flex flex-col gap-2 border-t border-hairline py-6 last:border-b md:flex-row md:items-baseline md:gap-0 md:py-8"
        >
          <span class="mono-label text-graphite md:w-[14%]">{{ job.period }}</span>
          <span class="text-[clamp(1.5rem,2.6vw,2.4rem)] leading-none tracking-[-0.035em] md:w-[38%]">{{ job.company }}</span>
          <span class="serif-i text-[19px] md:w-[18%]">{{ job.role }}</span>
          <span class="text-[15px] leading-snug text-ink/70 md:w-[30%]">{{ job.summary }}</span>
        </li>
      </ol>
    </section>

    <!-- Links -->
    <section class="page-x pb-32 md:pb-48">
      <div class="flex flex-col md:ml-[30%]">
        <component
          :is="link.to ? 'RouterLink' : 'a'"
          v-for="(link, index) in links"
          :key="link.label"
          v-reveal="index * 80"
          :to="link.to"
          :href="link.href"
          :target="link.href ? '_blank' : null"
          :rel="link.href ? 'noopener noreferrer' : null"
          class="group flex items-baseline justify-between border-t border-hairline py-5 last:border-b"
        >
          <span class="text-[clamp(1.75rem,3.4vw,3.25rem)] leading-none tracking-[-0.04em] transition-transform duration-700 ease-out-expo group-hover:translate-x-4">
            {{ link.label }}
          </span>
          <span class="mono-label text-graphite">{{ link.note }} {{ link.href ? '↗' : '→' }}</span>
        </component>
      </div>
    </section>

    <FooterSection />
  </div>
</template>
