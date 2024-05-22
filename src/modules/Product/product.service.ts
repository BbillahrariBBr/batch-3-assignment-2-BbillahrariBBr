import { Iproduct } from "./product.interface";
import { Products } from "./product.model";

const createProduct = async (payload: Iproduct) => {
  const result = await Products.create(payload);
  return result;
};
export const ProductService = {
  createProduct,
};
