export const attachClearError = (input) => {
  input.addEventListener("input", () => {
    clearError(input);
    return;
  });
};

export const showError = (input, message) => {
  input.focus();
  const formGroup = input.closest(".form-group");
  const error = formGroup.querySelector(".error-message");
  error.classList.add("show");
  error.textContent = message;
};

export const clearError = (input) => {
  const formGroup = input.closest(".form-group");
  const error = formGroup.querySelector(".error-message");
  error.textContent = "";
};
