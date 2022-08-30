import { prisma } from "../../../../../database/prismaClient";

export class ListAllProductUseCase {
  async execute() {
    const products = await prisma.product.findMany({
      where: {
        delete_at: null,
      },
      select: {
        name: true,
        id: true,
        height: true,
        width: true,
        user_id: true,
        paid: true,
        created_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return products;
  }
}
