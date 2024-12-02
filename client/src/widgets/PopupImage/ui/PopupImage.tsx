import { FC, memo, useCallback } from 'react';
import cls from './PopupImage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import ArrowLeftIcon from 'shared/assets/icons/left-arrow.svg';
import ArrowRifhtIcon from 'shared/assets/icons/right-arrow.svg';
import img from '11.jpg';

import { useSelector } from 'react-redux';
import {
  getCurrentImageSrc,
  getImages,
} from '../model/selectors/PopupSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PopupImageAction } from '../model/slice/PopupSlice';
interface Props {
  className?: string;
}
const PopupImage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const currentImgSrc = useSelector(getCurrentImageSrc);
  const images = useSelector(getImages);
  const indexCurrentImage = images?.findIndex(
    (image) => image.src === currentImgSrc,
  );
  const dispatch = useAppDispatch();
  const onHandlerButtonExit = useCallback(() => {
    dispatch(PopupImageAction.clearState());
  }, [dispatch]);

  const onHandlerImageNext = useCallback(() => {
    if (images?.length && (indexCurrentImage || indexCurrentImage === 0)) {
      const nextImage = images[indexCurrentImage + 1];
      if (nextImage) {
        dispatch(PopupImageAction.setCurrentImgSrc(nextImage.src));
      }
    }
  }, [dispatch, images, currentImgSrc]);
  const onHandlerImageBack = useCallback(() => {
    if (images?.length && indexCurrentImage) {
      const prevImage = images[indexCurrentImage - 1];
      if (prevImage) {
        dispatch(PopupImageAction.setCurrentImgSrc(prevImage.src));
      }
    }
  }, [dispatch, images, currentImgSrc]);
  return (
    <div
      className={classNames(cls.PopupImage, {}, [className])}
      onClick={onHandlerButtonExit}
      {...otherProps}
    >
      <div
        className={cls.popupContent}
        onClick={(evt) => evt.stopPropagation()}
      >
        <Button
          className={cls.button}
          onClick={onHandlerImageBack}
          disabled={!Boolean(indexCurrentImage)}
        >
          <Icon Src={ArrowLeftIcon} className={cls.icon} />
        </Button>
        <div className={cls.imgWrapper}>
          <Button className={cls.buttonExit} onClick={onHandlerButtonExit}>
            &#10006;
          </Button>
          <img className={cls.img} src={"https://xn--80adypkog.xn--p1ai/" + currentImgSrc} />
        </div>

        <Button
          className={cls.button}
          onClick={onHandlerImageNext}
          disabled={images?.length === indexCurrentImage! + 1}
        >
          <Icon Src={ArrowRifhtIcon} className={cls.icon} />
        </Button>
      </div>
    </div>
  );
};

export default memo(PopupImage);
