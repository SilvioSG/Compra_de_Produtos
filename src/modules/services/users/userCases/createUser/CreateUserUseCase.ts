import {
  CreateUser,
  IUserRepository,
} from "../../../../../repositories/repositoriesUser/IUserRepository";

export class CreateUserUseCase {
  constructor(private UserRepository: IUserRepository) {}

  async execute(data: CreateUser) {
    // Verificar se o Email já existe
    const emailExist = await this.UserRepository.findByEmail(data.email);

    // Campo Nome não pode estar vazio
    if (!data.name) {
      throw new Error("Name is Require");
    }

    // Campo Email não pode estar vazio
    if (!data.email) {
      throw new Error("Email is Require");
    }

    if (emailExist) {
      throw new Error("User already exists");
    }

    // Se não, Deixa Criar
    const user = await this.UserRepository.create(data);
    return user;
  }
}
