import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SuccessApplicationAction } from 'widgets/SuccessApplication/model/slice/SuccessApplication';

export const fetchDeletProduct = createAsyncThunk<
  any,
  string,
  ThunkConfig<string>
>('product/fetchDeletProduct', async (productId, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;
  try {
    const response = extra.api.delete<any>(`/products/${productId}`);
    if (!response) {
      throw new Error();
    }
    dispatch(SuccessApplicationAction.setVisible(true));
    setTimeout(() => dispatch(SuccessApplicationAction.setInvisible()), 3000);
    return response;
  } catch (err) {
    rejectWithValue('Произошла ошибка при удалении товара');
  }
});
