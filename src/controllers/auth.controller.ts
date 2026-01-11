import { Request, Response } from "express";
import { registerUserSchema } from "../dto/register-user.dto";
import { registerUser } from "../services/auth.service";
import { AppError } from "../errors/app-error";
import { ErrorCode } from "../errors/error-codes";

export async function registerHandler(req: Request, res: Response) {
  const result = registerUserSchema.safeParse(req.body);

  if (!result.success) {
    throw new AppError(ErrorCode.INVALID_REGISTRATION_DATA, 400);
  }

  const user = await registerUser(result.data.email, result.data.password);

  res.status(201).json({
    id: user.id,
    email: user.email,
  });
}
