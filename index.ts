import cors from "cors";
import express from "express";
import config from "./config";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors(config.cors)); //configure port for CORS in ./config/cors-config.ts
app.use(express.json());

app.listen(port, () => {
  console.info(`[INFO] Server Started on PORT: ${port}`);
})