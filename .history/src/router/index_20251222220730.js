// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Menu from '../components/Menu.vue'
import Contact from '../components/Contact.vue'
import DashboardView from '@/views/DashboardView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { requiresAuth: false } },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/about', name: 'About', component: About },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView, meta: { requiresAd: true } },
  
]

const router = createRouter({
  history: createWebHistory(), // or createWebHashHistory()
  routes,
})

// Redirect to login only for protected routes
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const publicRoutes = [
    // '/', '/login', '/about', '/menu', '/contact', '/dashboard'
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/dashboard', name: 'Dashboard', component: DashboardView }
  ]
  
  if (publicRoutes.includes(to.path)) {
    next()
  } else if (!token && to.path !== '/login') {
    next('/login')
  } else if (token && to.path === '/login') {
    next('/')
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router
