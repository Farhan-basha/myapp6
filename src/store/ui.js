import { ref } from "vue";

export const modal = ref({ name: null });

export function openLogin() {
  modal.value.name = "login";
}

export function openSignup() {
  modal.value.name = "signup";
}

export function openForgot() {
  modal.value.name = "forgot";
}

export function closeModal() {
  modal.value.name = null;
}
