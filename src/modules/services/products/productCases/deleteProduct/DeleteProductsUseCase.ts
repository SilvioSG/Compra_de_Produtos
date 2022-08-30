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
    });

    if (!deleteProduct) {
      throw new Error("Produto não foi deletado");
    }

    return deleteProduct;
  }
}
