import { FC, memo, useCallback, useEffect } from 'react';
import cls from './EditSlidesGallery.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  SwiperGalleryAction,
  SwiperGalleryReducer,
} from 'widgets/SwiperGallery/model/slice/swiperGallerySlice';
import { useSelector } from 'react-redux';
import { getSwiperGalleryImages } from 'widgets/SwiperGallery/model/selectors/SwiperGallerySelector';
import { EditIndexImages, ImageEditItem } from 'widgets/ImagesEditItem';
import { fetchGetSlidesSwiperGallery } from 'widgets/SwiperGallery/model/services/fetchGetSlidesSwiperGallery';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ThemeButton, typeButton } from 'shared/ui/Button/Button';
import { fetchUpdateIndexSwiperGallery } from 'widgets/SwiperGallery/model/services/fetchUpdateIndexSwiperGallery';

interface Props {
  className?: string;
}
const reducers: ReducersList = {
  formSwiperGallery: SwiperGalleryReducer,
};
const EditSlidesGallery: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();

  const slides = useSelector(getSwiperGalleryImages);
  useEffect(() => {
    dispatch(fetchGetSlidesSwiperGallery());
    return () => {
      dispatch(SwiperGalleryAction.clearState());
    };
  }, [dispatch]);

  const onChangeEditIndexImages = useCallback(
    (value: EditIndexImages) => {
      dispatch(SwiperGalleryAction.editIndexImages(value));
    },
    [dispatch],
  );
  return (
    <DynamicModuleLoader reducers={reducers}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch(fetchUpdateIndexSwiperGallery());
        }}
        className={classNames(cls.EditSlidesGallery, {}, [className])}
        {...otherProps}
      >
        {slides &&
          slides.map((slide) => {
            return (
              <ImageEditItem
                image={slide}
                key={slide.id}
                onDelete={() => ''}
                onChange={onChangeEditIndexImages}
              />
            );
          })}
        <Button type={typeButton.SUBMITE} theme={ThemeButton.SECONDARY}>
          Изменить Индекс Изображений
        </Button>
      </form>
    </DynamicModuleLoader>
  );
};

export default memo(EditSlidesGallery);
