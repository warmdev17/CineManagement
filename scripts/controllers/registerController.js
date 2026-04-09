import { routes } from "../config/constrants.js";
import { users } from "../config/storage.js";
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

  [fullname, email, password, confirmPassword].forEach(clearError);

  const fullNameErr = validateName(fullname.value);
  if (fullNameErr) {
    showError(fullname, fullNameErr.message);
    return;
  }

  const emailErr = validateEmail(email.value);
  if (emailErr) {
    showError(email, emailErr.message);
    return;
  }

  const passErr = validatePassword(password.value, true);
  if (passErr) {
    showError(password, passErr.message);
    return;
  }

  const cPassErr = validateConfirmPassword(
    confirmPassword.value,
    password.value,
  );
  if (cPassErr) {
    showError(confirmPassword, cPassErr.message);
    return;
  }

  const user = register({
    fullname: fullname.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });

  if (!user.success) {
    showError(email, user.message);
    return;
  } else {
    users.push(user.regUser);

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
  }
};
