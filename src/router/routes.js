const routes = [
    // 这是一个例子
    {
        path: '/',
        component: () => import('../views/home.vue'),
        //meta可以不写
        meta: {
            icon: 'Odometer',
            title: '首页'
        }
    }
]

export default routes