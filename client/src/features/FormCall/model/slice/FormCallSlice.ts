import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormCallSchema } from '../types/FormCallSchema';
import { fetchOrder } from '../services/fetchOrder';

const initialState: FormCallSchema = {
  data: { submiteDisabled: true },
  isLoading: false,
};

const formCallSlice = createSlice({
  name: 'formCall',
  initialState,
  reducers: {
    formValid: (state) => {
      const phonePatt = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
      if (state.data.name && state.data.name.length < 2) {
        state.data.errorName = 'Имя не может содержать меньше 2-ух символов';
      } else {
        state.data.errorName = '';
      }
      if (state.data.phone && !phonePatt.test(state.data.phone)) {
        state.data.errorPhone =
          'Введите корректный номер телефона (+7 или 8)9977700777';
      } else {
        state.data.errorPhone = '';
      }
      if (
        state.data.phone &&
        phonePatt.test(state.data.phone) &&
        state.data.name &&
        state.data.name.length >= 2
      ) {
        state.data.submiteDisabled = false;
      } else {
        state.data.submiteDisabled = true;
      }
    },
    setName: (state, action: PayloadAction<string>) => {
      state.data.name = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.data.phone = action.payload;
    },
    setErrorName: (state, action: PayloadAction<string>) => {
      state.data.errorName = action.payload;
    },
    setErrorPhone: (state, action: PayloadAction<string>) => {
      state.data.errorPhone = action.payload;
    },
    setSubmiteDisabled: (state, action: PayloadAction<boolean>) => {
      state.data.submiteDisabled = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchOrder.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: FormCallAction, reducer: FormCallReducer } =
  formCallSlice;
