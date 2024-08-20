import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthByUsernameSchema } from '../types/AuthByUsernameSchema';
import { fetchAuthByUsernameServices } from '../services/fetchAuthByUsernameServices';
import { User } from 'entities/User/model/types/User';

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthByUsernameServices.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchAuthByUsernameServices.fulfilled, (state) => {
        state.error = undefined;
        state.isLoading = false;
      })
      .addCase(fetchAuthByUsernameServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { actions: AuthByUsernameAction, reducer: AuthByUsernameReducer } =
  authByUsernameSlice;
