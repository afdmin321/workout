import { FC, memo, useCallback } from 'react';
import cls from './SwiperSlide.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ButtonDeleted from 'shared/ui/ButtonDeleted/ButtonDeleted';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchDeleteSlideSwiperGallery } from 'widgets/SwiperGallery/model/services/fetchDeleteSlideSwiperGallery';
import { ImageType } from 'widgets/ImagesEditItem';
import { useGetSwiperGallery } from 'widgets/SwiperGallery/model/api/SwiperGalleryApi';

interface Props {
  slide: ImageType;
  onHandler: (value: string) => void;
  isActive?: boolean;
  className?: string;
}
const SwiperSlide: FC<Props> = (props: Props) => {
  const { className, onHandler, isActive, slide, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const { refetch } = useGetSwiperGallery();
  const onHandlerButtonDelete = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>, id?: string) => {
      evt.stopPropagation();
      if (id) {
        dispatch(fetchDeleteSlideSwiperGallery(id));
        refetch();
      } else {
        console.log('eerrorr not id');
      }
    },
    [dispatch],
  );
  return (
    <div
      onClick={() => onHandler(slide.src)}
      className={classNames(cls.SwiperSlide, { [cls.active]: isActive }, [
        className,
      ])}
      {...otherProps}
    >
      <img
        src={'https://xn--80adypkog.xn--p1ai/' + slide.src}
        id={slide.id}
        alt="Картинка из нащих работ"
        className={cls.img}
      />
      <ButtonDeleted
        onHandler={(evt) => onHandlerButtonDelete(evt, slide?.id)}
      />
    </div>
  );
};

export default memo(SwiperSlide);
