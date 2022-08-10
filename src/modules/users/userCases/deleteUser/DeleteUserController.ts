import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  async handle(req: Request, resp: Response) {
    const { id } = req.params;

    const deleteUserUseCase = new DeleteUserUseCase();

    const result = await deleteUserUseCase.execute({
      id: String(id),
    });

    return resp.json(result);
  }
}
