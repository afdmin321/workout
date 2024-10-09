import { StateSchema } from 'app/providers/StoreProvider';

export const getSwiperGalleryImages = (state: StateSchema) =>
  state.formSwiperGallery?.data;
export const getSwiperGalleryIsLoading = (state: StateSchema) =>
  state.formSwiperGallery?.isLoading;
export const getSwiperGalleryError = (state: StateSchema) =>
  state.formSwiperGallery?.error;
