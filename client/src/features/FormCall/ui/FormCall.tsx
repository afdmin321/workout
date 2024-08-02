import { FC, memo, ReactNode } from 'react';
import cls from './FormCall.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton, typeButton } from 'shared/ui/Button/Button';

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
}
const FormCall: FC<Props> = (props: Props) => {
  const { className, children, textSubmite, theme, ...otherProps } = props;
  return (
    <form
      className={classNames(cls.Form, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children && children}
      <Input
        className={classNames(cls.input, {}, [])}
        classNameLabel={cls.label}
        text="Имя*"
        placeholder="Лев Николаевич"
      />
      <Input
        className={classNames(cls.input, {}, [])}
        classNameLabel={cls.label}
        text="Телефон*"
        placeholder="+79777000777"
      />
      {theme === ThemeForm.ORDER && (
        <div className={cls.formOferta}>
          <span>*</span>Оформляя заказ Вы соглашаетесь с условиями оферты
        </div>
      )}
      <Button
        className={cls.button}
        type={typeButton.SUBMITE}
        theme={ThemeButton.ROUNDED}
      >
        {textSubmite ? textSubmite : 'Заказать звонок'}
      </Button>
    </form>
  );
};

export default memo(FormCall);
