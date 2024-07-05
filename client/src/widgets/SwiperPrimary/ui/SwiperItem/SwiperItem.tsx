import { FC, memo } from 'react';
import cls from './SwiperItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface Props {
  src: string;
  className?: string;
}
const SwiperItem: FC<Props> = (props: Props) => {
  const { className, src, ...otherProps } = props;
  return (
    <div
      className={classNames(cls.SwiperItem, {}, [className])}
      {...otherProps}
    >
      <img src={src} alt="Картинка из нащих работ" className={cls.img} />
    </div>
  );
};

export default memo(SwiperItem);
