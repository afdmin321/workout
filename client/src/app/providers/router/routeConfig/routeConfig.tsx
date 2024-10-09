import { AboutPage } from 'pages/AboutPage';
import AddProductPage from 'pages/AddProductPage/AddProductPage';
import { AddSlidesGallery } from 'pages/AddSlidesGallery';
import { BasketPage } from 'pages/BasketPage';
import { ContactPage } from 'pages/ContactPage';
import { EditProductPage } from 'pages/EditProductPage';
import { EditSlidesGallery } from 'pages/EditSlidesGallery';
import { FAQPage } from 'pages/FAQPage';
import { GuaranteesPage } from 'pages/GuaranteesPage';
import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { OfertaPage } from 'pages/OfertaPage';
import { ProductDetailsPage } from 'pages/ProductDetailsPage';
import { ProductsPage } from 'pages/ProductsPage';
import { СertificatePage } from 'pages/СertificatePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PRODUCTS = 'products',
  PRODUCT_DETAILS = 'product_details',
  CONTACT = 'contact',
  BASKET = 'basket',
  GUARANTEES = 'guarantees',
  CERTIFICATES = 'certificates',
  FAQ = 'faq',
  OFERTA = 'oferta',
  AUTH = 'auth',
  ADD_PRODUCT = 'add_product',
  EDIT_PRODUCT = 'edit_product',
  ADD_SLIDES_GALLERY = 'add_slides_gallery',
  EDIT_SLIDES_GALLERY = 'edit_slides_gallery',
  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PRODUCTS]: '/catalog',
  [AppRoutes.CONTACT]: '/contact',
  [AppRoutes.BASKET]: '/basket',
  [AppRoutes.GUARANTEES]: '/guarantees',
  [AppRoutes.CERTIFICATES]: '/certificates',
  [AppRoutes.PRODUCT_DETAILS]: '/catalog/', // +:id
  [AppRoutes.FAQ]: '/faq',
  [AppRoutes.OFERTA]: '/oferta',
  [AppRoutes.AUTH]: '/auth',
  [AppRoutes.ADD_PRODUCT]: '/add/product',
  [AppRoutes.EDIT_PRODUCT]: '/edit/product/', // +:id
  [AppRoutes.ADD_SLIDES_GALLERY]: '/add/slides/gallery',
  [AppRoutes.EDIT_SLIDES_GALLERY]: '/edit/slides/gallery',
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
  [AppRoutes.PRODUCTS]: {
    path: RoutePath.products,
    element: <ProductsPage />,
  },
  [AppRoutes.PRODUCT_DETAILS]: {
    path: `${RoutePath.product_details}:id`,
    element: <ProductDetailsPage />,
  },
  [AppRoutes.CONTACT]: {
    path: RoutePath.contact,
    element: <ContactPage />,
  },
  [AppRoutes.BASKET]: {
    path: RoutePath.basket,
    element: <BasketPage />,
  },
  [AppRoutes.GUARANTEES]: {
    path: RoutePath.guarantees,
    element: <GuaranteesPage />,
  },
  [AppRoutes.CERTIFICATES]: {
    path: RoutePath.certificates,
    element: <СertificatePage />,
  },
  [AppRoutes.FAQ]: {
    path: RoutePath.faq,
    element: <FAQPage />,
  },
  [AppRoutes.OFERTA]: {
    path: RoutePath.oferta,
    element: <OfertaPage />,
  },
  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <LoginPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.ADD_PRODUCT]: {
    path: RoutePath.add_product,
    element: <AddProductPage />,
    authOnly: true,
  },
  [AppRoutes.EDIT_PRODUCT]: {
    path: `${RoutePath.edit_product}:id`,
    element: <EditProductPage />,
    authOnly: true,
  },
  [AppRoutes.ADD_SLIDES_GALLERY]: {
    path: RoutePath.add_slides_gallery,
    element: <AddSlidesGallery />,
    authOnly: true,
  },
  [AppRoutes.EDIT_SLIDES_GALLERY]: {
    path: RoutePath.edit_slides_gallery,
    element: <EditSlidesGallery />,
    authOnly: true,
  },
};
