import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from "./routers/router"
import  VCharts  from 'v-charts'


const pinia = createPinia()
const app=createApp(App)

app.use(VCharts)
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
