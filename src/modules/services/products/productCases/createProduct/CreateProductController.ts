import { Request, Response } from "express";
import { ProductPrismaRepository } from "../../../../../repositories/repositoriesProducts/ProductPrismaRepository";

import { CreateProductUseCase } from "./CreateProductUserUseCase";

export class CreateProductController {
  async handle(req: Request, resp: Response) {
    const { sku, name, width, height, user_id } = req.body;

    const prismaRepository = new ProductPrismaRepository();
    const createProductUseCase = new CreateProductUseCase(prismaRepository);

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
