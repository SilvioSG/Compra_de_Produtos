import { Request, Response } from "express";
import { UserPrismaRepository } from "../../../../../repositories/repositoriesUser/UserPrismaRepository";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, password, email } = req.body;

    const prismaRepository = new UserPrismaRepository();
    const createUserUseCase = new CreateUserUseCase(prismaRepository);

    const result = await createUserUseCase.execute({
      name,
      password,
      email,
    });
    return res.json(result);
  }
}
