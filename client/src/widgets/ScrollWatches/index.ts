export type { ScrollWatchesSchema } from './model/types/ScrollWatchesSchema';
export {
  ScrollWatchesReducer,
  ScrollWatchesActions,
} from './model/slice/ScrollWatchesSlice';

export {getScrollWatchesByPath, getScrollWatches} from './model/selectors/ScrollWatchesSelectors'