import { $ } from "../utils/dom.js";
import { handleRegister } from "../controllers/registerController.js";
import { showToast } from "../ui/toast.js";

const toastData = sessionStorage.getItem("toast");
if (toastData) {
  const { type, title, message } = JSON.parse(toastData);
  showToast(type, title, message);
  sessionStorage.removeItem("toast");
}

const registerForm = $("#register-form");
const agreeTermsCheckbox = $("#agree-terms");
const registerBtn = $("#register-btn");

agreeTermsCheckbox.addEventListener("change", (e) => {
  registerBtn.disabled = !e.target.checked;
});

registerForm.addEventListener("submit", handleRegister);
