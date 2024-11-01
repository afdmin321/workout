import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SuccessApplicationAction } from 'widgets/SuccessApplication/model/slice/SuccessApplication';
import { ProductFormAction } from '../slice/ProductFormSlice';
import { getUserAuthData } from 'entities/User';

export const fetchDeletImageProduct = createAsyncThunk<
  void,
  string,
  ThunkConfig<string>
>('prodict/fetchDeletImageProduct', async (id, thunkApi) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkApi;
  const user = getUserAuthData(getState());
  try {
    if (!user && !id) {
      throw new Error();
    }
    const resporns = await extra.api.delete(`/images/${id}`, {
      headers: {
        Authorization: 'Bearer ' + user?.token,
      },
    });
    if (!resporns.data) {
      throw new Error();
    }
    dispatch(SuccessApplicationAction.setVisible(true));
    dispatch(ProductFormAction.deleteUpdateImage(id));
    setTimeout(() => dispatch(SuccessApplicationAction.setInvisible()), 3000);
  } catch (err) {
    rejectWithValue('error');
  }
});
