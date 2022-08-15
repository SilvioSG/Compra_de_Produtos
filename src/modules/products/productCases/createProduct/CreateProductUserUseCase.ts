import { prisma } from "../../../../database/prismaClient";

interface ICreateProduct {
  sku: number;
  name: string;
  width: number;
  height: number;
  user_id: string;
}

export class CreateProductUseCase {
  async execute({ sku, name, width, height, user_id }: ICreateProduct) {
    if (!name) {
      throw new Error("Name Already Exist");
    }

    const createProduct = await prisma.product.create({
      data: {
        sku,
        name,
        width,
        height,
        user_id,
      },
    });

    return createProduct;
  }
}
