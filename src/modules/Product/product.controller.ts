import { Request, Response } from "express";
import { ProductService } from "./product.service";

//Create a New Product

const createProduct = async (req: Request, res: Response) => {
  const productDta = req.body;
  const result = await ProductService.createProduct(productDta);
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

export const ProductController = {
  createProduct,
};
