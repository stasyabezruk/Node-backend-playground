import { Request, Response } from "express";
import { buildHelloMessage } from "../services/hello.service";
import { helloQuerySchema } from "../validators/hello.validator";
import { AppError } from "../errors/app-error";

export function sayHello(req: Request, res: Response) {
  const parseResult = helloQuerySchema.safeParse(req.query);

  if (!parseResult.success) {
    throw new AppError("Невалидные query-параметры", 400);
  }
  const { name } = parseResult.data;
  const message = buildHelloMessage(name);
  res.json({ message });
}
