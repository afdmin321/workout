import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchProductById = createAsyncThunk<
  Product,
  string,
  ThunkConfig<string>
>('product/fetchProductById', async (prooductId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const respons = await extra.api.get<Product>(`/products/${prooductId}`);
    if (!respons.data) {
      throw new Error();
    }
    return respons.data;
  } catch (err) {
    return rejectWithValue('error response get product by id');
  }
});
