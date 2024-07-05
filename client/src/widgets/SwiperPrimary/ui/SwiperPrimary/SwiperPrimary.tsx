import { FC, memo } from 'react';
import cls from './SwiperPrimary.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-cube';
import SwiperItem from '../SwiperItem/SwiperItem';

interface Props {
  className?: string;
  spaceBetween?: number;
  slidesPerView?: number;
}
const my_array = Array.from(Array(2 + 1).keys()).slice(1);
const SwiperPrimary: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={classNames(cls.SwiperPrimary, {}, [className])} {...otherProps}>
      <Swiper
        modules={[EffectCube, Autoplay]}
        autoplay
        effect='cube'
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

export default memo(SwiperPrimary);
