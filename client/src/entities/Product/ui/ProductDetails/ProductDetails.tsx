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
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProductById } from 'entities/Product/model/services/ProductDetailsServices';

import { PageLoader } from 'widgets/PageLoader';
import { Helmet } from 'react-helmet';
import Price from 'shared/ui/Price/Price';

import IncreasingBasket from 'widgets/IncreasingBasket/IncreasingBasket';
import { PopupImageAction } from 'widgets/PopupImage';
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
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const onHandlerClickImage = useCallback(
    (currentImageSrc: string) => {
      dispatch(PopupImageAction.setCurrentImgSrc(currentImageSrc));
      dispatch(PopupImageAction.setImages(product?.images as []));
      dispatch(PopupImageAction.setPopupImageVisible(true));
    },
    [dispatch, product?.images],
  );
  let content;
  if (isLoading) {
    content = <PageLoader />;
  }
  if (error) {
    content = (
      <div>
        Произошла ошибка при загрузке товара {':('} Попробуйте перезагрузить
        страницу
      </div>
    );
  }
  if (product) {
    const productSize = `${product.length}x${product.width}мм H=${product.height}`;
    content = (
      <>
        <img
          onClick={() => onHandlerClickImage(product.images[0]?.src)}
          className={cls.img}
          src={'https://xn--80adypkog.xn--p1ai/' + product.images[0]?.src}
          alt={product.name}
        />
        <div className={cls.wrapperInfo}>
          <h2 className={cls.name}>{product.name}</h2>
          <Price price={product.price} />
          <div className={cls.articleNumber}>
            Артикул: {product.articleNumber}
          </div>
          {product.length && (
            <div className={cls.size}>Габаритные размеры: {productSize}</div>
          )}
          {product.description && (
            <p className={cls.description}>{product.description}</p>
          )}
          {product.material ? (
            <div className={cls.material}>Материал: {product.material}</div>
          ) : (
            ''
          )}
          {product.ageGroup ? (
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
      <Helmet>
        <title>{product?.name.slice(0, 110)}</title>
        <meta property="og:title" content={product?.name.slice(0, 110)} />
        <meta
          property="og:description"
          content={`${product?.description.slice(0, 160)}`}
        />
        <meta
          name="description"
          content={`${product?.description.slice(0, 160)}`}
        />
        <meta name="keywords" content={`${product?.name}`} />
      </Helmet>
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
