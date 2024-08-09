import { FC, memo, useCallback } from 'react';
import cls from './ProductRecommendationsList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useProductRecommendationsList } from '../api/ProductRecommendationsListApi';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

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
  const productsRecommendation = productsFilter?.map((product, index) => {
    if (index < 4) {
      return (
        <div className={cls.imgWrapper} key={product.id}>
          <img
            onClick={() => onOpenArticle(product.id)}
            className={cls.img}
            src={product.images[0].src}
            alt={product.name}
          />
        </div>
      );
    }
  });
  return (
    <div
      className={classNames(cls.ProductRecommendationsList, {}, [className])}
      {...otherProps}
    >
      <h3 className={cls.title}>с этим товаром берут</h3>
      <div className={cls.productsRecommendationWrapper}>
        {productsRecommendation}
      </div>
    </div>
  );
};

export default memo(ProductRecommendationsList);
