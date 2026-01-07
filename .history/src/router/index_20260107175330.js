import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "../components/LoginPage.vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Menu from "../components/menu/Menu.vue";
import Contact from "../components/Contact.vue";
import DashboardView from "@/views/DashboardView.vue";
// import DashboardView from "../components/dashboard/DashboardView.vue";
import Orders from "../components/dashboard/Orders.vue";
import MenuAdmin from "../components/dashboard/Menu.vue";
import Users from "../components/dashboard/User.vue";
import Settings from "../components/dashboard/Settings.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }, // 🔐 LOGIN REQUIRED
  },
  {
    path: "/about",
    component: About,
    meta: { requiresAuth: true },
  },
  {
    path: "/menu",
    component: Menu,
    meta: { requiresAuth: true },
  },
  {
    path: "/menu/add",
    component: () => import("@/views/AddMenu.vue"),
    meta: { requiresAdmin: true },
  },
  {
    path: "/contact",
    component: Contact,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    component: DashboardView,
    meta: { requiresAdmin: true },
  },
  {
    path: "/dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        redirect: "/dashboard/orders",
      },
      {
        path: "orders",
        component: Orders,
      },
      {
        path: "menu",
        component: MenuAdmin,
      },
      {
        path: "users",
        component: Users,
        meta: { requiresAdmin: true },
      },
      {
        path: "settings",
        component: Settings,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔐 LOGIN REQUIRED
  if (to.meta.requiresAuth && !token) {
    return next("/login");
  }

  // 🔐 ADMIN ONLY
  if (to.meta.requiresAdmin) {
    if (!token || user?.role !== "ROLE_ADMIN") {
      return next("/");
    }
  }

  // 🚫 Logged-in users should not see login again
  if (token && to.path === "/login") {
    if (user?.role === "ROLE_ADMIN") {
      return next("/dashboard");
    }
    return next("/");
  }

  next();
});

export default router;
