import { FC, memo } from 'react';
import cls from './AddProductPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ProductFormAdd from 'entities/Product/ui/ProductFormAdd/ProductFormAdd';

interface Props {
  className?: string;
}
const AddProductPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <section
      className={classNames(cls.AddProductPage, {}, [className])}
      {...otherProps}
    >
      <ProductFormAdd />
    </section>
  );
};

export default memo(AddProductPage);
