import { FC } from "react";
import cls from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";


interface Props {
    className?: string;
}

export const NotFoundPage: FC<Props> = ({ className }: Props) => {
    return <section className={classNames(cls.NotFoundPage, {}, [className])}>{"Страница не найдена"}</section>;
};
