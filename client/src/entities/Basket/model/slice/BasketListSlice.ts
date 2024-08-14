import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketListSchema } from '../types/BasketListSchema';
import { Basket } from '../types/Basket';
const initialState: BasketListSchema = {
  isLoading: false,
  data: [],
};
const basketListSlice = createSlice({
  name: 'basketList',
  initialState,
  reducers: {
    addBasketItem: (state, action: PayloadAction<Basket>) => {
      state.data = [...state.data, action.payload];
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
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    clearState: () => {
      return initialState;
    },
  },
});

export const { actions: basketListActions } = basketListSlice;
export const { reducer: basketListReducer } = basketListSlice;
