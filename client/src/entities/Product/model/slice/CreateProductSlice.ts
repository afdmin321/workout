import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CreateProduct,
  CreateProductCategory,
  CreateProductImages,
} from '../types/Product';
import { CreateProductSchema } from '../types/ProductSchema';

const initialState: CreateProductSchema = {
  isLoading: false,
  data: {
    name: '',
    description: '',
    articleNumber: '',
    disabled: false,
    images: [],
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
const createProductSlice = createSlice({
  name: 'createProductSlice',
  initialState,
  reducers: {
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
    setImages: (state, { payload }: PayloadAction<CreateProductImages[]>) => {
      state.data.images = payload;
    },
    setCategory: (state, { payload }: PayloadAction<CreateProductCategory>) => {
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
    editImagesIndex: (
      state,
      { payload }: PayloadAction<{ img: string; index: number }>,
    ) => {
      state.data.images = state.data.images.map((img) => {
        if (img.src === payload.img) {
          const targetImageIndex = state.data.images.findIndex(
            (image) => image.index === payload.index,
          );
          if (targetImageIndex > 0) {
        
            state.data.images[targetImageIndex].index = img.index;
          }
          return { ...img, index: payload.index };
        }

        return img;
      });
    },
    deleteImage: (state, { payload }: PayloadAction<string>) => {
      state.data.images = state.data.images.filter(
        (img) => img.src !== payload,
      );
    },
  },
  extraReducers: {},
});

export const { actions: CreateProductAction, reducer: CreateProductReducer } =
  createProductSlice;
