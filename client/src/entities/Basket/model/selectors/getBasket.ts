import { StateSchema } from 'app/providers/StoreProvider';

export const getBasketData = (state: StateSchema) => state.basketList?.data;
export const getBasketIsLoading = (state: StateSchema) =>
  state.basketList?.data;
export const getBasketError = (state: StateSchema) => state.basketList?.data;
