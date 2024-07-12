import { useEffect, useState } from 'react';

const useMountTransition = (
  isMounted: boolean,
  unmountDelay: number,
): boolean => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    }
    if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, unmountDelay, hasTransitionedIn]);

  return hasTransitionedIn;
};

export default useMountTransition;
