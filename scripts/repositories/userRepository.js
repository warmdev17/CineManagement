import { users } from "../config/storage.js";

export const findUserByEmail = (email) => {
  return users.find((u) => u.email === email);
};

export const findUserById = (id) => users.find((u) => u.id === parseInt(id));

export const nextUserId = () => {
  return Math.max(...users.map((u) => u.id), 0) + 1;
};
