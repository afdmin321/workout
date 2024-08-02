import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollWatches = (state: StateSchema) =>
  state.scrollWatches.scroll;
export const getScrollWatchesByPath = createSelector(
  getScrollWatches,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
