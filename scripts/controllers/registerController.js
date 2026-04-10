import { routes } from "../config/constants.js";
import { users } from "../config/storage.js";
import { register } from "../services/authService.js";
import { clearError, showError, attachClearError } from "../ui/formError.js";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword,
} from "../utils/validators.js";

export const handleRegister = (e) => {
  e.preventDefault();

  const fullname = e.target.fullname;
  const email = e.target.email;
  const password = e.target.password;
  const confirmPassword = e.target.confirmPassword;

  [fullname, email, password, confirmPassword].forEach((input) => {
    clearError(input);
    attachClearError(input);
  });

  let hasError = false;

  const fullNameErr = validateName(fullname.value);
  if (fullNameErr) {
    showError(fullname, fullNameErr.message);
    hasError = true;
  }

  const emailErr = validateEmail(email.value);
  if (emailErr) {
    showError(email, emailErr.message);
    hasError = true;
  }

  const passErr = validatePassword(password.value, true);
  if (passErr) {
    showError(password, passErr.message);
    hasError = true;
  }

  const cPassErr = validateConfirmPassword(
    confirmPassword.value,
    password.value,
  );
  if (cPassErr) {
    showError(confirmPassword, cPassErr.message);
    hasError = true;
  }

  if (hasError) return;

  const result = register({
    fullName: fullname.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });

  if (!result.success) {
    showError(email, result.message);
    return;
  }

  users.push(result.regUser);
  localStorage.setItem("users", JSON.stringify(users));

  sessionStorage.setItem(
    "toast",
    JSON.stringify({
      type: "success",
      title: "Đăng ký thành công",
      message: "Đăng nhập để tiếp tục",
    }),
  );
  window.location.href = routes.login;
};
