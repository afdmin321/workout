import { FC, memo } from 'react';
import cls from './SuccessApplication.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface Props {
  className?: string;
}
const SuccessApplication: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={classNames(cls.SuccessApplication, {}, [className])}
      {...otherProps}
    >
      Ваша заявка успено отправлена&nbsp;! Мы&nbsp;Вам&nbsp;перезвоним в ближайшее время!
    </div>
  );
};

export default memo(SuccessApplication);
