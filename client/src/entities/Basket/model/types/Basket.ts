import { Product } from 'entities/Product';

export interface Basket extends Product {
  quantity: number;
}
