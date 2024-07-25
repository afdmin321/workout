import { FC, memo, useCallback, useEffect } from 'react';
import cls from './ProductsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ProductList from 'entities/Product/ui/ProductList/ProductList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProducts } from '../model/services/fetchProducts/fetchProducts';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import IconDumbbell from 'shared/assets/icons/duotone.svg';
import IconTrainer from 'shared/assets/icons/fitness.svg';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getProducts,
  ProductsPageAction,
  ProductsPageReducer,
} from '../model/slice/ProductsPageSlice';
import { useSelector } from 'react-redux';
import {
  getProductsPageHasMore,
  getProductsPage,
  getProductsPageError,
  getProductsPageIsLoading,
} from '../model/selectors/ProductsPageSelectors';
import { fetchNextProductsPage } from '../model/services/fetchNextProductsPage/fetchNextProductsPage';

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
  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextProductsPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts({ page: page }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        className={classNames(cls.ProductsPage, {}, [className])}
        {...otherProps}
      >
        <div className={cls.wrapperCategory}>
          <Button theme={ThemeButton.CLEAR} className={cls.button}>
            <Icon Src={IconDumbbell} className={cls.icon} />
          </Button>
          <Button theme={ThemeButton.CLEAR} className={cls.button}>
            <Icon Src={IconTrainer} className={cls.icon} />
          </Button>
        </div>
        <ProductList products={products} />
        {hasMore && (
          <Button theme={ThemeButton.OUTLINE} onClick={onLoadNextPart}>
            Показать ешё
          </Button>
        )}
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProductsPage);
