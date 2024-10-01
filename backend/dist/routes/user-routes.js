import { Router } from "express";
import { getAllUsers, userLogin, userSignup, verifyUser } from "../controllers/user-controllers.js";
import { loginValidator, singupValidator, validate } from "../utils/validator.js";
import { verifyToken } from "../utils/tokens-manager.js";
const userRoutes = Router();
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Retrieve all users
 *     description: Returns a list of all registered users.
 *     responses:
 *       200:
 *         description: Successfully retrieved list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: OK
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: John Doe
 *                       email:
 *                         type: string
 *                         example: john.doe@example.com
 *       500:
 *         description: Internal server error
 */
userRoutes.get("/", getAllUsers);
/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: Create a new user
 *     description: Register a new user with name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */
userRoutes.post("/signup", validate(singupValidator), userSignup);
/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login user
 *     description: Log in a user using email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Invalid credentials
 */
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map