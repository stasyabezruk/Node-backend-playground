import { Prisma } from "@prisma/client";
import { prisma } from "../db/prisma";
import { AppError } from "../errors/app-error";
import { ErrorCode } from "../errors/error-codes";

export async function createRole(name: string) {
  return prisma.role.create({
    data: { name },
  });
}

export async function assignRoleToUser(userId: number, roleId: number) {
  try {
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new AppError(ErrorCode.USER_NOT_FOUND, 404);
      }

      const role = await tx.role.findUnique({
        where: { id: roleId },
      });

      if (!role) {
        throw new AppError(ErrorCode.ROLE_NOT_FOUND, 404);
      }

      return tx.userRole.create({
        data: {
          userId,
          roleId,
        },
      });
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new AppError(ErrorCode.ROLE_ALREADY_ASSIGNED, 409);
    }
    throw error;
  }
}
