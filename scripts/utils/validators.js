const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;

export const validateEmail = (email) => {
  if (!email) {
    return {
      field: "email",
      message: "Email không được để trống",
    };
  }
  if (!emailRegex.test(email)) {
    return {
      field: "email",
      message: "Email không hợp lệ",
    };
  }

  return null;
};

export const validatePassword = (password, register) => {
  if (!password)
    return {
      field: "password",
      message: "Mật khẩu không được trống",
    };

  if (register) {
    if (password.length < 8) {
      return {
        field: "password",
        message: "Mật khẩu phải có ít nhất 8 kí tự",
      };
    }
    if (!passwordRegex.test(password)) {
      return {
        field: "password",
        message: "Mật khẩu phải có ít nhất một kí tự đặc biệt",
      };
    }
  }

  return null;
};

export const validateConfirmPassword = (cPass, pass) => {
  if (!cPass) {
    return {
      field: "confirmPassword",
      message: "Vui lòng nhập lại mật khẩu",
    };
  }

  if (cPass !== pass) {
    return {
      field: "confirmPassword",
      message: "Mật khẩu xác nhận không khớp",
    };
  }

  return null;
};
export const validateName = (fullname) => {
  if (!fullname) {
    return {
      field: "fullname",
      message: "Họ và tên không được để trống",
    };
  }
  if (/\d/.test(fullname)) {
    return {
      field: "fullname",
      message: "Họ và tên không được chứa số",
    };
  }
  if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(fullname)) {
    return {
      field: "fullname",
      message: "Họ và tên chỉ được chứa chữ cái",
    };
  }

  const words = fullname.trim().split(/\s+/);
  for (const word of words) {
    if (!/^[A-ZÀ-Ỹ]/.test(word)) {
      return {
        field: "fullname",
        message: "Mỗi từ phải viết hoa chữ cái đầu",
      };
    }
  }

  return null;
};
