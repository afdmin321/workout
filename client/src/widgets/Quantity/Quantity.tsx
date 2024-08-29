import { FC, memo, useCallback } from 'react';
import cls from './Quantity.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { basketListActions } from 'entities/Basket/model/slice/BasketListSlice';
import { Product } from 'entities/Product';

interface Props {
  className?: string;
  quantity: number;
  product: Product;
}
const Quantity: FC<Props> = (props: Props) => {
  const { className, product, quantity, ...otherProps } = props;

  const dispatch = useAppDispatch();
  const onHandlerDownQuantity = useCallback(() => {
    if (product) {
      if (quantity > 1) {
        dispatch(
          basketListActions.editBasketItemQuantity({
            ...product,
            quantity: quantity - 1,
          }),
        );
      } else {
        dispatch(
          basketListActions.editBasketItemQuantity({
            ...product,
            quantity: 1,
          }),
        );
      }
    }
  }, [dispatch, quantity]);

  const onHandlerAddQuantity = useCallback(() => {
    if (product) {
      dispatch(
        basketListActions.editBasketItemQuantity({
          ...product,
          quantity: quantity + 1,
        }),
      );
    }
  }, [dispatch, quantity]);

  return (
    <div className={classNames(cls.Quantity, {}, [className])} {...otherProps}>
      <Button
        className={classNames(cls.button, {}, [cls.subtract])}
        onClick={onHandlerDownQuantity}
        theme={ThemeButton.SECONDARY}
      >
        -
      </Button>
      <div className={cls.quantity}>{quantity}</div>
      <Button
        className={classNames(cls.button, {}, [cls.add])}
        onClick={onHandlerAddQuantity}
        theme={ThemeButton.SECONDARY}
      >
        +
      </Button>
    </div>
  );
};

export default memo(Quantity);
