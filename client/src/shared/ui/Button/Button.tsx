import { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo } from 'react';
import cls from './Button.module.scss';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  PRIMARY_ROUND = 'primary_round',
  SECONDARY_ROUND = 'secondary_round',
  CLEAR = 'clear',
  ROUNDED = 'rounded',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
export enum typeButton {
  BUTTON = 'button',
  SUBMITE = 'submit',
  RESET = 'reset',
}
export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  disabled?: boolean;
  theme?: ThemeButton;
  square?: boolean;
  size?: string;
  type?: typeButton;
}

const ButtonComponent: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ThemeButton.CLEAR,
    children,
    square,
    disabled,
    size = ButtonSize.M,
    type = typeButton.BUTTON,
    ...otherProps
  } = props;
  const mods: Mods = {
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };
  return (
    <button
      type={type}
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export const Button = memo(ButtonComponent);
