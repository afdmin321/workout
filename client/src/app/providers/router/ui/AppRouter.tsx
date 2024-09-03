import { FC, Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AppRoutesProps,
  routeConfig,
} from 'app/providers/router/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    window.scrollTo(0, 0);
    const element = <div className="page-wrapper">{route.element}</div>;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
