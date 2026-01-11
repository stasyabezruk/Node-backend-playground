import { ErrorCodeType } from "./error-codes";
import { ErrorMessage } from "./error-messages";

export class AppError extends Error {
  statusCode: number;
  code: ErrorCodeType;

  constructor(code: ErrorCodeType, statusCode = 400) {
    // Get human-readable message from ErrorMessage map, fallback to code if not found
    const message = ErrorMessage[code] || code;
    // Pass message to parent Error class (sets this.message)
    super(message);
    // Store error code for API response (e.g., "USER_NOT_FOUND")
    this.code = code;
    // Store HTTP status code (e.g., 404, 409, 500)
    this.statusCode = statusCode;
  }
}
