import { prisma } from "../../../../database/prismaClient";

export class ListAllProductUseCase {
  async execute(name: string) {
    const products = await prisma.product.findMany({
      where: {
        name,
        delete_at: null,
      },
    });

    return products;
  }
}
