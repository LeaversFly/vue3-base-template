import { defineStore } from "pinia"

export default defineStore('routeStore', {
  state: () => {
    return {
      // 路由表
      routes: []
    }
  },
  actions: {
    addRoutes(router) {
      let modules = import.meta.glob("@/pages/**")
      Object.keys(modules).forEach(path => {
        const p = path.split('/').reverse()[1]
        if (!skipRoute.includes(p)) {
          this.routes.push({
            path: '/' + p,
            name: p,
            component: modules[path],
          })
        }
      })
      console.log('this.routes', this.routes)
      this.routes.forEach(m => router.addRoute(m))
    }
  },
  getters: {

  },
})