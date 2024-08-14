import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthByUsernameSchema } from '../types/AuthByUsernameSchema';

const initialState: AuthByUsernameSchema = {
  username: '',
  password: '',
  isLoading: false,
};
const authByUsernameSlice = createSlice({
  name: 'AuthByUsername',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});
export const { actions: AuthByUsernameAction, reducer: AuthByUsernameReducer } =
  authByUsernameSlice;
