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
  // last
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';

export const getRouteProducts = () => '/products';
export const getRouteProductsDetails = (id: string) => `/products/${id}`;
export const getRouteProductsCreate = () => '/products/new';
export const getRouteProductsEdit = (id: string) => `/products/${id}/edit`;
export const getRouteContact = () => '/contact';
export const getRouteBasket = () => '/basket';
export const getRouteGuaratees = () => '/guarantees';
export const getRouteCertificates = () => '/certificates';
export const getRouteFaq = () => '/faq';
export const getRouteOferta = () => '/oferta';
export const getRouteAuth = () => '/auth';
