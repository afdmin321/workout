import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollWatchesSchema } from '../types/ScrollWatchesSchema';

const initialState: ScrollWatchesSchema = {
  scroll: {},
};
const scrollWatchesSlice = createSlice({
  name: 'scrollWatchesSchema',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: ScrollWatchesActions, reducer: ScrollWatchesReducer } =
  scrollWatchesSlice;
