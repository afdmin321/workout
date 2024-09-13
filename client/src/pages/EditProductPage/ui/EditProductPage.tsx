import { FC, memo, useCallback } from 'react';
import cls from './EditProductPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ProductFormAdd from 'entities/Product/ui/ProductFormAdd/ProductFormAdd';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchUpdateProduct } from 'entities/Product/model/services/fetchUpdateProduct';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';

interface Props {
  className?: string;
}
const EditProductPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = useCallback(async () => {
    const data = await dispatch(fetchUpdateProduct());
    if (data) {
      navigate(RoutePath.products);
    }
  }, [dispatch]);
  return (
    <section
      className={classNames(cls.EditProductPage, {}, [className])}
      {...otherProps}
    >
      <ProductFormAdd id={id} onSubmite={onSubmit} />
    </section>
  );
};

export default memo(EditProductPage);
