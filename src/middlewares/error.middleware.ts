import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error";

export function errorMiddleware(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      error: err.message,
    });
  }

  console.error("Unexpected error:", err);

  return res.status(500).json({
    statusCode: 500,
    error: "Internal Server Error",
  });
}
