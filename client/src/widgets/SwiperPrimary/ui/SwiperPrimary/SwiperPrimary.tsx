import { FC, memo } from 'react';
import cls from './SwiperPrimary.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay,   Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-cube';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import SwiperItem from '../SwiperItem/SwiperItem';

interface Props {
  className?: string;
}
const my_array = Array.from(Array(2 + 1).keys()).slice(1);
const SwiperPrimary: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={classNames(cls.SwiperPrimary, {}, [className])}
      {...otherProps}
    >
      <Swiper
        modules={[EffectCube, Autoplay, Pagination]}
        autoplay={{
          delay: 4500
        }}
        grabCursor
        pagination={{ clickable: true }}
        slidesPerView="auto"
        speed={400}
        touchEventsTarget="container"
        watchOverflow
        effect="cube"
      >
        {my_array.map((el) => {
          return (
            <SwiperSlide key={String(el)}>
              <SwiperItem src="test" />
            </SwiperSlide>
          );
        })}
  
      </Swiper>
    </div>
  );
};

export default memo(SwiperPrimary);
