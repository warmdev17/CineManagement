import * as authService from "../services/authService.js";
import { validateEmail, validatePassword } from "../utils/validators.js";

export const handleLogin = (e) => {
  e.preventDefault();

  const email = e.target.email;
  const password = e.target.password;

  [email, password].forEach(clearError);

  const emailErr = validateEmail(email.value);
  if (emailErr) {
    showError(email, emailErr.message);
    attachClearError(email);
    return;
  }

  const passwordErr = validatePassword(password.value);
  if (passwordErr) {
    password.focus();
    showError(password, passwordErr.message);
    attachClearError(password);
    return;
  }

  const result = login({ email: email.value, password: password.value });

  if (!result.success) {
    showError(email, result.message);
    return;
  }

  if (result.user.role === "admin") {
    authService.setCurrentUser(result.user);
    sessionStorage.setItem(
      "toast",
      JSON.stringify({
        type: "success",
        title: "Đăng nhập thành công",
        message: "Chào mừng bạn quay trở lại",
      }),
    );
    window.location.href = "../../pages/admin.html";
  }

  if (result.user.role === "user") {
    authService.setCurrentUser(result.user);
    sessionStorage.setItem(
      "toast",
      JSON.stringify({
        type: "success",
        title: "Đăng nhập thành công",
        message: "Chào mừng bạn quay trở lại",
      }),
    );
    window.location.href = "../../index.html";
  }
};
