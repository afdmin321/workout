import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Product } from 'entities/Product';
import {
  getProductsPage,
  getProductsPageFilter,
  getProductsPageLimit,
  getProductsPageSort,
} from '../../selectors/ProductsPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams';
import { getSearchProduct } from 'features/SearchProduct/model/selector/getSearchProductSelectors';

export interface FetchArticleListProps {
  replace?: boolean;
}
export const fetchProducts = createAsyncThunk<
  Product[],
  FetchArticleListProps,
  ThunkConfig<string>
>('/products/fetchProducts', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const limit = getProductsPageLimit(getState());
  const page = getProductsPage(getState());
  const sort = getProductsPageSort(getState())?.split('&')[0];
  const order = getProductsPageSort(getState())?.split('&')[1];
  const filter = getProductsPageFilter(getState());
  const search = getSearchProduct(getState());

  try {
    addQueryParams({
      sort,
      order,
      search,
      filter: filter ? filter : undefined,
    });
    const response = await extra.api.get<Product[]>(`${__API__}/products`, {
      params: {
        page,
        limit,
        filter,
        sort,
        order,
        search,
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
