// Single source for CV content, used by the CV page and the About page.

export const profile = {
  name: 'Arttenna Dhyttya Nagara',
  title: 'Product Designer (UI/UX)',
  focus: 'SaaS & Manufacturing',
  location: 'Klaten, Central Java, Indonesia (Open to Remote)',
  email: 'artenanagara22@gmail.com',
  linkedin: 'linkedin.com/in/artenanagara',
  website: 'artenanagara.com',
  summary:
    'Product Designer with 3+ years designing SaaS and industrial web products, from a tablet POS, billing, and loyalty apps for F&B businesses to a multi-unit manufacturing group website. Builds scalable design systems in Figma and understands front-end implementation (React, Next.js, TypeScript, Tailwind CSS), so designs stay grounded in what is buildable. Works with an AI-native workflow using Claude Code to move from concept to working prototype quickly. Strong at bridging design and engineering for pixel-accurate delivery.',
};

export const experience = [
  {
    role: 'UI/UX Designer',
    company: 'PT Rintisan Teknologi Waralaba (SaaS)',
    shortCompany: 'Rintisan',
    location: 'Jakarta Pusat, DKI Jakarta (Remote)',
    period: 'August 2025 - Present',
    shortPeriod: '2025–Now',
    summary: 'Core features for the Kasheer POS, Kasheer Loyalty, and the Dashboard V2 redesign.',
    points: [
      'Designed core features for Kasheer, a tablet-based POS SaaS for F&B, including QR code online ordering, table management, inventory tracking, and a queue number system.',
      'Designing Kasheer Loyalty, a new loyalty app product built as an extension of the Kasheer ecosystem.',
      'Led the Dashboard V2 redesign, restructuring information architecture so users find key data and actions faster with less cognitive load.',
      'Designed Rintisan Bisnis and Rintisan Billing across dashboard, mobile, and tablet platforms.',
      'Built scalable Figma design systems (components, variables, auto layout) for each product and delivered structured handoff documentation for pixel-accurate implementation.',
      'Collaborated closely with front-end and mobile developers during UI slicing to maintain visual accuracy and design consistency.',
    ],
  },
  {
    role: 'UI/UX Designer (Contract)',
    company: 'Kembar Futagroup (Manufacturing & Industrial Group)',
    shortCompany: 'Kembar Futagroup',
    location: 'Klaten, Central Java',
    period: 'June 2026 - Present',
    shortPeriod: '2025–Now',
    shortRole: 'UI/UX Designer',
    summary: 'Holding company website for 8 business units, plus product cluster and casting service sites.',
    points: [
      'Designed and built the Kembar Futagroup holding company website from the ground up, covering 8 business units for B2B, B2G, and B2C audiences.',
      'Designed the website for jasacorlogam.id, a metal casting service company within the group.',
      'Mentored a design intern by writing a full project brief and guiding independent execution from research through prototyping.',
    ],
  },
  {
    role: 'UI/UX Designer (Apprenticeship)',
    company: 'Kembar Futagroup',
    location: 'Klaten, Central Java',
    period: 'December 2025 - June 2026',
    points: [
      "Designed the UI for the group's product cluster website, covering 10-15 industrial products.",
      'Converted an existing production website into a structured, component-based Figma file to speed up design-to-development handoff.',
    ],
  },
  {
    role: 'UI Designer (Freelance)',
    company: 'Digitakarya Creative Agency',
    location: 'Surakarta, Central Java (Hybrid)',
    period: 'March 2026 - May 2026',
    points: ['Delivered UI and web design for agency client projects, covering mobile web and front-end design.'],
  },
  {
    role: 'Website Designer (Freelance)',
    company: 'Digitakarya Creative Agency',
    shortCompany: 'Digitakarya Creative',
    location: 'Surakarta, Central Java (Hybrid)',
    period: 'December 2022 - December 2024',
    shortPeriod: '2022–2026',
    shortRole: 'Web & UI Designer',
    summary: 'Client websites and UI, including WordPress builds and mobile web design.',
    points: [
      'Designed 5 client websites with clean layouts and responsive navigation.',
      'Built 2 WordPress websites, including theme adjustments, layout development, and content setup.',
      'Analyzed client needs and translated them into effective, implementable design solutions.',
    ],
  },
  {
    role: 'Front-End Developer (Intern)',
    company: 'PT Allure Alluminio',
    shortCompany: 'Allure Alluminio',
    location: 'Jakarta Utara, DKI Jakarta (Remote)',
    period: 'August 2022 - December 2022',
    shortPeriod: '2022',
    summary: 'CRM features for an ERP system, built with Laravel and Tailwind CSS.',
    points: [
      'Developed CRM features for an ERP system using Laravel and Tailwind CSS based on design and user requirements.',
      'Performed UI slicing and ensured alignment between provided designs and final interface components.',
      'Coordinated with backend developers to integrate data and synchronize system functionality.',
    ],
  },
  {
    role: 'UI/UX Designer (Intern)',
    company: 'PT Arkatama Multi Solusindo',
    shortCompany: 'Arkatama Multi Solusindo',
    location: 'Malang, East Java (Hybrid)',
    period: 'February 2022 - July 2022',
    shortPeriod: '2022',
    summary: '10+ UI projects for clients including ASNET and AMD Academy, plus internal design systems.',
    points: [
      'Completed 10+ UI design projects for clients including ASNET, AMD Academy, and SMKPPN Kupang.',
      'Built internal design systems to improve consistency across products and streamline design processes.',
    ],
  },
  {
    role: 'UI/UX Designer (Intern)',
    company: 'PT Impactbyte Teknologi Edukasi (Skilvul)',
    shortCompany: 'Skilvul',
    location: 'Jakarta Selatan, DKI Jakarta (Remote)',
    period: 'August 2021 - December 2021',
    shortPeriod: '2021',
    summary: 'An online course app and design system, and a Bank Jago prototype tested at 6/7.',
    points: [
      'Designed an online course application and its design system.',
      'Built a Bank Jago prototype using Design Thinking, from research to usability testing (score of 6 out of 7).',
    ],
  },
];

// Condensed journey for the About page: one row per company
export const journey = experience
  .filter((job) => job.shortPeriod)
  .map((job) => ({
    company: job.shortCompany || job.company,
    role: job.shortRole || job.role.replace(/ \((Intern|Contract|Freelance)\)/, ''),
    period: job.shortPeriod,
    summary: job.summary,
  }));

export const skills = [
  { label: 'Product Design', value: 'User Research, Information Architecture, Wireframing, Prototyping, Usability Testing, Design Systems, Design Handoff' },
  { label: 'Design Tools', value: 'Figma (Components, Variables, Auto Layout), FigJam, Maze, Photoshop, Illustrator' },
  { label: 'Front-End', value: 'React, Next.js, TypeScript, JavaScript, Vue, Tailwind CSS, HTML, CSS' },
  { label: 'AI Workflow', value: 'Claude Code (AI-assisted design-to-code and rapid prototyping)' },
  { label: 'CMS & No-code', value: 'WordPress, Elementor, Framer' },
  { label: 'Workflow', value: 'GitHub, Notion, Trello' },
];

export const education = {
  degree: 'Bachelor of Informatics Engineering',
  school: 'Universitas Negeri Semarang',
  period: '2019 - 2025',
  gpa: '3.63 / 4.00',
  points: [
    '1st Place, UI/UX Design, DIMAS-TI AMLI 2022 - designed the EXMOOD app (UI, prototyping, design system).',
    'Creative designer for funded student ventures: P2MW 2022 (Erase) and KBMI 2021 (Stilldie.id, Kemendikbud funding).',
  ],
};

export const organizations =
  'Design and IT roles at KMK UNNES (Publication & Documentation, 2020-2022), Screenshot UNNES (Design & Animation, 2021-2022), and PKKMB FMIPA UNNES (IT Division, 2020-2022; event website UI and Tailwind CSS slicing).';
