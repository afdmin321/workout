import { FC, memo } from 'react';
import cls from './SwiperSlide.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ButtonDeleted from 'shared/ui/ButtonDeleted/ButtonDeleted';
import { SwiperGalleryType } from 'widgets/SwiperGallery/model/types/SwiperGalleryType';

interface Props {
  slide: SwiperGalleryType;
  onHandler: (value: string) => void;
  isActive?: boolean;
  className?: string;
}
const SwiperSlide: FC<Props> = (props: Props) => {
  const { className, onHandler, isActive, slide, ...otherProps } = props;
  const onHandlerButtonDelete = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
  };
  return (
    <div
      onClick={() => onHandler(slide.src)}
      className={classNames(cls.SwiperSlide, { [cls.active]: isActive }, [
        className,
      ])}
      {...otherProps}
    >
      <img src={slide.src} alt="Картинка из нащих работ" className={cls.img} />
      <ButtonDeleted onHandler={onHandlerButtonDelete} />
    </div>
  );
};

export default memo(SwiperSlide);
