import { StateSchema } from 'app/providers/StoreProvider';

export const getFormCallName = (state: StateSchema) =>
  state.formCall.data.name ?? '';
export const getFormCallPhone = (state: StateSchema) =>
  state.formCall.data.phone ?? '';

export const getFormCallErrorName = (state: StateSchema) =>
  state.formCall.data.errorName ?? '';

export const getFormCallErrorPhone = (state: StateSchema) =>
  state.formCall.data.errorPhone ?? '';

export const getFormCallSubmiteDisabled = (state: StateSchema) =>
  state.formCall.data.submiteDisabled ?? true;

export const getFormCallIsLoading = (state: StateSchema) =>
  state.formCall.isLoading ?? false;
export const getFormCallError = (state: StateSchema) =>
  state.formCall.error ?? '';
