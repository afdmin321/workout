import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SwiperGallerySchema } from '../types/SwiperGallerySchema';
import { SwiperGallerySlide } from '../types/SwiperGallerySlide';

const initialState: SwiperGallerySchema = {
  isLoading: false,
  data: [],
};
const swiperGallerySlice = createSlice({
  name: 'swiperGallerySlice',
  initialState,
  reducers: {
    setSlides: (state, { payload }: PayloadAction<SwiperGallerySlide[]>) => {
      state.data = payload;
    },
    deleteSlides: (state, { payload }: PayloadAction<string>) => {
      state.data = state.data.filter((el) => el.src !== payload);
    },
    clearState: () => {
      return initialState;
    },
  },
});
export const { reducer: SwiperGalleryReducer, actions: SwiperGalleryAction } =
  swiperGallerySlice;
