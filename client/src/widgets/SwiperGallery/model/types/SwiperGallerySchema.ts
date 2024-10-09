import { ImageType } from 'widgets/ImagesEditItem';

export interface SwiperGallerySchema {
  data: ImageType[];
  isLoading: boolean;
  error?: string;
}
