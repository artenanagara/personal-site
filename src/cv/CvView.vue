<script setup>
import { onMounted } from 'vue';
import cvFile from './CV - Artena Nagara.pdf';

onMounted(() => {
    document.body.style.backgroundColor = '#ffffff';
    document.title = 'CV - Artenna Dhyttya Nagara';
});
</script>

<template>
    <div class="min-h-screen bg-gray-200 py-10 px-4 md:px-0 font-serif leading-relaxed text-black">
        <div class="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-lg">
        <!-- Header -->
        <header class="mb-4">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-4">
                <div>
                    <h1 class="text-3xl font-bold mb-1">Artenna Dhyttya Nagara</h1>
                    <div class="text-sm">
                        <a href="mailto:artenanagara22@gmail.com" class="hover:underline block">artenanagara22@gmail.com</a>
                        <span class="block">Klaten, Jawa Tengah (57474)</span>
                    </div>
                </div>
                <div class="text-left md:text-right mt-4 md:mt-0 text-sm">
                    <div class="italic font-bold mb-1">UI/UX Designer</div>
                    <a href="https://linkedin.com/in/artenanagara" target="_blank" class="hover:underline block">linkedin.com/in/artenanagara</a>
                    <a href="https://artenanagara.my.id" target="_blank" class="hover:underline block">artenanagara.my.id</a>
                </div>
            </div>
            
            <p class="text-justify text-sm md:text-base">
                UI/UX Designer with 3 years of experience creating clean, modern, and user-friendly interface designs for both web and mobile platforms. Skilled in user research, wireframing, design system development, and interactive prototyping. Experienced in delivering real projects within startup environments, creative agencies, and certification programs. A Figma Expert since 2021, with strong collaboration skills working alongside developers to ensure efficient, consistent, and standard-compliant design implementation.
            </p>
        </header>

        <!-- Work Experience -->
        <section>
            <h2 class="text-xl font-bold border-b border-black pb-1 mb-2">Work Experience</h2>

            <!-- Job 1 -->
            <div class="mb-6">
                <div class="flex flex-col md:flex-row justify-between font-bold">
                    <span>PT Rintisan Teknologi Waralaba – Jakarta Pusat, DKI Jakarta (Remote)</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between italic">
                    <span>UI/UX Designer</span>
                    <span>August 2025 - Present</span>
                </div>
                <ul class="list-disc ml-5 space-y-1 text-sm md:text-base">
                    <li>Designed user interfaces for Kasheer, Rintisan Bisnis, and Rintisan Billing across dashboard, mobile, and tablet platforms with a focus on improving usability and efficiency.</li>
                    <li>Redesigned the Dashboard V2 UI to enhance flow and help users better understand key information and functions.</li>
                    <li>Collaborated closely with front-end and mobile developers during UI slicing to maintain visual accuracy and design consistency.</li>
                </ul>
            </div>

            <!-- Job 2 -->
             <div class="mb-6">
                <div class="flex flex-col md:flex-row justify-between font-bold">
                    <span>Digitakarya Creative Agency – Surakarta, Jawa Tengah</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between italic">
                    <span>Website Designer</span>
                    <span>December 2022 – December 2024</span>
                </div>
                <ul class="list-disc ml-5 space-y-1 text-sm md:text-base">
                    <li>Designed 5 client websites using clean layouts and responsive navigation to optimize user experience.</li>
                    <li>Built 2 WordPress websites, including theme adjustments, layout development, and content setup.</li>
                    <li>Analyzed client needs and translated them into effective and implementable design solutions.</li>
                </ul>
            </div>

            <!-- Job 3 -->
             <div class="mb-6">
                <div class="flex flex-col md:flex-row justify-between font-bold">
                    <span>PT Allure Alluminio – Jakarta Utara, DKI Jakarta (Remote)</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between italic">
                    <span>Front-End Developer (Intern)</span>
                    <span>August – December 2022</span>
                </div>
                <ul class="list-disc ml-5 space-y-1 text-sm md:text-base">
                    <li>Developed CRM features for the ERP system using Laravel and Tailwind CSS based on design and user requirements.</li>
                    <li>Performed UI slicing and ensured alignment between provided designs and final interface components.</li>
                    <li>Coordinated with backend developers to integrate data and synchronize system functionalities.</li>
                </ul>
            </div>

             <!-- Job 4 -->
             <div class="mb-6">
                <div class="flex flex-col md:flex-row justify-between font-bold">
                    <span>PT Arkatama Multi Solusindo – Malang, Jawa Timur (Hybrid)</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between italic">
                    <span>UI/UX Designer (Intern)</span>
                    <span>February – July 2022</span>
                </div>
                <ul class="list-disc ml-5 space-y-1 text-sm md:text-base">
                    <li>Completed more than 10 UI design projects for companies such as ASNET, AMD Academy, and SMKPPN Kupang.</li>
                    <li>Built internal design systems to improve consistency across products and streamline design processes.</li>
                    <li>Collaborated with developers to ensure accurate implementation of UI across applications.</li>
                </ul>
            </div>

             <!-- Job 5 -->
             <div class="mb-6">
                <div class="flex flex-col md:flex-row justify-between font-bold">
                    <span>PT Impactbyte Teknologi Edukasi (Skilvul) – Jakarta Selatan, DKI Jakarta (Remote)</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between italic">
                    <span>UI/UX Designer (Intern)</span>
                    <span>August – December 2021</span>
                </div>
                <ul class="list-disc ml-5 space-y-1 text-sm md:text-base">
                    <li>Designed an online course application and created its design system for further development needs</li>
                    <li>Developed a prototype solution for Bank Jago using the Design Thinking approach from research to testing.</li>
                    <li>Conducted usability testing and achieved a score of 6/7 as the foundation for user experience evaluation.</li>
                </ul>
            </div>
        </section>

        <!-- Education -->
        <section class="mt-8">
            <h2 class="text-xl font-bold border-b border-black pb-1 mb-6">Education</h2>
            <div class="mb-6">
                <div class="flex flex-col md:flex-row justify-between font-bold">
                    <span>Universitas Negeri Semarang</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between italic">
                    <span>Bachelor of Informatics Engineering (IPK: 3.63/4.00)</span>
                    <span>2019 – 2025</span>
                </div>
                <ul class="list-disc ml-5 space-y-1 text-sm md:text-base">
                    <li>Won 1st Place UI/UX Design at DIMAS-TI AMLI 2022 by developing the EXMOOD app (UI, prototyping, design system).</li>
                    <li>Served as a creative designer for P2MW 2022 (Erase), contributing to project funding success and participation in KMI Expo UPN Jawa Timur.</li>
                    <li>Participated in the KBMI 2021 Program (Stilldie.id) as a creative designer, successfully securing Kemendikbud funding.</li>
                </ul>
            </div>
        </section>

        <!-- Organizational Experience -->
        <section class="mt-8">
            <h2 class="text-xl font-bold border-b border-black pb-1 mb-6">Organizational Experience</h2>
            
            <div class="mb-6">
                <div class="flex flex-col md:flex-row justify-between font-bold">
                    <span>Keluarga Mahasiswa Klaten UNNES (KMK UNNES)</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between italic">
                    <span>Publication & Documentation</span>
                    <span>2020 - 2022</span>
                </div>
                <ul class="list-disc ml-5 space-y-1 text-sm md:text-base">
                    <li>Designed various visual assets for Instagram, posters, banners, and publication materials for internal and external events.</li>
                    <li>Supported the visual branding of all KMK events to maintain consistency with organizational identity.</li>
                </ul>
            </div>

            <div class="mb-6">
                <div class="flex flex-col md:flex-row justify-between font-bold">
                    <span>Screenshot UNNES</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between italic">
                    <span>Design & Animation Division</span>
                    <span>2021–2022</span>
                </div>
                <ul class="list-disc ml-5 space-y-1 text-sm md:text-base">
                    <li>Produced posters and event banners to support effective and clear communication.</li>
                    <li>Maintained Screenshot’s visual identity through consistent, professional, and cohesive design output.</li>
                </ul>
            </div>
        </section>

        <!-- Volunteer Experience -->
        <section class="mt-8">
            <h2 class="text-xl font-bold border-b border-black pb-1 mb-6">Volunteer Experience</h2>
            
            <div class="mb-6">
                <div class="flex flex-col md:flex-row justify-between font-bold">
                    <span>PKKMB FMIPA UNNES</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between italic">
                    <span>IT Division</span>
                    <span>2020 - 2022</span>
                </div>
                <ul class="list-disc ml-5 space-y-1 text-sm md:text-base">
                    <li>Designed the PKKMB FMIPA UNNES website interface with a focus on readability, content structure, and user experience improvements.</li>
                    <li>Performed UI slicing using Tailwind CSS and collaborated with backend developers for system integration.</li>
                </ul>
            </div>
        </section>

        <!-- Skills -->
        <section class="mt-8">
            <h2 class="text-xl font-bold border-b border-black pb-1 mb-6">Skill</h2>
            <div class="space-y-4 text-sm md:text-base">
                <div>
                    <span class="font-bold">Software:</span> Figma, Figjam, Wordpress, Elementor, Webflow, Framer, Maze, Trello, Notion, Photoshop, Illustrator, Github
                </div>
                <div>
                   <span class="font-bold">Technical Skill:</span> UI/UX Design, Wireframing, Prototyping, Design System, HTML, CSS, JavaScript, React JS, Graphic Design, Front-end Development
                </div>
                <div>
                   <span class="font-bold">Soft Skill:</span> Problem Solving, Teamwork, Communication, Creativity, Time Management, Adaptability
                </div>
            </div>
        </section>
    </div>
    
    <!-- Floating Download Button -->
    <a 
        :href="cvFile" 
        download="CV - Artena Nagara.pdf"
        class="fixed bottom-8 right-8 bg-black text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-transform print:hidden flex items-center gap-2 z-50 font-sans"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Download PDF
    </a>
    </div>
</template>

<style scoped>
/* Ensure font works even if tailwind config has issues */
.font-serif {
    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}

@media print {
    /* Reset background and padding for print */
    .bg-gray-200 {
        background-color: white !important;
        padding: 0 !important;
    }
    .shadow-lg {
        box-shadow: none !important;
    }
    .max-w-4xl {
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    
    /* Hide non-printable elements */
    .print\:hidden {
        display: none !important;
    }

    /* Ensure text is black */
    body {
        color: black !important;
    }

    /* Clean links */
    a {
        text-decoration: none !important;
        color: black !important;
    }
    
    @page {
        margin: 0.5cm;
    }
}
</style>
