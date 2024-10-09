import { FC, memo, useEffect } from 'react';
import cls from './EditSlidesGallery.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SwiperGalleryAction } from 'widgets/SwiperGallery/model/slice/swiperGallerySlice';
import { useGetSwiperGallery } from 'widgets/SwiperGallery/model/api/SwiperGalleryApi';
import { useSelector } from 'react-redux';
import { getSwiperGalleryImages } from 'widgets/SwiperGallery/model/selectors/SwiperGallerySelector';
import { ImageEditItem } from 'widgets/ImagesEditItem';

interface Props {
  className?: string;
}
const EditSlidesGallery: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const { isLoading, data, error } = useGetSwiperGallery();
  if (data) {
    dispatch(SwiperGalleryAction.setSlides(data));
  }
  const slides = useSelector(getSwiperGalleryImages);

  return (
    <div
      className={classNames(cls.EditSlidesGallery, {}, [className])}
      {...otherProps}
    >
      {slides &&
        slides.map((slide) => {
          return (
            <ImageEditItem
              image={slide}
              onDelete={() => ''}
              onChange={() => ''}
            />
          );
        })}
    </div>
  );
};

export default memo(EditSlidesGallery);
