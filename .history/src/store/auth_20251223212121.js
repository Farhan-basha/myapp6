// import { defineStore } from "pinia";

// export const useAuthStore = defineStore("auth", {
//   state: () => {
//     let user = null;

//     try {
//       const rawUser = localStorage.getItem("user");
//       user = rawUser ? JSON.parse(rawUser) : null;
//     } catch (e) {
//       console.warn("Invalid user in localStorage, clearing it");
//       localStorage.removeItem("user");
//       user = null;
//     }

//     return {
//       user,
//       token: localStorage.getItem("token") || null
//     };
//   },

//   getters: {
//     isLoggedIn: (state) => !!state.token,
//     username: (state) => state.user?.name || state.user?.email || ""
//   },

//   actions: {
//     login(user, token) {
//       this.user = user;
//       this.token = token;
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("token", token);
//     },

//     logout() {
//       this.user = null;
//       this.token = null;
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//     }
//   }
// });

import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    let user = null;

    try {
      const rawUser = localStorage.getItem("user");
      user = rawUser ? JSON.parse(rawUser) : null;
    } catch (e) {
      console.warn("Invalid user in localStorage, clearing it");
      localStorage.removeItem("user");
      user = null;
    }

    return {
      user,
      token: localStorage.getItem("token") || null,
    };
  },

  getters: {
    // 🔐 AUTH STATE
    isLoggedIn: (state) => !!state.token,

    // 🔐 ROLE CHECK
    isAdmin: (state) => state.user?.role === "ROLE_ADMIN",

    // 👤 DISPLAY NAME
    username: (state) =>
      state.user?.email || state.user?.name || "",
  },

  actions: {
    // ✅ LOGIN (SINGLE SOURCE OF TRUTH)
    login(user, token) {
      this.user = user;
      this.token = token;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    },

    // ✅ LOGOUT (REACTIVE)
    logout() {
      this.user = null;
      this.token = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

