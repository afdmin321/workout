import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { rtkApi } from 'shared/api/rtkApi';
import { ProductDetailsSchema, CreateProductSchema } from 'entities/Product';
import { BasketListSchema } from 'entities/Basket/model/types/BasketListSchema';
import { ProductsPageSchema } from 'pages/ProductsPage/model/types/ProductsPageSchema';
import { ScrollWatchesSchema } from 'widgets/ScrollWatches';
import { SearchProductSchema } from 'features/SearchProduct/model/types/SearchProductSchema';
import { FormCallSchema } from 'features/FormCall/model/types/FormCallSchema';
import { ChatType } from 'widgets/Chat/model/types/ChatType';
import { SuccessApplicationSchema } from 'widgets/SuccessApplication/model/types/SuccessApplicationSchema';
import { PopupImageSchema } from 'widgets/PopupImage';
import { AuthByUsernameSchema } from 'features/AuthByUsername';
import { UserSchema } from 'entities/User/model/types/User';
import { SwiperGallerySchema } from 'widgets/SwiperGallery/model/types/SwiperGallerySchema';

export interface StateSchema {
  user: UserSchema;
  basketList: BasketListSchema;
  scrollWatches: ScrollWatchesSchema;
  searchProduct: SearchProductSchema;
  formCall: FormCallSchema;
  chat: ChatType;
  successApplication: SuccessApplicationSchema;
  popupImage: PopupImageSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  // Асинхронные редюсеры
  productDetails?: ProductDetailsSchema;
  productsPage?: ProductsPageSchema;
  authByUsername?: AuthByUsernameSchema;
  formProduct?: CreateProductSchema;
  formSwiperGallery?: SwiperGallerySchema;
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
