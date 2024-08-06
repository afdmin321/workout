import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { rtkApi } from 'shared/api/rtkApi';
import { ProductDetailsSchema } from 'entities/Product';
import { BasketListSchema } from 'entities/Basket/model/types/BasketListSchema';
import { ProductsPageSchema } from 'pages/ProductsPage/model/types/ProductsPageSchema';
import { ScrollWatchesSchema } from 'widgets/ScrollWatches';
import { SearchProductSchema } from 'features/SearchProduct/model/types/SearchProductSchema';
import { FormCallSchema } from 'features/FormCall/model/types/FormCallSchema';

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  user?: any;
  basketList: BasketListSchema;
  scrollWatches: ScrollWatchesSchema;
  searchProduct: SearchProductSchema;
  formCall: FormCallSchema;
  // Асинхронные редюсеры
  productDetails?: ProductDetailsSchema;
  productsPage?: ProductsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
