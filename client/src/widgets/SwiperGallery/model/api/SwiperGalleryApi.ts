import { rtkApi } from 'shared/api/rtkApi';
import { SwiperGallerySlide } from '../types/SwiperGallerySlide';

export const swiperGalleryApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getGallerySlide: build.query<SwiperGallerySlide[], void>({
      query: () => ({
        url: '/gallery',
        method: 'GET',
      }),
    }),
  }),
});

export const useGetSwiperGallery = swiperGalleryApi.useGetGallerySlideQuery;
