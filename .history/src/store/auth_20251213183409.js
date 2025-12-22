import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null
  }),

  getters: {
    isLoggedIn: (state) => !!state.token,
    username: (state) => state.user?.name || state.user?.email || ""
  },

  actions: {
    login(user, token) {
      this.user = user;
      this.token = token;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.clear();
    }
  }
});
