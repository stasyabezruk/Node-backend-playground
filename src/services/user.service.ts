import { prisma } from "../db/prisma";

export async function getUsers() {
  return prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      roles: {
        include: {
          role: true,
        },
      },
    },
  });
}
