import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getFormCallName,
  getFormCallPhone,
} from '../selectors/getFormCallSelectors';
import { getBasketData } from 'entities/Basket/model/selectors/getBasket';

export const fetchOrder = createAsyncThunk<void, void, ThunkConfig<string>>(
  'formCall/order',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
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
    } catch (err) {
      rejectWithValue('error');
    }
  },
);
