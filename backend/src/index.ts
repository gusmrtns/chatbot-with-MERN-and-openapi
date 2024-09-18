import express from "express";

const app = express();

// middlewares
app.use(express.json());

// connections and listeneres
app.listen(5000, () => console.log("The Server is Running!!!"));
