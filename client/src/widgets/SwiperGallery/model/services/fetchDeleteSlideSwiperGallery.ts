import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { SuccessApplicationAction } from 'widgets/SuccessApplication/model/slice/SuccessApplication';

export const fetchDeleteSlideSwiperGallery = createAsyncThunk<
  void,
  string,
  ThunkConfig<string>
>('swiperGallery/fetchDeleteSlideSwiperGallery', async (id, thunkApi) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkApi;
  const user = getUserAuthData(getState());
  try {
    if (!id && !user?.token) {
      throw new Error();
    }
    const response = await extra.api.delete(`/gallery/${id}`, {
      headers: {
        Authorization: 'Bearer ' + user?.token,
      },
    });
    if (!response) {
      throw new Error();
    }
    dispatch(SuccessApplicationAction.setVisible(true));
    setTimeout(() => dispatch(SuccessApplicationAction.setInvisible()), 3000);
    return response.data;
  } catch (err) {
    console.log(err);
    rejectWithValue('eerroro');
  }
});
