// store/user.js
import { ref } from 'vue';

export const user = ref({
  username: localStorage.getItem('username') || null,
  token: localStorage.getItem('token') || null,
});

export function setUser(name, token) {
  user.value.username = name;
  user.value.token = token;
  if (name) localStorage.setItem('username', name);
  if (token) localStorage.setItem('token', token);
}

export function clearUser() {
  user.value.username = null;
  user.value.token = null;
  localStorage.removeItem('username');
  localStorage.removeItem('token');
}
