import { FC, memo, ReactNode, useCallback } from 'react';
import cls from './FormCall.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton, typeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getFormCallErrorName,
  getFormCallErrorPhone,
  getFormCallName,
  getFormCallPhone,
  getFormCallSubmiteDisabled,
} from '../model/selectors/getFormCallSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { FormCallAction } from '../model/slice/FormCallSlice';
import { fetchOrder } from '../model/services/fetchOrder';
import { AppLink, ThemeLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface Props {
  theme: ThemeForm;
  textSubmite?: string;
  className?: string;
  children?: ReactNode;
}
export enum ThemeForm {
  CONTACT = 'contact',
  CALL = 'call',
  ORDER = 'order',
  CHAT = 'chat',
}
const FormCall: FC<Props> = (props: Props) => {
  const { className, children, textSubmite, theme, ...otherProps } = props;
  const name = useSelector(getFormCallName);
  const phone = useSelector(getFormCallPhone);
  const errorName = useSelector(getFormCallErrorName);
  const errorPhone = useSelector(getFormCallErrorPhone);
  const submiteDisabled = useSelector(getFormCallSubmiteDisabled);
  const phonePattern = /^[+0-9]*$/;
  const dispatch = useAppDispatch();

  const onCangeName = useCallback(
    (value: string) => {
      dispatch(FormCallAction.setName(value));
      dispatch(FormCallAction.formValid());
    },

    [dispatch, name],
  );

  const onCangePhone = useCallback(
    (value: string) => {
      if (phonePattern.test(value)) {
        dispatch(FormCallAction.setPhone(value));
        dispatch(FormCallAction.formValid());
      }
    },
    [dispatch, phone],
  );
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(fetchOrder(theme));
        dispatch(FormCallAction.resetState());
      }}
      className={classNames(cls.Form, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children && children}
      <Input
        className={classNames(cls.input, {}, [])}
        classNameLabel={cls.label}
        value={String(name)}
        onChange={onCangeName}
        text="Имя*"
        placeholder="Лев Николаевич"
        err={errorName}
      />
      <Input
        value={phone}
        onChange={onCangePhone}
        className={classNames(cls.input, {}, [])}
        classNameLabel={cls.label}
        text="Телефон*"
        placeholder="+79777000777"
        err={errorPhone}
      />
      {theme === ThemeForm.ORDER && (
        <div className={cls.formOferta}>
          <span>*</span>
          <div>
            Оформляя заказ Вы соглашаетесь с условиями&ensp;
            <AppLink to={RoutePath.oferta} theme={ThemeLink.BLUE}>
              оферты
            </AppLink>
          </div>
        </div>
      )}
      <Button
        className={cls.button}
        type={typeButton.SUBMITE}
        theme={ThemeButton.ROUNDED}
        disabled={submiteDisabled}
      >
        {textSubmite ? textSubmite : 'Заказать звонок'}
      </Button>
    </form>
  );
};

export default memo(FormCall);
