import { StateSchema } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getScrollWatchesByPath } from 'widgets/ScrollWatches';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const position = useSelector((state: StateSchema) =>
    getScrollWatchesByPath(state, pathname),
  );
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, position || 0);
    }, 0);
  }, [pathname]);

  return null;
}
