import { Request, Response } from "express";
import { createUser, getUsers } from "../services/user.service";
import { AppError } from "../errors/app-error";

export async function createUserHandler(req: Request, res: Response) {
  const { email, name } = req.body;

  if (!email) {
    throw new AppError("Email обязателен", 400);
  }

  const user = await createUser(email, name);
  res.status(201).json(user);
}

export async function getUsersHandler(_req: Request, res: Response) {
  const users = await getUsers();
  res.json(users);
}
