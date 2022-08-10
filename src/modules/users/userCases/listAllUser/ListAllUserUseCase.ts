import { prisma } from "../../../../database/prismaClient";

export class ListAllUserUseCase {
  async execute(name: string) {
    const users = await prisma.users.findFirst({
      where: {
        name,
        delete_at: null,
      },
    });

    return users;
  }
}
