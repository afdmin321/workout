import { lazy } from "react";

export const ContactPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import("./ContactPage")), 1500);
        })
);
