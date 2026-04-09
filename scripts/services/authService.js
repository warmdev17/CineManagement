import * as userRepository from "../repositories/userRepository.js";

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
export const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("currentUser");
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

export const register = ({ fullname, email, password, confirmPassword }) => {
  const user = userRepository.findUserByEmail(email);

  if (user) {
    return {
      success: false,
      field: "register",
      message: "Email đã được đăng ký",
    };
  }

  if (password === confirmPassword) {
    return {
      success: true,
      regUser: {
        id: userRepository.nextUserId(),
        fullname,
        email,
        password,
        role: "user",
        createdAt: new Date().toISOString(),
        isActive: 1,
      },
    };
  }
};
