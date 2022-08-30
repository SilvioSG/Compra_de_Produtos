import { Request, Response } from "express";
import { UserPrismaRepository } from "../../../../../repositoriesUser/UserPrismaRepository";
import { ListAllUserUseCase } from "./ListAllUserUseCase";

export class ListAllUserController {
  async handle(req: Request, resp: Response) {
    const prismaRepository = new UserPrismaRepository();
    const listAllUserUseCase = new ListAllUserUseCase(prismaRepository);
    const users = await listAllUserUseCase.execute();

    return resp.json(users);
  }
}
