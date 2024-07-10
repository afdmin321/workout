import { lazy } from "react";

export const GuaranteesPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import("./GuaranteesPage")), 1500);
        })
);
