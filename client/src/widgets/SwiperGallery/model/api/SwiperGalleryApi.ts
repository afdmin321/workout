import { rtkApi } from 'shared/api/rtkApi';
import { SwiperGalleryType } from '../types/SwiperGalleryType';

export const swiperGalleryApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getGallerySlide: build.query<SwiperGalleryType[], void>({
      query: () => ({
        url: '/gallery',
        method: 'GET',
      }),
    }),
  }),
});

export const useGetSwiperGallery = swiperGalleryApi.useGetGallerySlideQuery;
