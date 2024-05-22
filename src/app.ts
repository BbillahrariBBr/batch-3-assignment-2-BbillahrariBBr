import cors from "cors";
import express, { Request, Response } from "express";

const app = express();

// parser
// app.use(express.json());

// app.use("/api/movies", MovieRoutes);

//const port = 3000;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! love me please");
});

export default app;
