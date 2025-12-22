import api from "./axios";

export const getRewards = () => {
  return api.get("/rewards");
};
