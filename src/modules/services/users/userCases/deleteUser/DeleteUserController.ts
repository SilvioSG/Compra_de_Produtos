import { Request, Response } from "express";
import { UserPrismaRepository } from "../../../../../repositories/repositoriesUser/UserPrismaRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  async handle(req: Request, resp: Response) {
    const { id } = req.params;

    const prismaRepository = new UserPrismaRepository();
    const deleteUserUseCase = new DeleteUserUseCase(prismaRepository);

    const result = await deleteUserUseCase.execute({
      id,
      name: "",
      email: "",
      password: "",
    });

    return resp.json(result);
  }
}
