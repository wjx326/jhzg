import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from "./routers/router"

const pinia = createPinia()
createApp(App).use(pinia).use(ElementPlus).use(router).mount('#app')
