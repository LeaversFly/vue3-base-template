const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('@/pages/home/index.vue'),
    },
    {
        name: '404',
        path: "/:catchAll(.*)",
        component: () => import('@/pages/error/404.vue'),
    },
    {
        name: '401',
        path: '/401',
        component: () => import('@/pages/error/401.vue'),
    },
]

const skipRoute = ['home', 'error']

function addRoutes(router) {
    //引入所有pages下.vue文件 
    let modules = import.meta.glob("@/pages/**")
    Object.keys(modules).forEach(path => {
        const p = path.split('/').reverse()[1]
        if (!skipRoute.includes(p)) {
            routes.push({
                path: '/' + p,
                name: p,
                component: modules[path],
            })
        }
    })
    console.log('this.routes', routes)
    routes.forEach(m => router.addRoute(m))
}

export { routes, addRoutes }