import { Request, Response } from "express";
import { createUser, getUsers } from "../services/user.service";
import { AppError } from "../errors/app-error";
import { ErrorCode } from "../errors/error-codes";
import { createUserSchema } from "../dto/create-user.dto";

export async function createUserHandler(req: Request, res: Response) {
  const parseResult = createUserSchema.safeParse(req.body);

  if (!parseResult.success) {
    throw new AppError(ErrorCode.VALIDATION_ERROR, 400);
  }

  const { email, name } = parseResult.data;

  const user = await createUser(email, name);
  res.status(201).json(user);
}

export async function getUsersHandler(_req: Request, res: Response) {
  const users = await getUsers();
  res.json(users);
}
