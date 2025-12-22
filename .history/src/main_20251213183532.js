
import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'       
import './assets/tailwind.css'          

const app = createApp(App)

app.use(createpinia())import { createPinia } from "pinia";
app.use(router)   
app.mount('#app')
