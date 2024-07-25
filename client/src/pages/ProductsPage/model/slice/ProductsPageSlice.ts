import { Product } from 'entities/Product';
import { ProductsPageSchema } from '../types/ProductsPageSchema';
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { fetchProducts } from '../services/fetchProducts/fetchProducts';
import { StateSchema } from 'app/providers/StoreProvider';

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
    ids: [],
    entities: {},
  }),
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.isLoading = false;
        productsAdapter.addMany(state, action.payload);
        if (action.payload.length < state.limit) {
          state.hasMore = false;
        } else {
          state.hasMore = true;
        }
      },
    );
  },
});

export const { actions: ProductsPageAction } = productsPageSlice;
export const { reducer: ProductsPageReducer } = productsPageSlice;
