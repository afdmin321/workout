import { FC, memo, useCallback, useEffect } from 'react';
import cls from './AddSlidesGallery.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import InputFile from 'shared/ui/inputFile/InputFile';
import { Button, ThemeButton, typeButton } from 'shared/ui/Button/Button';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  SwiperGalleryAction,
  SwiperGalleryReducer,
} from 'widgets/SwiperGallery/model/slice/swiperGallerySlice';
import { useSelector } from 'react-redux';
import { getSwiperGalleryImages } from 'widgets/SwiperGallery/model/selectors/SwiperGallerySelector';
import { useFilesBase64 } from 'shared/lib/hooks/useFilesBase64/useFilesBase64';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { fetchAddSligesSwiperGallery } from 'widgets/SwiperGallery/model/services/fetchAddSligesSwiperGallery';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import {
  ImageType,
  ImageEditItem,
  EditIndexImages,
} from 'widgets/ImagesEditItem';

import { useGetSwiperGallery } from 'widgets/SwiperGallery/model/api/SwiperGalleryApi';

interface Props {
  className?: string;
}
const reducers: ReducersList = {
  formSwiperGallery: SwiperGalleryReducer,
};
const AddSlidesGallery: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const images = useSelector(getSwiperGalleryImages);
  const navigete = useNavigate();
  const { data: slides } = useGetSwiperGallery();
  const startIndexImage: number | undefined = slides?.length;
  const { refetch } = useGetSwiperGallery();
  const onSubmite = async () => {
    if (images?.length) {
      const result = await dispatch(fetchAddSligesSwiperGallery());
      if (result.meta.requestStatus === 'fulfilled') {
        navigete(RoutePath.main);
        refetch();
      }
    }
  };
  const onChangeImages = useCallback(
    async (files: FileList | null) => {
      if (files?.length) {
        const fileList: ImageType[] = (await useFilesBase64(files)).map(
          (el, index) => {
            return {
              src: el,
              index: startIndexImage ? startIndexImage + index + 1 : index + 1,
            };
          },
        );
        if (fileList.length) {
          dispatch(SwiperGalleryAction.setSlides(fileList));
        }
      }
    },
    [dispatch, images, startIndexImage],
  );
  const onButtonDeleted = useCallback(
    (src: string) => {
      dispatch(SwiperGalleryAction.deleteSlides(src));
    },
    [dispatch],
  );
  const onChangeEditIndexImages = useCallback(
    (value: EditIndexImages) => {
      if (value.index <= Number(startIndexImage)) {
        return;
      }
      dispatch(SwiperGalleryAction.editIndexImages(value));
    },
    [dispatch, startIndexImage],
  );
  return (
    <DynamicModuleLoader reducers={reducers}>
      <section
        className={classNames(cls.AddSlidesGallery, {}, [className])}
        {...otherProps}
      >
        <form
          className={cls.form}
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmite();
          }}
        >
          <InputFile
            placeholder="Выбрать изображение"
            files={images}
            onChange={onChangeImages}
            type="file"
            accept=".jpeg,.jpg,.png"
            multiple
          />
          <div className={cls.wrapperImages}>
            {images?.length
              ? images.map((image) => {
                  return (
                    <div className={cls.wrapperImage} key={image.index}>
                      <ImageEditItem
                        image={image}
                        onDelete={onButtonDeleted}
                        onChange={onChangeEditIndexImages}
                      />
                    </div>
                  );
                })
              : null}
          </div>
          <Button
            type={typeButton.SUBMITE}
            theme={ThemeButton.SECONDARY}
            disabled={!Boolean(images?.length)}
          >
            Загрузить картинки
          </Button>
        </form>
      </section>
    </DynamicModuleLoader>
  );
};

export default memo(AddSlidesGallery);
