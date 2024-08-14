import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getFormCallName,
  getFormCallPhone,
} from '../selectors/getFormCallSelectors';
import { getBasketData } from 'entities/Basket/model/selectors/getBasket';
import { SuccessApplicationAction } from 'widgets/SuccessApplication/model/slice/SuccessApplication';
import { FormCallAction } from '../slice/FormCallSlice';
import { basketListActions } from 'entities/Basket/model/slice/BasketListSlice';
import { ThemeForm } from 'features/FormCall/ui/FormCall';

export const fetchOrder = createAsyncThunk<
  void,
  string | undefined,
  ThunkConfig<string>
>('formCall/order', async (type, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi;
  const name = getFormCallName(getState());
  const phone = getFormCallPhone(getState());
  const products = getBasketData(getState());

  try {
    const respons = await extra.api.post('/order', {
      client_name: name,
      phone,
      products,
    });
    if (!respons) {
      throw new Error();
    }
    dispatch(SuccessApplicationAction.setVisible(true));
    setTimeout(() => dispatch(SuccessApplicationAction.setInvisible()), 3000);
    if (type === ThemeForm.ORDER) {
      dispatch(basketListActions.clearState());
    }
  } catch (err) {
    rejectWithValue('error');
  }
});
