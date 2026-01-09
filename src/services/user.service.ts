import { Prisma } from "@prisma/client";
import { prisma } from "../db/prisma";
import { AppError } from "../errors/app-error";

export async function createUser(email: string, name?: string) {
  try {
    return await prisma.user.create({
      data: {
        email,
        name,
      },
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new AppError("Пользователь с таким email уже существует", 409);
    }

    throw error;
  }
}

export async function getUsers() {
  return prisma.user.findMany();
}
