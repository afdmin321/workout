import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SwiperGallerySchema } from '../types/SwiperGallerySchema';
import { ImageType } from 'widgets/ImagesEditItem';
import { editIndexImages } from 'shared/lib/editIndex/editIndexImages';


const initialState: SwiperGallerySchema = {
  isLoading: false,
  data: [],
};
const swiperGallerySlice = createSlice({
  name: 'swiperGallerySlice',
  initialState,
  reducers: {
    setSlides: (state, { payload }: PayloadAction<ImageType[]>) => {
      state.data = payload;
    },
    deleteSlides: (state, { payload }: PayloadAction<string>) => {
      state.data = state.data.filter((el) => el.src !== payload);
    },
    editIndexImages: (
      state,
      { payload }: PayloadAction<{ src: string; index: number }>,
    ) => {
      state.data = editIndexImages(state.data, payload);
    },
    clearState: () => {
      return initialState;
    },
  },
});
export const { reducer: SwiperGalleryReducer, actions: SwiperGalleryAction } =
  swiperGallerySlice;
