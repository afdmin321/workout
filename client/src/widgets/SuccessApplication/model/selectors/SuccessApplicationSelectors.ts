import { StateSchema } from 'app/providers/StoreProvider';

export const getSuccessApplicationVisible = (state: StateSchema) =>
  state.successApplication.visible;
