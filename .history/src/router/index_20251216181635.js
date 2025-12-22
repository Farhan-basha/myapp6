// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/components/LoginPage.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Menu from "@/components/Menu.vue";
import Contact from "@/components/Contact.vue";
import DashboardView from "@/views/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { public: true },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: { public: true },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { public: true },
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
    meta: { requiresAuth: true },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: { public: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
    meta: { requiresAdmin: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔐 SINGLE, CLEAN ROUTER GUARD
router.beforeEach((to, from, next) => {
  const user = localStorage.getItem("user");
  const roles = JSON.parse(localStorage.getItem("roles") || "[]");

  const isLoggedIn = !!user;
  const isAdmin = roles.includes("ROLE_ADMIN");

  // Public routes → always allowed
  if (to.meta.public) {
    return next();
  }

  // Admin-only routes
  if (to.meta.requiresAdmin) {
    if (!isLoggedIn) {
      return next("/login");
    }
    if (!isAdmin) {
      return next("/menu");
    }
    return next();
  }

  // Auth-required routes
  if (to.meta.requiresAuth && !isLoggedIn) {
    return next("/login");
  }

  next();
});

export default router;
