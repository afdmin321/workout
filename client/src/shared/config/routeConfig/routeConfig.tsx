import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  CATALOG = 'catalog',
  CONTACT = 'contact',
  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.CATALOG]: '/catalog',
  [AppRoutes.CONTACT]: '/contact',
  [AppRoutes.NOT_FOUND]: '*',
};
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <div>Main</div>,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <div>About</div>,
  },
  [AppRoutes.CATALOG]: {
    path: RoutePath.catalog,
    element: <div>Catalog</div>,
  },
  [AppRoutes.CONTACT]: {
    path: RoutePath.contact,
    element: <div>contact</div>
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
