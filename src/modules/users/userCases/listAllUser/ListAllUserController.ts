import { Request, Response } from "express";
import { ListAllUserUseCase } from "./ListAllUserUseCase";

export class ListAllUserController {
  async handle(req: Request, resp: Response) {
    const { name } = req.body;

    const listAllUserUseCase = new ListAllUserUseCase();
    const users = await listAllUserUseCase.execute(name);

    return resp.json(users);
  }
}
