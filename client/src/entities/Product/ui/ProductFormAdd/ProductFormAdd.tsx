import { FC, memo, useCallback } from 'react';
import cls from './ProductFormAdd.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  CreateProductAction,
  CreateProductReducer,
} from 'entities/Product/model/slice/CreateProductSlice';
import { useSelector } from 'react-redux';
import {
  getCreateProductData,
  getCreateProductError,
  getCreateProductIsLoading,
} from 'entities/Product/model/selectors/getCreateProduct';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface Props {
  className?: string;
}
const reducers: ReducersList = {
  createProduct: CreateProductReducer,
};
const ProductFormAdd: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const data = useSelector(getCreateProductData);
  const isLoading = useSelector(getCreateProductIsLoading);
  const error = useSelector(getCreateProductError);
  const onChangeName = useCallback(
    (value: string) => {
      dispatch(CreateProductAction.setName(value));
    },
    [data],
  );
  const onChangeDescription = useCallback(
    (value: string) => {
      dispatch(CreateProductAction.setDescription(value));
    },
    [data],
  );
  const onChangeDisabled = useCallback(
    (value: boolean) => {
      dispatch(CreateProductAction.setDisabled(value));
    },
    [data],
  );
  const onChangeArticleNumber = useCallback(
    (value: string) => {
      dispatch(CreateProductAction.setArticleNumber(value));
    },
    [data],
  );
  //   const onChangeCategory = useCallback((value: ) => {
  //     dispatch(CreateProductAction());
  //   }, [data]);
  //   const onChangeImages = useCallback((value: ) => {
  //     dispatch(CreateProductAction());
  //   }, [data]);
  const onChangePrice = useCallback(
    (value: number) => {
      dispatch(CreateProductAction.setPrice(value));
    },
    [data],
  );
  const onChangeAgeGroup = useCallback(
    (value: string) => {
      dispatch(CreateProductAction.setAgeGroup(value));
    },
    [data],
  );
  const onChangeLength = useCallback(
    (value: number) => {
      dispatch(CreateProductAction.setLength(value));
    },
    [data],
  );
  const onChangeWidth = useCallback(
    (value: number) => {
      dispatch(CreateProductAction.setWidth(value));
    },
    [data],
  );
  const onChangeHeight = useCallback(
    (value: number) => {
      dispatch(CreateProductAction.setHeight(value));
    },
    [data],
  );
  const onChangeLengthDelivery = useCallback(
    (value: number) => {
      dispatch(CreateProductAction.setLengthDelivery(value));
    },
    [data],
  );
  const onChangeWidthDelivery = useCallback(
    (value: number) => {
      dispatch(CreateProductAction.setWidthDelivery(value));
    },
    [data],
  );
  const onChangeHeightDelivery = useCallback(
    (value: number) => {
      dispatch(CreateProductAction.setHeightDelivery(value));
    },
    [data],
  );
  const onChangeWeightDelivery = useCallback(
    (value: number) => {
      dispatch(CreateProductAction.setWeightDelivery(value));
    },
    [data],
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <form
        className={classNames(cls.ProductFormAdd, {}, [className])}
        {...otherProps}
      >
        <Input
          name="name"
          classNameLabel={cls.wrapperInput}
          classNameText={cls.text}
          text="Название*"
          value={data?.name}
          onChange={onChangeName}
        />
        <Input
          name="description"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Описание*"
          value={data?.description}
          onChange={onChangeDescription}
        />
        <Input
          name="disabled"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Товар активен?*"
          value={`${data?.disabled}`}
          type="select"
        />
        <Input
          name="articleNumber"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Артикул*"
          value={data?.articleNumber}
        />
        <Input
          name="category"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Категория*"
          type="select"
          value={data?.category?.name}
        />
        <Input
          name="images"
          classNameLabel={cls.wrapperInput}
          classNameText={cls.text}
          text="Картинки*"
          type="file"
          accept=".jpeg,.jpg,.png"
          multiple
        />
        <Input
          name="price"
          classNameLabel={cls.wrapperInput}
          classNameText={cls.text}
          text="Цена*"
          value={data?.price || ''}
        />
        <Input
          name="ageGroup"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Возростная категория"
          value={data?.ageGroup || ''}
        />
        <Input
          name="length"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Длина"
          value={data?.length || ''}
        />
        <Input
          name="width"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Ширина"
          value={data?.width || ''}
        />
        <Input
          name="height"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Высота"
          value={data?.height || ''}
        />
        <Input
          name="lengthDelivery"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Длина упаковки"
          value={data?.lengthDelivery || ''}
        />
        <Input
          name="widthDelivery"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Ширина упаковки"
          value={data?.widthDelivery || ''}
        />
        <Input
          name="heightDelivery"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Высота упаковки"
          value={data?.heightDelivery || ''}
        />
        <Input
          name="weightDelivery"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Вес упаковки"
          value={data?.weightDelivery || ''}
        />
      </form>
    </DynamicModuleLoader>
  );
};

export default memo(ProductFormAdd);
