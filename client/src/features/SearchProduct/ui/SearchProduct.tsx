import { FC, memo, useCallback, useState, MouseEvent } from 'react';
import cls from './Search.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import IconSearch from 'shared/assets/icons/search.svg';
import { Button, ThemeButton, typeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import useMountTransition from 'shared/lib/hooks/useMountTransition/useMountTransition';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';

import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { ProductsPageAction } from 'pages/ProductsPage/model/slice/ProductsPageSlice';

import { fetchProducts } from 'pages/ProductsPage/model/services/fetchProducts/fetchProducts';
import { getProductsPageInited } from 'pages/ProductsPage/model/selectors/ProductsPageSelectors';
import { getSearchProduct } from '../model/selector/getSearchProductSelectors';
import { SearchProductAction } from '../model/slice/SearchProductSice';
interface Props {
  className?: string;
}
const SearchProduct: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const [searchView, setSearchView] = useState(false);

  const hasTransitionedIn = useMountTransition(searchView, 100);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const search = useSelector(getSearchProduct);
  const inited = useSelector(getProductsPageInited);
  const openSearhForm = () => {
    setSearchView(true);
  };
  const closedSearhForm = useCallback(() => {
    setSearchView(false);
    if (search) {
      dispatch(SearchProductAction.setSearch(undefined));
      dispatch(fetchProducts({ replace: true }));
    }
  }, [searchView, setSearchView, dispatch, search]);

  const onChangeInput = useCallback(
    (value: string) => {
      dispatch(SearchProductAction.setSearch(value));
    },
    [dispatch, search],
  );
  const onHandlerSubmite = useCallback(
    (evt: MouseEvent<HTMLButtonElement>) => {
      evt.preventDefault();
      if (search) {
        dispatch(ProductsPageAction.setFilter(null));
        if (location.pathname !== RoutePath.products) {
          navigate(RoutePath.products);
        }
        if (inited) {
          dispatch(fetchProducts({ replace: true }));
        }
      }
    },
    [navigate, search],
  );
  return (
    <div className={classNames(cls.Search, {}, [className])} {...otherProps}>
      {!searchView ? (
        <Button
          className={cls.buttonSearch}
          theme={ThemeButton.CLEAR}
          onClick={openSearhForm}
        >
          <Icon className={cls.iconSearch} Src={IconSearch} />
        </Button>
      ) : (
        (hasTransitionedIn || searchView) && (
          <form className={cls.form}>
            <Input
              value={search}
              onChange={onChangeInput}
              className={classNames(
                cls.input,
                { [cls.in]: hasTransitionedIn, [cls.visible]: searchView },
                [],
              )}
              classNameLabel={cls.label}
              autoFocus={true}
            />
            <Button
              className={cls.buttonSubmite}
              theme={ThemeButton.CLEAR}
              type={typeButton.SUBMITE}
              onClick={(evt) => {
                onHandlerSubmite(evt);
              }}
            >
              <Icon className={cls.iconSubmite} Src={IconSearch} />
            </Button>
            <Button className={cls.buttonExit} onClick={closedSearhForm}>
              &#10006;
            </Button>
          </form>
        )
      )}
    </div>
  );
};

export default memo(SearchProduct);
