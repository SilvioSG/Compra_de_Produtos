import { Request, Response } from "express";
import { DeleteProductsUseCase } from "./DeleteProductsUseCase";

export class DeleteProductsController {
  async handle(req: Request, resp: Response) {
    const { id } = req.params;

    const deleteProductsUseCase = new DeleteProductsUseCase();

    const result = await deleteProductsUseCase.execute({
      id,
    });

    return resp.json(result);
  }
}
