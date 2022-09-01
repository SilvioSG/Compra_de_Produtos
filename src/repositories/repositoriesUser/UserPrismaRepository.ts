import { hash } from "bcrypt";
import { prisma } from "../../database/prismaClient";
import { CreateUser, IUserRepository, UserSave } from "./IUserRepository";

class UserPrismaRepository implements IUserRepository {
  async create({ name, email, password }: CreateUser): Promise<UserSave> {
    const hashPassword = await hash(password, 8);

    const user = await prisma.users.create({
      data: {
        name,
        password: hashPassword,
        email,
        active: true,
      },
      select: {
        name: true,
        email: true,
        active: true,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<UserSave | null> {
    const userExist = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    return userExist;
  }

  async listAll(): Promise<UserSave[]> {
    const users = await prisma.users.findMany({
      where: {
        delete_at: null,
      },
      select: {
        name: true,
        id: true,
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

  async deleteUser(id: string): Promise<UserSave> {
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
        email: true,
      },
    });

    return deleteUser;
  }
}

export { UserPrismaRepository };
