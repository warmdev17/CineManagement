import * as userRepository from "../repositories/userRepository.js";

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
export const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};

export const login = ({ email, password }) => {
  const user = userRepository.findUserByEmail(email);

  if (!user || user.password !== password) {
    return {
      success: false,
      field: "login",
      message: "Email hoặc mật khẩu không đúng",
    };
  }

  return {
    success: true,
    user,
  };
};
