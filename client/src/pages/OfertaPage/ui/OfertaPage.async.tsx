import { lazy } from 'react';

export const OfertaPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      resolve(import('./OfertaPage'));
    }),
);
