import { StateSchema } from 'app/providers/StoreProvider';

export const getCreateProductData = (state: StateSchema) =>
  state.createProduct?.data;
export const getCreateProductIsLoading = (state: StateSchema) =>
  state.createProduct?.isLoading;
export const getCreateProductError = (state: StateSchema) =>
  state.createProduct?.error;
