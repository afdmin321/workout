import cls from "./PageError.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { memo } from "react";

const reloadPage = () => {
    location.reload();
};
const PageErrorComponent = () => {
    return (
        <div className={classNames(cls.PageError, {}, [])}>
            <p className={classNames(cls.errorText)}>{"Произошла непредвиденая ошибка"}</p>
            <Button theme={ThemeButton.CLEAR} className={classNames(cls.buttonReload)} onClick={reloadPage}>
                {"Обновить страницу"}
            </Button>
        </div>
    );
};

export const PageError = memo(PageErrorComponent);
