import * as userRepository from "../repositories/userRepository.js";

export const isAuthenticated = () => {
  return !!localStorage.getItem("currentUser");
};
export const setCurrentUser = (user, remember) => {
  if (remember) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  } else {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
  }
};

export const getCurrentUser = () => {
  const user =
    localStorage.getItem("currentUser") ||
    sessionStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
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

export const register = ({ fullName, email, password, confirmPassword }) => {
  const user = userRepository.isEmailRegisterd(email);

  if (user) {
    return {
      success: false,
      field: "register",
      message: "Email đã được đăng ký",
    };
  }

  if (password !== confirmPassword) {
    return {
      success: false,
      field: "confirmPassword",
      message: "Mật khẩu xác nhận không khớp",
    };
  }

  return {
    success: true,
    regUser: {
      id: userRepository.nextUserId(),
      fullName,
      email,
      password,
      role: "user",
      createdAt: new Date().toISOString(),
      isActive: true,
    },
  };
};
