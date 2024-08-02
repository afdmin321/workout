import { FC, memo } from 'react';
import cls from './Price.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSpacePrice } from 'shared/lib/hooks/useSpacePrice/useSpacePrice';

interface Props {
  className?: string;
  price?: number | null;
}
const Price: FC<Props> = (props: Props) => {
  const { className, price, ...otherProps } = props;
  return (
    <div className={classNames(cls.Price, {}, [className])} {...otherProps}>
      {price ? (
        <div className={cls.price}>
          <span className={cls.oldPrice}>
            {useSpacePrice(Math.ceil(price * 1.6))}&#8381;
          </span>
          {useSpacePrice(price)}&#8381;
        </div>
      ) : (
        <div className={cls.price}>Цена по запросу</div>
      )}
    </div>
  );
};

export default memo(Price);
