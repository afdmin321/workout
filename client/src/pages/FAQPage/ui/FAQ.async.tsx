import { lazy } from "react";

export const FAQPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import("./FAQPage")), 1500);
        })
);
