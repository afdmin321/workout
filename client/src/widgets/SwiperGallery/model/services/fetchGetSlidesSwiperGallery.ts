import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { ImageType } from 'widgets/ImagesEditItem';
import { SwiperGalleryAction } from '../slice/swiperGallerySlice';

export const fetchGetSlidesSwiperGallery = createAsyncThunk<
  ImageType[],
  void,
  ThunkConfig<string>
>('swiperGallery/fetchAddSligesSwiperGallery', async (_, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;

  try {
    const response = await extra.api.get('/gallery');
    if (!response) {
      throw new Error();
    }
    console.log(response.data);
    dispatch(SwiperGalleryAction.setSlides(response.data));
    return response.data;
  } catch (err) {
    console.log(err);
    rejectWithValue('eerroro');
  }
});
