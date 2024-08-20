import { FC, memo } from 'react';
import cls from './ProductList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Product } from 'entities/Product/model/types/Product';
import ProductListItem from '../ProductListItem/ProductListItem';

interface Props {
  className?: string;
  products: Product[];
}
const ProductList: FC<Props> = (props: Props) => {
  const { className, products, ...otherProps } = props;
  console.log(products);
  return (
    <div
      className={classNames(cls.ProductList, {}, [className])}
      {...otherProps}
    >
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default memo(ProductList);
