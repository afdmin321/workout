import { FC, memo, useCallback } from 'react';
import cls from './ProductRecommendationsList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useProductRecommendationsList } from '../api/ProductRecommendationsListApi';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface Props {
  className?: string;
  idProductStop: string;
}
const ProductRecommendationsList: FC<Props> = (props: Props) => {
  const { className, idProductStop, ...otherProps } = props;
  const {
    isLoading,
    data: products,
    error,
  } = useProductRecommendationsList(idProductStop);
  const productsFilter = products?.filter(
    (product) => product.id !== idProductStop,
  );

  const navigate = useNavigate();
  const onOpenArticle = useCallback(
    (id: string) => {
      navigate(RoutePath.product_details + id);
    },
    [navigate],
  );
  let content;

  if (isLoading) {
    content = (
      <>
        {Array(4)
          .fill(4)
          .map(() => {
            return <Skeleton className={cls.img} key={Math.random()} />;
          })}
      </>
    );
  } else if (error) {
    content = (
      <h3 style={{ textAlign: 'center', fontSize: '20px' }}>
        Произошла ошибка при загрузке рекомендованных товаров {':('} Попробуйте
        обновить страницу!
      </h3>
    );
  } else {
    const productsRecommendation = productsFilter?.map((product, index) => {
      if (index < 4 && product.id !== idProductStop) {
        return (
          <img
            onClick={() => onOpenArticle(product.id)}
            className={cls.img}
            src={'https://xn--80adypkog.xn--p1ai/' + product.images[0]?.src}
            alt={product.name}
            key={product.id}
          />
        );
      }
    });
    content = productsRecommendation;
  }
  return (
    <div
      className={classNames(cls.ProductRecommendationsList, {}, [className])}
      {...otherProps}
    >
      <h3 className={cls.title}>с этим товаром берут</h3>
      <div className={cls.productsRecommendationWrapper}>{content}</div>
    </div>
  );
};

export default memo(ProductRecommendationsList);
