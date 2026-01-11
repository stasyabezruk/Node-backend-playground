import bcrypt from "bcrypt";
import { prisma } from "../db/prisma";
import { AppError } from "../errors/app-error";
import { ErrorCode } from "../errors/error-codes";

const SALT_ROUNDS = 10;

export async function registerUser(email: string, password: string) {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new AppError(ErrorCode.USER_ALREADY_EXISTS, 409);
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  return prisma.user.create({
    data: {
      email,
      passwordHash,
    },
  });
}
