import { FC, memo, useMemo } from 'react';
import cls from './ProductSortSelector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProductSort } from 'entities/Product/model/types/Product';
import DropDownList, {
  DropDownListOption,
} from 'shared/ui/DropDownList/DropDownList';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIcon from 'shared/assets/icons/filter_text.svg';

interface Props {
  className?: string;
  onHandlerSort: (sort: ProductSort) => void;
  sort: ProductSort | null;
}
const ProductSortSelector: FC<Props> = (props: Props) => {
  const { className, sort, onHandlerSort, ...otherProps } = props;
  const sortOptions = useMemo<DropDownListOption<ProductSort>[]>(
    () => [
      { id: ProductSort.GREAT_PRICE, text: 'подороже' },
      { id: ProductSort.LOWER_PRICE, text: 'подешевле' },
      { id: ProductSort.GREAT_SIZE, text: 'побольше' },
      { id: ProductSort.LOWER_SIZE, text: 'поменьше' },
    ],
    [],
  );
  return (
    <div
      className={classNames(cls.ProductSortSelector, {}, [className])}
      {...otherProps}
    >
      <DropDownList<ProductSort>
        className={classNames(cls.DropDownList, {}, [className])}
        value={sort}
        setValue={onHandlerSort}
        options={sortOptions}
      >
        <Icon Src={SortIcon} className={cls.iconSort}></Icon>
      </DropDownList>
    </div>
  );
};

export default memo(ProductSortSelector);
