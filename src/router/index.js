import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const About = () => import('../views/AboutView.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
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
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('../views/NotFoundView.vue'),
            meta: {
                title: 'Page Not Found | Artena Nagara'
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Artena Nagara - UI/UX Designer'
    next()
})

export default router
