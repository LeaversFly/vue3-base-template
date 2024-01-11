import { createRouter, createWebHistory } from 'vue-router'
import { routes, addRoutes } from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes
})

addRoutes(router)

// 路由守卫
// router.beforeEach((to, from, next) => {
//     if (to.path !== '/') {
//         next({ path: '/login' })
//     } else {
//         next()
//     }
// })

export default router