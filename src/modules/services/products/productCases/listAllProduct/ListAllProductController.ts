import { Request, Response } from "express";
import { ProductPrismaRepository } from "../../../../../repositoriesProducts/ProductPrismaRepository";
import { ListAllProductUseCase } from "./ListAllProductUseCase";

export class ListAllProductController {
  async handle(req: Request, resp: Response) {
    const prismaRepository = new ProductPrismaRepository();
    const listAllProductUseCase = new ListAllProductUseCase(prismaRepository);
    const products = await listAllProductUseCase.execute();

    return resp.json(products);
  }
}
