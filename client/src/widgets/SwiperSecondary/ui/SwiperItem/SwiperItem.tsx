import { FC, memo } from 'react';
import cls from './SwiperItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import img from '11.jpg';
interface Props {
  src: string;
  isActive?: boolean;
  className?: string;
}
const SwiperItem: FC<Props> = (props: Props) => {
  const { className, isActive, src, ...otherProps } = props;
  return (
    <div
      onClick={() => console.log(123123)}
      className={classNames(cls.SwiperItem, { [cls.active]: isActive }, [
        className,
      ])}
      {...otherProps}
    >
      <img src={img} alt="Картинка из нащих работ" className={cls.img} />
    </div>
  );
};

export default memo(SwiperItem);
