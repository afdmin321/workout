import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CreateProduct,
  ProductCategory,
} from '../types/Product';
import { CreateProductSchema } from '../types/ProductSchema';

import { ImageType } from 'widgets/ImagesEditItem';
import { editIndexImages } from 'shared/lib/editIndex/editIndexImages';

const initialState: CreateProductSchema = {
  isLoading: false,
  data: {
    name: '',
    description: '',
    articleNumber: '',
    disabled: false,
    images: [],
    newImages: [],
    price: null,
    ageGroup: null,
    material: null,
    length: null,
    width: null,
    height: null,
    lengthDelivery: null,
    widthDelivery: null,
    heightDelivery: null,
    weightDelivery: null,
  },
};

const productFormSlice = createSlice({
  name: 'productFormSlice',
  initialState,
  reducers: {
    setId: (state, { payload }: PayloadAction<string>) => {
      state.data.id = payload;
    },
    setName: (state, { payload }: PayloadAction<string>) => {
      state.data.name = payload;
    },
    setDescription: (state, { payload }: PayloadAction<string>) => {
      state.data.description = payload;
    },
    setArticleNumber: (state, { payload }: PayloadAction<string>) => {
      state.data.articleNumber = payload;
    },
    setDisabled: (state, { payload }: PayloadAction<boolean>) => {
      state.data.disabled = payload;
    },
    setNewImages: (
      state,
      { payload }: PayloadAction<ImageType[]>,
    ) => {
      state.data.newImages = payload;
    },
    setCategory: (state, { payload }: PayloadAction<ProductCategory>) => {
      state.data.category = payload;
    },
    setPrice: (state, { payload }: PayloadAction<number>) => {
      state.data.price = payload;
    },
    setAgeGroup: (state, { payload }: PayloadAction<string>) => {
      state.data.ageGroup = payload;
    },
    setMaterial: (state, { payload }: PayloadAction<string>) => {
      state.data.material = payload;
    },
    setLength: (state, { payload }: PayloadAction<number>) => {
      state.data.length = payload;
    },
    setWidth: (state, { payload }: PayloadAction<number>) => {
      state.data.width = payload;
    },
    setHeight: (state, { payload }: PayloadAction<number>) => {
      state.data.height = payload;
    },
    setLengthDelivery: (state, { payload }: PayloadAction<number>) => {
      state.data.lengthDelivery = payload;
    },
    setWidthDelivery: (state, { payload }: PayloadAction<number>) => {
      state.data.widthDelivery = payload;
    },
    setHeightDelivery: (state, { payload }: PayloadAction<number>) => {
      state.data.heightDelivery = payload;
    },
    setWeightDelivery: (state, { payload }: PayloadAction<number>) => {
      state.data.weightDelivery = payload;
    },
    deleteNewImage: (state, { payload }: PayloadAction<string>) => {
      state.data.newImages = state.data.newImages.filter(
        (img) => img.src !== payload,
      );
    },

    clearState: () => {
      return initialState;
    },
    setData: (state, { payload }: PayloadAction<CreateProduct>) => {
      state.data = payload;
    },
    editIndexNewImages: (
      state,
      { payload }: PayloadAction<{ src: string; index: number }>,
    ) => {
      state.data.newImages = editIndexImages(state.data.newImages, payload);
    },
    editIndexImages: (
      state,
      { payload }: PayloadAction<{ src: string; index: number }>,
    ) => {
      state.data.images = editIndexImages(state.data.images, payload);
    },
    deleteUpdateImage: (state, { payload }: PayloadAction<string>) => {
      state.data.images = state.data.images?.filter((el) => el.id !== payload);
    },
  },
});

export const { actions: ProductFormAction, reducer: ProductFormReducer } =
  productFormSlice;
