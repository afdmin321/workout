import { CreateProduct, Product } from './Product';

export interface ProductDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Product;
}

export interface CreateProductSchema
  extends Omit<ProductDetailsSchema, 'data'> {
  data: CreateProduct;
}
