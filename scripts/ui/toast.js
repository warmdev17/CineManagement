import { $ } from "../utils/dom.js";

export const showToast = (type, title, message) => {
  const container = $("#toast-container");

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  toast.innerHTML = `
    <strong>${title}</strong>
    <p>${message}</p>
`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};
