import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const About = () => import('../views/AboutView.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/work',
            name: 'work',
            component: () => import('../views/WorkView.vue')
        },
        {
            path: '/work/:id',
            name: 'work-detail',
            component: () => import('../views/WorkDetailView.vue')
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

export default router
