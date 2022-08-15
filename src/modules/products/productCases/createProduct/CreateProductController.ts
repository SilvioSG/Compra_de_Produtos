import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUserUseCase";

export class CreateProductController {
  async handle(req: Request, resp: Response) {
    const { sku, name, width, height, user_id } = req.body;

    const createProductUseCase = new CreateProductUseCase();

    const result = await createProductUseCase.execute({
      sku,
      name,
      width,
      height,
      user_id,
    });

    return resp.json(result);
  }
}
