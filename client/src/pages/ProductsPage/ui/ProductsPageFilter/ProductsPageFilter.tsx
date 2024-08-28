import { FC, memo, useCallback } from 'react';

import {
  ProductFilter,
  ProductSort,
} from 'entities/Product/model/types/Product';
import { ProductsPageAction } from 'pages/ProductsPage/model/slice/ProductsPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProducts } from 'pages/ProductsPage/model/services/fetchProducts/fetchProducts';
import { useSelector } from 'react-redux';
import {
  getProductsPageFilter,
  getProductsPageSort,
} from 'pages/ProductsPage/model/selectors/ProductsPageSelectors';
import { ProductFilterCategory, ProductSortSelector } from 'entities/Product';

interface Props {
  className?: string;
}
const ProductsPageFilter: FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const sort = useSelector(getProductsPageSort);
  const filter = useSelector(getProductsPageFilter);
  const fetchData = useCallback(() => {
    dispatch(fetchProducts({ replace: true }));
  }, [dispatch]);

  const onHandlerSort = useCallback(
    (value: string) => {
      if (value === sort) return;
      dispatch(ProductsPageAction.setSort(value as ProductSort));
      dispatch(ProductsPageAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData, sort],
  );
  const onHandlerFilter = useCallback(
    (value: ProductFilter) => {
      if (value === filter) return;
      dispatch(ProductsPageAction.setFilter(value as ProductFilter));
      dispatch(ProductsPageAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData, filter],
  );
  return (
    <>
      <ProductSortSelector sort={sort} onHandlerSort={onHandlerSort} />
      <ProductFilterCategory
        filter={filter}
        onHandlerFilter={onHandlerFilter}
      />
    </>
  );
};

export default memo(ProductsPageFilter);
