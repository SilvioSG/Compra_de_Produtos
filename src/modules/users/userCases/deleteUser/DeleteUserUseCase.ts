import { prisma } from "../../../../database/prismaClient";

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
    });

    if (!deleteUser) {
      throw new Error("Usuário não foi deletado");
    }

    return deleteUser;
  }
}