export type Ivariant = {
  type: string;
  value: string;
};

export type Iinventory = {
  quantity: number;
  inStock: boolean;
};

export type Iproduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Ivariant[];
  inventory: Iinventory;
};
