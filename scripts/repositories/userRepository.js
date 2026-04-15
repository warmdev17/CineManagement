export const getAllUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

export const findUserByEmail = (email) => {
  const users = getAllUsers();
  return users.find((u) => u.email === email);
};

export const findUserById = (id) => {
  const users = getAllUsers();
  return users.find((u) => u.id === parseInt(id));
};

export const nextUserId = () => {
  const users = getAllUsers();
  return Math.max(...users.map((u) => u.id), 0) + 1;
};

export const isEmailRegisterd = (email) => {
  const users = getAllUsers();
  return users.some((u) => u.email === email);
};
