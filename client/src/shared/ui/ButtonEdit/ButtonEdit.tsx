import { FC, memo } from 'react';
import cls from './ButtonEdit.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonProps } from '../Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface Props extends ButtonProps {
  className?: string;
}
const ButtonEdit: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const auth = useSelector(getUserAuthData);
  const content = auth?.token ? (
    <Button
      className={classNames(cls.ButtonEdit, {}, ['buttonAdmin', className])}
      {...otherProps}
    >
      &#128393;
    </Button>
  ) : null;
  return content;
};

export default memo(ButtonEdit);
