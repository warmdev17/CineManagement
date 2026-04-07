export function showModal({
  title = "Thông báo",
  message = "",
  type = "info",
  confirmText = "OK",
  cancelText = "Huỷ",
  onConfirm = null,
  onCancel = null,
}) {
  const modal = document.getElementById("noti-modal");

  const titleEl = modal.querySelector(".noti-title span");
  const messageEl = modal.querySelector(".noti-message span");
  const actionsEl = modal.querySelector(".noti-actions");

  titleEl.textContent = title;
  messageEl.textContent = message;

  modal.classList.remove("modal--confirm", "modal--info");
  modal.classList.add(`modal--${type}`);

  actionsEl.innerHTML = "";

  if (type === "confirm") {
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "btn cancel";
    cancelBtn.textContent = cancelText;

    const confirmBtn = document.createElement("button");
    confirmBtn.className = "btn confirm";
    confirmBtn.textContent = confirmText;

    actionsEl.append(cancelBtn, confirmBtn);

    cancelBtn.onclick = () => {
      hideModal();
      onCancel && onCancel();
    };

    confirmBtn.onclick = () => {
      hideModal();
      onConfirm && onConfirm();
    };
  }

  // close icon
  const closeBtn = modal.querySelector(".fa-xmark");
  closeBtn.onclick = () => {
    hideModal();
    onCancel && onCancel();
  };

  modal.classList.remove("hide");
}

export function hideModal() {
  const modal = document.getElementById("noti-modal");
  modal.classList.add("hide");
}
