import { FC, InputHTMLAttributes, memo, useRef } from "react"
import cls from "./Checkbox.module.scss"
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">
interface checkboxProps extends HTMLInputProps {
    checked: boolean;
    onChange: (value: boolean) => void;
    className?: string;
    classDecor?: string
}
const Checkbox: FC<checkboxProps> = (props) => {
    const { className, classDecor, checked, onChange, placeholder, ...otherProps } = props
    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.checked)
    }
    return <div className={cls.checkboxWrapper}>
        {placeholder && <div className={`${cls.placeholder} ${classDecor}`}>{placeholder}</div>}
        <input type="checkbox" className={`${cls.checkbox} ${className}`} ref={ref} onChange={onChangeHandler} checked={checked} {...otherProps} />
    </div>
}

export default memo(Checkbox)