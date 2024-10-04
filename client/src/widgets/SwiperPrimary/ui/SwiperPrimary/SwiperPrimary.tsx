import { FC, memo } from 'react';
import cls from './SwiperPrimary.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-cube';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import slideOneSize370 from 'shared/assets/bannerd_primary/1-370.jpg';
import slideOneSize750 from 'shared/assets/bannerd_primary/1-750.jpg';
import slideOneSize1000 from 'shared/assets/bannerd_primary/1-1000.jpg';
import slideOneSize1440 from 'shared/assets/bannerd_primary/1-1440.jpg';
import slideTwoSize370 from 'shared/assets/bannerd_primary/2-370.jpg';
import slideTwoSize750 from 'shared/assets/bannerd_primary/2-750.jpg';
import slideTwoSize1000 from 'shared/assets/bannerd_primary/2-1000.jpg';
import slideTwoSize1440 from 'shared/assets/bannerd_primary/2-1440.jpg';
import { useResize } from 'shared/lib/hooks/useResize/useResize';
import { Icon } from 'shared/ui/Icon/Icon';
import DeliveryIcon from 'shared/assets/icons/deliveryBanner.svg';
import GarantIcon from 'shared/assets/icons/garantBanner.svg';
import OkIcon from 'shared/assets/icons/ok.svg';
interface Props {
  className?: string;
}

const SwiperPrimary: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const resize = useResize();

  let slideOne = slideOneSize370;
  let slideTwo = slideTwoSize370;
  let IconGarant = GarantIcon;
  let IconDelivery = DeliveryIcon;

  if (resize >= 500) {
    slideOne = slideOneSize750;
    slideTwo = slideTwoSize750;
  }
  if (resize >= 850 && resize < 1200) {
    slideOne = slideOneSize1000;
    slideTwo = slideTwoSize1000;
  }
  if (resize >= 1200) {
    slideOne = slideOneSize1440;
    slideTwo = slideTwoSize1440;
  }
  if (resize >= 600) {
    IconGarant = OkIcon;
    IconDelivery = OkIcon;
  }
  return (
    <div
      className={classNames(cls.SwiperPrimary, {}, [className])}
      {...otherProps}
    >
      <Swiper
        modules={[EffectCube, Autoplay, Pagination]}
        autoplay={{
          delay: 4500,
        }}
        grabCursor
        pagination={{ clickable: true }}
        slidesPerView="auto"
        speed={400}
        touchEventsTarget="container"
        watchOverflow
        effect="cube"
      >
        <SwiperSlide>
          <div
            className={classNames(cls.slideWrapper, {}, [cls.slideOne])}
            style={{
              background: `url('${slideOne}') no-repeat center / cover`,
            }}
          >
            <div className={cls.text}>Для Ваших Тренировок!</div>
            <h2 className={cls.title}>
              СПОРТИВНОЕ <span className={cls.titleColor}>ОБОРУДОВАНИЕ</span>
            </h2>
            <div className={cls.textBorder}>ВЫСОКОГО КАЧЕСТВА</div>
            <div className={cls.textWrapper}>
              <div className={cls.textStimulate}>
                КУПИТЬ СПОРТИВНОЕ ОБОРУДОВАНИЕ ПРЯМО СЕЙЧАС:
              </div>
              <div className={cls.advantagesWrapper}>
                <div className={cls.advantages}>
                  <Icon Src={IconDelivery} className={cls.iconDelivery} />
                  <span className={cls.textAdvantages}>БЫСТРАЯ ДОСТАВКА</span>
                </div>
                <div className={cls.advantages}>
                  <Icon Src={IconGarant} className={cls.iconGarant} />
                  <span className={cls.textAdvantages}>
                    ГАРАНТИЯ НА ВСЕ ТОВАРЫ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={classNames(cls.slideWrapper, {}, [cls.slideTwo])}
            style={{
              background: `url('${slideTwo}') no-repeat center / cover`,
            }}
          >
            <div className={classNames(cls.text, {}, [cls.textTren])}>
              Закажите
            </div>
            <h3 className={classNames(cls.title, {}, [cls.titleTrn])}>
              ЭФФЕКТИВНЫЕ{' '}
              <span
                className={classNames(cls.titleColor, {}, [cls.titleColorTren])}
              >
                ТРЕНАЖЕРЫ
              </span>
            </h3>
            <div
              className={classNames(cls.textBorder, {}, [cls.textBorderTren])}
            >
              ДЛЯ ЕЖЕДНЕВНЫХ УЛИЧНЫХ ТРЕНИРОВОК
            </div>

            <div className={cls.textStimulateColor}>
              ПРОСМОТРИТЕ КАТАЛОГ СПОРТИВНОГО ОБОРУДОВАНИЯ
            </div>
            <div className={cls.textStimulateTren}>
              И ПОДБЕРИТЕ ОПТИМАЛЬНЫЕ СПОРТИВНЫЕ ТРЕНАЖЕРЫ!
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default memo(SwiperPrimary);
