import {
  IUserRepository,
  UserSave,
} from "../../../../../repositoriesUser/IUserRepository";

export class ListAllUserUseCase {
  constructor(private ListAdminRepository: IUserRepository) {}
  async execute(): Promise<UserSave[]> {
    const users = await this.ListAdminRepository.listAll();
    return users;
  }
}
