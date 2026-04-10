import { login, setCurrentUser } from "../services/authService.js";
import { validateEmail, validatePassword } from "../utils/validators.js";
import { clearError, showError, attachClearError } from "../ui/formError.js";
import { routes } from "../config/constants.js";

export const handleLogin = (e) => {
  e.preventDefault();

  const email = e.target.email;
  const password = e.target.password;

  [email, password].forEach((input) => {
    clearError(input);
    attachClearError(input);
  });

  let hasError = false;

  const emailErr = validateEmail(email.value);
  if (emailErr) {
    showError(email, emailErr.message);
    hasError = true;
  }

  const passwordErr = validatePassword(password.value);
  if (passwordErr) {
    showError(password, passwordErr.message);
    hasError = true;
  }

  if (hasError) return;

  const result = login({ email: email.value, password: password.value });

  if (!result.success) {
    showError(email, result.message);
    return;
  }

  setCurrentUser(result.user);
  sessionStorage.setItem(
    "toast",
    JSON.stringify({
      type: "success",
      title: "Đăng nhập thành công",
      message: "Chào mừng bạn quay trở lại",
    }),
  );

  window.location.href =
    result.user.role === "admin" ? routes.adminMovies : routes.home;
};
