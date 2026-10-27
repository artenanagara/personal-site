<script setup>
import { journey } from '../data/cv';

const experience = journey;

const links = [
  { label: 'Start a project', note: 'Freelance & contract', href: 'mailto:artenanagara22@gmail.com?subject=New%20project' },
  { label: 'Dribbble', note: 'Explorations and kit previews', href: 'https://dribbble.com/artenanagara' },
  { label: 'LinkedIn', note: "Let's connect", href: 'https://linkedin.com/in/artenanagara' },
  { label: 'Full CV', note: 'Experience, skills, education', to: '/cv' },
];
</script>

<template>
  <div class="flex flex-grow flex-col">
    <!-- Intro -->
    <section class="page-x relative pb-24 pt-36 md:pb-40 md:pt-52">
      <h1 data-reveal data-reveal-lines class="text-[clamp(3rem,9vw,9.5rem)] leading-[0.9] tracking-[-0.055em]">
        <span class="line-mask"><span style="--d: 80ms">Clear interfaces,</span></span>
        <span class="line-mask md:pl-[14vw]"><span style="--d: 180ms"><em class="serif-i">built</em> to ship,</span></span>
        <span class="line-mask"><span style="--d: 280ms">quiet enough</span></span>
        <span class="line-mask md:pl-[8vw]"><span style="--d: 380ms">to <em class="serif-i">disappear.</em></span></span>
      </h1>

      <div class="mt-16 flex flex-col gap-12 md:mt-24 md:flex-row md:items-start">
        <figure data-reveal="200" class="w-[60%] md:ml-[4%] md:w-[22%]">
          <img src="/images/photo-me.webp" alt="Portrait of Artena Nagara" class="aspect-[4/5] w-full object-cover grayscale" />
          <figcaption class="mono-label mt-2 text-graphite">Artena Nagara, Surakarta</figcaption>
        </figure>

        <div class="md:ml-[14%] md:mt-[10vw] md:max-w-[44ch]">
          <p data-reveal="300" class="text-[clamp(1.3rem,1.9vw,1.75rem)] leading-[1.3] tracking-[-0.02em]">
            Users don't read interfaces, they scan them. If the next step isn't obvious, the design isn't done.
          </p>
          <p data-reveal="350" class="mt-6 text-[17px] leading-relaxed text-ink/80">
            I'm a product designer with 3+ years on SaaS and industrial web products: a tablet POS, billing, and loyalty apps for
            F&amp;B, plus a website for a manufacturing group with 8 business units. I build design systems in Figma and write
            front-end code (React, Next.js, Vue, Tailwind CSS), so what I hand over is what gets built. I also make UI kits from
            the same component foundations I use on client work.
          </p>
        </div>
      </div>
    </section>

    <!-- Life outside work -->
    <figure data-reveal class="overflow-hidden bg-hairline">
      <img src="/images/about-me.webp" alt="Artena outside of work" loading="lazy" class="h-[70vh] w-full object-cover md:h-[92vh]" />
    </figure>

    <section class="page-x py-24 md:py-40">
      <div class="relative md:pl-[30%]">
        <p data-reveal class="mono-label mb-6 text-graphite md:absolute md:left-0 md:top-2 md:mb-0">(Off screen)</p>
        <p data-reveal="100" class="max-w-[30ch] text-[clamp(1.5rem,2.8vw,2.6rem)] leading-[1.15] tracking-[-0.03em]">
          Badminton, swimming, a slow bike ride, long walks with music, and hunting for the best local food.
          Life is the balance between <span class="serif-i">perfect pixels</span> and good flavors.
        </p>
      </div>
    </section>

    <!-- Experience -->
    <section class="page-x pb-24 md:pb-40">
      <div class="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <h2 data-reveal class="text-[clamp(2.25rem,5vw,4.5rem)] leading-none tracking-[-0.045em]">
          Professional <span class="serif-i">journey</span>
        </h2>
        <p data-reveal="100" class="max-w-[38ch] text-[15px] leading-relaxed text-ink/70 md:mr-[6%]">
          Front-end developer first, product designer now. Every role brought me closer to where design and code meet.
        </p>
      </div>

      <ol>
        <li
          v-for="(job, index) in experience"
          :key="job.company"
          :data-reveal="index * 60"
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
        <a
          v-for="(link, index) in links"
          :key="link.label"
          :data-reveal="index * 80"
          :href="link.to || link.href"
          :target="link.href?.startsWith('http') ? '_blank' : null"
          :rel="link.href?.startsWith('http') ? 'noopener noreferrer' : null"
          class="group flex items-baseline justify-between border-t border-hairline py-5 last:border-b"
        >
          <span class="text-[clamp(1.75rem,3.4vw,3.25rem)] leading-none tracking-[-0.04em] transition-transform duration-700 ease-out-expo group-hover:translate-x-4">
            {{ link.label }}
          </span>
          <span class="mono-label text-graphite">{{ link.note }} {{ link.href ? '↗' : '→' }}</span>
        </a>
      </div>
    </section>
  </div>
</template>
