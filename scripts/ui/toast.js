import { $ } from "../utils/dom.js";

export const showToast = (type, title, message) => {
  const container = $("#toast-container");

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const strong = document.createElement("strong");
  strong.textContent = title;

  const p = document.createElement("p");
  p.textContent = message;

  toast.appendChild(strong);
  toast.appendChild(p);

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");

    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
};
