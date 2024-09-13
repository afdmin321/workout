import { FC, memo, useCallback } from 'react';
import cls from './AddProductPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ProductFormAdd from 'entities/Product/ui/ProductFormAdd/ProductFormAdd';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCreateProduct } from 'entities/Product/model/services/fetchCreateProduct';

interface Props {
  className?: string;
}
const AddProductPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const onSubmite = useCallback(() => {
    dispatch(fetchCreateProduct());
  }, [dispatch]);
  return (
    <section
      className={classNames(cls.AddProductPage, {}, [className])}
      {...otherProps}
    >
      <ProductFormAdd onSubmite={onSubmite} />
    </section>
  );
};

export default memo(AddProductPage);
