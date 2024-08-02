import { FC, memo, useCallback, useEffect, useState } from 'react';
import cls from './ProductDetails.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { productDetailsReducer } from 'entities/Product/model/slice/ProductDetailsSlice';
import { useSelector } from 'react-redux';
import {
  getProductDetailsData,
  getProductDetailsError,
  getProductDetailsIsLoading,
} from 'entities/Product/model/selectors/getProductDetails';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProductById } from 'entities/Product/model/services/ProductDetailsServices';
import image from '../../../../11.jpg';
import { Button } from 'shared/ui/Button/Button';
import { PageLoader } from 'widgets/PageLoader';

import Price from 'shared/ui/Price/Price';
import { basketListActions } from 'entities/Basket/model/slice/BasketListSlice';

import Quantity from 'widgets/Quantity/Quantity';
import { getBasketData } from 'entities/Basket/model/selectors/getBasket';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import IncreasingBasket from 'widgets/IncreasingBasket/IncreasingBasket';
interface Props {
  id: string;
  className?: string;
}
const reducers: ReducersList = {
  productDetails: productDetailsReducer,
};
const ProductDetails: FC<Props> = (props: Props) => {
  const { className, id, ...otherProps } = props;
  const isLoading = useSelector(getProductDetailsIsLoading);
  const product = useSelector(getProductDetailsData);
  const error = useSelector(getProductDetailsError);
  const dispatch = useAppDispatch();
  const basketProducts = useSelector(getBasketData);
  const targetBasketProduct = basketProducts.find(
    (basketProduct) => basketProduct.id === id,
  );
  const quantity = targetBasketProduct?.quantity || 1;

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const addProductToBasket = useCallback(() => {
    if (product) {
      dispatch(basketListActions.addBasketItem({ ...product, quantity }));
    }
  }, [dispatch, product, quantity]);

  let content;
  if (isLoading) {
    content = <PageLoader />;
  }
  if (error) {
    content = <div>error...</div>;
  }
  if (product) {
    content = (
      <>
        <img className={cls.img} src={image} alt={product?.name} />
        <div className={cls.wrapperInfo}>
          <h3 className={cls.name}>{product?.name}</h3>
          <Price price={product?.price} />
          <div className={cls.articleNumber}>
            Артикул: {product?.articleNumber}
          </div>
          <div className={cls.size}>Габаритные размеры: {product?.size}</div>
          <p className={cls.description}>{product?.description}</p>
          {product?.material ? (
            <div className={cls.material}>Материал: {product.material}</div>
          ) : (
            ''
          )}
          {product?.ageGroup ? (
            <div className={cls.ageGroup}>
              Возростная группа: {product.ageGroup}
            </div>
          ) : (
            ''
          )}
          <IncreasingBasket product={product} />
        </div>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div
        className={classNames(cls.ProductDetails, {}, [className])}
        {...otherProps}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProductDetails);
