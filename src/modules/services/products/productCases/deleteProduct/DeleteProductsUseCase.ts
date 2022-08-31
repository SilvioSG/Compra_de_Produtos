import { prisma } from "../../../../../database/prismaClient";
interface IDeleteProduct {
  id: string;
}

export class DeleteProductsUseCase {
  async execute({ id }: IDeleteProduct) {
    const deleteProduct = await prisma.product.update({
      where: {
        id,
      },
      data: {
        delete_at: new Date(),
      },
      select: {
        id: true,
        sku: true,
        name: true,
        created_at: true,
        delete_at: true,
        user_id: true,
      },
    });

    if (!deleteProduct) {
      throw new Error("Produto não foi deletado");
    }

    return deleteProduct;
  }
}
