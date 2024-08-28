import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketListSchema } from '../types/BasketListSchema';
import { Basket } from '../types/Basket';
import { products_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const productsString = localStorage.getItem(products_LOCALSTORAGE_KEY);
const products = productsString
  ? (JSON.parse(productsString) as Basket[])
  : null;
const initialState: BasketListSchema = {
  isLoading: false,
  data: products ?? [],
};
const basketListSlice = createSlice({
  name: 'basketList',
  initialState,
  reducers: {
    addBasketItem: (state, action: PayloadAction<Basket>) => {
      state.data = [...state.data, action.payload];
      localStorage.setItem(
        products_LOCALSTORAGE_KEY,
        JSON.stringify(state.data),
      );
    },
    editBasketItemQuantity: (state, action: PayloadAction<Basket>) => {
      const dataEdit = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      state.data = dataEdit;
      localStorage.setItem(products_LOCALSTORAGE_KEY, JSON.stringify(dataEdit));
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    clearState: () => {
      localStorage.removeItemItem(products_LOCALSTORAGE_KEY);
      return initialState;
    },
  },
});

export const { actions: basketListActions } = basketListSlice;
export const { reducer: basketListReducer } = basketListSlice;
