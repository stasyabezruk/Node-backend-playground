import { Prisma } from "@prisma/client";
import { prisma } from "../db/prisma";
import { AppError } from "../errors/app-error";

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
        throw new AppError("User not found", 404);
      }

      const role = await tx.role.findUnique({
        where: { id: roleId },
      });

      if (!role) {
        throw new AppError("Role not found", 404);
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
      throw new AppError("User already has this role", 409);
    }
    throw error;
  }
}
