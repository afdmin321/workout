import { FC, memo } from 'react';
import cls from './SwiperItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface Props {
  src: string;
  className?: string;
  resize: number
}
const SwiperItem: FC<Props> = (props: Props) => {
  const { className, resize, src, ...otherProps } = props;
  console.log(resize);
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
