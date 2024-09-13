import { FC, memo } from 'react';
import cls from './FormImageItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { CreateProductImages } from 'entities/Product/model/types/Product';
import { Input } from 'shared/ui/Input/Input';

interface Props {
  className?: string;
  src: string;
  onChange: (src: string, index: string) => void;
}
const FormImageItem: FC<Props> = (props: Props) => {
  const { className, src, onChange, ...otherProps } = props;
  return (
    <div
      className={classNames(cls.FormImageItem, {}, [className])}
      {...otherProps}
    >
      <img className={cls.image} src={src} alt="image" />
    </div>
  );
};

export default memo(FormImageItem);
