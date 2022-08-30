import { Request, Response } from "express";
import { ListAllProductUseCase } from "./ListAllProductUseCase";

export class ListAllProductController {
  async handle(req: Request, resp: Response) {
    const listAllProductUseCase = new ListAllProductUseCase();
    const products = await listAllProductUseCase.execute();

    return resp.json(products);
  }
}
