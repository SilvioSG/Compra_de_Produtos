import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateUser {
  name: string;
  password: string;
  email: string;
}

export class CreateUserUseCase {
  async execute({ name, password, email }: ICreateUser) {
    const userExist = await prisma.users.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });

    if (userExist) {
      throw new Error("User already exists");
    }

    const emailExist = await prisma.users.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });
    if (emailExist) {
      throw new Error("Email already exists");
    }

    const hashPassword = await hash(password, 8);

    const user = await prisma.users.create({
      data: {
        name,
        password: hashPassword,
        email,
        active: true,
      },
    });

    return user;
  }
}
