import { response, Router } from "express";
import nodemailer from "nodemailer";
import { ensureAuthenticateUser } from "../../middlewares/ensureAuthenticateUser";
import { SendMail } from "../../middlewares/sendMail";

import { CreateProductController } from "../../products/productCases/createProduct/CreateProductController";
import { DeleteProductsController } from "../../products/productCases/deleteProduct/DeleteProductsController";
import { ListAllProductController } from "../../products/productCases/listAllProduct/ListAllProductController";
import { SendMailController } from "../../products/productCases/sendMail/SendMailController";
import { UpdateProductController } from "../../products/productCases/updateProduct/UpdateProductController";

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

productRoutes.put(
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
