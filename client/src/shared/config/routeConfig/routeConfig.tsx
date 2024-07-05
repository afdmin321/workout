import { AboutPage } from 'pages/AboutPage';
import { ContactPage } from 'pages/ContactPage';
import { MainPage } from 'pages/MainPage';
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
  BASKET = 'basket',
  GUARANTEES = 'guarantees',
  CERTIFICATES = 'certificates',
  ANSWERS = 'answers',
  PAYMENT = 'payment',
  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.CATALOG]: '/catalog',
  [AppRoutes.CONTACT]: '/contact',
  [AppRoutes.BASKET]: '/basket',
  [AppRoutes.GUARANTEES]: '/guarantees',
  [AppRoutes.CERTIFICATES]: '/certificates',
  [AppRoutes.ANSWERS]: '/answers',
  [AppRoutes.PAYMENT]: '/payment',
  [AppRoutes.NOT_FOUND]: '*',
};
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.CATALOG]: {
    path: RoutePath.catalog,
    element: <div>Catalog</div>,
  },
  [AppRoutes.CONTACT]: {
    path: RoutePath.contact,
    element: <ContactPage />,
  },
  [AppRoutes.BASKET]: {
    path: RoutePath.basket,
    element: <div>basket</div>,
  },
  [AppRoutes.GUARANTEES]: {
    path: RoutePath.guarantees,
    element: <div>guarantees</div>,
  },
  [AppRoutes.CERTIFICATES]: {
    path: RoutePath.certificates,
    element: <div>certificates</div>,
  },
  [AppRoutes.ANSWERS]: {
    path: RoutePath.answers,
    element: <div>answers</div>,
  },
  [AppRoutes.PAYMENT]: {
    path: RoutePath.payment,
    element: <div>payment</div>,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
