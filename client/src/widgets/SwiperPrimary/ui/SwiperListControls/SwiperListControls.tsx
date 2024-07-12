import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import { useSwiper } from 'swiper/react';
import "./SwiperListControls.scss"

export const SwiperListControls = () => {
  const swiper = useSwiper();

  const [activeIndex, setActiveIndex] = useState(swiper.activeIndex);

  useEffect(() => {
    const callback = (newState: Swiper) => {
      setActiveIndex(newState.activeIndex);
    };

    swiper.on('slideChange', callback);

    return () => swiper.off('slideChange', callback);
  }, [swiper]);

  const buttonClassName = 'my-swiper-list-controls-button';

  return (
    <div className={"my-swiper-list-controls"}>
      {swiper.slides.map((_, index) => (
        <button
          className={
            activeIndex === index
              ? `${buttonClassName} ${buttonClassName}--active`
              : buttonClassName
          }
          key={index}
          onClick={() => swiper.slideTo(index)}
        ></button>
      ))}
    </div>
  );
};
