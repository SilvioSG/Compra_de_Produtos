import { IProductRepository } from "../../../../../repositoriesProducts/IProductRepository";

export class ListAllProductUseCase {
  constructor(private ListProductsRepository: IProductRepository) {}
  async execute() {
    const products = await this.ListProductsRepository.listAll();
    return products;
  }
}
