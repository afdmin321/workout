import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthData = (state: StateSchema) => state.user.authData;
export const getInited = (state: StateSchema) => state.user._inited;
