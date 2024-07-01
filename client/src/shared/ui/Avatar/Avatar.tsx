import { CSSProperties, FC, memo, useMemo } from "react";
import cls from "./Avatar.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";

interface Props {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

const AvatarComponent: FC<Props> = (props) => {
    const { className, src, size, alt } = props;
    const style = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        };
    }, [size]);
    const mods: Mods = {};
    return <img src={src} alt={alt} style={style} className={classNames(cls.Avatar, mods, [className])} />;
};
export const Avatar = memo(AvatarComponent);
