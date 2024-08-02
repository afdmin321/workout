import { FC, memo, useCallback } from 'react';
import cls from './BasketItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Basket } from 'entities/Basket/model/types/Basket';
import Price from 'shared/ui/Price/Price';
import Quantity from 'widgets/Quantity/Quantity';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { basketListActions } from 'entities/Basket/model/slice/BasketListSlice';

interface Props {
  className?: string;
  data: Basket;
}
const BasketItem: FC<Props> = (props: Props) => {
  const { className, data: product, ...otherProps } = props;
  const price = product.price ? product.price * product.quantity : null;
  const dispatch = useAppDispatch();
  const onHandlerButtonDelet = useCallback(() => {
    dispatch(basketListActions.deleteItem(product.id));
  }, [dispatch]);
  return (
    <div
      id={product.id}
      className={classNames(cls.BasketItem, {}, [className])}
      {...otherProps}
    >
      <div className={cls.imgWrapper}>
        <img src={product.images[0]} alt={product.name} className={cls.img} />
      </div>

      <div className={cls.wrapperInfo}>
        <div className={cls.wrapperText}>
          <h3 className={cls.name}>{product.name}</h3>
          <div className={cls.priceWrapper}>
            <span>Цена: </span>
            <Price price={price} />
          </div>

          <div className={cls.articlNumber}>
            Артикул: {product.articleNumber}
          </div>
          <div className={cls.size}>
            Габариты: {product.size && product.size.split(' ').join('')}
          </div>
        </div>
        <div className={cls.quantityWrapper}>
          <Quantity product={product} quantity={product.quantity} />
          <Button
            className={cls.button}
            theme={ThemeButton.OUTLINE}
            onClick={onHandlerButtonDelet}
          >
            удалить товар
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(BasketItem);
