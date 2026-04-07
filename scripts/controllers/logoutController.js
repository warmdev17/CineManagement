import { logout } from "../services/authService.js";
import { showModal } from "../ui/modal.js";

export const handleLogout = () => {
  showModal({
    title: "Đăng xuất",
    message: "Bạn có chắc muốn đăng xuất không?",
    type: "confirm",
    confirmText: "Đăng xuất",
    cancelText: "Huỷ",

    onConfirm: () => {
      logout();

      sessionStorage.setItem(
        "toast",
        JSON.stringify({
          type: "success",
          title: "Thành công",
          message: "Đã đăng xuất",
        }),
      );

      window.location.href = "./pages/login.html";
    },

    onCancel: () => {
      console.log("User cancelled logout");
    },
  });
};
