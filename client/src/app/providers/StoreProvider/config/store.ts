import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { CombinedState, Reducer } from 'redux';
import { rtkApi } from 'shared/api/rtkApi';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { basketListReducer } from 'entities/Basket/model/slice/BasketListSlice';
import { ScrollWatchesReducer } from 'widgets/ScrollWatches';
import { SearchProductReducer } from 'features/SearchProduct/model/slice/SearchProductSice';
import { FormCallReducer } from 'features/FormCall';
import { chatSliceReducer } from 'widgets/Chat/model/slice/ChatSlice';
import { SuccessApplicationReducer } from 'widgets/SuccessApplication/model/slice/SuccessApplication';
import { PopupImageReducer } from 'widgets/PopupImage';
import { UserReducer } from 'entities/User/model/slice/UserSlice';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: UserReducer,
    basketList: basketListReducer,
    scrollWatches: ScrollWatchesReducer,
    searchProduct: SearchProductReducer,
    formCall: FormCallReducer,
    chat: chatSliceReducer,
    popupImage: PopupImageReducer,
    successApplication: SuccessApplicationReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
