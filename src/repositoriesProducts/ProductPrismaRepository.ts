import { prisma } from "../database/prismaClient";
import {
  CreateProduct,
  IProductRepository,
  ProductSave,
} from "./IProductRepository";

export class ProductPrismaRepository implements IProductRepository {
  async create({
    height,
    name,
    sku,
    user_id,
    width,
  }: CreateProduct): Promise<ProductSave> {
    const createProduct = await prisma.product.create({
      data: {
        sku,
        name,
        width,
        height,
        user_id,
      },
      select: {
        name: true,
        id: true,
        created_at: true,
        width: true,
        height: true,
      },
    });

    return createProduct;
  }

  async findByName(name: string): Promise<CreateProduct | null> {
    const productExist = await prisma.product.findFirst({
      where: {
        name,
      },
    });
    return productExist;
  }

  async listAll(): Promise<ProductSave[]> {
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
        created_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return products;
  }
}
