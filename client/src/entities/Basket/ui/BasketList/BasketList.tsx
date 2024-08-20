import { FC, memo } from 'react';
import cls from './BasketList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import BasketItem from '../BasketItem/BasketItem';
import { Basket } from 'entities/Basket/model/types/Basket';


interface Props {
  className?: string;
  data?: Basket[];
}
const BasketList: FC<Props> = (props: Props) => {
  const { className, data: products, ...otherProps } = props;
  return (
    <div
      className={classNames(cls.BasketList, {}, [className])}
      {...otherProps}
    >
      {products?.length ? (
        products.map((product) => {
          return <BasketItem data={product} key={product.id} />;
        })
      ) : null}
    </div>
  );
};

export default memo(BasketList);
