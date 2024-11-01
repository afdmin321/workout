import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProductFormData } from '../selectors/getProductForm';
import { getUserAuthData } from 'entities/User';
import { fetchProducts } from 'pages/ProductsPage/model/services/fetchProducts/fetchProducts';
import { SuccessApplicationAction } from 'widgets/SuccessApplication/model/slice/SuccessApplication';
import { ProductFormAction } from '../slice/ProductFormSlice';

export const fetchCreateProduct = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('fetchCreateProduct', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi;
  const data = getProductFormData(getState());
  const user = getUserAuthData(getState());
  try {
    if (
      !data?.name &&
      !data?.articleNumber &&
      !data?.category &&
      !data?.description &&
      !data?.images
    ) {
      throw new Error();
    }
    const response = await extra.api.post(
      '/products',
      {
        ...data,
        images: data.newImages,
        newImages: undefined,
      },
      {
        headers: {
          Authorization: 'Bearer ' + user?.token,
        },
      },
    );
    if (!response) {
      throw new Error();
    }
    dispatch(SuccessApplicationAction.setVisible(true));
    setTimeout(() => dispatch(SuccessApplicationAction.setInvisible()), 3000);
    dispatch(fetchProducts({ replace: true }));
    dispatch(ProductFormAction.clearState());
  } catch (err) {
    rejectWithValue('err.message');
  }
});
