import { FC, memo, useCallback, useEffect, useMemo } from 'react';
import cls from './ProductFormAdd.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProductFormAction,
  ProductFormReducer,
} from 'entities/Product/model/slice/ProductFormSlice';
import { useSelector } from 'react-redux';
import {
  getProductFormData,
  getProductFormError,
  getProductFormIsLoading,
} from 'entities/Product/model/selectors/getProductForm';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Checkbox from 'shared/ui/Checkbox/Checkbox';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import InputFile from 'shared/ui/inputFile/InputFile';
import { useFilesBase64 } from 'shared/lib/hooks/useFilesBase64/useFilesBase64';
import { useGetCategory } from 'entities/Category/api/categoryApi';
import { Category } from 'entities/Category';
import { Button, ThemeButton, typeButton } from 'shared/ui/Button/Button';
import { fetchProductById } from 'entities/Product/model/services/ProductDetailsServices';
import { CreateProduct } from 'entities/Product/model/types/Product';
import { fetchDeletImageProduct } from 'entities/Product/model/services/fetchDeletImageProduct';
import { EditIndexImages, ImageEditItem } from 'widgets/ImagesEditItem';
import { fetchUpdateImagesProduct } from 'entities/Product/model/services/fetchUpdateImagesProduct';

interface Props {
  className?: string;
  id?: string;
  onSubmite: () => void;
}
const reducers: ReducersList = {
  formProduct: ProductFormReducer,
};
const ProductFormAdd: FC<Props> = (props: Props) => {
  const { className, onSubmite, id, ...otherProps } = props;

  const dispatch = useAppDispatch();

  const data = useSelector(getProductFormData);
  const isLoading = useSelector(getProductFormIsLoading);
  const error = useSelector(getProductFormError);
  const { data: categories, error: errorCategory } = useGetCategory();

  const selectCategoryOptions = useMemo<SelectOptions[]>(() => {
    return categories?.map((category: Category) => {
      return { value: JSON.stringify(category), content: category.name };
    });
  }, [categories]);

  const onChangeCategory = useCallback(
    (value: string) => {
      const valueParse: Category = JSON.parse(value);
      if (valueParse) dispatch(ProductFormAction.setCategory(valueParse));
    },
    [dispatch, data?.category],
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id)).then((res) => {
        const el = JSON.parse(JSON.stringify(res.payload));
        if (el) {
          const editProduct: CreateProduct = { ...el, newImages: [] };
          dispatch(ProductFormAction.setData(editProduct));
        }
      });
    }
  }, [dispatch, id]);

  const imageIndex = data?.images?.length
    ? data?.images?.reduce((acc, curr) => (acc.index > curr.index ? acc : curr))
    : null;
  useEffect(() => {
    if (categories?.length && !data?.category)
      dispatch(ProductFormAction.setCategory(categories[0]));
  }, [categories, data?.category]);

  const onChangeName = useCallback(
    (value: string) => {
      dispatch(ProductFormAction.setName(value));
    },
    [dispatch, data?.name],
  );

  const onChangeId = useCallback(
    (value: string) => {
      dispatch(ProductFormAction.setId(value));
    },
    [dispatch, data?.id],
  );

  const onChangeDescription = useCallback(
    (value: string) => {
      dispatch(ProductFormAction.setDescription(value));
    },
    [dispatch, data?.description],
  );
  const onChangeDisabled = useCallback(
    (value: boolean) => {
      dispatch(ProductFormAction.setDisabled(value));
    },
    [dispatch, data?.disabled],
  );
  const onChangeArticleNumber = useCallback(
    (value: string) => {
      dispatch(ProductFormAction.setArticleNumber(value));
    },
    [dispatch, data?.articleNumber],
  );

  const onChangeImages = useCallback(
    async (files: FileList | null) => {
      if (files?.length) {
        const fileList: string[] = await useFilesBase64(files);
        if (fileList.length) {
          const result = fileList.map((el, index) => {
            return {
              src: el,
              index: imageIndex ? imageIndex.index + index + 1 : index + 1,
            };
          });
          dispatch(ProductFormAction.setNewImages(result));
        }
      }
    },
    [dispatch, data?.newImages],
  );
  const onChangePrice = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && value.length <= 9) {
        dispatch(ProductFormAction.setPrice(valueNum));
      }
    },
    [dispatch, data?.price],
  );
  const onChangeAgeGroup = useCallback(
    (value: string) => {
      dispatch(ProductFormAction.setAgeGroup(value));
    },
    [dispatch, data?.ageGroup],
  );
  const onChangeMaterial = useCallback(
    (value: string) => {
      dispatch(ProductFormAction.setMaterial(value));
    },
    [dispatch, data?.material],
  );
  const onChangeLength = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && value.length <= 9) {
        dispatch(ProductFormAction.setLength(valueNum));
      }
    },
    [dispatch, data?.length],
  );
  const onChangeWidth = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && value.length <= 9) {
        dispatch(ProductFormAction.setWidth(valueNum));
      }
    },
    [dispatch, data?.width],
  );
  const onChangeHeight = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && value.length <= 9) {
        dispatch(ProductFormAction.setHeight(valueNum));
      }
    },
    [dispatch, data?.height],
  );
  const onChangeLengthDelivery = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && value.length <= 9) {
        dispatch(ProductFormAction.setLengthDelivery(valueNum));
      }
    },
    [dispatch, data?.lengthDelivery],
  );
  const onChangeWidthDelivery = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && value.length <= 9) {
        dispatch(ProductFormAction.setWidthDelivery(valueNum));
      }
    },
    [dispatch, data?.widthDelivery],
  );
  const onChangeHeightDelivery = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && value.length <= 9) {
        dispatch(ProductFormAction.setHeightDelivery(valueNum));
      }
    },
    [dispatch, data?.heightDelivery],
  );
  const onChangeWeightDelivery = useCallback(
    (value: string) => {
      const valueNum = Number(value.trim());
      if (!isNaN(valueNum) && value.length <= 9) {
        dispatch(ProductFormAction.setWeightDelivery(valueNum));
      }
    },
    [dispatch, data?.weightDelivery],
  );
  const onChangeDeleteNewImage = useCallback(
    (src: string) => {
      dispatch(ProductFormAction.deleteNewImage(src));
    },
    [dispatch],
  );
  const onHandlerDeleteImage = useCallback(
    (src: string) => {
      const targetImage = data?.images?.find((el) => el.src === src);
      if (targetImage?.id) {
        dispatch(fetchDeletImageProduct(targetImage?.id));
      }
    },
    [dispatch, data?.images],
  );
  const onChangeEditIndexNewImages = useCallback(
    (value: EditIndexImages) => {
      if (value.index <= Number(imageIndex?.index)) {
        return;
      }
      dispatch(ProductFormAction.editIndexNewImages(value));
    },
    [dispatch],
  );
  const onChangeEditIndexImages = useCallback(
    (value: EditIndexImages) => {
      dispatch(ProductFormAction.editIndexImages(value));
    },
    [dispatch],
  );
  return (
    <DynamicModuleLoader reducers={reducers}>
      <form
        className={cls.formUpdateImage}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(fetchUpdateImagesProduct());
        }}
      >
        {data?.images?.length &&
          data?.images?.map((el) => (
            <ImageEditItem
              image={el}
              key={el.id}
              onChange={onChangeEditIndexImages}
              onDelete={onHandlerDeleteImage}
            />
          ))}
        <Button theme={ThemeButton.SECONDARY} type={typeButton.SUBMITE}>
          Изменить индекс картинок
        </Button>
      </form>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          onSubmite();
        }}
        className={classNames(cls.ProductFormAdd, {}, [className])}
        {...otherProps}
      >
        {id && (
          <Input
            name="id"
            classNameLabel={cls.wrapperInput}
            classNameText={cls.text}
            text="id"
            value={data?.id}
            onChange={onChangeId}
          />
        )}
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
          files={data?.newImages}
          onChange={onChangeImages}
          multiple
        />
        {data?.newImages.length && (
          <div className={cls.wrapperImages}>
            {[...data.newImages].map((img, index) => (
              <ImageEditItem
                key={index}
                image={img}
                onChange={onChangeEditIndexNewImages}
                onDelete={onChangeDeleteNewImage}
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
          name="material"
          classNameText={cls.text}
          classNameLabel={cls.wrapperInput}
          text="Материал"
          value={data?.material || ''}
          onChange={onChangeMaterial}
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
        <Button theme={ThemeButton.SECONDARY} type={typeButton.SUBMITE}>
          {id ? 'Изменить товар' : 'Добавить товар'}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
};

export default memo(ProductFormAdd);
