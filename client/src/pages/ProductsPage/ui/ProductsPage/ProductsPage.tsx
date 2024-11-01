import { FC, memo, useCallback, useEffect } from 'react';
import cls from './ProductsPage.module.scss';

import ProductList from 'entities/Product/ui/ProductList/ProductList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProductsPageReducer } from '../../model/slice/ProductsPageSlice';
import { useSelector } from 'react-redux';
import {
  getProductsPageHasMore,
  getProductsPageSort,
} from '../../model/selectors/ProductsPageSelectors';
import { fetchNextProductsPage } from '../../model/services/fetchNextProductsPage/fetchNextProductsPage';
import { initProductsPage } from '../../model/services/initProductPage/initProductsPage';
import ProductsPageFilter from '../ProductsPageFilter/ProductsPageFilter';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

interface Props {
  className?: string;
}
const reducers: ReducersList = {
  productsPage: ProductsPageReducer,
};
const ProductsPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();
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
      <section className={cls.ProductsPage}>
        <Helmet>
          <title>{`Каталог продукции - ВОРКАУТ.РФ производитель спортивного уличного оборудования.`}</title>
          <meta
            property="og:title"
            content="Каталог продукции - ВОРКАУТ.РФ производитель спортивного уличного оборудования."
          />
          <meta
            property="og:description"
            content="Каталог продукции - ВОРКАУТ.РФ, сертифицированное спортивное оборудование и тренажеры для воркаут площадок. Звоните: 8-800-201-77-73;"
          />
          <meta property="og:type" content="article" />
          <meta
            name="description"
            content="Каталог продукции - ВОРКАУТ.РФ, сертифицированное спортивное оборудование и тренажеры для воркаут площадок. Звоните: 8-800-201-77-73;"
          />
          <meta
            name="keywords"
            content="воркаут,воркауты,воркаут рф,купить воркауты,заказать воркауты,спотривеое оборудование,уличные спортивные площадки,спорт комплекс,перекладины,турники,брусья,скамья для пресса,уличные тренажеры"
          />

          <title>
            Воркаут.рф производитель спортивного уличного оборудования. Доставка
            по РФ!
          </title>
        </Helmet>
        <ProductsPageFilter />
        <ProductList />
        {hasMore && (
          <Button theme={ThemeButton.PRIMARY} onClick={onLoadNextPart}>
            Показать ешё
          </Button>
        )}
      </section>
    </DynamicModuleLoader>
  );
};
export default memo(ProductsPage);
