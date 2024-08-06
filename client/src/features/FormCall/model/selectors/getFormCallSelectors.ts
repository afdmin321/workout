import { StateSchema } from 'app/providers/StoreProvider';

export const getFormCallName = (state: StateSchema) =>
  state.formCall.name ?? '';
export const getFormCallPhone = (state: StateSchema) =>
  state.formCall.phone ?? '';

export const getFormCallErrorName = (state: StateSchema) =>
  state.formCall.errorName ?? '';

export const getFormCallErrorPhone = (state: StateSchema) =>
  state.formCall.errorPhone ?? '';

export const getFormCallSubmiteDisabled = (state: StateSchema) =>
  state.formCall.submiteDisabled ?? true;
