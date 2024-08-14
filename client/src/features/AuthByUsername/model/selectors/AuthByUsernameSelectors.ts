import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthUsername = (state: StateSchema) =>
  state.authByUsername?.username || '';

export const getAuthPassword = (state: StateSchema) =>
  state.authByUsername?.password || '';

export const getAuthIsLoading = (state: StateSchema) =>
  state.authByUsername?.isLoading || false;
export const getAuthError = (state: StateSchema) => state.authByUsername?.error;
