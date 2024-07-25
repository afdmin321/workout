import { FC, memo } from 'react';
import cls from './BasketPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { BasketList } from 'entities/Basket';
import { useSelector } from 'react-redux';
import { getBasketData } from 'entities/Basket/model/selectors/getBasket';

interface Props {
  className?: string;
}


const BasketPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const products = useSelector(getBasketData);
  return (
      <div
        className={classNames(cls.BasketPage, {}, [className])}
        {...otherProps}
      >
        <BasketList data={products} />
      </div>

  );
};

export default memo(BasketPage);
