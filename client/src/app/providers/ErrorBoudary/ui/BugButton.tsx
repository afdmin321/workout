/* eslint-disable i18next/no-literal-string */
import { FC, useEffect, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface Props {
    className?: string;
}
export const BugButton: FC<Props> = ({ className }: Props) => {
    const [error, setError] = useState(false);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    const onThrow = () => {
        setError(!error);
    };
    return (
        <Button onClick={onThrow} theme={ThemeButton.OUTLINE} className={classNames("BagButton", {}, [className])}>
            BugButton
        </Button>
    );
};
