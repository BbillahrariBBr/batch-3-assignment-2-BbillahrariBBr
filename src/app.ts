import cors from "cors";
import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/Product/product.route";

const app = express();

// parser
app.use(express.json());

app.use("/api/products", ProductRoutes);

//const port = 3000;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! love me please");
});

export default app;
