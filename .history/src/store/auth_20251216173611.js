import { defineStore } from "pinia";
import api from "@/api/axios";

export const useAuthStore = defineStore("auth", {
  state: () => {
    let user = null;
    let roles = [];

    try {
      const rawUser = localStorage.getItem("user");
      const rawRoles = localStorage.getItem("roles");

      user = rawUser ? JSON.parse(rawUser) : null;
      roles = rawRoles ? JSON.parse(rawRoles) : [];
    } catch (e) {
      console.warn("Invalid auth data in localStorage, clearing it");
      localStorage.removeItem("user");
      localStorage.removeItem("roles");
      user = null;
      roles = [];
    }

    return {
      user,
      roles,
      email: localStorage.getItem("email") || null,
      password: localStorage.getItem("password") || null,
    };
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
    isAdmin: (state) => state.roles.includes("ROLE_ADMIN"),
    username: (state) => state.user?.name || state.user?.email || "",
  },

  actions: {
    // 🔐 LOGIN (matches /api/auth/login)
    async login(email, password) {
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });

      this.user = res.data;
      this.roles = res.data.roles;
      this.email = email;
      this.password = password;

      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("roles", JSON.stringify(res.data.roles));
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    },

    // 🚪 LOGOUT
    logout() {
      this.user = null;
      this.roles = [];
      this.email = null;
      this.password = null;

      localStorage.removeItem("user");
      localStorage.removeItem("roles");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    },
  },
});
