import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/community',
        name: 'community',
        component: () => import('../views/community/community.vue')
    },
    {
        path: '/welfare',
        name: 'welfare',
        component: () => import('../views/welfare/welfare.vue')
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/mine/mine.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'selected' // 设置路由激活时的class
})

export default router