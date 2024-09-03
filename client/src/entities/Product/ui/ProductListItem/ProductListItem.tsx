import { FC, memo, useCallback } from 'react';
import cls from './ProductListItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Product } from 'entities/Product/model/types/Product';
import Price from 'shared/ui/Price/Price';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';

import IncreasingBasket from 'widgets/IncreasingBasket/IncreasingBasket';
import { ScrollWatchesActions } from 'widgets/ScrollWatches';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface Props {
  className?: string;
  product: Product;
}
const ProductListItem: FC<Props> = (props: Props) => {
  const { className, product, ...otherProps } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onScrol = () => {
    dispatch(
      ScrollWatchesActions.setScrollPosition({
        position: window.scrollY,
        path: '/catalog',
      }),
    );
  };
  const onOpenArticle = useCallback(() => {
    onScrol();
    navigate(RoutePath.product_details + product.id);
  }, [navigate, product.id]);

  const auth = useSelector(getUserAuthData);
  const onHandlerButtonEdit = (e: any) => {
    e.stopPropagation();
    console.log(123123);
  };
  const productImages = product.images.length ? product.images[0]?.src : '';
  const productSize =
    product.length && product.width && product.height
      ? `${product.length}x${product.width}мм H=${product.height}`
      : null;
  return (
    <div
      className={classNames(cls.ProductListItem, {}, [className])}
      {...otherProps}
      id={product.id}
      onClick={onOpenArticle}
    >
      <img src={productImages} alt={product.name} className={cls.img} />

      <h2 className={cls.name} title={product.name}>
        {product.name}
      </h2>
      <Price price={product.price} className={cls.price} />
      <div className={cls.articleNumber}>Артикул: {product.articleNumber}</div>
      {productSize && <div className={cls.size}>Габариты: {productSize}</div>}
      <div onClick={(e) => e.stopPropagation()}>
        <IncreasingBasket product={product} />
      </div>
      {auth?.token && (
        <>
          <Button
            onClick={onHandlerButtonEdit}
            className={classNames(cls.buttonAdmin, {}, [cls.buttonEdit])}
          >
            &#128393;
          </Button>
          <Button onClick={onHandlerButtonEdit} className={classNames(cls.buttonAdmin, {}, [cls.buttonDelet])}>
            &#128465;
          </Button>
        </>
      )}
    </div>
  );
};

export default memo(ProductListItem);
