import { FC, HTMLAttributes, ReactNode, memo } from "react";
import cls from "./Card.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

const Component: FC<Props> = (props) => {
    const { className, children, ...otherProps } = props;
    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
};
export const Card = memo(Component);
