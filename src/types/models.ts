export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: any[];
};

export type StoreModel = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
