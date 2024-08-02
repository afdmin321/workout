import { FC, memo, useCallback, useEffect } from 'react';
import cls from './ProductsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ProductList from 'entities/Product/ui/ProductList/ProductList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getProducts,
  ProductsPageAction,
  ProductsPageReducer,
} from '../../model/slice/ProductsPageSlice';
import { useSelector } from 'react-redux';
import {
  getProductsPageHasMore,
  getProductsPage,
  getProductsPageError,
  getProductsPageIsLoading,
  getProductsPageSort,
} from '../../model/selectors/ProductsPageSelectors';
import { fetchNextProductsPage } from '../../model/services/fetchNextProductsPage/fetchNextProductsPage';
import { initProductsPage } from '../../model/services/initProductPage/initProductsPage';
import { Page } from 'widgets/Page/Page';

import { ProductSort } from 'entities/Product/model/types/Product';
import ProductsPageFilter from '../ProductsPageFilter/ProductsPageFilter';
import { useSearchParams } from 'react-router-dom';


interface Props {
  className?: string;
}
const reducers: ReducersList = {
  productsPage: ProductsPageReducer,
};
const ProductsPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const products = useSelector(getProducts.selectAll);
  const page = useSelector(getProductsPage);
  const isLoading = useSelector(getProductsPageIsLoading);
  const hasMore = useSelector(getProductsPageHasMore);
  const sort = useSelector(getProductsPageSort);

  const [searchParams] = useSearchParams();
  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextProductsPage());
  }, [dispatch, sort]);

  useEffect(() => {

    dispatch(initProductsPage(searchParams));
  }, [dispatch]);
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(cls.ProductsPage, {}, [className])}
        {...otherProps}
      >
        <ProductsPageFilter />

        <ProductList products={products} />
        {hasMore && (
          <Button theme={ThemeButton.OUTLINE} onClick={onLoadNextPart}>
            Показать ешё
          </Button>
        )}
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ProductsPage);
