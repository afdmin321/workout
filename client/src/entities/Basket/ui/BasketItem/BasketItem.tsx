import { FC, memo } from 'react';
import cls from './BasketItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Basket } from 'entities/Basket/model/types/Basket';
import Price from 'shared/ui/Price/Price';
import Quantity from 'widgets/Quantity/Quantity';

interface Props {
  className?: string;
  data: Basket;
}
const BasketItem: FC<Props> = (props: Props) => {
  const { className, data: product, ...otherProps } = props;
  return (
    <div
      id={product.id}
      className={classNames(cls.BasketItem, {}, [className])}
      {...otherProps}
    >
      <img src={product.images[0]} alt={product.name} className={cls.img} />
      <div className={cls.wrapperInfo}>
        <h3 className={cls.name}>{product.name}</h3>
        <Price price={product.price} />
        <div className={cls.articlNumber}>{product.articleNumber}</div>
        <div className={cls.size}>{product.size}</div>
        <Quantity product={product} quantity={product.quantity} />
      </div>
    </div>
  );
};

export default memo(BasketItem);
