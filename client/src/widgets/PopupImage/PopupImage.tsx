import { FC, memo } from 'react';
import cls from './PopupImage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface Props {
     className?: string;
  }
const PopupImage: FC<Props> = (props: Props) => {
 const { className, ...otherProps } = props;
  return (
    <div className={classNames(cls.PopupImage, {}, [className])} {...otherProps}>

    </div>
  )
};

export default memo(PopupImage);
