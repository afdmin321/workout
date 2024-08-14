import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PopupImageSchema } from '../types/PopupImageSchema';

const initialState: PopupImageSchema = {
  popupImageVisible: false,
};

const popupImageSlice = createSlice({
  name: 'popupImage',
  initialState,
  reducers: {
    setCurrentImgSrc: (state, action: PayloadAction<string>) => {
      state.currentImgSrc = action.payload;
    },
    setImages: (state, action: PayloadAction<[]>) => {
      state.images = action.payload;
    },
    setPopupImageVisible: (state, action: PayloadAction<boolean>) => {
      state.popupImageVisible = action.payload;
    },
    clearState: () => {
      return initialState;
    },
  },
});

export const { actions: PopupImageAction, reducer: PopupImageReducer } =
  popupImageSlice;
