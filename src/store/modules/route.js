import { defineStore } from "pinia"

export default defineStore('routeStore', {
  state: () => {
    return {
      // 路由表
      routes: []
    }
  },
  actions: {
  },
  getters: {},
})