import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import { swaggerDocs } from './utils/swaggerConfig.js'; // Importa a configuração do Swagger
import swaggerUi from 'swagger-ui-express';
import cors from "cors";

config();

const app = express();

// middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Rota para a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);


export default app;