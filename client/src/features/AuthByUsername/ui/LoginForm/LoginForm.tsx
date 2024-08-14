import { FC, memo, useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';

import { Button, ThemeButton, typeButton } from 'shared/ui/Button/Button';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  AuthByUsernameAction,
  AuthByUsernameReducer,
} from 'features/AuthByUsername/model/slice/AuthByUsernameSlice';
import { useSelector } from 'react-redux';
import {
  getAuthError,
  getAuthIsLoading,
  getAuthPassword,
  getAuthUsername,
} from 'features/AuthByUsername/model/selectors/AuthByUsernameSelectors';
import LoaderSmall from 'shared/ui/LoaderSmall/LoaderSmall';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchAuthByUsernameServices } from 'features/AuthByUsername/model/services/fethAuthByUsernameServices';

interface Props {
  className?: string;
}
const reducers: ReducersList = {
  authByUsername: AuthByUsernameReducer,
};
const LoginForm: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const username = useSelector(getAuthUsername);
  const password = useSelector(getAuthPassword);
  const isLoading = useSelector(getAuthIsLoading);
  const error = useSelector(getAuthError);
  const dispatch = useAppDispatch();
  const onChaneUsername = useCallback(
    (value: string) => {
      dispatch(AuthByUsernameAction.setUsername(value));
    },
    [dispatch, username],
  );
  const onChanePassword = useCallback(
    (value: string) => {
      dispatch(AuthByUsernameAction.setPassword(value));
    },
    [dispatch, password],
  );
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <form
        className={classNames(cls.LoginForm, {}, [className])}
        {...otherProps}
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch(fetchAuthByUsernameServices());
        }}
      >
        <Input
          className={cls.input}
          text="Имя пользователя"
          placeholder="Введите Имя пользователя"
          value={username}
          onChange={onChaneUsername}
        />
        <Input
          className={cls.input}
          text="Пароль"
          placeholder="Введите пароль"
          value={password}
          onChange={onChanePassword}
          err={error}
        />
        {isLoading ? (
          <LoaderSmall />
        ) : (
          <Button type={typeButton.SUBMITE} theme={ThemeButton.OUTLINE}>
            Войти
          </Button>
        )}
      </form>
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
