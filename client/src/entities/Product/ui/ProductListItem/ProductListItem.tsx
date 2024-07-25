import { FC, memo, useCallback } from 'react';
import cls from './ProductListItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Product } from 'entities/Product/model/types/Product';
import Price from 'shared/ui/Price/Price';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface Props {
  className?: string;
  product: Product;
}
const ProductListItem: FC<Props> = (props: Props) => {
  const { className, product, ...otherProps } = props;
  const navigate = useNavigate();
  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.product_details + product.id);
  }, []);
  return (
    <div
      className={classNames(cls.ProductListItem, {}, [className])}
      {...otherProps}
      id={product.id}
      onClick={onOpenArticle}
    >
      <div className={cls.img}>
        <img src={product.images[0]} alt={product.name} className={cls.img} />
      </div>

      <h2 className={cls.name} title={product.name}>{product.name}</h2>
      <Price price={product.price} className={cls.price} />
      <div className={cls.articleNumber}>Артикул: {product.articleNumber}</div>
      <div className={cls.size}>
        Габариты: {product.size && product.size.split(' ').join('')}
      </div>
    </div>
  );
};

export default memo(ProductListItem);
