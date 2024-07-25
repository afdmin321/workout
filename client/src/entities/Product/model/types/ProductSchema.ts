import { Product } from './Product';

export interface ProductDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Product;
}
