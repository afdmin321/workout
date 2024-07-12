import { lazy } from "react";

export const СertificatePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import("./СertificatePage")), 1500);
        })
);
