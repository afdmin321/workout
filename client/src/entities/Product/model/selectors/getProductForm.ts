import { StateSchema } from 'app/providers/StoreProvider';

export const getProductFormData = (state: StateSchema) =>
  state.formProduct?.data;

export const getProductFormIsLoading = (state: StateSchema) =>
  state.formProduct?.isLoading;

export const getProductFormError = (state: StateSchema) =>
  state.formProduct?.error;
