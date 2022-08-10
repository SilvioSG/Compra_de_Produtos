import { Router } from "express";
import { ensureAuthenticateUser } from "../../middlewares/ensureAuthenticateUser";

import { CreateUserController } from "../../users/userCases/createUser/CreateUserController";
import { AuthenticateUserController } from "../../users/userCases/authenticateUser/AuthenticateUserController";
import { DeleteUserController } from "../../users/userCases/deleteUser/DeleteUserController";
import { ListAllUserController } from "../../users/userCases/listAllUser/ListAllUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const deleteUserController = new DeleteUserController();
const listAllUserController = new ListAllUserController();

userRoutes.post("/", createUserController.handle);

userRoutes.post("/authenticate", authenticateUserController.handle);

userRoutes.put(
  "/deleteUser/:id",
  ensureAuthenticateUser,
  deleteUserController.handle
);

userRoutes.get(
  "/to_view",
  ensureAuthenticateUser,
  listAllUserController.handle
);

export { userRoutes };
