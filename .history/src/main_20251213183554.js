
import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'       
import './assets/tailwind.css'          

const app = createApp(App)

app.use(createpinia())
app.use(router)   
app.mount('#app')
``