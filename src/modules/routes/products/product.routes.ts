import { Router } from "express";
import { ensureAuthenticateUser } from "../../middlewares/ensureAuthenticateUser";

import { CreateProductController } from "../../products/productCases/createProduct/CreateProductController";
import { DeleteProductsController } from "../../products/productCases/deleteProduct/DeleteProductsController";
import { ListAllProductController } from "../../products/productCases/listAllProduct/ListAllProductController";
import { UpdateProductController } from "../../products/productCases/updateProduct/UpdateProductController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const listAllProductController = new ListAllProductController();
const updateProductController = new UpdateProductController();
const deleteProductsController = new DeleteProductsController();

productRoutes.post("/", createProductController.handle);

productRoutes.get(
  "/to_view",
  ensureAuthenticateUser,
  listAllProductController.handle
);

productRoutes.put(
  "/update/:id",
  ensureAuthenticateUser,
  updateProductController.handle
);

productRoutes.put(
  "/delete/:id",
  ensureAuthenticateUser,
  deleteProductsController.handle
);

export { productRoutes };
