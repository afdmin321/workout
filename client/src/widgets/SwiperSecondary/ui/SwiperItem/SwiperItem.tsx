import { FC, memo } from 'react';
import cls from './SwiperItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import img from '11.jpg';
interface Props {
  src: string;
  onHandler: (value: string) => void;
  isActive?: boolean;
  className?: string;
}
const SwiperItem: FC<Props> = (props: Props) => {
  const { className, onHandler, isActive, src, ...otherProps } = props;
  return (
    <div
      onClick={() => onHandler(src)}
      className={classNames(cls.SwiperItem, { [cls.active]: isActive }, [
        className,
      ])}
      {...otherProps}
    >
      <img src={src} alt="Картинка из нащих работ" className={cls.img} />
    </div>
  );
};

export default memo(SwiperItem);
