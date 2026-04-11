const handleInput = (e) => {
  clearError(e.target);
};
export const attachClearError = (input) => {
  input.removeEventListener("input", handleInput);
  input.addEventListener("input", handleInput);
};

export const showError = (input, message) => {
  const formGroup = input.closest(".form-group");
  const error = formGroup.querySelector(".error-message");

  input.classList.add("error");
  error.textContent = message;
};

export const clearError = (input) => {
  const formGroup = input.closest(".form-group");
  const error = formGroup.querySelector(".error-message");

  input.classList.remove("error");
  error.textContent = "";
};
