import { ChangeEvent, FC, memo, useMemo } from "react";
import cls from "./Select.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";

interface SelectOptions {
    value: string;
    content: string;
}
interface Props {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

const SelectComponent: FC<Props> = (props) => {
    const { className, label, options, value, readonly, onChange } = props;

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option key={opt.value} value={opt.value} className={cls.option}>
                {opt.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(evt.target.value);
        }
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label + ">"}</span>}
            <select disabled={readonly} className={cls.select} value={value} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
    );
};

export const Select = memo(SelectComponent);
