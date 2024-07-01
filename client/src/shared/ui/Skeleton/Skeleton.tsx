import { CSSProperties, FC, memo} from "react";
import cls from "./Skeleton.module.scss";
import { classNames } from "shared/lib/classNames/classNames";


interface Props {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Component: FC<Props> = (props) => {
    const { className, height, width, border } = props;
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };
    return <div style={styles} className={classNames(cls.Skeleton, {}, [className])}></div>;
};
export const Skeleton = memo(Component);
