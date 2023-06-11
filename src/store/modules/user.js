import { defineStore } from "pinia"

export default defineStore('user', {
    state() {
        return {
          username:'',
          password:''
        }
    },
    actions: {},
    getters: {}
})