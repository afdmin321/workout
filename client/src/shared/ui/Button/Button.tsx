import { ButtonHTMLAttributes, FC, memo } from "react";
import cls from "./Button.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    OUTLINE_RED = "outlineRed",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}
export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    theme?: ThemeButton;
    square?: boolean;
    size?: string;
}

const ButtonComponent: FC<Props> = (props) => {
    const { className, theme = ThemeButton.CLEAR, children, square, disabled, size = ButtonSize.M, ...otherProps } = props;
    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };
    return (
        <button type="button" className={classNames(cls.Button, mods, [className, cls[theme]])} disabled={disabled} {...otherProps}>
            {children}
        </button>
    );
};
export const Button = memo(ButtonComponent);
