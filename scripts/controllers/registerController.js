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

  const errors = [
    validateName(fullname.value),
    validateEmail(email.value),
    validatePassword(password.value, true),
    validateConfirmPassword(confirmPassword.value, password.value),
  ].filter(Boolean);

  if (errors.length > 0) {
    const fieldMap = {
      fullname,
      email,
      password,
      confirmPassword,
    };

    errors.forEach((err) => {
      showError(fieldMap[err.field], err.message);
    });

    fieldMap[errors[0].field].focus();

    return;
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
