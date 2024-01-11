const routes = [
    {
        path: '/home',
        name: '/',
        redirect: '/',
        component: () => import('@/layouts/index.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/pages/home/index.vue'),
            }
        ]
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
    {
        name: 'login',
        path: '/login',
        component: () => import('@/pages/login/index.vue'),
    },
]

const skipFolder = ['home', 'error', 'login']

function addRoutes(router) {
    //引入所有pages下.vue文件 
    let modules = import.meta.glob("@/pages/**")
    Object.keys(modules).forEach(path => {
        const p = path.split('/').reverse()[1]
        if (!skipFolder.includes(p)) {
            routes.children.push({
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