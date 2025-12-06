// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Menu from '../components/Menu.vue'
import Rewards from '@/views/DashboardView.vue'
import Contact from '../components/Contact.vue'
// import Dashboard from '../viewsDashboardView.vue' // optional
import DashboardView from '@/views/DashboardView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/rewards', name: 'Rewards', component: Rewards },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView },
]

const router = createRouter({
  history: createWebHistory(), // or createWebHashHistory()
  routes,
})

export default router
