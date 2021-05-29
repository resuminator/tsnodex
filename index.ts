import cors from "cors";
import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());

app.listen(port, () => {
  console.info(`[INFO] Server Started on PORT: ${port}`);
})