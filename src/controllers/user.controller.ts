import { Request, Response } from "express";
import { getUsers } from "../services/user.service";

export async function getUsersHandler(_req: Request, res: Response) {
  const users = await getUsers();
  res.json(users);
}
