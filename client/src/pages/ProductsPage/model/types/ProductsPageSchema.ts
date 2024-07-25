import { EntityState } from '@reduxjs/toolkit';
import { Product } from 'entities/Product';

export interface ProductsPageSchema extends EntityState<Product> {
  isLoading?: boolean;
  error?: string;
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
}
