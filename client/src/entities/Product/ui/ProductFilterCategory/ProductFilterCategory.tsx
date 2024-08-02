import { FC, memo } from 'react';
import cls from './ProductFilterCategory.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import IconDumbbell from 'shared/assets/icons/duotone.svg';
import IconTrainer from 'shared/assets/icons/fitness.svg';
import {
  CategoryId,
  ProductFilter,
} from 'entities/Product/model/types/Product';
interface Props {
  className?: string;
  filter: ProductFilter;
  onHandlerFilter: (value: ProductFilter) => void;
}
const ProductFilterCategory: FC<Props> = (props: Props) => {
  const { className, filter, onHandlerFilter, ...otherProps } = props;
  return (
    <div
      className={classNames(cls.ProductFilterCategory, {}, [className])}
      {...otherProps}
    >
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames(
          cls.button,
          { [cls.active]: filter === CategoryId.WORKOUT },
          [],
        )}
        onClick={() => onHandlerFilter(CategoryId.WORKOUT)}
      >
        <Icon Src={IconDumbbell} className={cls.icon} />
      </Button>
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames(
          cls.button,
          { [cls.active]: filter === CategoryId.TRAINER },
          [],
        )}
        onClick={() => onHandlerFilter(CategoryId.TRAINER)}
      >
        <Icon Src={IconTrainer} className={cls.icon} />
      </Button>
    </div>
  );
};

export default memo(ProductFilterCategory);
