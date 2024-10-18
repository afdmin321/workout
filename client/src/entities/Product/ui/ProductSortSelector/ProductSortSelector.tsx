import { FC, memo, useCallback, useMemo } from 'react';
import cls from './ProductSortSelector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProductSort } from 'entities/Product/model/types/Product';
import DropDownList, {
  DropDownListOption,
} from 'shared/ui/DropDownList/DropDownList';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIcon from 'shared/assets/icons/filter_text.svg';
import ButtonAdd from 'shared/ui/ButtonAdd/ButtonAdd';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';


interface Props {
  className?: string;
  onHandlerSort: (sort: ProductSort) => void;
  sort: ProductSort | null;
}
const ProductSortSelector: FC<Props> = (props: Props) => {
  const { className, sort, onHandlerSort, ...otherProps } = props;
  const navigate = useNavigate();
  const sortOptions = useMemo<DropDownListOption<ProductSort>[]>(
    () => [
      { id: ProductSort.GREAT_PRICE, text: 'подороже' },
      { id: ProductSort.LOWER_PRICE, text: 'подешевле' },
      { id: ProductSort.GREAT_SIZE, text: 'побольше' },
      { id: ProductSort.LOWER_SIZE, text: 'поменьше' },
    ],
    [],
  );
  const onHandlerButtonAdd = useCallback(() => {
    navigate(RoutePath.add_product);
  }, [navigate]);
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
      <ButtonAdd onClick={onHandlerButtonAdd} />
    
    </div>
  );
};

export default memo(ProductSortSelector);
