import {
  CreateProduct,
  IProductRepository,
} from "../../../../../repositories/repositoriesProducts/IProductRepository";

export class CreateProductUseCase {
  constructor(private ProductRepository: IProductRepository) {}
  async execute(data: CreateProduct) {
    // Verificando se o Produto já existe
    const product = await this.ProductRepository.findByName(data.name);

    if (product) {
      throw new Error("Product already Exists");
    }

    const createProduct = await this.ProductRepository.create(data);

    return createProduct;
  }
}
