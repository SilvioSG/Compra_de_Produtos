import express, { NextFunction, Request, Response } from "express";
import swaggerUI from "swagger-ui-express";

import swaggerFile from "./swagger.json";
import "express-async-errors";
import { routes } from "./routes";
import { AppError } from "./erros/AppErros";

const app = express();

app.use(express.json());

app.use("/api-docs/", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(routes);

app.use((err: AppError, req: Request, resp: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return resp.status(400).json({
      message: err.message,
    });
  }

  return resp.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

app.listen(3000, () => console.log("Server is running"));
