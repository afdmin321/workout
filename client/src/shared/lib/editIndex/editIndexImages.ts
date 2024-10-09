import { ImageType } from 'widgets/ImagesEditItem';

export const editIndexImages = (
  state: ImageType[],
  payload: { src: string; index: number },
) => {
    const targetImage = state.find((el) => el.src === payload.src);
  const existingIndex = state.find((el) => el.index === payload.index);
  return state.map((el) => {
    if (existingIndex && targetImage) {
      if (existingIndex.src === el.src) {
        return { ...el, index: targetImage.index };
      }
    }
    if (el.src === payload.src) {
      return { ...el, index: payload.index };
    }
    return el;
  });
};
