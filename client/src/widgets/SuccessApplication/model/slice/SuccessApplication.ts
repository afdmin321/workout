import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SuccessApplicationSchema } from '../types/SuccessApplicationSchema';

const initialState: SuccessApplicationSchema = {
  visible: false,
};
const successApplicationSlice = createSlice({
  name: 'successApplication',
  initialState,
  reducers: {
    setInvisible: (state) => {
      state.visible = false;
    },
    setVisible: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
  },
});
export const {
  actions: SuccessApplicationAction,
  reducer: SuccessApplicationReducer,
} = successApplicationSlice;
