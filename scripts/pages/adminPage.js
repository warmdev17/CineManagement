import { handleLogout } from "../controllers/logoutController.js";
import { getCurrentUser } from "../services/authService.js";
import { showToast } from "../ui/toast.js";
import { $ } from "../utils/dom.js";
import { routes } from "../config/constants.js";

// Auth guard — redirect non-admin users
const currentUser = getCurrentUser();
if (!currentUser || currentUser.role !== "admin") {
  window.location.href = routes.login;
}

const toastData = sessionStorage.getItem("toast");
if (toastData) {
  const { type, title, message } = JSON.parse(toastData);
  showToast(type, title, message);
  sessionStorage.removeItem("toast");
}

const logoutBtn = $(".btn-logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", handleLogout);
}
