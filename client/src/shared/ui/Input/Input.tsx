import { FC, InputHTMLAttributes, memo, useRef } from 'react';
import cls from './Input.module.scss';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;
interface Props extends HTMLInputProps {
  className?: string;
  classNameLabel?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  err?: string;
  text?: string;
  autofocus?: boolean;
  readonly?: boolean;
}

const InputComponent: FC<Props> = (props) => {
  const {
    className,
    classNameLabel,
    value,
    onChange,
    type = 'text',
    readonly,
    placeholder,
    autofocus,
    text,
    err,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };
  return (
    <label className={classNames(cls.label, mods, [classNameLabel])}>
      {text && <div className={cls.text}>{text}</div>}
      <input
        ref={ref}
        readOnly={readonly}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
        className={classNames(cls.input, mods, [className])}
      />
      {err && <div className={cls.error}>{err}</div>}
    </label>
  );
};
export const Input = memo(InputComponent);
