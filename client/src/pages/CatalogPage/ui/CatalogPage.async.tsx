import { lazy } from "react";

export const CatalogPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import("./CatalogPage")), 1500);
        })
);
