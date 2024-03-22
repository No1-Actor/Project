import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import '@/assets/css/common.css'
import '@/assets/font/iconfont.css'
import './tailwind.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
