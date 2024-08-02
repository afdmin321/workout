import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchProduct = (state: StateSchema) => state.searchProduct.search;
