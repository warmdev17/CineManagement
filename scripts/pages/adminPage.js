import { handleLogout } from "../controllers/logoutController.js";
import { showToast } from "../ui/toast.js";
import { $ } from "../utils/dom.js";

const toastData = sessionStorage.getItem("toast");
if (toastData) {
  const { type, title, message } = JSON.parse(toastData);
  showToast(type, title, message);
  sessionStorage.removeItem("toast");
}

const logoutBtn = $(".btn-logout");
logoutBtn.addEventListener("click", handleLogout);
