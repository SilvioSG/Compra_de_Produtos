export type CreateProduct = {
  id: string;
  sku: number;
  name: string;
  width: number;
  height: number;
  user_id: string;
};

export type ProductSave = {
  name: string;
  sku?: number;
  id?: string;
  image?: string;
  paid?: boolean;
  width: number;
  height: number;
  user_id?: string;
};

export interface IProductRepository {
  create(data: CreateProduct): Promise<ProductSave>;
  findByName(name: string): Promise<CreateProduct | null>;
  listAll(): Promise<ProductSave[]>;
  deleteProduct(id: string): Promise<ProductSave>;
}
