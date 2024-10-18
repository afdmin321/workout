import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getSwiperGalleryImages } from '../selectors/SwiperGallerySelector';
import { getUserAuthData } from 'entities/User';
import { SuccessApplicationAction } from 'widgets/SuccessApplication/model/slice/SuccessApplication';
import { SwiperGalleryAction } from '../slice/swiperGallerySlice';

export const fetchUpdateIndexSwiperGallery = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('swiperGallery/fetchUpdateIndexSwiperGallery', async (_, thunkApi) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkApi;
  const data = { images: getSwiperGalleryImages(getState()) };
  const user = getUserAuthData(getState());
  try {
    if (!data?.images?.length || !user?.token) {
      throw new Error();
    }
    const response = await extra.api.patch('/gallery', data, {
      headers: {
        Authorization: 'Bearer ' + user?.token,
      },
    });
    if (!response) {
      throw new Error();
    }
    dispatch(SuccessApplicationAction.setVisible(true));
    setTimeout(() => dispatch(SuccessApplicationAction.setInvisible()), 3000);
    dispatch(SwiperGalleryAction.clearState());
    return response.data;
  } catch (err) {
    console.log(err);
    rejectWithValue('eerroro');
  }
});
