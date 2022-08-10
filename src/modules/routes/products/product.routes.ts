import { Router } from "express";
import { ensureAuthenticateUser } from "../../middlewares/ensureAuthenticateUser";

import { CreateProductController } from "../../products/productCases/createProduct/CreateProductController";

const productRoutes = Router();

const createProductController = new CreateProductController();

productRoutes.post("/", createProductController.handle);

export { productRoutes };
