import { Router } from "express";
import { ensureAuthenticateUser } from "../../middlewares/ensureAuthenticateUser";
import { SendMail } from "../../middlewares/sendMail";
import { CreateProductController } from "../../services/products/productCases/createProduct/CreateProductController";
import { DeleteProductsController } from "../../services/products/productCases/deleteProduct/DeleteProductsController";
import { ListAllProductController } from "../../services/products/productCases/listAllProduct/ListAllProductController";
import { SendMailController } from "../../services/products/productCases/sendMail/SendMailController";
import { UpdateProductController } from "../../services/products/productCases/updateProduct/UpdateProductController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const listAllProductController = new ListAllProductController();
const updateProductController = new UpdateProductController();
const deleteProductsController = new DeleteProductsController();
const sendMailController = new SendMailController();

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

productRoutes.delete(
  "/delete/:id",
  ensureAuthenticateUser,
  deleteProductsController.handle
);

productRoutes.put(
  "/sendMail/:id",
  ensureAuthenticateUser,
  SendMail,
  sendMailController.send
);

export { productRoutes };
