import { ErrorCode } from "./error-codes";

export const ErrorMessage: Record<string, string> = {
  // User errors
  [ErrorCode.USER_NOT_FOUND]: "User not found",
  [ErrorCode.USER_ALREADY_EXISTS]: "User with this email already exists",
  [ErrorCode.INVALID_USER_DATA]: "Invalid user data",
  [ErrorCode.INVALID_REGISTRATION_DATA]: "Invalid registration data",

  // Role errors
  [ErrorCode.ROLE_NOT_FOUND]: "Role not found",
  [ErrorCode.ROLE_ALREADY_ASSIGNED]: "User already has this role",
  [ErrorCode.INVALID_ROLE_DATA]: "Role name is required",

  // General errors
  [ErrorCode.VALIDATION_ERROR]: "Invalid request data",
  [ErrorCode.NOT_FOUND]: "Resource not found",
  [ErrorCode.INTERNAL_ERROR]: "Internal server error",
};
