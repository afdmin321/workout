import { FC, memo } from 'react';
import cls from './SwiperSecondary.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import SwiperItem from '../SwiperItem/SwiperItem';

interface Props {
  className?: string;
  spaceBetween?: number;
  slidesPerView?: number;
}
const my_array = Array.from(Array(20 + 1).keys()).slice(1);
const SwiperSecondary: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={classNames(cls.SwiperSecondary, {}, [className])} {...otherProps}>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        modules={[EffectCoverflow, Autoplay]}
        autoplay
        effect='coverflow'
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {my_array.map((el) => {
          return (
            <SwiperSlide key={el}>
              <SwiperItem src="test" key={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default memo(SwiperSecondary);
