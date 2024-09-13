import { SwiperGallerySlide } from './SwiperGallerySlide';

export interface SwiperGallerySchema {
  data: SwiperGallerySlide[];
  isLoading: false;
  error?: string;
}
