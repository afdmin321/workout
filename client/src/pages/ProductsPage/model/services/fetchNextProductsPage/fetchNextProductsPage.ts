import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getProductsPage,
  getProductsPageHasMore,
  getProductsPageIsLoading,
} from '../../selectors/ProductsPageSelectors';
import { ProductsPageAction } from '../../slice/ProductsPageSlice';
import { fetchProducts } from '../fetchProducts/fetchProducts';

export const fetchNextProductsPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('/products/fetchNextProductsPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const hasMore = getProductsPageHasMore(getState());
  const page = getProductsPage(getState());
  const isLoading = getProductsPageIsLoading(getState());
  if (hasMore && !isLoading) {
    dispatch(ProductsPageAction.setPage(page + 1));
    dispatch(fetchProducts({}));
  }
});
