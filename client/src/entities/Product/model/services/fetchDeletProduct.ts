import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { fetchProducts } from 'pages/ProductsPage/model/services/fetchProducts/fetchProducts';
import { SuccessApplicationAction } from 'widgets/SuccessApplication/model/slice/SuccessApplication';

export const fetchDeletProduct = createAsyncThunk<
  any,
  string,
  ThunkConfig<string>
>('product/fetchDeletProduct', async (productId, thunkApi) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkApi;
  const user = getUserAuthData(getState());
  try {
    const response = extra.api.delete<any>(`/products/${productId}`, {
      headers: {
        Authorization: 'Bearer ' + user?.token,
      },
    });
    if (!response) {
      throw new Error();
    }
    dispatch(SuccessApplicationAction.setVisible(true));
    setTimeout(() => dispatch(SuccessApplicationAction.setInvisible()), 3000);
    dispatch(fetchProducts({ replace: true }));
  } catch (err) {
    rejectWithValue('Произошла ошибка при удалении товара');
  }
});
