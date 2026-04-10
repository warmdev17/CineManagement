import { showToast } from "../ui/toast.js";
import { getCurrentUser } from "../services/authService.js";
import { $ } from "../utils/dom.js";
import { handleLogout } from "../controllers/logoutController.js";
import { routes } from "../config/constants.js";

const btnHeader = $(".btn-header");
const toastData = sessionStorage.getItem("toast");

if (toastData) {
  const { type, title, message } = JSON.parse(toastData);
  showToast(type, title, message);
  sessionStorage.removeItem("toast");
}

const currentUser = getCurrentUser();

if (currentUser) {
  btnHeader.textContent = "Đăng xuất";
  btnHeader.onclick = handleLogout;
} else {
  btnHeader.textContent = "Đăng nhập / Đăng ký";
  btnHeader.onclick = () => {
    window.location.href = routes.login;
  };
}
