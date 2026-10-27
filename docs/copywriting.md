# Copywriting — artenanagara.com

Slogan: **Clear interfaces, built to ship.**
Niche: SaaS, web design, app design, development. Also a UI kit creator.

No new sections: all copy below fits the existing sections.

Tone: short sentences, concrete, no buzzwords. Talk to two readers at once: the client (who wants a clear product) and the developer (who has to build it).

`*text*` = serif italic accent (`serif-i`) in the current design.

---

## Meta / SEO (`src/layouts/BaseLayout.astro`, per-page props in `src/pages`)

- **Title:** Artena Nagara — Product Designer for SaaS, Web & Apps
- **Description:** Clear interfaces, built to ship. Product designer and UI kit creator designing SaaS products, websites, and apps that developers can build without guessing.
- **JSON-LD jobTitle:** Product Designer (UI/UX)
- **JSON-LD description:** Product designer and UI kit creator. Clear interfaces for SaaS, web, and apps, built to ship.
- **knowsAbout:** add `"SaaS Design"`, `"Web Design"`, `"App Design"`, `"UI Kits"`

---

## Navigation (`NavigationBar.vue`)

- Center label: `Product Designer — Surakarta, {time} WIB`

---

## Home

### Hero (`HeroSection.vue`)

- **Top label:** Clear interfaces, built to ship. (coordinates on the right, desktop only)
- **H1 (4 lines, photo inline on line 2):**
  1. Shaping the quiet
  2. details [photo] that make
  3. SaaS, web & apps
  4. feel *effortless.*
- **Meta row:**
  - Based in — Surakarta, Indonesia
  - Available for — Freelance & contract projects, worldwide
  - Have a project? — Let's talk → (mailto, subject "New project")

### About (`AboutSection.vue`)

- **Marginalia (About):** Freelance and contract product designer for SaaS, web, and apps. Design and front-end, from one person.
- **Statement:** A good interface doesn't need explaining. I design for the user who has to understand it and the developer who has to *build* it.
- **Body:** You get one person for the whole path: product thinking, interface design, a design system your developers can follow, and front-end code when you need it. Built for teams that need a product launched, not just a mockup.
- **Link:** More about me →

### Selected work (`SelectedWorks.vue`)

- **Heading:** Selected *work* (unchanged)
- **Subline (optional):** Shipped products, not just shots.

### Explorations (`MarqueeSection.vue`)

- **Label:** (Explorations)
- **Copy:** Concepts, side studies, and UI kit previews, shared on Dribbble. The kits come from the same component foundations I use on client work.
- **Link:** Dribbble ↗

### Footer (`FooterSection.vue`)

- **Label:** (Contact)
- **Heading:** Got a product to ship? Let's make it *clear.*
- **Subline:** Open for freelance and contract work. Tell me what you're building and when it needs to go live.
- **Email:** artenanagara22@gmail.com

---

## Work page (`WorkView.vue`)

- **Masthead label:** (Selected work)
- **H1:**
  1. Ideas that left the canvas
  2. and went *live.*
- **Index (below the H1, right of centre):** Years — {first}–{last} · Projects — {count, two digits}
- **Featured CTA:** View case study → (unchanged)

---

## About page (`AboutView.vue`)

- **H1 (the slogan, extended):**
  1. Clear interfaces,
  2. *built* to ship,
  3. quiet enough
  4. to *disappear.*
- **Lead:** Users don't read interfaces, they scan them. If the next step isn't obvious, the design isn't done.
- **Body:** I'm a product designer with 3+ years on SaaS and industrial web products: a tablet POS, billing, and loyalty apps for F&B, plus a website for a manufacturing group with 8 business units. I build design systems in Figma and write front-end code (React, Next.js, Vue, Tailwind CSS), so what I hand over is what gets built. I also make UI kits from the same component foundations I use on client work.
- **Off screen:** unchanged
- **Professional journey subline:** Front-end developer first, product designer now. Every role brought me closer to where design and code meet.
- **Links:**
  - Start a project — Freelance & contract ↗ (mailto)
  - Dribbble — Explorations and kit previews ↗
  - LinkedIn — Let's connect ↗
  - Full CV — Experience, skills, education →

---

## Case study subtitles

Plain sentence case, one concrete line each:

- Pickin — Clients tap a heart, photographers get the file names.
- Zenko — Timed exam practice that shows students what to study next.
- Fungsix — A bold website for an agency that runs everything in-house.
- Greenprobolinggo — One dashboard for a city's waste bank data and finances.
- Manis Grafika — A website as refined as the prayer books they print.
- Exmood — A calm mobile app for tracking moods and finding support.

## Case study template (`src/data/work-details/*.json`)

- **Metadata (same four for every project):** Role · Deliverables · Platform · Year
- **Text sections:** eyebrow (`label`: Problem, Challenge, Solution, Result) · title (`heading`, one specific sentence) · body (`content`, 2–3 sentences)
  - Problem: adds 3 goals, numbered (1) (2) (3)
  - Challenge: the real constraint (time, data, users), not a restatement of the goals
  - Solution: key decisions and why, with one image beside the text (`"style": "split"`)
  - Result: one line, then a numbered list. Facts only: awards, status, scope. Add numbers when there are real ones.
- Eyebrows never change: every case study has exactly Problem → Challenge → Solution → Result. Features go in the Solution's numbered list, not in sections of their own.
- Every text section is followed by images; text never stacks on text.

## Decisions

1. Slogan: "Clear interfaces, built to ship."
2. UI kits: many kits, no single link. Mentioned in copy; Dribbble carries the previews.
3. Cicle Studio: not mentioned for now.
4. Audience: freelance and contract clients first; every page points to contact.
