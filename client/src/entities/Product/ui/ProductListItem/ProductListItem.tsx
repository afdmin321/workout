import { FC, memo, useCallback } from 'react';
import cls from './ProductListItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Product } from 'entities/Product/model/types/Product';
import Price from 'shared/ui/Price/Price';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';

import IncreasingBasket from 'widgets/IncreasingBasket/IncreasingBasket';

interface Props {
  className?: string;
  product: Product;
}
const ProductListItem: FC<Props> = (props: Props) => {
  const { className, product, ...otherProps } = props;
  const navigate = useNavigate();
  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.product_details + product.id);
  }, [navigate, product.id]);
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
    </div>
  );
};

export default memo(ProductListItem);
