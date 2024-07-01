import { FC, memo, useCallback } from "react";
import cls from "./Code.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "../Button/Button";
import Copy from "../../assets/icons/copy.svg";

interface Props {
    className?: string;
    text: string;
}

export const Component: FC<Props> = (props) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    },[text]);
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} theme={ThemeButton.CLEAR} className={cls.copyBtn}>
                <Copy className={cls.icon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
};
export const Code = memo(Component);
