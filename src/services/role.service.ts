import { prisma } from "../db/prisma";

export async function createRole(name: string) {
  return prisma.role.create({
    data: { name },
  });
}

export async function assignRoleToUser(userId: number, roleId: number) {
  return prisma.userRole.create({
    data: {
      userId,
      roleId,
    },
  });
}
