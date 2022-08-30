import { Request, Response } from "express";
import { AthenticateUserUseCase } from "./AuthenticateUserUsecase";

export class AuthenticateUserController {
  async handle(req: Request, resp: Response) {
    const { email, password } = req.body;

    const authenticateUserUsecase = new AthenticateUserUseCase();

    const token = await authenticateUserUsecase.execute({
      email,
      password,
    });

    return resp.json(token);
  }
}
