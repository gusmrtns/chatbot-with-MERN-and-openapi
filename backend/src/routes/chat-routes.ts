import { Router } from "express";
import { verifyToken } from "../utils/tokens-manager.js";
import { chatCompletionvalidator, validate } from "../utils/validator.js";
import { generateChatCompletion } from "../controllers/chat_controllers.js";

// Protected API
const chatRoutes = Router();
chatRoutes.post(
    "/new",
    validate(chatCompletionvalidator),
    verifyToken,
    generateChatCompletion);

export default chatRoutes;