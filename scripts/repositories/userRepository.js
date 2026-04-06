import { users } from "../config/storage.js";

export const findUserByEmail = (email) => {
  return users.find((u) => u.email === email);
};

export const getUser = () => users;

export const findUserById = (id) => users.find((u) => u.id === parseInt(id));
