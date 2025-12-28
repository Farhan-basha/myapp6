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
    let token = null;

    try {
      const rawUser = localStorage.getItem("user");
      user = rawUser ? JSON.parse(rawUser) : null;
      token = localStorage.getItem("token");
    } catch (e) {
      console.warn("Invalid auth data in localStorage, clearing it");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      user = null;
      token = null;
    }

    return {
      user,
      token,
      initialized: true, // 🔥 helps UI wait for auth state
    };
  },

  getters: {
    isLoggedIn: (state) => !!state.token,
    username: (state) =>
      state.user?.name ||
      state.user?.email ||
      "",

    isAdmin: (state) =>
      state.user?.role === "ADMIN",
  },

  actions: {
    login(user, token) {
      // ✅ reactive update (THIS fixes auto reload issue)
      this.user = user;
      this.token = token;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    },

    logout() {
      this.user = null;
      this.token = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },

    restore() {
      // Optional: call this in main.js if needed
      try {
        const rawUser = localStorage.getItem("user");
        this.user = rawUser ? JSON.parse(rawUser) : null;
        this.token = localStorage.getItem("token");
      } catch {
        this.logout();
      }
    }
  }
});
