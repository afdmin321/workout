import { Basket } from './Basket';

export interface BasketListSchema {
  isLoading?: boolean;
  error?: string;
  data: Basket[];
}
