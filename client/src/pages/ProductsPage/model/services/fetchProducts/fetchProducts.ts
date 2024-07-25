import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Product } from 'entities/Product';
import { getProductsPageLimit } from '../../selectors/ProductsPageSelectors';

export interface FetchArticleListProps {
  page: number;
  categoryId?: number | undefined;
}
export const fetchProducts = createAsyncThunk<
  Product[],
  FetchArticleListProps,
  ThunkConfig<string>
>('/products/fetchProducts', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1, categoryId } = props;
  const limit = getProductsPageLimit(getState());
  try {
    const response = await extra.api.get<Product[]>(`${__API__}/products`, {
      params: {
        page: page,
        limit: limit,
        categoryId,
      },
    });
    if (!response) {
      throw new Error();
    }
    return response.data;
  } catch (err) {
    return rejectWithValue('error');
  }
});
