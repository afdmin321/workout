import { FC, memo } from 'react';
import cls from './ProductList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ProductListItem from '../ProductListItem/ProductListItem';
import { useSelector } from 'react-redux';
import { getProducts } from 'pages/ProductsPage/model/slice/ProductsPageSlice';
import {
  getProductsPageError,
  getProductsPageIsLoading,
} from 'pages/ProductsPage/model/selectors/ProductsPageSelectors';
import ProductSkeleton from '../ProductSkeleton/ProductSkeleton';

interface Props {
  className?: string;
}
const ProductList: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const products = useSelector(getProducts.selectAll);
  const error = useSelector(getProductsPageError);
  const isLoading = useSelector(getProductsPageIsLoading);
 
  let content;
  if (true) {
    content = (
      <div className={cls.skeletonWrapper}>
        {Array(8)
          .fill(5)
          .map(() => {
            return <ProductSkeleton key={Math.random()} />;
          })}
      </div>
    );
  }
  if (error) {
    content = (
      <h2 style={{ textAlign: 'center', paddingTop: '30px' }}>
        Произошла ошибка на сервере{':('} Попробуйте обновить страницу
      </h2>
    );
  }

  return (
    <div
      className={classNames(cls.ProductList, {}, [className])}
      {...otherProps}
    >
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
      {Boolean(isLoading || error) && content}
    </div>
  );
};

export default memo(ProductList);
