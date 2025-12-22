import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔑 Attach Basic Auth to EVERY request
api.interceptors.request.use((config) => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  if (email && password) {
    config.auth = {
      username: email,
      password: password,
    };
  }

  return config;
});

export default api;
