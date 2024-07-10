import { AboutPage } from 'pages/AboutPage';
import { ContactPage } from 'pages/ContactPage';
import { FAQPage } from 'pages/FAQPage';
import { GuaranteesPage } from 'pages/GuaranteesPage';
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
  FAQ = 'faq',
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
  [AppRoutes.FAQ]: '/faq',
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
    element: <GuaranteesPage />,
  },
  [AppRoutes.CERTIFICATES]: {
    path: RoutePath.certificates,
    element: <div>certificates</div>,
  },
  [AppRoutes.FAQ]: {
    path: RoutePath.faq,
    element: <FAQPage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
