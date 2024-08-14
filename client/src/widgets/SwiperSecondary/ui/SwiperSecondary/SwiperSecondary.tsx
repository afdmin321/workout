import { FC, memo, useCallback } from 'react';
import cls from './SwiperSecondary.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import SwiperItem from '../SwiperItem/SwiperItem';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PopupImage, PopupImageAction } from 'widgets/PopupImage';
import Image1 from '11.jpg';
import Image2 from '12.jpg';
import Image3 from '13.jpg';
interface Props {
  className?: string;
  spaceBetween?: number;
  slidesPerView?: number;
}

const images = [
  { src: Image1, id: '1' },
  { src: Image2, id: '2' },
  { src: Image3, id: '3' },

];
const SwiperSecondary: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const onHandlerClickItem = useCallback(
    (currentImageSrc: string) => {
      dispatch(PopupImageAction.setCurrentImgSrc(currentImageSrc));
      dispatch(PopupImageAction.setImages(images as []));
      dispatch(PopupImageAction.setPopupImageVisible(true));
    },
    [dispatch, images],
  );
  return (
    <div
      className={classNames(cls.SwiperSecondary, {}, [className])}
      {...otherProps}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3500,
        }}
        navigation
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
    </div>
  );
};

export default memo(SwiperSecondary);
