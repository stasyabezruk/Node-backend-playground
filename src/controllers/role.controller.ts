import { Request, Response } from "express";
import { createRole, assignRoleToUser } from "../services/role.service";
import { AppError } from "../errors/app-error";

export async function createRoleHandler(req: Request, res: Response) {
  const { name } = req.body;

  if (!name) {
    throw new AppError("Role name is required", 400);
  }

  const role = await createRole(name);
  res.status(201).json(role);
}

export async function assignRoleHandler(req: Request, res: Response) {
  const { userId, roleId } = req.body;

  if (!userId || !roleId) {
    throw new AppError("userId and roleId are required", 400);
  }

  await assignRoleToUser(userId, roleId);
  res.status(204).send();
}
