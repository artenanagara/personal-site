import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const About = () => import('../views/AboutView.vue')
const CvView = () => import('../cv/CvView.vue')

const isCvSubdomain = window.location.hostname.startsWith('cv.')

const routes = isCvSubdomain ? [
    {
        path: '/',
        name: 'cv-home',
        component: CvView,
        meta: {
            title: 'CV | Artena Nagara',
            hideNavigation: true,
            hideFooter: true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
] : [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Artena Nagara | UI/UX Designer'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            title: 'About | Artena Nagara'
        }
    },
    {
        path: '/work',
        name: 'work',
        component: () => import('../views/WorkView.vue'),
        meta: {
            title: 'Work | Artena Nagara'
        }
    },
    {
        path: '/work/:id',
        name: 'work-detail',
        component: () => import('../views/WorkDetailView.vue'),
        meta: {
            title: 'Project | Artena Nagara'
        }
    },
    // Redirect old /cv path to subdomain if possible, otherwise keep as fallback
    {
        path: '/cv',
        beforeEnter() {
            window.location.href = 'https://cv.artenanagara.my.id'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/NotFoundView.vue'),
        meta: {
            title: 'Page Not Found | Artena Nagara'
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return false
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Artena Nagara'
    next()
})

export default router
