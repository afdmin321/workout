import { FC, ReactNode, useEffect } from 'react';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface Props {
  children: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<Props> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];
      //  Добавляем редюсер только если его нет
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
