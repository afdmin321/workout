import { FC, memo, useCallback } from 'react';
import cls from './ButtonLogout.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonProps } from '../Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { UserActions } from 'entities/User/model/slice/UserSlice';

interface Props extends ButtonProps {
  className?: string;
}
const ButtonLogout: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const auth = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const onHandlerButton = useCallback(() => {
    dispatch(UserActions.logout());
  }, [dispatch]);
  const content = auth?.token ? (
    <Button
      onClick={onHandlerButton}
      className={classNames(cls.ButtonEdit, {}, [className])}
      {...otherProps}
    >
      Выйти из аккаунта
    </Button>
  ) : null;
  return content;
};

export default memo(ButtonLogout);
