import {
  CreateProduct,
  IProductRepository,
} from "../../../../../repositories/repositoriesProducts/IProductRepository";

export class DeleteProductsUseCase {
  constructor(private ProductRepository: IProductRepository) {}
  async execute({ id }: CreateProduct) {
    const deleteProduct = await this.ProductRepository.deleteProduct(id);

    if (!deleteProduct) {
      throw new Error("Produto não foi deletado");
    }

    return deleteProduct;
  }
}
