import { FC, memo } from 'react';
import cls from './ProductRecommendationsList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useArticleRecommendationsList } from '../api/ProductRecommendationsListApi';

interface Props {
  className?: string;
}
const ProductRecommendationsList: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const { isLoading, data: products, error } = useArticleRecommendationsList();
  console.log(products);
  return (
    <div
      className={classNames(cls.ProductRecommendationsList, {}, [className])}
      {...otherProps}
    ></div>
  );
};

export default memo(ProductRecommendationsList);
