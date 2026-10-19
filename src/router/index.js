import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const About = () => import('../views/AboutView.vue')
const CvView = () => import('../cv/CvView.vue')

// cv.artenanagara.my.id serves the CV at its root; the main site keeps /cv as well.
const isCvSubdomain = window.location.hostname.startsWith('cv.')

const cvMeta = {
    title: 'CV',
    description: 'Curriculum vitae of Arttenna Dhyttya Nagara, Product Designer (UI/UX) for SaaS and manufacturing.',
    hideNavigation: true,
    hideFooter: true
}

const routes = isCvSubdomain ? [
    { path: '/', name: 'cv', component: CvView, meta: cvMeta },
    { path: '/:pathMatch(.*)*', redirect: '/' }
] : [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: null,
            description: 'Artena Nagara is a Product Designer (UI/UX) creating clear, buildable interfaces for SaaS and industry. View the portfolio and recent work.'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            title: 'About',
            description: 'Product Designer with 3+ years designing SaaS and industrial web products, with Figma design systems grounded in front-end implementation.'
        }
    },
    {
        path: '/work',
        name: 'work',
        component: () => import('../views/WorkView.vue'),
        meta: {
            title: 'Work',
            description: 'Selected UI/UX, web, and product design work by Artena Nagara, with case studies.'
        }
    },
    {
        path: '/work/:id',
        name: 'work-detail',
        component: () => import('../views/WorkDetailView.vue'),
        meta: {
            title: 'Project'
        }
    },
    { path: '/cv', name: 'cv', component: CvView, meta: cvMeta },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/NotFoundView.vue'),
        meta: {
            title: 'Page Not Found',
            noindex: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    // Scroll is reset to the top by App.vue after the page transition
    scrollBehavior() {
        return false
    }
})

export default router
