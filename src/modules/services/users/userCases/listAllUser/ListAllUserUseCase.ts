import { prisma } from "../../../../../database/prismaClient";

export class ListAllUserUseCase {
  async execute(name: string) {
    const users = await prisma.users.findMany({
      where: {
        name,
        delete_at: null,
      },
      select: {
        name: true,
        email: true,
        active: true,
        created_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return users;
  }
}
