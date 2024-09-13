import { FC, memo, useCallback } from 'react';
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
import { SwiperGallerySlide } from 'widgets/SwiperGallery/model/types/SwiperGallerySlide';
import ButtonExit from 'shared/ui/ButtonExit/ButtonExit';
import { fetchAddSligesSwiperGallery } from 'widgets/SwiperGallery/model/services/fetchAddSligesSwiperGallery';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';

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
  const onSubmite = async () => {
    if (images?.length) {
      const result = await dispatch(fetchAddSligesSwiperGallery());
      if (result.meta.requestStatus === "fulfilled") {
        navigete(RoutePath.main);
        window.location.reload();
      }
    }
  };
  const onChangeImages = useCallback(
    async (files: FileList | null) => {
      if (files?.length) {
        const fileList: SwiperGallerySlide[] = (
          await useFilesBase64(files)
        ).map((el, index) => {
          return { src: el, index };
        });
        if (fileList.length) {
          dispatch(SwiperGalleryAction.setSlides(fileList));
        }
      }
    },
    [dispatch, images],
  );
  const onButtonDeleted = useCallback(
    (src: string) => {
      dispatch(SwiperGalleryAction.deleteSlides(src));
    },
    [dispatch],
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
            files={images?.map((image) => image.src)}
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
                      <img
                        src={image.src}
                        className={cls.image}
                        alt="add image gallery"
                      />
                      <ButtonExit
                        className={cls.buttonDelete}
                        onClick={() => onButtonDeleted(image.src)}
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
