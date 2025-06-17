import { hashPassword, comparePassword } from "../utils/hash";
import { validate } from "../utils/validation";

export const authService = {
  register: async (email: string, username: string, password: string) => {
    const validation = validate(email, username, password);
    if (!validation.success) {
      return validation;
    }

    try {
      const hashedPassword = hashPassword(password);

      // Continue with registration logic (e.g., save user to database)

      return {
        success: true,
        message: "User registered successfully.",
      };
    } catch (error) {
      return {
        success: false,
        message: "Error registering user.",
      };
    }
  },

  login: async (username: string, password: string) => {
    // Here you would typically fetch the user from the database
    // For demonstration, let's assume we have a user object
    const user = {
      username: "testUser",
      password: "hashedPassword", // This should be fetched from the database
    };

    if (user.username !== username) {
      return {
        success: false,
        message: "Username not found.",
      };
    }

    if (!comparePassword(password, user.password)) {
      return {
        success: false,
        message: "Incorrect password.",
      };
    }

    return {
      success: true,
      message: "Login successful.",
    };
  },
};
