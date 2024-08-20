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
import Image1 from '11.jpg';
import Image2 from '12.jpg';
import Image3 from '13.jpg';
import { useResize } from 'shared/lib/hooks/useResize/useResize';
import { useSwiperGallery } from 'widgets/SwiperGallery/model/api/SwiperGalleryApi';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
interface Props {
  className?: string;
  spaceBetween?: number;
  slidesPerView?: number;
}

const images = [
  { src: Image1, id: '1' },
  { src: Image2, id: '2' },
  { src: Image3, id: '3' },
  { src: Image3, id: '4' },
  { src: Image3, id: '5' },
  { src: Image3, id: '6' },
];
const SwiperGallery: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const resize = useResize();
  const { isLoading = true, data: Slides, error } = useSwiperGallery();
  const slidesPerView = resize < 470 ? 1 : 3;
  console.log(Slides);
  let content;

  const onHandlerClickItem = useCallback(
    (currentImageSrc: string) => {
      dispatch(PopupImageAction.setCurrentImgSrc(currentImageSrc));
      dispatch(PopupImageAction.setImages(images as []));
      dispatch(PopupImageAction.setPopupImageVisible(true));
    },
    [dispatch, images],
  );

  if (isLoading) {
    content = (
      <div className={cls.skeletonWrapper}>
        {Array(slidesPerView)
          .fill(1)
          .map(() => (
            <Skeleton width={'70%'} height={220} />
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
        {images.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              {({ isNext }) => (
                <SwiperItem
                  src={el.src}
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
      className={classNames(cls.SwiperSecondary, {}, [className])}
      {...otherProps}
    >
      {content}
    </div>
  );
};

export default memo(SwiperGallery);
