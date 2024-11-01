import { FC, memo, useCallback } from 'react';
import cls from './ProductListItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Product } from 'entities/Product/model/types/Product';
import Price from 'shared/ui/Price/Price';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';

import IncreasingBasket from 'widgets/IncreasingBasket/IncreasingBasket';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import ButtonEdit from 'shared/ui/ButtonEdit/ButtonEdit';
import ButtonDeleted from 'shared/ui/ButtonDeleted/ButtonDeleted';
import { fetchDeletProduct } from 'entities/Product/model/services/fetchDeletProduct';

interface Props {
  className?: string;
  product: Product;
}
const ProductListItem: FC<Props> = (props: Props) => {
  const { className, product, ...otherProps } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onOpenProduct = useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement>) => {
      evt.preventDefault();
      navigate(RoutePath.product_details + product.id);
    },
    [navigate, product.id],
  );

  const onHandlerButtonEdit = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      evt.stopPropagation();

      navigate(RoutePath.edit_product + product.id);
    },
    [dispatch, navigate, product.id],
  );
  const onHandlerButtonDelete = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      evt.stopPropagation();
      dispatch(fetchDeletProduct(product.id));
    },
    [dispatch, product.id],
  );
  const productImages = product.images.length ? product.images[0]?.src : '';
  const productSize =
    product.length && product.width && product.height
      ? `${product.length}x${product.width}мм, H=${product.height}`
      : null;

  return (
    <a
      className={classNames(cls.ProductListItem, {}, [className])}
      {...otherProps}
      id={product.id}
      onClick={onOpenProduct}
    >
      <img
        src={'https://xn--80adypkog.xn--p1ai/' + productImages}
        alt={product.name}
        className={cls.img}
      />

      <h2 className={cls.name} title={product.name}>
        {product.name}
      </h2>
      <Price price={product.price} className={cls.price} />
      <div className={cls.articleNumber}>Артикул: {product.articleNumber}</div>
      {product.length && (
        <div className={cls.size}>Габариты: {productSize}</div>
      )}
      <div onClick={(e) => e.stopPropagation()}>
        <IncreasingBasket product={product} />
      </div>

      <ButtonEdit
        onClick={onHandlerButtonEdit}
        className={classNames(cls.buttonEdit)}
      />

      <ButtonDeleted
        onHandler={onHandlerButtonDelete}
        className={classNames(cls.buttonDelet)}
      />
    </a>
  );
};

export default memo(ProductListItem);
