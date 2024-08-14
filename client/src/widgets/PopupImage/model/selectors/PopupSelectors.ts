import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrentImageSrc = (state: StateSchema) =>
  state.popupImage.currentImgSrc;
export const getImages = (state: StateSchema) => state.popupImage.images;
export const getPopupImagesVisible = (state: StateSchema) =>
  state.popupImage.popupImageVisible;
