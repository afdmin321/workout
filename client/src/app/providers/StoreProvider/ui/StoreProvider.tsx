import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";
import { ReducersMapObject } from "@reduxjs/toolkit";

interface Props {
    children: ReactNode;
    initialState?: Partial<StateSchema>;
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<Props> = (props: Props) => {
    const { children, initialState, asyncReducers } = props;
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);
    return <Provider store={store}>{children}</Provider>;
};
