import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProductFormData } from '../selectors/getProductForm';
import { getUserAuthData } from 'entities/User';
import { fetchProducts } from 'pages/ProductsPage/model/services/fetchProducts/fetchProducts';
import { SuccessApplicationAction } from 'widgets/SuccessApplication/model/slice/SuccessApplication';
import { ProductFormAction } from '../slice/ProductFormSlice';

export const fetchUpdateProduct = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('produktfetchUpdateProduct', async (_, thunkApi) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkApi;
  const data = getProductFormData(getState());
  const user = getUserAuthData(getState());
  if (!data?.id || !user?.token) {
    throw new Error();
  }
  try {
    const migrateData = {
      ...data,
      images: data.newImages,
      newImages: undefined,
    };
    const response = await extra.api.patch(
      `/products/${data.id}`,
      migrateData,
      {
        headers: {
          Authorization: 'Bearer ' + user?.token,
        },
      },
    );
    if (!response.data) {
      throw new Error();
    }
    dispatch(SuccessApplicationAction.setVisible(true));
    setTimeout(() => dispatch(SuccessApplicationAction.setInvisible()), 3000);
    dispatch(ProductFormAction.clearState());
    dispatch(fetchProducts({ replace: true }));
    return response.data;
  } catch (err) {
  
    rejectWithValue('error');
  }
});
