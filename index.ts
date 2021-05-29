import cors from "cors";
import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); //configure port for CORS in ./config/cors-config.ts
app.use(express.json());

app.listen(port, () => {
  console.info(`[INFO] Server Started on PORT: ${port}`);
})