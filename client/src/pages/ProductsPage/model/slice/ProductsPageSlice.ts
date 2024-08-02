import { Product } from 'entities/Product';
import { ProductsPageSchema } from '../types/ProductsPageSchema';
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { fetchProducts } from '../services/fetchProducts/fetchProducts';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  ProductFilter,
  ProductSort,
} from 'entities/Product/model/types/Product';

const productsAdapter = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});
export const getProducts = productsAdapter.getSelectors<StateSchema>(
  (state) => state.productsPage || productsAdapter.getInitialState(),
);

const productsPageSlice = createSlice({
  name: 'productPage',
  initialState: productsAdapter.getInitialState<ProductsPageSchema>({
    isLoading: false,
    error: undefined,
    page: 1,
    limit: 12,
    hasMore: true,
    sort: null,
    filter: null,
    _inited: false,
    ids: [],
    entities: {},
  }),
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSort: (state, action: PayloadAction<ProductSort>) => {
      state.sort = action.payload;
    },
    setFilter: (state, action: PayloadAction<ProductFilter>) => {
      state.filter = action.payload;
    },
    initState: (state) => {
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
      if (action.meta.arg.replace) {
        productsAdapter.removeAll(state);
      }
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasMore = action.payload.length >= state.limit;
      if (action.meta.arg.replace) {
        productsAdapter.setAll(state, action.payload);
      } else {
        productsAdapter.addMany(state, action.payload);
      }
    });
  },
});

export const { actions: ProductsPageAction } = productsPageSlice;
export const { reducer: ProductsPageReducer } = productsPageSlice;
