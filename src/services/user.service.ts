import { prisma } from "../db/prisma";

export async function createUser(email: string, name?: string) {
  return prisma.user.create({
    data: {
      email,
      name,
    },
  });
}

export async function getUsers() {
  return prisma.user.findMany();
}
