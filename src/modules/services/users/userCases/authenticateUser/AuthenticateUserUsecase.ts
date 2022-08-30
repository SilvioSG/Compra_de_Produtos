import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import auth from "../../../../../config/auth";
import { prisma } from "../../../../../database/prismaClient";

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Email Invalid!!");
    }

    const passwordWatch = await compare(password, user.password);

    if (!passwordWatch) {
      throw new Error("Password Invalid!!");
    }

    const token = sign({ email }, auth.JWT_SECRET, {
      subject: user.id,
      expiresIn: auth.expires_in_token,
    });

    return token;
  }
}
