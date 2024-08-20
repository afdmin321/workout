import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDetailsSchema } from '../types/ProductSchema';
import { fetchProductById } from '../services/ProductDetailsServices';
import { Product } from '../types/Product';

const initialState: ProductDetailsSchema = {
  isLoading: false,
};
export const productDetails = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProductById.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: productDetailsActions } = productDetails;
export const { reducer: productDetailsReducer } = productDetails;
