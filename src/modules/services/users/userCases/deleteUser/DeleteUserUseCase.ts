import {
  CreateUser,
  IUserRepository,
} from "../../../../../repositories/repositoriesUser/IUserRepository";

export class DeleteUserUseCase {
  constructor(private UserRepository: IUserRepository) {}

  async execute({ id }: CreateUser) {
    const deleteUser = await this.UserRepository.deleteUser(id);

    if (!deleteUser) {
      throw new Error("Usuário não foi deletado");
    }

    return deleteUser;
  }
}
