import { StateSchema } from 'app/providers/StoreProvider';

export const getProductsPageIsLoading = (state: StateSchema) =>
  state.productsPage?.isLoading || false;
export const getProductsPageError = (state: StateSchema) =>
  state.productsPage?.error;
export const getProductsPageLimit = (state: StateSchema) =>
  state.productsPage?.limit;
export const getProductsPage = (state: StateSchema) =>
  state.productsPage?.page || 1;
export const getProductsPageHasMore = (state: StateSchema) =>
  state.productsPage?.hasMore;
export const getProductsPageInited = (state: StateSchema) =>
  state.productsPage?._inited;
export const getProductsPageSort = (state: StateSchema) =>
  state.productsPage?.sort ?? null;
export const getProductsPageFilter = (state: StateSchema) =>
  state.productsPage?.filter ?? null;


