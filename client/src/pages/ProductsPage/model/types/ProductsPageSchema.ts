import { EntityState } from '@reduxjs/toolkit';
import { Product } from 'entities/Product';
import {
  ProductFilter,
  ProductSort,
} from 'entities/Product/model/types/Product';

export interface ProductsPageSchema extends EntityState<Product> {
  isLoading?: boolean;
  error?: string;
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  // filter-sort
  sort: ProductSort | null;
  filter: ProductFilter;
  _inited: boolean;
}
