import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal: FC<Props> = (props: Props) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
