import { FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import cls from "./Input.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">;
interface Props extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

const InputComponent: FC<Props> = (props) => {
    const { className, value, onChange, type = "text", readonly, placeholder, autofocus, ...otherProps } = props;

    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const isCaretVisible = isFocused && !readonly;
    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);
    const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value);
        setCaretPosition(evt.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSelect = (evt: any) => {
        setCaretPosition(evt?.target?.selectionStart || 0);
    };
    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && <div>{`${placeholder}>`}</div>}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    readOnly={readonly}
                    onSelect={onSelect}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    {...otherProps}
                    className={cls.input}
                />
                {isCaretVisible && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }}></span>}
            </div>
        </div>
    );
};
export const Input = memo(InputComponent);
