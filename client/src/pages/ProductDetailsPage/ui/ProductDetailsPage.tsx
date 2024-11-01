import { FC, memo } from 'react';
import cls from './ProductDetailsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProductDetails } from 'entities/Product';
import { useParams } from 'react-router-dom';
import ProductRecommendationsList from 'features/ProductRecommendationsList/ui/ProductRecommendationsList';


interface Props {
  className?: string;
}
const ProductDetailsPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const { id } = useParams();

  if (!id) {
    return <div>Товар не найден</div>;
  }
  return (
    <section
      className={classNames(cls.ProductDetailsPage, {}, [className])}
      {...otherProps}
    >
      <ProductDetails id={id} />
      <ProductRecommendationsList idProductStop={id} />
    </section>
  );
};

export default memo(ProductDetailsPage);
