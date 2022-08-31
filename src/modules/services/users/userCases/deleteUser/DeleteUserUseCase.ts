import { prisma } from "../../../../../database/prismaClient";

interface IDeleteUsers {
  id: string;
}

export class DeleteUserUseCase {
  async execute({ id }: IDeleteUsers) {
    const deleteUser = await prisma.users.update({
      where: {
        id: String(id),
      },
      data: {
        active: false,
        delete_at: new Date(),
      },
      select: {
        id: true,
        name: true,
        active: true,
        created_at: true,
        delete_at: true,
      },
    });

    if (!deleteUser) {
      throw new Error("Usuário não foi deletado");
    }

    return deleteUser;
  }
}
