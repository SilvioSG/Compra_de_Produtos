import { Request, Response } from "express";
import { ListAllProductUseCase } from "./ListAllProductUseCase";

export class ListAllProductController {
  async handle(req: Request, resp: Response) {
    const { name } = req.body;

    const listAllProductUseCase = new ListAllProductUseCase();
    const products = await listAllProductUseCase.execute(name);

    return resp.json(products);
  }
}
