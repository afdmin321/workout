import { FC, memo } from 'react';
import cls from './ProductSkeleton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface Props {
  className?: string;
}
const ProductSkeleton: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={classNames(cls.ProductSkeleton, {}, [className])}
      {...otherProps}
    >
      <Skeleton height={292}></Skeleton>
      <Skeleton height={20}></Skeleton>
      <Skeleton width={200} height={20}></Skeleton>
      <Skeleton width={260} height={20}></Skeleton>
      <Skeleton width={230} height={20}></Skeleton>
      <Skeleton height={35}></Skeleton>
      <div></div>
    </div>
  );
};

export default memo(ProductSkeleton);
