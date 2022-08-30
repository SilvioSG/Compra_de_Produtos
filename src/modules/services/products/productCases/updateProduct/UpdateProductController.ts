import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  async handle(req: Request, resp: Response) {
    const { id } = req.params;
    const { width, height } = req.body;

    const updateProductUseCase = new UpdateProductUseCase();

    const result = await updateProductUseCase.execute({
      id,
      width,
      height,
    });

    return resp.json(result);
  }
}
