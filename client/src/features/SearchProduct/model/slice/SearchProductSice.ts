import { SearchProductSchema } from '../types/SearchProductSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SearchProductSchema = {
};
const searchProductSice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string | undefined>) => {
      state.search = action.payload;
    },
  },
});
export const { actions: SearchProductAction, reducer: SearchProductReducer } =
  searchProductSice;
