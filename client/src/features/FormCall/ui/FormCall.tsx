import { FC, memo } from 'react';
import cls from './FormCall.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton, typeButton } from 'shared/ui/Button/Button';

interface Props {
  className?: string;
  classNameInput?: string;
  classNameLabel?: string;
  classNameButton?: string;
  title?: string;
}
const FormCall: FC<Props> = (props: Props) => {
  const {
    className,
    classNameInput,
    classNameLabel,
    classNameButton,
    title,
    ...otherProps
  } = props;
  return (
    <form className={classNames(cls.FormCall, {}, [className])} {...otherProps}>
      {title && <h2 className={cls.title}>{title}</h2>}
      <Input
        className={classNames(cls.input, {}, [classNameInput])}
        classNameLabel={classNameLabel}
        text="Имя*"
        placeholder="Лев"
      />
      <Input
        className={classNames(cls.input, {}, [classNameInput])}
        classNameLabel={classNameLabel}
        text="Телефон*"
        placeholder="+79000123321"
      />
      <Button
        className={classNameButton}
        type={typeButton.SUBMITE}
        theme={ThemeButton.BACKGROUND}
      >
        Заказать звонок
      </Button>
    </form>
  );
};

export default memo(FormCall);
