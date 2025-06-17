import bcrypt from "bcryptjs";
export const comparePassword = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash);
};

export const hashPassword = (str: string): string => {
  return bcrypt.hashSync(str, 10);
};

export const isValidPassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
  return usernameRegex.test(username);
};
