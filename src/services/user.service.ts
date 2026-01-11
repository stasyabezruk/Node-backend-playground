import { Prisma } from "@prisma/client";
import { prisma } from "../db/prisma";
import { AppError } from "../errors/app-error";
import { ErrorCode } from "../errors/error-codes";

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
      throw new AppError(ErrorCode.USER_ALREADY_EXISTS, 409);
    }

    throw error;
  }
}

export async function getUsers() {
  return prisma.user.findMany({
    include: {
      roles: {
        include: {
          role: true,
        },
      },
    },
  });
}
