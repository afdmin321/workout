import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormCallSchema } from '../types/FormCallSchema';

const initialState: FormCallSchema = {
  submiteDisabled: true,
};

const formCallSlice = createSlice({
  name: 'formCall',
  initialState,
  reducers: {
    formValid: (state) => {
      const phonePatt = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
      if (state.name && state.name.length < 2) {
        state.errorName = 'Имя не может содержать меньше 2-ух символов';
      } else {
        state.errorName = '';
      }
      if (state.phone && !phonePatt.test(state.phone)) {
        state.errorPhone =
          'Введите корректный номер телефона (+7 или 8)9977700777';
      } else {
        state.errorPhone = '';
      }
      if (
        state.phone &&
        phonePatt.test(state.phone) &&
        state.name &&
        state.name.length >= 2
      ) {
        state.submiteDisabled = false;
      } else {
        state.submiteDisabled = true;
      }
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setErrorName: (state, action: PayloadAction<string>) => {
      state.errorName = action.payload;
    },
    setErrorPhone: (state, action: PayloadAction<string>) => {
      state.errorPhone = action.payload;
    },
    setSubmiteDisabled: (state, action: PayloadAction<boolean>) => {
      state.submiteDisabled = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const { actions: FormCallAction, reducer: FormCallReducer } =
  formCallSlice;
