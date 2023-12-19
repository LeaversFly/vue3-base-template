import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
// import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// for (const name in Icons) {
//     app.component(name, (Icons)[name])
// }

app.mount('#app')