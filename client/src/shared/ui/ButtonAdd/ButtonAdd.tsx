import { FC, memo } from 'react';
import cls from './ButtonAdd.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonProps } from '../Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface Props extends ButtonProps {
  className?: string;
}
const ButtonAdd: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const auth = useSelector(getUserAuthData);
  const content = auth?.token ? (
    <Button
      className={classNames(cls.ButtonAdd, {}, ['buttonAdmin', className])}
      {...otherProps}
    >
      &#10798;
    </Button>
  ) : null;
  return content;
};

export default memo(ButtonAdd);
