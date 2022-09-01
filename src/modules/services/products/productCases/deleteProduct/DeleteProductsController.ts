import { Request, Response } from "express";
import { ProductPrismaRepository } from "../../../../../repositories/repositoriesProducts/ProductPrismaRepository";
import { DeleteProductsUseCase } from "./DeleteProductsUseCase";

export class DeleteProductsController {
  async handle(req: Request, resp: Response) {
    const { id } = req.params;

    const prismaRepository = new ProductPrismaRepository();
    const deleteProductsUseCase = new DeleteProductsUseCase(prismaRepository);

    const result = await deleteProductsUseCase.execute({
      id,
      user_id: "",
      name: "",
      sku: Number(),
      height: Number(),
      width: Number(),
    });

    return resp.json(result);
  }
}
