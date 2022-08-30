import { prisma } from "../../../../../database/prismaClient";

interface IUpdateProduct {
  id: string;
  width: number;
  height: number;
}

export class UpdateProductUseCase {
  async execute({ id, width, height }: IUpdateProduct) {
    const result = await prisma.product.updateMany({
      where: {
        id: String(id),
      },
      data: {
        width,
        height,
        updated_at: new Date(),
        purchase_date: new Date(),
        delivery_date: new Date(),
      },
    });

    if (!result) {
      throw new Error("Product cannot be updated");
    }

    return result;
  }
}
