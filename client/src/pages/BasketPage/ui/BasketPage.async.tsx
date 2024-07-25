import { lazy } from "react";

export const BasketPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import("./BasketPage")), 1500);
        })
);
