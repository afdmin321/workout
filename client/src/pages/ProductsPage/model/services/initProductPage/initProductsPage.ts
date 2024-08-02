import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProductsPageInited } from '../../selectors/ProductsPageSelectors';
import { ProductsPageAction } from '../../slice/ProductsPageSlice';
import { fetchProducts } from '../fetchProducts/fetchProducts';
import {
  ProductFilter,
  ProductSort,
} from 'entities/Product/model/types/Product';
import { SearchProductAction } from 'features/SearchProduct/model/slice/SearchProductSice';

export const initProductsPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('productsPage/initProductsPage', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const _inited = getProductsPageInited(getState());
  const orderFormUrl = searchParams.get('order');
  const sortFormUrl = searchParams.get('sort');
  const filterFormUrl = searchParams.get('filter');
  const searchFormUrl = searchParams.get('search');

  if (orderFormUrl && sortFormUrl) {
    dispatch(
      ProductsPageAction.setSort(
        (sortFormUrl + '&' + orderFormUrl) as ProductSort,
      ),
    );
  }
  filterFormUrl &&
    dispatch(ProductsPageAction.setFilter(filterFormUrl as ProductFilter));

  searchFormUrl && dispatch(SearchProductAction.setSearch(searchFormUrl));
  
  if (!_inited) {
    dispatch(ProductsPageAction.initState());
    dispatch(fetchProducts({}));
  }
});
