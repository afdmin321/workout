import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SwiperGallerySchema } from '../types/SwiperGallerySchema';
import { ImageType } from 'widgets/ImagesEditItem';
import { editIndexImages } from 'shared/lib/editIndex/editIndexImages';
import { fetchGetSlidesSwiperGallery } from '../services/fetchGetSlidesSwiperGallery';

const initialState: SwiperGallerySchema = {
  isLoading: false,
  data: [],
};
const swiperGallerySlice = createSlice({
  name: 'swiperGallerySlice',
  initialState,
  reducers: {
    setSlides: (state, { payload }: PayloadAction<ImageType[]>) => {
      state.data = [...payload];
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetSlidesSwiperGallery.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchGetSlidesSwiperGallery.fulfilled,
        (state, action: PayloadAction<ImageType[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchGetSlidesSwiperGallery.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { reducer: SwiperGalleryReducer, actions: SwiperGalleryAction } =
  swiperGallerySlice;
