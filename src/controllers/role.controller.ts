import { Request, Response } from "express";
import { createRole, assignRoleToUser } from "../services/role.service";
import { AppError } from "../errors/app-error";
import { ErrorCode } from "../errors/error-codes";

export async function createRoleHandler(req: Request, res: Response) {
  const { name } = req.body;

  if (!name) {
    throw new AppError(ErrorCode.INVALID_ROLE_DATA, 400);
  }

  const role = await createRole(name);
  res.status(201).json(role);
}

export async function assignRoleHandler(req: Request, res: Response) {
  const { userId, roleId } = req.body;

  if (!userId || !roleId) {
    throw new AppError(ErrorCode.VALIDATION_ERROR, 400);
  }

  await assignRoleToUser(userId, roleId);
  res.status(204).send();
}
