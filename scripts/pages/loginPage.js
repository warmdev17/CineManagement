import { $ } from "../utils/dom.js";
import { handleLogin } from "../controllers/loginController.js";
import { showToast } from "../ui/toast.js";

const toastData = sessionStorage.getItem("toast");
if (toastData) {
  const { type, title, message } = JSON.parse(toastData);
  showToast(type, title, message);
  sessionStorage.removeItem("toast");
}

const loginForm = $("#login-form");

loginForm.addEventListener("submit", handleLogin);
