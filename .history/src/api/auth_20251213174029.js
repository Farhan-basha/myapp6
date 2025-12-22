import api from "./axios";

export const loginUser = (payload) => {
  return api.post("/auth/login", payload);
};

export const registerUser = (payload) => {
  return api.post("/auth/register", payload);
};
