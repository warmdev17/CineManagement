import { showToast } from "../ui/toast.js";

const toastData = sessionStorage.getItem("toast");
if (toastData) {
  const { type, title, message } = JSON.parse(toastData);
  showToast(type, title, message);
  sessionStorage.removeItem("toast");
}
