import { FC, memo } from 'react';
import cls from './ButtonExit.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';

interface Props {
  className?: string;
  onClick: () => void;
}
const ButtonExit: FC<Props> = (props: Props) => {
  const { className, onClick, ...otherProps } = props;
  return (
    <Button
      aria-label="закрыть всплывающее окно"
      className={classNames(cls.button, {}, [className])}
      onClick={onClick}
      {...otherProps}
    >
      <span className={cls.icon}>&#10006;</span>
    </Button>
  );
};

export default memo(ButtonExit);
