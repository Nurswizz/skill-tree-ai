import { z } from "zod";
import { isValidEmail, isValidUsername, isValidPassword } from "./hash";

export const validate = (email: string, username: string, password: string) => {
  if (!isValidEmail(email)) {
    return {
      success: false,
      message: "Invalid email format.",
    };
  }

  if (!isValidUsername(username)) {
    return {
      success: false,
      message: "Invalid username format.",
    };
  }

  if (!isValidPassword(password)) {
    return {
      success: false,
      message: "Invalid password format.",
    };
  }

  return {
    success: true,
    message: "Validation successful.",
  };
};
