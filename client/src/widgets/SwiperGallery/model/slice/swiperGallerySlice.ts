import { createSlice } from '@reduxjs/toolkit';
import { SwiperGalleryType } from '../types/SwiperGalleryType';

const initialState: SwiperGalleryType[] = [];
const swiperGallerySlice = createSlice({
  name: 'swiperGallerySlice',
  initialState,
  reducers: {},
});
