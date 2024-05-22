import { model, Schema } from "mongoose";
import { Iinventory, Iproduct, Ivariant } from "./product.interface";

// variant Schema

const variantSchema = new Schema<Ivariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

//  inventory
const inventorySchema = new Schema<Iinventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

//product schema

const productSchema = new Schema<Iproduct>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

//export product model
export const Products = model<Iproduct>("Products", productSchema);
