import { FC, memo, ReactNode, useCallback, useMemo } from 'react';
import cls from './BasketPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { BasketList } from 'entities/Basket';
import { useSelector } from 'react-redux';
import { getBasketData } from 'entities/Basket/model/selectors/getBasket';
import FormCall, { ThemeForm } from 'features/FormCall/ui/FormCall';
import { useSpacePrice } from 'shared/lib/hooks/useSpacePrice/useSpacePrice';

interface Props {
  className?: string;
}

const BasketPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const products = useSelector(getBasketData);
  const AllPrice = useMemo(() => {
    return products.reduce((akk, el) => {
      if (el.price) {
        return el.price * el.quantity + akk;
      }
      return 0;
    }, 0);
  }, [products]);
  const price = useSpacePrice(AllPrice);

  return (
    <div
      className={classNames(cls.BasketPage, {}, [className])}
      {...otherProps}
    >
      <FormCall theme={ThemeForm.ORDER} textSubmite="Оформить заказ">
        <div className={cls.formPriceWrapper}>
          <div className={cls.formPrice}>
            <span>ИТОГО</span>
            <span>{price}&#8381;</span>
          </div>
          <div className={cls.formPrice}>
            <span>СКИДКА</span>
            <span>{useSpacePrice(AllPrice * 0.6)}&#8381;</span>
          </div>
          <div className={cls.formDescription}>
            Оплата товара и расчёт стоимости доставки производится через
            менеджера.
          </div>
        </div>
      </FormCall>
      <BasketList data={products} />
    </div>
  );
};

export default memo(BasketPage);
