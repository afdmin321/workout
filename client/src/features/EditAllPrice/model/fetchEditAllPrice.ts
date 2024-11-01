import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { getUserAuthData } from 'entities/User';
import { SuccessApplicationAction } from 'widgets/SuccessApplication/model/slice/SuccessApplication';

export const fetchEditAllPrice = createAsyncThunk<
  void,
  number,
  ThunkConfig<string>
>('swiperGallery/fetchEditAllPrice', async (value, thunkApi) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkApi;
  const user = getUserAuthData(getState());
  const data = { multiply: value };
  try {
    if (!user?.token) {
      throw new Error();
    }
    const response = await extra.api.post('/products/update/price', data, {
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
    rejectWithValue('eerroro');
  }
});
