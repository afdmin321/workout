import { FC, memo, useCallback } from 'react';
import cls from './IncreasingBasket.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getBasketData } from 'entities/Basket/model/selectors/getBasket';
import { Product } from 'entities/Product';
import { basketListActions } from 'entities/Basket/model/slice/BasketListSlice';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Quantity from 'widgets/Quantity/Quantity';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';

interface Props {
  product: Product;
  className?: string;
}
const IncreasingBasket: FC<Props> = (props: Props) => {
  const { className, product, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const basketProducts = useSelector(getBasketData);
  const targetBasketProduct = basketProducts.find(
    (basketProduct) => basketProduct.id === product.id,
  );
  const quantity = targetBasketProduct?.quantity || 1;

  const addProductToBasket = useCallback(() => {
    if (product) {
      dispatch(basketListActions.addBasketItem({ ...product, quantity }));
    }
  }, [dispatch, product, quantity]);
  return (
    <div
      className={classNames(cls.IncreasingBasket, {}, [className])}
      {...otherProps}
    >
      {!targetBasketProduct ? (
        <Button
          className={cls.addToBasket}
          onClick={addProductToBasket}
          theme={ThemeButton.SECONDARY}
        >
          добавить в корзину
        </Button>
      ) : (
        <>
          <Quantity quantity={quantity} product={product} />
          <Button className={cls.toBasket} theme={ThemeButton.SECONDARY}>
            <AppLink to={RoutePath.basket} className={cls.link}>
              в корзину
            </AppLink>
          </Button>
        </>
      )}
    </div>
  );
};

export default memo(IncreasingBasket);
