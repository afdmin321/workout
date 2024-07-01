import { FC } from "react";
import cls from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";


interface Props {
    className?: string;
}

export const NotFoundPage: FC<Props> = ({ className }: Props) => {
    return <div className={classNames(cls.NotFoundPage, {}, [className])}>{"Страница не найдена"}</div>;
};
