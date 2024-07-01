import { FC, memo } from "react";
import cls from "./Icon.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
interface Props {
    className?: string;
    Src: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Component: FC<Props> = (props) => {
    const { className, Src } = props;

    return <Src className={classNames(cls.Icon, {}, [className])}></Src>;
};
export const Icon = memo(Component);
