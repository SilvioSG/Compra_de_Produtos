import { prisma } from "../../../../../database/prismaClient";
import { AppError } from "../../../../../erros/AppErros";

interface IUpdateProduct {
  id: string;
  width: number;
  height: number;
}

export class UpdateProductUseCase {
  async execute({ id, width, height }: IUpdateProduct) {
    const result = await prisma.product.update({
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
      select: {
        id: true,
        name: true,
        width: true,
        height: true,
        updated_at: true,
      },
    });

    if (!result) {
      throw new AppError("Product cannot be updated");
    }

    return result;
  }
}
