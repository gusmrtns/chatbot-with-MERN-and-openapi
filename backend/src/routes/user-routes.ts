import { Router } from "express";
import { getAllUsers, userLogin, userSingup } from "../controllers/user-controllers.js";
import { loginValidator, singupValidator, validate } from "../utils/validator.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/singup", validate(singupValidator), userSingup);
userRoutes.post("/login", validate(loginValidator), userLogin);

export default userRoutes;