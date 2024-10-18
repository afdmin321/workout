import { FC, memo } from 'react';
import cls from './ImagesEditItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import ButtonExit from 'shared/ui/ButtonExit/ButtonExit';
import { EditIndexImages, ImageType } from '../model/type/ImageType';

interface Props {
  className?: string;
  image: ImageType;
  onChange: ({ src, index }: EditIndexImages) => void;
  onDelete: (src: string) => void;
}
const ImageEditItem: FC<Props> = (props: Props) => {
  const { className, image, onDelete, onChange, ...otherProps } = props;

  return (
    <div
      className={classNames(cls.ImagesEditItem, {}, [className])}
      {...otherProps}
    >
      <img
        id={image.id || ''}
        className={cls.image}
        src={
          image.src.length > 100
            ? image.src
            : `https://xn----7sbkfabgm0avc8afvk0e9cj2d.xn--p1ai/${image.src}`
        }
        alt="image"
      />
      <Input
        text="изменить индекс "
        value={image.index}
        onChange={(value) => {
          if (isNaN(Number(value))) {
            return;
          }
          onChange({ src: image.src, index: Number(value) });
        }}
      />
      <ButtonExit className={cls.delete} onClick={() => onDelete(image.src)} />
    </div>
  );
};

export default memo(ImageEditItem);
