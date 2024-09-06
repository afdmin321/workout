import { FC, memo, useCallback, useMemo } from 'react';
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
import Checkbox from 'shared/ui/Checkbox/Checkbox';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import InputFile from 'shared/ui/inputFile/InputFile';
import { useFilesBase64 } from 'shared/lib/hooks/useFilesBase64/useFilesBase64';
import { CreateProductImages } from 'entities/Product/model/types/Product';
import { useGetCategory } from 'entities/Category/api/categoryApi';
import { Category } from 'entities/Category';
import FormImageItem from './FormImageItem/FormImageItem';

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
  const { data: categories, error: errorCategory } = useGetCategory();

  const selectCategoryOptions = useMemo<SelectOptions[]>(() => {
    return categories?.map((category: Category) => {
      return { value: JSON.stringify(category), content: category.name };
    });
  }, [categories]);

  const onChangeName = useCallback(
    (value: string) => {
      dispatch(CreateProductAction.setName(value));
    },
    [dispatch, data?.name],
  );
  const onChangeDescription = useCallback(
    (value: string) => {
      dispatch(CreateProductAction.setDescription(value));
    },
    [dispatch, data?.description],
  );
  const onChangeDisabled = useCallback(
    (value: boolean) => {
      dispatch(CreateProductAction.setDisabled(value));
    },
    [dispatch, data?.disabled],
  );
  const onChangeArticleNumber = useCallback(
    (value: string) => {
      dispatch(CreateProductAction.setArticleNumber(value));
    },
    [dispatch, data?.articleNumber],
  );
  const onChangeCategory = useCallback(
    (value: string) => {
      const valueParse: Category = JSON.parse(value);
      if (valueParse) dispatch(CreateProductAction.setCategory(valueParse));
    },
    [dispatch, data?.category],
  );
  const onChangeImages = useCallback(
    async (files: FileList | null) => {
      if (files?.length) {
        const fileList: string[] = await useFilesBase64(files);
        const value: CreateProductImages[] = fileList.map((img, index) => {
          return {
            src: img,
            index: index + 1,
          };
        });
        if (fileList.length) {
          dispatch(CreateProductAction.setImages(value));
        }
      }
    },
    [dispatch, data?.images],
  );
  const onChangePrice = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum)) {
        dispatch(CreateProductAction.setPrice(valueNum));
      }
    },
    [dispatch, data?.price],
  );
  const onChangeAgeGroup = useCallback(
    (value: string) => {
      dispatch(CreateProductAction.setAgeGroup(value));
    },
    [dispatch, data?.ageGroup],
  );
  const onChangeLength = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum)) {
        dispatch(CreateProductAction.setLength(valueNum));
      }
    },
    [dispatch, data?.length],
  );
  const onChangeWidth = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum)) {
        dispatch(CreateProductAction.setWidth(valueNum));
      }
    },
    [dispatch, data?.width],
  );
  const onChangeHeight = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum)) {
        dispatch(CreateProductAction.setHeight(valueNum));
      }
    },
    [dispatch, data?.height],
  );
  const onChangeLengthDelivery = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum)) {
        dispatch(CreateProductAction.setLengthDelivery(valueNum));
      }
    },
    [dispatch, data?.lengthDelivery],
  );
  const onChangeWidthDelivery = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum)) {
        dispatch(CreateProductAction.setWidthDelivery(valueNum));
      }
    },
    [dispatch, data?.widthDelivery],
  );
  const onChangeHeightDelivery = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum)) {
        dispatch(CreateProductAction.setHeightDelivery(valueNum));
      }
    },
    [dispatch, data?.heightDelivery],
  );
  const onChangeWeightDelivery = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum)) {
        dispatch(CreateProductAction.setWeightDelivery(valueNum));
      }
    },
    [dispatch, data?.weightDelivery],
  );
  const onChangeEditImageIndex = useCallback(
    (img: string, value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum)) {
        dispatch(
          CreateProductAction.editImagesIndex({
            img: img,
            index: valueNum || 1,
          }),
        );
      }
    },
    [dispatch, data?.images],
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
        <Checkbox
          name="disabled"
          onChange={onChangeDisabled}
          checked={data?.disabled || false}
          placeholder="Товар активен?*"
        />
        <Input
          name="articleNumber"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Артикул*"
          value={data?.articleNumber}
          onChange={onChangeArticleNumber}
        />
        <Select
          value={JSON.stringify(data?.category)}
          onChange={onChangeCategory}
          options={selectCategoryOptions}
          label="Выберите категорию*"
        />
        <InputFile
          name="images"
          placeholder="Устанавите картинки"
          type="file"
          accept=".jpeg,.jpg,.png"
          files={data?.images}
          onChange={onChangeImages}
          multiple
        />
        {data?.images.length && (
          <div className={cls.wrapperImages}>
            {[...data.images]
              .sort(
                (a, b) => parseFloat(a.index + '') - parseFloat(b.index + ''),
              )
              .map((img, index) => (
                <FormImageItem
                  key={index}
                  img={img}
                  onChange={onChangeEditImageIndex}
                />
              ))}
          </div>
        )}
        <Input
          name="price"
          classNameLabel={cls.wrapperInput}
          classNameText={cls.text}
          text="Цена*"
          value={data?.price || ''}
          onChange={onChangePrice}
        />
        <Input
          name="ageGroup"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Возростная категория"
          value={data?.ageGroup || ''}
          onChange={onChangeAgeGroup}
        />
        <Input
          name="length"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Длина"
          value={data?.length || ''}
          onChange={onChangeLength}
        />
        <Input
          name="width"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Ширина"
          value={data?.width || ''}
          onChange={onChangeWidth}
        />
        <Input
          name="height"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Высота"
          value={data?.height || ''}
          onChange={onChangeHeight}
        />
        <Input
          name="lengthDelivery"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Длина упаковки"
          value={data?.lengthDelivery || ''}
          onChange={onChangeLengthDelivery}
        />
        <Input
          name="widthDelivery"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Ширина упаковки"
          value={data?.widthDelivery || ''}
          onChange={onChangeWidthDelivery}
        />
        <Input
          name="heightDelivery"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Высота упаковки"
          value={data?.heightDelivery || ''}
          onChange={onChangeHeightDelivery}
        />
        <Input
          name="weightDelivery"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Вес упаковки"
          value={data?.weightDelivery || ''}
          onChange={onChangeWeightDelivery}
        />
      </form>
    </DynamicModuleLoader>
  );
};

export default memo(ProductFormAdd);
