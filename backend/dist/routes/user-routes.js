import { Router } from "express";
import { getAllUsers, userSingup } from "../controllers/user-controllers.js";
import { singupValidator, validate } from "../utils/validator.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/singup", validate(singupValidator), userSingup);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map