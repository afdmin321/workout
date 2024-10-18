import { FC, memo, useCallback } from 'react';
import cls from './SwiperGallery.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/navigation';
import SwiperItem from '../SwiperSlide/SwiperSlide';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PopupImageAction } from 'widgets/PopupImage';

import { useResize } from 'shared/lib/hooks/useResize/useResize';
import { useGetSwiperGallery } from 'widgets/SwiperGallery/model/api/SwiperGalleryApi';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface Props {
  className?: string;
}

const SwiperGallery: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const resize = useResize();
  const {
    isLoading,
    data: slides,
    error,
  } = useGetSwiperGallery();
  const slidesPerView = resize < 470 ? 1 : 3;
  let content;

  const onHandlerClickItem = useCallback(
    (currentImageSrc: string) => {
      if (slides && currentImageSrc) {
        dispatch(PopupImageAction.setCurrentImgSrc(currentImageSrc));
        dispatch(PopupImageAction.setImages(slides as []));
        dispatch(PopupImageAction.setPopupImageVisible(true));
      }
    },
    [dispatch, slides],
  );

  if (isLoading) {
    content = (
      <div className={cls.skeletonWrapper}>
        {Array(slidesPerView)
          .fill(1)
          .map(() => (
            <Skeleton width={'70%'} height={220} key={Math.random()} />
          ))}
      </div>
    );
  } else if (error) {
    content = (
      <h2 style={{ textAlign: 'center' }}>
        Призошла ошибка при загрузки изображений наших работ :{'('} Попробуйте
        обновить страницу!
      </h2>
    );
  } else {
    content = (
      <Swiper
        spaceBetween={0}
        slidesPerView={slidesPerView}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        autoplay={{
          delay: 3500,
        }}
        navigation={true}
        effect="coverflow"
        grabCursor
        speed={600}
        touchEventsTarget="container"
        watchOverflow
        wrapperClass={cls.wrapperSwiper}
      >
        {slides?.map((el) => {
          return (
            <SwiperSlide key={el?.id}>
              {({ isNext }) => (
                <SwiperItem
                  slide={el}
                  onHandler={onHandlerClickItem}
                  isActive={isNext}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  return (
    <div
      className={classNames(cls.SwiperGallery, {}, [className])}
      {...otherProps}
    >
      {content}
    </div>
  );
};

export default memo(SwiperGallery);
