import { Router } from "express";
import multer from "multer";
import express from "express";
import { storage } from "./config/upload";

import { userRoutes } from "./modules/routes/users/users.routes";
import { productRoutes } from "./modules/routes/products/product.routes";

const routes = Router();

const upload = multer({ storage: storage });

routes.post("/files", express.static("uploads"));
routes.post("/upload", upload.single("file"), (req, res) => {
  return res.json(req.file?.filename);
});

routes.use("/user", userRoutes);
routes.use("/product", productRoutes);

export { routes };
