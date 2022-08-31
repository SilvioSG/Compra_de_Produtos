import { Router } from "express";
import { ensureAuthenticateUser } from "../../middlewares/ensureAuthenticateUser";
import { AuthenticateUserController } from "../../services/users/userCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "../../services/users/userCases/createUser/CreateUserController";
import { DeleteUserController } from "../../services/users/userCases/deleteUser/DeleteUserController";
import { ListAllUserController } from "../../services/users/userCases/listAllUser/ListAllUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const deleteUserController = new DeleteUserController();
const listAllUserController = new ListAllUserController();

userRoutes.post("/", createUserController.handle);

userRoutes.post("/authenticate", authenticateUserController.handle);

userRoutes.delete(
  "/deleteUser/:id",
  ensureAuthenticateUser,
  deleteUserController.handle
);

userRoutes.get("/", ensureAuthenticateUser, listAllUserController.handle);

export { userRoutes };
