import { rtkApi } from 'shared/api/rtkApi';
import { ImageType } from 'widgets/ImagesEditItem';

export const swiperGalleryApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getGallerySlide: build.query<ImageType[], void>({
      query: () => ({
        url: '/gallery',
        method: 'GET',
        
      }),
    }),
    
  }),
});

export const useGetSwiperGallery = swiperGalleryApi.useGetGallerySlideQuery;
