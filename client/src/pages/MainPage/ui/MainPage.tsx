import { FC, memo } from 'react';
import cls from './MainPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { SwiperPrimary } from 'widgets/SwiperPrimary';
import { SwiperSecondary } from 'widgets/SwiperGallery';

interface Props {
  className?: string;
}
const MainPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={classNames(cls.MainPage, {}, [className])} {...otherProps}>
      <div className={cls.wrapperSwiperPrimary}>
        <SwiperPrimary />
      </div>
      <h1 className={cls.title}>ГАЛЕРЕЯ НАШИХ РАБОТ</h1>
      <div className={cls.wrapperSwiperSecondary}>
        <SwiperSecondary />
      </div>
    </div>
  );
};

export default memo(MainPage);
